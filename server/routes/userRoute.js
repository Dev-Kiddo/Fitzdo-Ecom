import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/register",
  [
    body("email").notEmpty().withMessage("Email is required").isEmail().withMessage("'Please provide a valid email address'"),
    body("password").notEmpty().withMessage("Password is required").isLength({ min: 4 }).withMessage("Password must be at least 6 characters long"),
  ],
  registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Email is required"),
    body("password").notEmpty().withMessage("Password is required").isLength({ min: 4 }).withMessage("Password must be morethan 4 characters"),
  ],
  loginUser
);

export default router;
