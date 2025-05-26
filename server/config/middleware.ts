import cors from "cors";
import bodyParser from "body-parser";
import { Express } from "express";

interface MiddlewareConfig {
  applyMiddleware: (app: Express) => void;
}

export const applyMiddleware: MiddlewareConfig["applyMiddleware"] = (app) => {
  // CORS configuration
  const corsOptions = {
    origin: process.env.CORS_ORIGIN || "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  };

  app.use(cors(corsOptions));
  app.use(bodyParser.json());

  // Logging middleware
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
};
