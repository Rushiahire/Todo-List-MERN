import mongoose from "mongoose";

export const connection = async (req, res) => {
  const MONGODB_URI = process.env.MONGODB_URL;
  try {
    await mongoose.connect(MONGODB_URI).then(() => {
      console.log("Connected");
    });
  } catch (error) {
    console.log("error found", error);
  }
};
