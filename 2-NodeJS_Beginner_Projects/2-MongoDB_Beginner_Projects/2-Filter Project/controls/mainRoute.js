const Games = require("../models/model");

const getAll = async (req, res) => {
    const name = req.query.name;
    console.log(name);
  const games = await Games.find();
  if (!games)
    throw new Error("There are no games in our database at the moment.");
  res.json(games);
};

module.exports = { getAll };
