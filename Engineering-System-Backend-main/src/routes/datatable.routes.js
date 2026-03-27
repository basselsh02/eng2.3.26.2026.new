import { Router } from "express";
import { OFFICE_DATA_MODELS } from "../constants/offices.js";
import { createOfficeController } from "../controllers/office.controller.js";

const router = Router();

router.get("/:office", (req, res, next) => {
  const modelName = OFFICE_DATA_MODELS[req.params.office];
  if (!modelName || !["Nashr", "Oqood", "Siyana", "Tawridat", "Mashtarawat", "Mizaniya", "Hesabat"].includes(modelName)) {
    return res.status(400).json({ success: false, message: "Unsupported office for datatable" });
  }

  return createOfficeController(modelName).getDataTable(req, res, next);
});

export default router;
