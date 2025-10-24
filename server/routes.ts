import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all poems
  app.get("/api/poems", async (req, res) => {
    try {
      const poems = await storage.getAllPoems();
      res.json(poems);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch poems" });
    }
  });

  // Get a single poem by ID
  app.get("/api/poems/:id", async (req, res) => {
    try {
      const poem = await storage.getPoemById(req.params.id);
      if (!poem) {
        return res.status(404).json({ error: "Poem not found" });
      }
      res.json(poem);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch poem" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
