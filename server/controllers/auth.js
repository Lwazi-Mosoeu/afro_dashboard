import pool from "../config/db.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  try {
    const existing = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );
    if (existing.rows.length > 0) {
      return res.status(409).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
      username,
      hashedPassword,
    ]);

    res.status(201).json({ success: true, message: "User created!" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  const { username, password, device = "unknown" } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }

  try {
    const result = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    await pool.query(
      "INSERT INTO user_login_history (user_id, agent, action, device) VALUES ($1, $2, $3, $4)",
      [user.id, username, "login", device]
    );

    res.status(200).json({ success: true, username, user_id: user.id });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  const { user_id, username, device = "unknown" } = req.body;

  try {
    await pool.query(
      "INSERT INTO user_login_history (user_id, agent, action, device) VALUES ($1, $2, $3, $4)",
      [user_id, username, "logout", device]
    );

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Logout error:", err);
    res.status(500).json({ error: "Failed to record logout" });
  }
};
