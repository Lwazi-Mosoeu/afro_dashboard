import express from "express";
import { applyMiddleware } from "./config/middleware";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";
import eventRoutes from "./routes/events";
import pool from "./config/db";

const app = express();
const PORT = process.env.PORT || 5000;

// Apply middleware
applyMiddleware(app);

// Routes
app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", eventRoutes);
app.use("/api", userRoutes);

// Test route
app.get("/api/test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ serverTime: result.rows[0].now });
  } catch (err) {
    console.error("Database connection error:", err);
    res.status(500).json({ error: "Database connection failed" });
  }
});

// Error handling middleware
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
  }
);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  process.exit(1);
});

// // server/server.jsx
// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import pg from "pg";
// import dotenv from "dotenv";

// // Load .env variables into process.env
// dotenv.config();

// const { Pool } = pg;
// const app = express();

// // Use port from env or default to 5000
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // PostgreSQL connection using env variables
// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// // Signup Route - create a new user in the database
// app.post("/api/signup", async (req, res) => {
//   const { username, password } = req.body;

//   // basic check
//   if (!username || !password) {
//     return res
//       .status(400)
//       .json({ error: "Username and password are required" });
//   }

//   try {
//     // Check if username exists
//     const existing = await pool.query(
//       "SELECT * FROM users WHERE username = $1",
//       [username]
//     );
//     if (existing.rows.length > 0) {
//       return res.status(409).json({ error: "Username already exists" });
//     }

//     // Insert new user
//     await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
//       username,
//       password,
//     ]);

//     res.status(201).json({ success: true, message: "User created!" });
//   } catch (err) {
//     console.error("Signup error:", err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// // Login Route - authenticate a user based on username and password
// app.post("/api/login", async (req, res) => {
//   const { username, password, device = "unknown" } = req.body;

//   if (!username || !password) {
//     return res.status(400).json({ error: "Username and password required" });
//   }

//   try {
//     const result = await pool.query(
//       "SELECT * FROM users WHERE username = $1 AND password = $2",
//       [username, password]
//     );

//     if (result.rows.length === 0) {
//       return res.status(401).json({ error: "Invalid credentials" });
//     }

//     const user = result.rows[0];

//     // Record login event
//     await pool.query(
//       "INSERT INTO user_login_history (user_id, agent, action, device) VALUES ($1, $2, $3, $4)",
//       [user.id, username, "login", device]
//     );

//     res.status(200).json({ success: true, username, user_id: user.id });
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// // Record login event
// app.post("/api/log-event", async (req, res) => {
//   const { user_id, agent, action, device } = req.body;

//   try {
//     await pool.query(
//       "INSERT INTO user_login_history (user_id, agent, action, device) VALUES ($1, $2, $3, $4)",
//       [user_id, agent, action, device]
//     );
//     res.status(201).json({ success: true });
//   } catch (err) {
//     console.error("Log event error:", err);
//     res.status(500).json({ error: "Failed to log event" });
//   }
// });

// // Get login history
// app.get("/api/login-history", async (req, res) => {
//   try {
//     const result = await pool.query(`
//       SELECT h.*, u.username
//       FROM user_login_history h
//       JOIN users u ON h.user_id = u.id
//       ORDER BY h.created_at DESC
//       LIMIT 100
//     `);
//     res.json(result.rows);
//   } catch (err) {
//     console.error("Login history error:", err);
//     res.status(500).json({ error: "Failed to fetch login history" });
//   }
// });

// app.post("/api/logout", async (req, res) => {
//   const { user_id, username, device = "unknown" } = req.body;

//   try {
//     // Record logout event
//     await pool.query(
//       "INSERT INTO user_login_history (user_id, agent, action, device) VALUES ($1, $2, $3, $4)",
//       [user_id, username, "logout", device]
//     );

//     res.status(200).json({ success: true });
//   } catch (err) {
//     console.error("Logout error:", err);
//     res.status(500).json({ error: "Failed to record logout" });
//   }
// });

// // Test route
// app.get("/api/test", async (req, res) => {
//   try {
//     const result = await pool.query("SELECT NOW()");
//     res.json({ serverTime: result.rows[0].now });
//   } catch (err) {
//     res.status(500).json({ error: "Database connection failed" });
//   }
// });

// // Get all users
// app.get("/api/users", async (req, res) => {
//   try {
//     const result = await pool.query("SELECT id, username FROM users");
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch users" });
//   }
// });

// // Create a new user
// app.post("/api/users", async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(400).json({ error: "Username and password required" });
//   }

//   try {
//     const result = await pool.query(
//       "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username",
//       [username, password]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     console.error(err);
//     if (err.code === "23505") {
//       res.status(409).json({ error: "Username already exists" });
//     } else {
//       res.status(500).json({ error: "Failed to create user" });
//     }
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
