const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  id: Number,
  name: String,
  developer: String,
  publisher: String,
  engine: String,
  platform: String,
  release_year: Number,
  genre: String,
  mode: String,
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

module.exports = mongoose.model("Games", gameSchema);
