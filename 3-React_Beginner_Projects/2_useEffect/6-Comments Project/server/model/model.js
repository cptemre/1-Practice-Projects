const mongoose = require("mongoose");

const comments = mongoose.Schema({
  id: Number,
  src: String,
  name: String,
  title: String,
  comment: String,
});

module.exports = mongoose.model("Comments", comments);
