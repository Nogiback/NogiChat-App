import asyncHandler from "express-async-handler";
import { body, validationResult } from "express-validator";
import Chat from "../models/Chat.js";
import Message from "../models/Message.js";
import { getReceiverSocketID, io } from "../socket/socket.js";

export const sendMessage = [
  body("message", "Message cannot be empty.").trim().isLength({ min: 1 }),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({
        errors: errors.array(),
        message: "Error: Message send failure.",
      });
      return;
    }
    const message = req.body.message;
    const receiverID = req.params.id;
    const senderID = req.user._id;

    let chat = await Chat.findOne({
      participants: { $all: [senderID, receiverID] },
    });

    if (!chat) {
      chat = await Chat.create({ participants: [senderID, receiverID] });
    }

    const newMessage = new Message({
      senderID,
      receiverID,
      message,
    });

    if (newMessage) {
      chat.messages.push(newMessage._id);
    }

    await Promise.all([chat.save(), newMessage.save()]);

    const receiverSocketID = getReceiverSocketID(receiverID);
    if (receiverSocketID) {
      // io.to(ID).emit() used to send events to specific client
      io.to(receiverSocketID).emit("newMessage", newMessage);
    }

    res.status(200).json(newMessage);
  }),
];

export const getMessages = asyncHandler(async (req, res, next) => {
  const receiverID = req.params.id;
  const senderID = req.user._id;

  const chat = await Chat.findOne({
    participants: { $all: [senderID, receiverID] },
  }).populate("messages");

  if (!chat) return res.status(200).json([]);

  res.status(200).json(chat.messages);
});
