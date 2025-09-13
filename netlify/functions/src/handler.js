// netlify/functions/src/handler.js
import OpenAI from "openai";
import { baseSystemPrompt } from "./prompt.js";
import { getRelevantSections } from "./retrieval.js";

export const CURRENT_OPENAI_MODEL = "gpt-5-nano";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

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
  if (typeof choiceText === "string" && choiceText.trim()) return choiceText.trim();
  return "";
}

function isModelQuestion(msg) {
  return /\b(what|which)\b.*\bmodel\b|\bgpt\b.*\b(am|is)\b/i.test(msg);
}

export async function getChatbotResponse(userMessage) {
  if (isModelQuestion(userMessage)) {
    return `You're chatting with ${CURRENT_OPENAI_MODEL}.`;
  }

  // Retrieve relevant context from generated sections (includes tournament dates).
  const context = getRelevantSections(userMessage, { maxSections: 3, maxChars: 2500 });

  // If retrieval found nothing, follow the guardrail immediately
  if (!context || !context.trim()) {
    return "Aloha — I don't have that in my documents yet. If unsure or a rule isn't specified, please ask a clarifying question or contact the Board via the website.";
  }

  // Ask the model using Responses API (gpt-5-nano): instructions + input + max_output_tokens only
  const r = await openai.responses.create({
    model: CURRENT_OPENAI_MODEL,
    instructions: baseSystemPrompt.trim(),
    input: `Question:
${userMessage}

CONTEXT (relevant excerpts only):
${context}`,
    max_output_tokens: 800
  });

  const answer = extractText(r).trim();
  return answer || "Aloha — I couldn't find that in the provided documents. If unsure or a rule isn't specified, please contact the Board.";
}