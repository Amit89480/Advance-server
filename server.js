const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "message from root" });
});

app.listen(3000, () => console.log("Server is running on port 3000..."));
