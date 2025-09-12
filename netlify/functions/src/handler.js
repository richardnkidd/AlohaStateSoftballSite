// Main handler using retrieval and slim prompt
import OpenAI from "openai";
import { baseSystemPrompt } from "./prompt.js";
import { getRelevantSections } from "./retrieval.js";

export const CURRENT_OPENAI_MODEL = "gpt-5-nano";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function getChatbotResponse(userMessage) {
  const context = getRelevantSections(userMessage, { maxSections: 3, maxChars: 2500 });

  const messages = [
    { role: "system", content: baseSystemPrompt.trim() },
    {
      role: "user",
      content: `Question:
${userMessage}

CONTEXT (relevant excerpts only):
${context}`
    }
  ];

  const resp = await openai.chat.completions.create({
    model: CURRENT_OPENAI_MODEL,
    messages,
    // Determinism & verbosity tweaks
    temperature: 0.2,
    top_p: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
    max_tokens: 800
  });

  return resp.choices?.[0]?.message?.content
      ?? "Aloha — I couldn't generate a response. Please try again.";
}