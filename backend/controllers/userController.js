import asyncHandler from "express-async-handler";
import User from "../models/User.js";

export const getUsers = asyncHandler(async (req, res, next) => {
  const currentUser = req.user._id;
  const allUsers = await User.find({ _id: { $ne: currentUser } }).select(
    "-password"
  );
  if (!allUsers) {
    return res.status(401).json({ message: "Error: No users found." });
  }
  res.status(200).json(allUsers);
});
