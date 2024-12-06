//config/db.js
// const mongoose = require('mongoose');
import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: 'test',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
// module.exports = connectDB;
export default connectDB;
