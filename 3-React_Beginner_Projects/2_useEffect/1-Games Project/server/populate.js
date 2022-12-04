require("dotenv").config();
const gamesList = require("./gamesList.json");
const Games = require("./model/model");
const connectDB = require("./db/connectDB");

const populate = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Games.deleteMany();
    await Games.create(gamesList);
    console.log("populated");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

populate();
