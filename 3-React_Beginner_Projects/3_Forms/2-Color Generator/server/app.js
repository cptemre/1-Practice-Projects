const express = require("express");
const app = express();
const path = require("path");
const staticFile = path.join(__dirname, "../client/build");
const PORT = 5000;

app.use(express.static(staticFile));

app.get("/", (req, res) => res.sendFile(path.join(staticFile, "index.html")));

app.listen(PORT, () => `Server is listening on ${PORT}`);
