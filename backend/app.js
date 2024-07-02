import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user-routes.js";
import listRoutes from "./routes/list-routes.js";
import { connection } from "./connection/connection.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", listRoutes);
connection();

const port = 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
