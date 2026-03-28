import { User } from "../models/user.model.js";

const SUPER_ADMIN_SEED = {
  arabicName: "سوبر أدمن",
  englishName: "Super Admin",
  password: "12345678",
  role: "سوبر أدمن",
  officeAssignedTo: null,
};

export const seedSuperAdmin = async () => {
  const existing = await User.findOne({ role: "سوبر أدمن" });

  if (existing) {
    return;
  }

  await User.create(SUPER_ADMIN_SEED);
};
