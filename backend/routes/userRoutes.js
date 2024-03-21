import express from "express";
import verifyUser from "../middlewares/verifyUser.js";
import { getUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/", verifyUser, getUsers);

export default router;
