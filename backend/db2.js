// db2.js
const { Pool } = require("pg");
require("dotenv").config();

const pool2 = new Pool({
  user: "postgres", // default postgres user
  host: "localhost",
  database: "sticketmaster", // your database name
  password: "123", // your postgres password
  port: 5432, // default postgres port
});

async function getText() {
  try {
    const result = await pool.query("SELECT * FROM posts");
    return result.rows;
  } catch (err) {
    console.error("Error executing query:", err);
    throw err;
  }
}

// Function to generate random text blurb of approximately 500 words
function generateRandomText(wordCount = 500) {
  const words = [];
  const characters = "abcdefghijklmnopqrstuvwxyz "; // Characters to use for words
  const avgWordLength = 5; // Average word length
  const totalChars = wordCount * (avgWordLength + 1); // Approximate total characters including spaces

  for (let i = 0; i < totalChars; i++) {
    words.push(
      characters.charAt(Math.floor(Math.random() * characters.length))
    );
  }
  return words.join("");
}

// Function to add the 'posts' table to the database
async function addPostsTable() {
  try {
    await pool2.query("DROP TABLE IF EXISTS posts;"); // Drop table if it exists
    await pool2.query(`
      CREATE TABLE posts (
        id SERIAL PRIMARY KEY,
        content TEXT
      );
    `);
    console.log("Successfully created 'posts' table.");
  } catch (err) {
    console.error("Error adding 'posts' table:", err);
    throw err;
  }
}

async function insertRandomPosts(numberOfPosts = 1000) {
  try {
    for (let i = 0; i < numberOfPosts; i++) {
      const randomText = generateRandomText();
      await pool2.query("INSERT INTO posts (content) VALUES ($1);", [
        randomText,
      ]);
      if ((i + 1) % 100 === 0) {
        console.log(`Inserted ${i + 1} posts.`); // Feedback every 100 posts
      }
    }
    console.log(`Successfully inserted ${numberOfPosts} random posts.`);
  } catch (err) {
    console.error("Error inserting random posts:", err);
    throw err;
  }
}

// Function to execute all operations to setup posts table and populate it
async function setupPostsTableWithRandomData() {
  try {
    await addPostsTable();
    await insertRandomPosts();
    console.log("Posts table setup complete with random data.");
  } catch (err) {
    console.error("Error setting up posts table:", err);
  }
}
//setupPostsTableWithRandomData();
async function enableFuzzySearch() {
  try {
    await pool2.query("CREATE EXTENSION IF NOT EXISTS pg_trgm;"); // Enable pg_trgm extension if not already enabled
    await pool2.query(`
      CREATE INDEX posts_content_gin_trgm ON posts
      USING GIN (content gin_trgm_ops);
    `);
    console.log(
      "Successfully enabled pg_trgm extension and created GIN index for fuzzy search on 'posts.content'."
    );
  } catch (err) {
    console.error("Error enabling fuzzy search:", err);
    throw err;
  }
}

//enableFuzzySearch();

async function searchPosts(query) {
  try {
    console.log(query);
    // if (!query) {
    //   return []; // Return empty array if no query provided
    // }
    // const result = await pool2.query(
    //   `
    //   SELECT id, content, similarity(content, $1) AS similarity_score
    //   FROM posts
    //   WHERE content % $1
    //   ORDER BY similarity_score DESC
    //   LIMIT 10;
    // `,
    //   [query]
    // );
    const result = await pool2.query(
      `
      SELECT id, content
      FROM posts
      WHERE to_tsvector('english', content) @@ plainto_tsquery($1)
      LIMIT 10;
      `,
      [query]
    );
    console.log(result.rows);
    return result.rows;
  } catch (err) {
    console.error("Error executing fuzzy search query:", err);
    throw err;
  }
}

module.exports = {
  pool2,
  getText,
  searchPosts,
};
