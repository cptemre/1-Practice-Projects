// Requests
const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./db/connectDB");
const data = require("./model/data");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// Have Node serve the files for our built React app
app.use(express.static(path.join(__dirname, "../client/build")));

// All other GET requests not handled before will return our React app
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.get("/api", async (req, res) => {
  const hobbits = await data.find();
  res.json(hobbits);
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
