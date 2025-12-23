import express from "express";
import { fetchProducts } from "../controller/productController.js";

const router = express.Router();

router.route("/products").get(fetchProducts);

export default router;
