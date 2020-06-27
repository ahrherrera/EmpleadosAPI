var mysql = require("mysql");

var pool = mysql.createPool({
  connectionLimit: 20,
  host: "localhost",
  user: "ahrhe",
  password: "abc123",
  database: "empleados",
  debug: false
});

module.exports = pool;