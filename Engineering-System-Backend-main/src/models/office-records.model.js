import mongoose from "mongoose";

const baseOfficeRecord = {
  projectCode: { type: String, trim: true, index: true },
  subtype: { type: String, required: true, index: true },
  title: { type: String, required: true, trim: true, index: true },
  amount: { type: Number, default: 0, min: 0, index: true },
  eventDate: { type: Date, default: Date.now, index: true },
  location: { type: String, trim: true, default: "" },
  status: { type: String, trim: true, default: "open", index: true },
  committee: {
    members: [{ type: String, trim: true }],
    results: [{ type: String, trim: true }],
  },
  offers: [
    {
      company: { type: String, trim: true },
      value: { type: Number, min: 0 },
      notes: { type: String, trim: true },
    },
  ],
  metadata: { type: mongoose.Schema.Types.Mixed, default: {} },
  printData: { type: mongoose.Schema.Types.Mixed, default: {} },
};

const makeSchema = () => new mongoose.Schema(baseOfficeRecord, { timestamps: true });

export const Nashr = mongoose.model("Nashr", makeSchema());
export const Oqood = mongoose.model("Oqood", makeSchema());
export const Siyana = mongoose.model("Siyana", makeSchema());
export const Tawridat = mongoose.model("Tawridat", makeSchema());
export const Mashtarawat = mongoose.model("Mashtarawat", makeSchema());
export const Mizaniya = mongoose.model("Mizaniya", makeSchema());
export const Hesabat = mongoose.model("Hesabat", makeSchema());
