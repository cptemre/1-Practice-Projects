// #region REQUESTS

// ENV
require("dotenv").config();
const port = process.env.port || 5000;

// ASYNC ERRORS
require("express-async-errors");

// EXPRESS
const express = require("express");
const app = express();

// DATABASE
const connectDB = require("./database/db");

// ROUTES
const mainRoute = require("./routes/mainRoute");

// #endregion REQUESTS

// MIDDLEWARES
app.use(express.json());
app.use("/api/games", mainRoute);

// DATABASE CONNECTION AND APP START
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
