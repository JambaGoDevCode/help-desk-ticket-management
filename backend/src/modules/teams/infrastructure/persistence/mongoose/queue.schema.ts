import { Schema, model } from "mongoose";

const QueueSchema = new Schema(
    {
        name: { type: String, required: true },
        teamId: { type: String, required: true },
        type: { type: String, enum: ["SUPPORT", "SALES", "PRIORITY"] },
        active: { type: Boolean, default: true }
    },
    { timestamps: true }
);

export const QueueModel = model("Queue", QueueSchema);