const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = 80;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.listen(80);
