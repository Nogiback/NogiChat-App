import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: {
      type: String,
      required: true,
      enum: [
        "Man",
        "Woman",
        "Transgender",
        "Genderqueer",
        "Agender",
        "Genderless",
        "Non-Binary",
        "Cis Man",
        "Cis Woman",
        "Trans Man",
        "Trans Woman",
        "Third Gender",
        "Two-Spirit",
        "Bigender",
        "Genderfluid",
        "Prefer Not To Say",
      ],
    },
    profilePic: { type: String, default: "" },
  },
  // createdAt, updatedAt
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
