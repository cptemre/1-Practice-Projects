require("dotenv").config();
const data = require("./workers.json");
const connectDB = require("./database/connectDB");
const Workers = require("./model/model");

const populate = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Workers.deleteMany();
    await Workers.create(data);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

populate();
