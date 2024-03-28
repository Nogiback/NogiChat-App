import { Server } from "socket.io";
import http from "http";
import express from "express";
import cors from "cors";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

const userSocketMap = {};

export function getReceiverSocketID(receiverID) {
  return userSocketMap[receiverID];
}

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);
  const userID = socket.handshake.query.userID;

  if (userID !== "undefined") {
    userSocketMap[userID] = socket.id;
  }

  // io.emit() is used to send events to all connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // socket.on() listens to events, can be used on client and server side
  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    delete userSocketMap[userID];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
