import { Schema, model } from "mongoose";

const TeamSchema = new Schema(
    {
        name: { type: String, required: true },
        departmentId: { type: String, required: true },
        capacity: { type: Number, default: 5 },
        status: { type: String, default: "ACTIVE" },
        members: [{ type: Schema.Types.ObjectId, ref: "TeamMember" }],
        queues: [{ type: Schema.Types.ObjectId, ref: "Queue" }]
    },
    { timestamps: true }
);

export const TeamModel = model("Team", TeamSchema);