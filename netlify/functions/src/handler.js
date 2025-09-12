// netlify/functions/src/handler.js
import OpenAI from "openai";
import { baseSystemPrompt } from "./prompt.js";
import { getRelevantSections } from "./retrieval.js";

export const CURRENT_OPENAI_MODEL = "gpt-5-nano";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function extractText(r) {
  // 1) Preferred convenience field
  if (typeof r?.output_text === "string" && r.output_text.trim()) {
    return r.output_text.trim();
  }
  // 2) Responses API array shape
  if (Array.isArray(r?.output)) {
    const parts = [];
    for (const item of r.output) {
      if (item?.type === "output_text" && item.text) parts.push(item.text);
      if (item?.type === "message" && Array.isArray(item.content)) {
        for (const c of item.content) {
          if ((c.type === "text" || c.type === "output_text") && c.text) parts.push(c.text);
        }
      }
    }
    const joined = parts.join("").trim();
    if (joined) return joined;
  }
  // 3) Legacy/alt fallback
  const choiceText = r?.choices?.[0]?.message?.content;
  if (typeof choiceText === "string" && choiceText.trim()) return choiceText.trim();
  return "";
}

export async function getChatbotResponse(userMessage) {
  const context = getRelevantSections(userMessage, { maxSections: 3, maxChars: 2500 });

  try {
    const r = await openai.responses.create({
      model: CURRENT_OPENAI_MODEL,
      instructions: baseSystemPrompt.trim(), // system/guardrails
      input: `Question:
${userMessage}

CONTEXT (relevant excerpts only):
${context}`,
      max_output_tokens: 800 // correct cap for Responses API
      // Do NOT include temperature/top_p/presence_penalty/frequency_penalty/modalities
    });

    const answer = extractText(r);
    return answer || "Aloha — I couldn’t generate a response. Please try again or rephrase your question.";
  } catch (err) {
    console.error(
      "OpenAI API error:",
      err.status ?? err.response?.status,
      err.message,
      err.response?.data
    );
    throw err; // let your HTTP wrapper return non-200 so UI shows error state
  }
}
