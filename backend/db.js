// First install required package:
// npm install pg dotenv

// db.js
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: "postgres", // default postgres user
  host: "localhost",
  database: "sticketmaster", // your database name
  password: "123", // your postgres password
  port: 5432, // default postgres port
});

// Test the connection
async function testConnection() {
  try {
    const client = await pool.connect();
    console.log("Successfully connected to PostgreSQL");
    client.release();
  } catch (err) {
    console.error("Error connecting to PostgreSQL:", err);
  }
}

// Example query function - i actually forgot about this altogether. not great. i guess it was? the weekend though.
async function getAllEvents() {
  try {
    const result = await pool.query("SELECT * FROM events");
    return result.rows;
  } catch (err) {
    console.error("Error executing query:", err);
    throw err;
  }
}

module.exports = {
  pool,
  getAllEvents,
  testConnection,
};
