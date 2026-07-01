import { Schema, model } from "mongoose";

const DepartmentSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String }
    },
    { timestamps: true }
);

export const DepartmentModel = model("Department", DepartmentSchema);