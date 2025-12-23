import productModel from "../models/productModel.js";
import { validationResult } from "express-validator";

export const fetchProducts = async function (req, res) {
  const products = await productModel.find({});

  return res.status(200).json({
    success: true,
    message: "Product created successfully",
    products,
  });
};

export const createProduct = async function (req, res) {
  const errors = validationResult(req);

  console.log("errors:", !errors.isEmpty());

  if (!errors.isEmpty()) {
    console.log("iam from error");

    return res.status(400).json({ errors: errors.array() });
  }

  const existingProduct = await productModel.findOne({ title: req.body.title });

  if (existingProduct) {
    return res.status(409).json({
      success: false,
      message: "Product already exists",
    });
  }

  const product = await productModel.create(req.body);

  return res.status(200).json({
    success: true,
    message: "Product created successfully",
    product,
  });
};
