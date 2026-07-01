import { Schema, model } from "mongoose";

const TeamMemberSchema = new Schema(
    {
        userId: { type: String, required: true },
        teamId: { type: String, required: true },
        role: { type: String, enum: ["MEMBER", "LEAD", "MANAGER"] },
        workload: { type: Number, default: 0 },
        active: { type: Boolean, default: true }
    },
    { timestamps: true }
);

export const TeamMemberModel = model("TeamMember", TeamMemberSchema);