import pool from "../config/db.js";

export const logEvent = async (req, res) => {
  const { user_id, agent, action, device } = req.body;

  try {
    await pool.query(
      "INSERT INTO user_login_history (user_id, agent, action, device) VALUES ($1, $2, $3, $4)",
      [user_id, agent, action, device]
    );
    res.status(201).json({ success: true });
  } catch (err) {
    console.error("Log event error:", err);
    res.status(500).json({ error: "Failed to log event" });
  }
};

// Update in controllers/events.js
export const getLoginHistory = async (req, res) => {
  try {
    let query = `
      SELECT h.*, u.username 
      FROM user_login_history h
      JOIN users u ON h.user_id = u.id
    `;

    const params = [];

    // Add WHERE clause if user_id is provided
    if (req.query.user_id) {
      query += ` WHERE h.user_id = $1`;
      params.push(req.query.user_id);
    }

    query += ` ORDER BY h.created_at DESC LIMIT 100`;

    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    console.error("Login history error:", err);
    res.status(500).json({ error: "Failed to fetch login history" });
  }
};
