// Main handler using retrieval and slim prompt
import OpenAI from "openai";
import { baseSystemPrompt } from "./prompt.js";
import { getRelevantSections } from "./retrieval.js";

export const CURRENT_OPENAI_MODEL = "gpt-5-nano";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function getChatbotResponse(userMessage) {
  const context = getRelevantSections(userMessage, { maxSections: 3, maxChars: 2500 });

  try {
    const response = await openai.chat.completions.create({
      model: CURRENT_OPENAI_MODEL,
      messages: [
        { role: "system", content: baseSystemPrompt.trim() },
        { role: "user", content: `Question:\n${userMessage}\n\nCONTEXT:\n${context}` }
      ],
      // Determinism & verbosity tweaks
      temperature: 0.2,
      top_p: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
      max_tokens: 800
    });

    return response.choices?.[0]?.message?.content ??
      "Aloha — I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("OpenAI API error:", error);
    return "Aloha — I'm having trouble connecting right now. Please try again later.";
  }
}