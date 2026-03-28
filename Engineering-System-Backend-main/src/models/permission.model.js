import mongoose from "mongoose";
import { HIERARCHY_ROLES } from "../constants/permissions-catalog.js";

const grantSchema = new mongoose.Schema(
  {
    moduleId: { type: String, required: true },
    tabId: { type: String, required: true },
    pageId: { type: String, required: true },
    fieldKey: { type: String, required: true },
    read: { type: Boolean, default: false },
    update: { type: Boolean, default: false },
    soft_delete: { type: Boolean, default: false },
  },
  { _id: false }
);

const permissionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true, index: true },
    role: { type: String, enum: HIERARCHY_ROLES, required: true },
    grants: { type: [grantSchema], default: [] },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  },
  { timestamps: true }
);

export const Permission = mongoose.model("Permission", permissionSchema);
