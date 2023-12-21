require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>hello world from testing server</h1>");
});
app.get("/login", (req, res) => {
  res.status(200).json({ message: "message from root" });
});
app.get("/signup", (req, res) => {
  res.status(200).json({ message: "message from root" });
});

app.listen(PORT, () => console.log("Server is running on port 3000..."));
