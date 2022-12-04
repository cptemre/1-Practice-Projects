const express = require("express");
const app = express();
app.use(express.static("./public"));

app.all("*", (req, res) => {
  res.status(404).send("<h1>Your URL is not correct.</h1>");
});

app.listen(5000);
