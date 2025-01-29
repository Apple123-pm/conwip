const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection configuration
const db = mysql.createConnection({
  host: "srv1630.hstgr.io", // Remote MySQL host
  user: "u566914236_mae",  // MySQL username
  password: "Conwipsystem01", // MySQL password
  database: "u566914236_conwip", // Database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the database.");
});

// API endpoint to fetch all data from Station_1
app.get("/fetch/station1", (req, res) => {
  const query = "SELECT * FROM Station_1";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data from Station_1:", err);
      res.status(500).json({ error: "Database query failed" });
    } else {
      res.json(results);
    }
  });
});

// API endpoint to fetch all data from Station_2
app.get("/fetch/station2", (req, res) => {
  const query = "SELECT * FROM Station_2";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data from Station_2:", err);
      res.status(500).json({ error: "Database query failed" });
    } else {
      res.json(results);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
