import express from "express";
import { register, login } from "../controllers/user-controller.js";

const router = express.Router();


// router.get("/", getAllUsers)
router.post("/login", login)
router.post("/register", register)

export default router;