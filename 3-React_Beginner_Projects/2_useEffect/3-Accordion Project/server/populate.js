require("dotenv").config();
const questions = require("./questions.json");
const Questions = require("./model/model");
const connectDB = require("./database/connectDB");

const populate = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Questions.deleteMany();
    await Questions.create(questions);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

populate();
