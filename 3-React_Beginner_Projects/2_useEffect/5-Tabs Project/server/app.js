require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
const Applications = require("./model/model");
const connectDB = require("./connectDB/connectDB");
const staticFolder = path.join(__dirname, "./client/build");

app.use(express.json());
app.use(express.static(staticFolder));

app.get("/", (req, res) => {
  res.send(path.join(staticFolder, "index.html"));
});

app.get("/api", async (req, res) => {
  const data = await Applications.find();
  res.json(data);
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
