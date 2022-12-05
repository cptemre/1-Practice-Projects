require("dotenv").config();
const connectDB = require("./connectDB/connectDB");
const applications = require("./applicationData.json");
const Applications = require("./model/model");

const populate = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Applications.deleteMany();
    await Applications.create(applications);
  } catch (error) {
    console.log(error);
  } finally {
    process.exit(0);
  }
};

populate();
