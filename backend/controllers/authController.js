import asyncHandler from "express-async-handler";
import { body, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// SIGN UP POST

export const signup = [
  body("firstName", "First name must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("lastName", "Last name must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("email", "Email must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("gender", "Gender must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("username", "Username must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("password", "Password must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("confirmPassword", "Passwords must match.")
    .custom((value, { req }) => value === req.body.password)
    .escape(),
  body("profilePic").trim().optional(),

  asyncHandler(async (req, res, next) => {
    const duplicateUser = await User.findOne({ username: req.body.username });
    const duplicateEmail = await User.findOne({ email: req.body.email });
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({
        errors: errors.array(),
        message: "Error: Sign up failure.",
      });
      return;
    }

    if (duplicateUser) {
      res.status(409).json({
        message: "Error: Username already exists.",
      });
      return;
    }

    if (duplicateEmail) {
      res.status(409).json({
        message: "Error: Email already exists.",
      });
      return;
    }

    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      if (err) {
        res.status(500).json({ err });
        return;
      } else {
        const defaultPic = `https://avatar.iran.liara.run/username?username=${req.body.firstName}+${req.body.lastName}`;
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          gender: req.body.gender,
          profilePic:
            req.body.profilePic === "" ? defaultPic : req.body.profilePic,
          password: hashedPassword,
        });
        generateToken(newUser._id, res);
        await newUser.save();
        res
          .status(201)
          .json({ newUser, message: "New user created successfully." });
      }
    });
  }),
];

// LOGIN POST

export const login = [
  body("username", "Username must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("password", "Password must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(401).json({
        errors: errors.array(),
        message: "Error: Login Failure.",
      });
      return;
    }

    const user = await User.findOne({ username: req.body.username });
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isValidPassword || !user) {
      return res
        .status(401)
        .json({ message: "Error: Wrong username or password." });
    }

    generateToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      profilePic: user.profilePic,
      message: "User successfully logged in.",
    });
  }),
];

// LOGOUT POST

export const logout = (req, res, next) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.status(200).json({ message: "User logged out successfully." });
};
