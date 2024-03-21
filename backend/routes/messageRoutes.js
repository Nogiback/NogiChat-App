import express from "express";
import { sendMessage, getMessages } from "../controllers/messageController.js";
import verifyUser from "../middlewares/verifyUser.js";

const router = express.Router();

router.post("/send/:id", verifyUser, sendMessage);
router.get("/:id", verifyUser, getMessages);

export default router;
