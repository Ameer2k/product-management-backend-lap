const mongoose = require("mongoose");

async function connectToDB() {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to Database: ${connection.connection.name}`);
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
}

module.exports = connectToDB;