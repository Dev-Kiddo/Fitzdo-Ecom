import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import AppError from "../utils/AppError.js";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  avatar: {
    publicId: {
      type: String,
    },
    url: {
      type: String,
    },
  },
});

userSchema.pre("save", async function () {
  try {
    if (!this.isModified("password")) {
      return;
    }

    this.password = await bcrypt.hash(this.password, 10);
    return;
  } catch (error) {
    console.log(error.message);
  }
});

userSchema.methods.checkPassword = async function (password) {
  const verifyPassword = await bcrypt.compare(password, this.password);
  return verifyPassword;
};

const userModel = mongoose.model("User", userSchema);

export default userModel;
