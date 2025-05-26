import { Request, Response } from "express";
import pool from "../config/db";

interface User {
  id: number;
  username: string;
  created_at?: Date;
}

interface UserRequest extends Request {
  body: {
    username?: string;
    password?: string;
  };
  params: {
    userId?: string;
  };
}

export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await pool.query<User>("SELECT id, username FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const createUser = async (req: UserRequest, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }

  try {
    const result = await pool.query<User>(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username",
      [username, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (err: any) {
    console.error(err);
    if (err.code === "23505") {
      res.status(409).json({ error: "Username already exists" });
    } else {
      res.status(500).json({ error: "Failed to create user" });
    }
  }
};

export const getUserById = async (req: UserRequest, res: Response) => {
  const { userId } = req.params;

  try {
    const result = await pool.query<User>(
      "SELECT id, username, created_at FROM users WHERE id = $1",
      [userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};
