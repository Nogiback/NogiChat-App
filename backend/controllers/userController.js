import asyncHandler from "express-async-handler";
import { body, validationResult } from "express-validator";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const getUsers = asyncHandler(async (req, res, next) => {
  const currentUser = req.user._id;
  const allUsers = await User.find({ _id: { $ne: currentUser } })
    .select("-password")
    .sort({ firstName: 1 })
    .exec();
  if (!allUsers) {
    return res.status(401).json({ message: "Error: No users found." });
  }
  res.status(200).json(allUsers);
});

export const getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id).exec();

  if (!user) {
    res.status(404).json({ message: "Error: No user found." });
    return;
  }

  res.status(200).json(user);
});

export const updateProfilePic = [
  body("profilePic").trim().optional(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({
        errors: errors.array(),
        message: "Error: Profile picture update failure.",
      });
      return;
    }

    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).json({ message: "Error: User not found." });
      return;
    }

    const defaultPic = `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}`;

    const updatedUserDetails = {
      profilePic: req.body.profilePic === "" ? defaultPic : req.body.profilePic,
      _id: req.params.id,
    };

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updatedUserDetails,
      { new: true }
    );

    res.status(200).json({
      _id: updatedUser._id,
      username: updatedUser.username,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      profilePic: updatedUser.profilePic,
      email: updatedUser.email,
      gender: updatedUser.gender,
      message: "User successfully updated profile picture.",
    });
  }),
];
