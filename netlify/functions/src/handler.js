// netlify/functions/src/handler.js (or wherever your function code lives)
import OpenAI from "openai";
import { baseSystemPrompt } from "./prompt.js";
import { getRelevantSections } from "./retrieval.js";

export const CURRENT_OPENAI_MODEL = "gpt-5-nano";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function getChatbotResponse(userMessage) {
  const context = getRelevantSections(userMessage, { maxSections: 3, maxChars: 2500 });

  try {
    const r = await openai.responses.create({
      model: CURRENT_OPENAI_MODEL,
      input: `System:
${baseSystemPrompt.trim()}

User:
Question:
${userMessage}

CONTEXT:
${context}`,
      // Determinism & verbosity
      temperature: 0.2,
      top_p: 1,
      max_output_tokens: 800
    });

    const answer =
      r.output_text ??
      r.output?.[0]?.content?.[0]?.text ??
      "Aloha — I couldn't generate a response. Please try again.";

    return answer;
  } catch (err) {
    // Log the real upstream error so you can see it in Netlify Function logs
    console.error(
      "OpenAI API error:",
      err.status ?? err.response?.status,
      err.message,
      err.response?.data
    );
    // Re-throw so the HTTP wrapper can set a non-200 and the UI shows an error state
    throw err;
  }
}