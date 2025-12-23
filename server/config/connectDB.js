import mongoose from "mongoose";

const connectDB = async function () {
  const URI = await mongoose.connect(process.env.MONGO_URI);

  return URI;
};

export default connectDB;
