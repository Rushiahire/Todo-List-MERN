import List from "../models/list.js";
import User from "../models/user.js";

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
