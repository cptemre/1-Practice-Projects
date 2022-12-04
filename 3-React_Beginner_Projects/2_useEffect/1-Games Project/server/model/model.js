const mongoose = require("mongoose");

const games = new mongoose.Schema({
  id: Number,
  names: String,
  developers: String,
  publishers: String,
  engines: String,
  platforms: Array,
  years: Number,
  genres: Array,
  modes: Array,
  src: String,
  youtube: String,
  wiki: String,
  ign: String,
  steam: String,
  epic: String,
  xbox: String,
  playstation: String,
  fandom: String,
  definition: String,
});

module.exports = mongoose.model("Games", games);
