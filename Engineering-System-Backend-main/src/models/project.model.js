import mongoose from "mongoose";
import { OFFICE_ENUM, PROJECT_STATUS, PROJECT_TYPE } from "../constants/offices.js";

const projectSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true, trim: true, index: true },
    name: { type: String, required: true, trim: true, index: true },
    office: { type: String, enum: OFFICE_ENUM, required: true, index: true },
    financialYear: { type: Number, required: true, min: 2000 },
    status: { type: String, enum: PROJECT_STATUS, default: "draft", index: true },
    projectType: { type: String, enum: PROJECT_TYPE, required: true },
    budget: { type: Number, default: 0, min: 0 },
    conditions: [{ type: String, trim: true }],
    companiesNominated: [{ type: String, trim: true }],
    printData: { type: mongoose.Schema.Types.Mixed, default: {} },
  },
  { timestamps: true }
);

projectSchema.index({ office: 1, status: 1, financialYear: -1 });

export const Project = mongoose.model("Project", projectSchema);
