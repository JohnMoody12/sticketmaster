// db2.js
const { Pool } = require("pg");
require("dotenv").config();

const pool2 = new Pool({
  user: "postgres", // default postgres user
  host: "localhost",
  database: "escalations", // your database name
  password: "123", // your postgres password
  port: 5432, // default postgres port
});

async function searchQuestions(query) {
  try {
    console.log(query);

    const result = await pool2.query(
      `
      SELECT id, question
      FROM escalations
      WHERE 
        to_tsvector('english', question) @@ plainto_tsquery($1)
        OR similarity(question, $1) > 0.2
      ORDER BY
        similarity(question, $1) DESC,
        ts_rank(to_tsvector('english', question), plainto_tsquery($1)) DESC
      LIMIT 10;
      `,
      [query]
    );

    console.log(result.rows);
    return result.rows;
  } catch (err) {
    console.error("Error executing search query:", err);
    throw err;
  }
}

module.exports = {
  searchQuestions,
};
