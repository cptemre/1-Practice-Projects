require("dotenv").config();
const data = require("./hobbits.json");
const connectDB = require("./db/connectDB");
const Hobbits = require("./model/data");

const populate = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Hobbits.deleteMany();
    await Hobbits.create(data);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

populate();
