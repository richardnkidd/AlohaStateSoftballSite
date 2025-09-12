// Import the new modular handler
import { getChatbotResponse } from "./src/handler.js";

export const handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": event.headers.origin || "https://yourdomain.com",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json"
  };

  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers, body: "" };
  if (event.httpMethod !== "POST") return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };

  let body;
  try { body = JSON.parse(event.body); }
  catch { return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid JSON" }) }; }

  const message = body?.message;
  if (!message || typeof message !== "string") {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Message is required" }) };
  }

  try {
    const response = await getChatbotResponse(message);
    return { statusCode: 200, headers, body: JSON.stringify({ response }) };
  } catch (err) {
    const code = err.status || err.response?.status || 502;
    return { statusCode: code, headers, body: JSON.stringify({ error: "Upstream model error" }) };
  }
};