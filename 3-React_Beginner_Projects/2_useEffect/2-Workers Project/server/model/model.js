const mongoose = require("mongoose");

const workers = mongoose.Schema({
  id: Number,
  name: String,
  title: String,
  src: String,
  definition: String,
});

module.exports = mongoose.model("Workers", workers);
