import { Router } from "express";
import { createOfficeController } from "../controllers/office.controller.js";
import { validate } from "../middleware/validate.js";
import { officeRecordSchema, paginationQuerySchema } from "../validators.js";

export const createOfficeRouter = (modelName, supportedSubtypes) => {
  const router = Router();
  const controller = createOfficeController(modelName);

  router.get("/", validate(paginationQuerySchema, "query"), controller.getRecords);
  router.get("/table", controller.getDataTable);

  supportedSubtypes.forEach((subtype) => {
    router.post(`/${subtype}`, validate(officeRecordSchema), (req, _res, next) => {
      req.body.subtype = subtype;
      next();
    }, controller.createRecord);
  });

  return router;
};
