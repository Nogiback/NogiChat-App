import mongoose, { Schema } from "mongoose";

const ChatSchema = new Schema(
  {
    participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
    messages: [{ type: Schema.Types.ObjectId, ref: "Message", default: [] }],
  },
  // createdAt, updatedAt
  { timestamps: true }
);

const Chat = mongoose.model("Chat", ChatSchema);

export default Chat;
