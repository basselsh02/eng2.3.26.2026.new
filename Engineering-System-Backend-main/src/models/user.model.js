import mongoose from "mongoose";
import { OFFICE_ENUM } from "../constants/offices.js";

export const USER_ROLES = ["سوبر أدمن", "مدير الادارة", "مدير الفرع", "رئيس القسم", "موظف"];
export const OFFICE_REQUIRED_ROLES = ["رئيس القسم", "موظف"];

const userSchema = new mongoose.Schema(
  {
    arabicName: { type: String, required: true, trim: true },
    englishName: { type: String, required: true, trim: true },
    password: { type: String, required: true, minlength: 8 },
    role: { type: String, enum: USER_ROLES, required: true, index: true },
    officeAssignedTo: { type: String, enum: OFFICE_ENUM, default: null },
  },
  { timestamps: true }
);

userSchema.pre("validate", function ensureOfficeOnRequiredRoles(next) {
  if (OFFICE_REQUIRED_ROLES.includes(this.role) && !this.officeAssignedTo) {
    return next(new Error("officeAssignedTo is required for موظف and رئيس القسم"));
  }

  if (!OFFICE_REQUIRED_ROLES.includes(this.role)) {
    this.officeAssignedTo = null;
  }

  return next();
});

export const User = mongoose.model("User", userSchema);
