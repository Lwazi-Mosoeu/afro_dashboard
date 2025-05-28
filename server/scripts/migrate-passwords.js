import bcrypt from "bcryptjs";
import pool from "../config/db.js";

const migratePasswords = async () => {
  const client = await pool.connect();

  try {
    const dbCheck = await client.query("SELECT current_database()");
    console.log("Connected to:", dbCheck.rows[0].current_database);

    await client.query("BEGIN");
    console.log("Starting password migration...");

    // Find unhashed passwords
    const { rows } = await client.query(
      `SELECT id, password FROM users 
       WHERE password NOT LIKE '$2a$%' 
       AND password IS NOT NULL
       LIMIT 5`
    );

    console.log(`Found ${rows.length} users to migrate`);

    if (rows.length === 0) {
      console.log("No unhashed passwords found");
      return;
    }

    for (const [index, user] of rows.entries()) {
      console.log(`[${index + 1}/${rows.length}] Processing user ${user.id}`);

      const hashedPassword = await bcrypt.hash(user.password, 10);
      const updateResult = await client.query(
        "UPDATE users SET password = $1 WHERE id = $2 RETURNING id",
        [hashedPassword, user.id]
      );

      console.log(`Updated user ${updateResult.rows[0].id}`);
    }

    await client.query("COMMIT");
    console.log("Migration completed");
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Migration failed:", error);
  } finally {
    client.release();
    await pool.end();
  }
};

// Add top-level error handling
migratePasswords().catch((err) => {
  console.error("Unhandled error:", err);
  process.exit(1);
});
