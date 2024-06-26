import User from "../models/user.js";
import bcrypt from "bcrypt";

// Register route
export const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ status: "error", message: "User Already Exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ email, username, password: hashedPassword });
    await user.save();

    res.status(201).json({ status: "success", user: user });
  } catch (error) {
    res
      .status(500)
      .json({
        status: "error",
        message: "An error occurred while registering the user",
      });
  }
};

// Login route
export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({ message: "Please Register First" });
    }

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ message: "Email or Password is Incorrect" });
    }

    const { password, ...others } = user._doc;
    return res.status(200).json({ status: "success", data: others });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred during login",
      error: error.message,
    });
  }
};
