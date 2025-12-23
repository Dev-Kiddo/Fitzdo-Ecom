import express from "express";
import { createProduct, fetchProducts } from "../controllers/productController.js";
import { body } from "express-validator";

const router = express.Router();

router.get("/products", fetchProducts);

router.post(
  "/products",
  [
    body("brand").notEmpty().withMessage("Brand id required"),
    body("title").notEmpty().withMessage("Title is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("category").notEmpty().withMessage("Category is required"),
    body("price").isFloat({ min: 0 }).withMessage("Price must be a positive number"),
    body("mrp").isFloat({ min: 0 }).withMessage("MRP must be a positive number"),
    body("stock").isInt({ min: 0 }).withMessage("Stock must be a non-negative integer"),
  ],
  createProduct
);

export default router;
