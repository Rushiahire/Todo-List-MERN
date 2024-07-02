import List from "../models/list.js";
import User from "../models/user.js";
import mongoose from "mongoose";

// add Task
export const addTask = async (req, res) => {
  try {
    const { title, body, id } = req.body;

    const existingUser = await User.findById(id);

    if (existingUser) {
      const list = new List({ title, body, user: existingUser });
      await list
        .save()
        .then(() => res.status(200).json({ status: "success", list }));

      existingUser.list.push(list);
      existingUser.save();
    }
  } catch (error) {
    console.log(error);
  }
};

// update Task
export const updateTask = async (req, res) => {
  try {
    console.log("update req", req.body, req.params);
    const { title, body, id } = req.body;

    const existingUser = await User.findById(id);

    if (existingUser) {
      const updateList = await List.findByIdAndUpdate(req.params.id, {
        title,
        body,
      });
      updateList
        .save()
        .then(() =>
          res
            .status(200)
            .json({ status: "success", message: "Task Updated Successfully" })
        );
    } else {
      res.status(400).json({ message: "User Not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

// delete Task
export const deleteTask = async (req, res) => {
  try {
    const userId = req.body.userId; // Extract user ID from request body
    const taskId = req.params.id; // Extract task ID from request parameters

    // Check if userId is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    // Check if taskId is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(taskId)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }
    // Find the user by userId
    const existingUser = await User.findById(userId);
    console.log("existing user:", existingUser);

    if (existingUser) {
      // Find and delete the task by taskId
      const deletedTask = await List.findByIdAndDelete(taskId);
      if (deletedTask) {
        // Remove the task from the user's list array
        existingUser.list.pull(taskId);
        await existingUser.save();

        return res
          .status(200)
          .json({ status: "success", message: "Task Deleted" });
      } else {
        return res
          .status(404)
          .json({ status: "error", message: "Task not found" });
      }
    } else {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

// get Task
export const getTasks = async (req, res) => {
  try {
    const list = await List.find({ user: req.params.id });

    if (list.length !== 0) {
      res.status(200).json({ status: "success", list });
    } else {
      res.status(200).json({ message: "No Tasks Found" });
    }
  } catch (error) {
    console.log(error);
  }
};
