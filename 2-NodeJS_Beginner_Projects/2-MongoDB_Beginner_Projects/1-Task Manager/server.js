const express = require("express");
require("dotenv").config();
const db = require("./database/db");
const router = require("./routers/router");
const server = express();

// MIDDLEWARE
server.use(express.json());
server.use("/api/tasks", router);

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
