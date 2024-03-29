import express from "express";
import verifyUser from "../middlewares/verifyUser.js";
import {
  getUsers,
  getUser,
  updateProfilePic,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", verifyUser, getUsers);
router.get("/:id", getUser);
router.put("/:id/profilePic", verifyUser, updateProfilePic);

export default router;
