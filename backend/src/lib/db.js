// db.js
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Use Render's environment variable name
    const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/chatty");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit process with failure
  }
};
