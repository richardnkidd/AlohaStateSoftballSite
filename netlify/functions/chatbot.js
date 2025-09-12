// Import the new modular handler
import { getChatbotResponse } from "./src/handler.js";

export const handler = async (event) => {
  // Set CORS headers for all responses
  // NOTE: Using "*" for Access-Control-Allow-Origin is a security risk in production
  // Consider restricting to specific domain: "https://yourdomain.com"
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json"
  };

  // Handle preflight CORS request
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: ""
    };
  }

  // Only accept POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  try {
    // Parse the request body
    const { message } = JSON.parse(event.body);
    
    if (!message || typeof message !== 'string') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Message is required" })
      };
    }

    // Get chatbot response
    const response = await getChatbotResponse(message);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ response })
    };
  } catch (error) {
    console.error("Chatbot error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to process message" })
    };
  }
};
