const mongoose = require("mongoose");

const applications = mongoose.Schema({
  id: Number,
  name: String,
  title: String,
  experience: String,
  about1: String,
  about2: String,
  about3: String,
});

module.exports = mongoose.model("Applications", applications);
