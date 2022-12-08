const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const staticFolder = path.join(__dirname, "../client/build");
const connectDB = require("./database/connectDB");
const Lorem = require("./model/Lorem");
const PORT = process.env.PORT || 5000;

// MIDDLEWARES

app.use(express.json());
app.use(express.static(staticFolder));

app.get("/", (req, res) => res.sendFile(path.join(staticFolder, "index.html")));

app.get("/api", async (req, res) => {
  const data = await Lorem.find();
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
