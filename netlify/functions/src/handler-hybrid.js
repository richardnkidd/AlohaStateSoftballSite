import OpenAI from "openai";
import { baseSystemPrompt } from "./prompt.js";
import { createEmbeddingRetriever } from "./retrieval-embeddings.js";
import { getRelevantSections } from "./retrieval.js";

export const CURRENT_OPENAI_MODEL = "gpt-5-nano";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Try to create embedding retriever, but have fallback
let getRelevant = null;
try {
  getRelevant = createEmbeddingRetriever(openai);
} catch (err) {
  console.warn("Failed to initialize embedding retriever, falling back to keyword search:", err);
}

function extractText(r) {
  if (typeof r?.output_text === "string" && r.output_text.trim()) return r.output_text.trim();
  if (Array.isArray(r?.output)) {
    const parts = [];
    for (const it of r.output) {
      if (it?.type === "output_text" && it.text) parts.push(it.text);
      if (it?.type === "message" && Array.isArray(it.content)) {
        for (const c of it.content) if ((c.type === "text" || c.type === "output_text") && c.text) parts.push(c.text);
      }
    }
    const joined = parts.join("").trim();
    if (joined) return joined;
  }
  const choiceText = r?.choices?.[0]?.message?.content;
  if (choiceText?.trim()) return choiceText.trim();
  return "";
}

function isModelQuestion(msg){
  return /\b(what|which)\b.*\bmodel\b|\bgpt\b.*\b(am|is)\b/i.test(msg);
}

export async function getChatbotResponse(userMessage) {
  if (isModelQuestion(userMessage)) return `You're chatting with ${CURRENT_OPENAI_MODEL}.`;

  let context = "";
  
  // Try embedding-based retrieval first, fall back to keyword search
  if (getRelevant) {
    try {
      const result = await getRelevant(userMessage, { k: 3, charLimit: 2500, minScore: 0.70 });
      context = result.context;
    } catch (err) {
      console.error("Embedding retrieval failed, falling back to keyword search:", err);
      context = getRelevantSections(userMessage, { maxSections: 3, maxChars: 2500 });
    }
  } else {
    // Use keyword-based retrieval as fallback
    context = getRelevantSections(userMessage, { maxSections: 3, maxChars: 2500 });
  }
  
  if (!context || !context.trim()) {
    return "Aloha — I don't have that in my documents yet. If unsure or a rule isn't specified, please ask a clarifying question or contact the Board via the website.";
  }

  try {
    const r = await openai.responses.create({
      model: CURRENT_OPENAI_MODEL,
      instructions: baseSystemPrompt,
      input: `Question:
${userMessage}

CONTEXT (relevant excerpts):
${context}`,
      max_output_tokens: 800
    });

    const answer = extractText(r);
    return answer || "Aloha — I couldn't find that in the provided documents. If unsure or a rule isn't specified, please contact the Board.";
  } catch (err) {
    console.error("OpenAI API error:", err.status ?? err.response?.status, err.message, err.response?.data);
    throw err;
  }
}