require("dotenv").config();
const Lorem = require("./model/Lorem");
const lorem = require("./loremData.json");
const connectDB = require("./database/connectDB");

const populate = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Lorem.deleteMany();
    await Lorem.create(lorem);
    console.log("Populated");
  } catch (error) {
    console.log(error);
  } finally {
    process.exit(0);
  }
};

populate()