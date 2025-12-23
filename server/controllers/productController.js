import productModel from "../models/productModel.js";
import { validationResult } from "express-validator";
import AppError from "../utils/AppError.js";

export const fetchProducts = async function (req, res, next) {
  const products = await productModel.find({});

  if (products.length === 0) {
    return next(new AppError(404, "Products not found"));
  }

  return res.status(200).json({
    success: true,
    message: "Product created successfully",
    products,
  });
};

export const createProduct = async function (req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // console.log("Im from validation err");

    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  const existingProduct = await productModel.findOne({ title: req.body.title });

  if (existingProduct) {
    return next(new AppError(409, "Product already exists"));
  }

  const product = await productModel.create(req.body);

  return res.status(200).json({
    success: true,
    message: "Product created successfully",
    product,
  });
};
