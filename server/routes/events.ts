import express from "express";
import { logEvent, getLoginHistory } from "../controllers/events.js";

const router = express.Router();

router.post("/log-event", logEvent);
router.get("/login-history", getLoginHistory);

export default router;
