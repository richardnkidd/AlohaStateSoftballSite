import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
// Legacy chatbot import removed - using Netlify Functions instead
// import { getChatbotResponse } from "./openai-service";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Chatbot endpoint - disabled in favor of Netlify Functions
  // The chatbot is now handled by Netlify Functions at /.netlify/functions/chatbot
  // app.post("/api/chatbot", async (req, res) => {
  //   try {
  //     const { message } = req.body;
  //     
  //     if (!message || typeof message !== 'string') {
  //       return res.status(400).json({ error: "Message is required" });
  //     }
  //
  //     const response = await getChatbotResponse(message);
  //     res.json({ response });
  //   } catch (error) {
  //     console.error("Chatbot error:", error);
  //     res.status(500).json({ error: "Failed to process message" });
  //   }
  // });

  const httpServer = createServer(app);

  return httpServer;
}
