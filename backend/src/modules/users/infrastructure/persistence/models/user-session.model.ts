import { Schema, model } from "mongoose";

const UserSessionSchema = new Schema(
  {
    _id: { type: String },
    userId: { type: String, required: true },
    ip: { type: String },
    userAgent: { type: String },
    revoked: { type: Boolean, default: false },
    expiresAt: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

export const UserSessionModel = model("UserSession", UserSessionSchema);