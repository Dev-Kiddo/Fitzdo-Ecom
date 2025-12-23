import express from "express";
import productRouter from "./routes/productRoute.js";
import error from "./middlewares/error.js";

const app = express();

app.use(express.json());

// Routes
app.use("/api/v1", productRouter);

app.use(error);

export default app;
