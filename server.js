const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_mysql",
});

db.connect((err) => {
  if (!err) {
    console.log("Database connected");
  } else {
    console.log("Failed to load database");
  }
});

app.get("/fetch", (req, res) => {
  let fetchQuery = "SELECT * FROM test";
  db.query(fetchQuery, (err, result, field) => {
    res.json(result);
  });
});

app.listen(5000);
