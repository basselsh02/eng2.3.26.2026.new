import mongoose from "mongoose";
import { OFFICE_ENUM } from "../constants/offices.js";

const taskSchema = new mongoose.Schema(
  {
    officeId: { type: String, enum: OFFICE_ENUM, required: true, index: true },
    taskId: { type: String, required: true, index: true },
    assignedTo: { type: String, trim: true, default: null },
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true, default: "" },
    status: { type: String, enum: ["pending", "completed"], default: "pending", index: true },
    metadata: { type: mongoose.Schema.Types.Mixed, default: {} },
  },
  { timestamps: true }
);

taskSchema.index({ officeId: 1, taskId: 1 }, { unique: true });

export const Task = mongoose.model("Task", taskSchema);
