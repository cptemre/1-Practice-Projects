require("dotenv").config();
const Menu = require("./model/model");
const menuData = require("./menuData.json");
const connectDB = require("./database/connectDB");

const populate = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Menu.deleteMany();
    await Menu.create(menuData);
  } catch (error) {
    console.log(error);
  } finally {
    process.exit(0);
  }
};

populate()