import express from "express";
import {
  addTask,
  updateTask,
  deleteTask,
} from "../controllers/task-controller.js";
const router = express.Router();

router.post("/addTask", addTask);
router.put("/updateTask/:id", updateTask);
router.delete("/deleteTask/:id", deleteTask);

export default router;
