import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, unique: true, index: true },
    commercialRegister: { type: String, trim: true, default: "" },
    approvalNumber: { type: String, trim: true, default: "" },
    specialization: { type: String, trim: true, default: "" },
    status: { type: String, enum: ["active", "inactive"], default: "active", index: true },
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", companySchema);
