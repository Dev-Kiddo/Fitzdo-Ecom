import { validationResult } from "express-validator";
import asyncHandler from "../middlewares/asyncHandler.js";
import userModel from "../models/userModel.js";
import AppError from "../utils/AppError.js";
import jwt from "jsonwebtoken";

const isProduction = process.env.NODE_ENV === "production";

export const registerUser = asyncHandler(async function (req, res, next) {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError(400, "All fields required"));
  }

  const existingUser = await userModel.findOne({ email });

  if (existingUser) {
    return next(new AppError(401, "User already exists. Please log in"));
  }

  const user = new userModel({ email, password });

  await user.save();

  const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

  res
    .status(200)
    .cookie("accessToken", token, { httpOnly: true, sameSite: isProduction ? "none" : "lax", secure: isProduction, maxAge: 86400000 })
    .json({
      success: true,
      message: "User registered successfull",
      user,
    });
});

export const loginUser = asyncHandler(async function (req, res, next) {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError(400, "All fields required"));
  }

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return next(new AppError(401, "User doesn't exists. Please sign up"));
  }

  const isMatch = await user.checkPassword(password);

  if (!isMatch) {
    return next(new AppError(401, "Email or password you entered is incorrect"));
  }

  const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

  res
    .status(200)
    .cookie("accessToken", token, { httpOnly: true, sameSite: isProduction ? "none" : "lax", secure: isProduction, maxAge: 86400000 })
    .json({
      success: true,
      message: "Login successfull",
      user,
    });
});
