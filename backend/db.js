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

async function getAllEvents() {
  try {
    const result = await pool.query("SELECT * FROM events");
    return result.rows;
  } catch (err) {
    console.error("Error executing query:", err);
    throw err;
  }
}

async function getEventTickets(eventId) {
  try {
    const result = await pool.query("SELECT * FROM tickets WHERE event_id=$1", [
      eventId,
    ]);
    return result.rows;
  } catch (err) {
    console.log("error with eventId query");
    throw err;
  }
}

async function bookTicket(ticket_id) {
  try {
    const result = await pool.query(
      `UPDATE tickets SET status='purchased' WHERE ticket_id=$1 and status='open' RETURNING *;`,
      [ticket_id]
    );
    if (result.rows.length === 0) {
      throw new Error("Ticket not available for purchase");
    }
    return result.rows[0];
  } catch (err) {
    console.log("error with eventId query");
    throw err;
  }
}

async function getEvent(eventId) {
  try {
    const result = await pool.query("SELECT * FROM events WHERE event_id=$1", [
      eventId,
    ]);
    return result.rows[0];
  } catch (err) {
    console.log("error with eventId query");
    throw err;
  }
}

module.exports = {
  pool,
  getAllEvents,
  bookTicket,
  testConnection,
  getEvent,
  getEventTickets,
};
