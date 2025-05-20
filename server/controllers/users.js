import pool from "../config/db.js";

export const getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT id, username FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const createUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username",
      [username, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    if (err.code === "23505") {
      res.status(409).json({ error: "Username already exists" });
    } else {
      res.status(500).json({ error: "Failed to create user" });
    }
  }
};

// Add to controllers/users.js
export const getUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await pool.query(
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
