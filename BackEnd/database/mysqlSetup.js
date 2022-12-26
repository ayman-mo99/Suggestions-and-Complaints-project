const mysql = require("mysql2/promise");
const dbOptions = require("../config/dbConfig");

// connect to the database then return a promise
async function createPool() {
  try {
    const pool = await mysql.createPool(dbOptions);
    return pool;
  } catch (err) {
    console.log(err);
    return new Error(err);
  }
}

// Test the connection to the database using simple query
async function testConnection() {
  try {
    const pool = await createPool();
    const [results, fields] = await pool.query('SELECT 2*2 "value"');
    return results;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { createPool, testConnection };
