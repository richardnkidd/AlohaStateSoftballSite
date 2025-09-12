// netlify/functions/src/handler.js
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
      // Use 'instructions' for system behavior + guardrails
      instructions: baseSystemPrompt.trim(),
      // Use 'input' for the user question + retrieved context
      input: `Question:
${userMessage}

CONTEXT (relevant excerpts only):
${context}`,
      // Valid for Responses API with this model
      max_output_tokens: 800
      // DO NOT include temperature/top_p/presence_penalty/frequency_penalty here
    });

    const answer =
      r.output_text ??
      r.output?.[0]?.content?.[0]?.text ??
      "Aloha — I couldn't generate a response. Please try again.";

    return answer;
  } catch (err) {
    console.error(
      "OpenAI API error:",
      err.status ?? err.response?.status,
      err.message,
      err.response?.data
    );
    throw err;
  }
}