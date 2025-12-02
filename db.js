
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://umerakhlaq:umer123.@cluster0.sxq7fz8.mongodb.net/mangoDB?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB Atlas Connected");
  } catch (error) {
    console.log("MongoDB Error:", error.message);
  }
};

module.exports = connectDB;
