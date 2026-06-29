import { Schema, model } from "mongoose";

const ProfileSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    avatarUrl: { type: String },
    phone: { type: String }
  },
  {
    timestamps: true
  }
);

export const ProfileModel = model("Profile", ProfileSchema);