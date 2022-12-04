require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./database/connectDB");
const Questions = require("./model/model");
const PORT = process.env.PORT || 5000;
const staticFolder = path.join(__dirname, "../client/build");

// MIDDLEWARE
app.use(express.json());
app.use(express.static(staticFolder));

app.get("/", (req, res) => {
  res.sendFile(path.join(staticFolder, "index.html"));
});

app.get("/api", async (req, res) => {
  const myData = await Questions.find();
  res.json(myData);
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => `Server is listenin on ${PORT}`);
  } catch (error) {
    console.log(error);
  }
};

start();
