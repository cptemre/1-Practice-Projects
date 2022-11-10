const Games = require("../models/model");

const getAll = async (req, res) => {
  const games = await Games.find();
  if (!games)
    throw new Error("There are no games in our database at the moment.");
  const { page } = req.query;
  console.log(req.query);
  res.json(games);
};

module.exports = { getAll };
