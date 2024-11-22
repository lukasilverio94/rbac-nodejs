const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected!");
  } catch (error) {
    console.log("Error connecting database: ", error);
    process.exit(1); // Exits the app if db connection fails.
  }
};

module.exports = connectDb;
