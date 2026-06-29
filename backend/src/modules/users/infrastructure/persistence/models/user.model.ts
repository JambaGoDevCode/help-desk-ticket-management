import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    _id: { type: String },
    email: { type: String, unique: true, required: true },
    role: { type: String, required: true },
    status: { type: String, required: true },
    passwordHash: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

export const UserModel = model("User", UserSchema);