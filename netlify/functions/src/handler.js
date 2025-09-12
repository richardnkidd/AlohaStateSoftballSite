// netlify/functions/src/handler.js
import OpenAI from "openai";
import { baseSystemPrompt } from "./prompt.js";
import { getRelevantSections } from "./retrieval.js";

export const CURRENT_OPENAI_MODEL = "gpt-5-nano";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function extractText(r) {
  // 1) Convenient shortcut when present
  if (typeof r?.output_text === "string" && r.output_text.trim()) {
    return r.output_text.trim();
  }

  // 2) New Responses shapes: r.output is an array of content parts
  if (Array.isArray(r?.output)) {
    const parts = [];
    for (const item of r.output) {
      // Some SDKs emit { type: "output_text", text: "..." }
      if (item?.type === "output_text" && item.text) parts.push(item.text);
      // Others emit { type: "message", content: [ { type: "text", text: "..." } ] }
      if (item?.type === "message" && Array.isArray(item.content)) {
        for (const c of item.content) {
          if ((c.type === "text" || c.type === "output_text") && c.text) parts.push(c.text);
        }
      }
    }
    const joined = parts.join("").trim();
    if (joined) return joined;
  }

  // 3) Older/alternate fallback (some providers still return choices)
  const choiceText = r?.choices?.[0]?.message?.content;
  if (typeof choiceText === "string" && choiceText.trim()) return choiceText.trim();

  return "";
}

export async function getChatbotResponse(userMessage) {
  const context = getRelevantSections(userMessage, { maxSections: 3, maxChars: 2500 });

  try {
    const r = await openai.responses.create({
      model: CURRENT_OPENAI_MODEL,
      // Keep behavior/guardrails here
      instructions: baseSystemPrompt.trim(),
      // Keep the question + retrieved context together
      input: `Question:
${userMessage}

CONTEXT (relevant excerpts only):
${context}`,
      // Valid for this model with Responses API
      max_output_tokens: 800,
      // Make it explicit we're expecting plain text
      modalities: ["text"] // harmless if ignored; helps some runtimes
    });

    // ---- robust text extraction & fallback ----
    const answer = extractText(r);
    return answer && answer.trim().length > 0
      ? answer.trim()
      : "Aloha — I couldn’t generate a response. Please try again or rephrase your question.";
  } catch (err) {
    console.error(
      "OpenAI API error:",
      err.status ?? err.response?.status,
      err.message,
      err.response?.data
    );
    // Bubble up so your HTTP wrapper returns non-200
    throw err;
  }
}
