const mongoose = require("mongoose");

const questions = mongoose.Schema({
  id: Number,
  question: String,
  answer: String,
});

module.exports = mongoose.model("Questions", questions);
