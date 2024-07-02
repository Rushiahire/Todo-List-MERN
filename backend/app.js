import express from "express";
import path from "path";
import { fileURLToPath } from "url"; // Import url module
import userRoutes from "./routes/user-routes.js";
import listRoutes from "./routes/list-routes.js";
import { connection } from "./connection/connection.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

// Derive __dirname using url and path modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.resolve(__dirname, "frontend", "dist")));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", listRoutes);
connection();

const port = 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
