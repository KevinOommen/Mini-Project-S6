import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js";
import kitchenRoute from "./routes/kitchenRoutes.js";
import menuRoute from "./routes/menuRoutes.js";
import cors from "cors";
config({ path: "./config/config.env" });

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", paymentRoute);
app.use("/kitchen", kitchenRoute);
app.use("/menu", menuRoute);
app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);


