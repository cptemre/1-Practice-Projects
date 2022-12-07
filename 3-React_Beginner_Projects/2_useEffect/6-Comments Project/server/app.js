require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./database/connectDB");
const data = require("./commentsData.json");
const Commments = require("./model/model");
const path = require("path");
const staticFile = path.join(__dirname, "../client/build");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static(staticFile));

app.get("/", (req, res) => res.sendFile(path.join(staticFile, "index.html")));
app.get("./api", async (req, res) => {
  const comments = await Commments.find(data);
  res.json(comments);
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
