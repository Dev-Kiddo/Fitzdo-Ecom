import mongoose from "mongoose";

const connectDB = async function () {
  try {
    const URI = await mongoose.connect(process.env.MONGO_URI);
    return URI;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export default connectDB;
