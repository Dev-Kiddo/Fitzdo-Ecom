import express from "express";
import productRouter from "./routes/productRoute.js";
import error from "./middlewares/error.js";
import userRouter from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:5173", "https://fitzdo-ecom.vercel.app"], credentials: true }));

// Routes
app.use("/api/v1", productRouter);
app.use("/api/v1", userRouter);

app.use(error);

export default app;
