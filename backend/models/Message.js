import mongoose, { Schema } from "mongoose";

const MessageSchema = new Schema(
  {
    senderID: { type: Schema.Types.ObjectId, ref: "User", required: true },
    receiverID: { type: Schema.Types.ObjectId, ref: "User", required: true },
    message: { type: String, required: true },
  },
  // createdAt, updatedAt
  { timestamps: true }
);

const Message = mongoose.model("Message", MessageSchema);

export default Message;
