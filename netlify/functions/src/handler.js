// netlify/functions/src/handler.js
import OpenAI from "openai";
import { baseSystemPrompt } from "./prompt.js";
import { getRelevantSections } from "./retrieval.js";

export const CURRENT_OPENAI_MODEL = "gpt-5-nano";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function getChatbotResponse(userMessage) {
  // Handle model questions locally
  if (/\b(what|which)\b.*\bmodel\b|\bgpt\b.*\b(am|is)\b/i.test(userMessage)) {
    return `You're chatting with ${CURRENT_OPENAI_MODEL}.`;
  }
  
  const context = getRelevantSections(userMessage, { maxSections: 3, maxChars: 2500 });
  
  // If no context found, return guardrail message
  if (!context || !context.trim()) {
    return "Aloha — I don't have that information in my documents. If unsure or a rule isn't specified, please ask a clarifying question or direct your inquiry to the Board contact page.";
  }

  try {
    const r = await openai.responses.create({
      model: CURRENT_OPENAI_MODEL,
      instructions: baseSystemPrompt.trim(),
      input: `Question:\n${userMessage}\n\nCONTEXT:\n${context}`,
      max_output_tokens: 800
    });

    return (
      r.output_text ??
      r.output?.[0]?.content?.[0]?.text ??
      "Aloha — I couldn't generate a response. Please try again."
    );
  } catch (err) {
    console.error("OpenAI API error:", err.status ?? err.response?.status, err.message);
    throw err;
  }
}