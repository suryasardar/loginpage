const mysql = require("mysql");
const pool = mysql.createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  // "Current-Root-Password"
  database: process.env.MYSQL_DB,
  connectionLimit: 10,
});

module.exports = pool;
