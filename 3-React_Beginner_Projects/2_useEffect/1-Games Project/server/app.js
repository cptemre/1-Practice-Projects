// REQUESTS
require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connectDB");
const Games = require("./model/model");
const path = require("path");
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "../client/build")));

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.get("/api", async (req, res) => {
  const games = await Games.find();
  res.json(games);
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is listening on ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
