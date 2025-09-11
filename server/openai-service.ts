import OpenAI from "openai";
import { leagueBylaws, gameplayRules, CURRENT_OPENAI_MODEL } from "./league-documents";

// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY 
});

const systemPrompt = `You are an intelligent assistant for the Aloha State Softball League (ASSL), Hawaii's premier LGBTQ+ inclusive softball community. 

You have access to the complete league bylaws and gameplay rules. Your role is to help players, managers, and community members understand:
- League rules and regulations
- Player eligibility and ratings (C, D, E divisions)
- Game procedures and scoring
- Team composition requirements
- Disciplinary procedures
- Board structure and governance
- Tournament information
- Field-specific ground rules (especially Ala Wai Community Park Field #3)

Be friendly, inclusive, and supportive in your responses, reflecting the league's commitment to LGBTQ+ fellowship and community. Use "Aloha" greetings when appropriate to reflect the Hawaiian culture.

When answering questions:
1. Provide specific references to the relevant sections of the bylaws or rules
2. Be clear and concise
3. If something is not covered in the documents, acknowledge that and suggest contacting the Board of Directors
4. Emphasize the league's inclusive, non-discriminatory values when relevant

Here are the official documents you should reference:

BYLAWS:
${leagueBylaws}

GAMEPLAY RULES:
${gameplayRules}
`;

export async function getChatbotResponse(userMessage: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: CURRENT_OPENAI_MODEL,
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: userMessage
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return response.choices[0].message.content || "I apologize, but I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("OpenAI API error:", error);
    throw new Error("Failed to get chatbot response");
  }
}