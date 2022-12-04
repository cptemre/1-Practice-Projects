const express = require("express");
require("dotenv").config();
const db = require("./database/db");
const router = require("./routers/router");
const notFound = require("./middleware/notFound");
const errorHandling = require("./middleware/errorHandling");
const path = require("path");
const server = express();

// MIDDLEWARE
server.use(express.static("./public"));
server.use(express.json());
server.use("/api/tasks", router);
server.use(
  "/yourTask/:id",
  express.static(path.join(__dirname, "/public/HTML/task.html"))
);
server.use(notFound);
server.use(errorHandling);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await db(process.env.MONGO_URI);
    server.listen(port, () => console.log(`Server is listening on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
