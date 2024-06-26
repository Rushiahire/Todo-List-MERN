import express from "express";
import {
  addTask,
  updateTask,
  deleteTask,
  getTasks,
} from "../controllers/task-controller.js";
const router = express.Router();

router.post("/addTask", addTask);
router.put("/updateTask/:id", updateTask);
router.delete("/deleteTask/:id", deleteTask);
router.get("/getTasks/:id", getTasks);

export default router;
