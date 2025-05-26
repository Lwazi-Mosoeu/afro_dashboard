import express from "express";
import { getUsers, createUser, getUserById } from "../controllers/users";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:userId", getUserById);

export default router;
