require('dotenv').config()
const Comments = require('./model/model');
const data = require('./commentsData.json');
const connectDB = require('./database/connectDB');

const populate = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Comments.deleteMany()
        await Comments.create(data)
        console.log('Data is created');
    } catch (error) {
        console.log(error);
    } finally {
        process.exit(0)
    }
}

populate()