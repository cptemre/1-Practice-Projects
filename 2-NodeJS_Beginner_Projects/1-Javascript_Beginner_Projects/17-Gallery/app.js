const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("./public"));

// Game Page HTML File Directory
const gamePath = path.join(__dirname, "./public/game.html");
app.get("/:id", (req, res) => {
  res.sendFile(gamePath);
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Your URL is not correct.</h1>");
});

app.listen(5000);
