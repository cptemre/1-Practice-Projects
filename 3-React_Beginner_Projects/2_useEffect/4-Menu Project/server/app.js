require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const Menu = require("./model/model");
const connectDB = require("./database/connectDB");
const PORT = process.env.PORT || 5000;
const staticPath = path.join(__dirname, "../client/build");

app.use(express.static(staticPath));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

app.get("/api", async (req, res) => {
  const menuData = await Menu.find();
  res.json(menuData);
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is listenin on ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
