// REQUESTS
require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./database/connectDB");
const Workers = require("./model/model");
const PORT = process.env.PORT || 5000;
const buildPath = path.join(__dirname, "../client/build");

//MIDDLEWARES
app.use(express.static(buildPath));
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.get("/api", async (req, res) => {
  const workers = await Workers.find();
  res.json(workers);
});

// SERVER START
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
