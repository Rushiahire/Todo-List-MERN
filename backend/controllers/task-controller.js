import List from "../models/list.js";
import User from "../models/user.js";

// add Task
export const addTask = async (req, res) => {
  try {
    const { title, body, email } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const list = new List({ title, body, user: existingUser });
      await list.save().then(() => res.status(200).json({ list }));

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
    const { title, body, email } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const updateList = await List.findByIdAndUpdate(req.params.id, {
        title,
        body,
      });
      updateList
        .save()
        .then(() =>
          res.status(200).json({ message: "Task Updated Successfully" })
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
    const { email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      await List.findByIdAndDelete(req.params.id).then(() =>
        res.status(200).json({ message: "Task Deleted" })
      );
    }
  } catch (error) {
    console.log(error);
  }
};
