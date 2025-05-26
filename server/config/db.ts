import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

// Use the PoolConfig interface from pg but make some properties optional
const poolConfig: pg.PoolConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined, // Ensure port is number
  // Add any additional pg.PoolConfig properties you need
};

const pool = new Pool(poolConfig);

// Test connection
pool
  .query("SELECT NOW()")
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err));

export default pool;
