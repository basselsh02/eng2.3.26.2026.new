import { Router } from "express";
import { assignTask, createTask } from "../controllers/tasks.controller.js";
import { validate } from "../middleware/validate.js";
import { assignTaskSchema, createTaskSchema } from "../validators.js";

const router = Router();

router.post("/", validate(createTaskSchema), createTask);
router.patch("/assign-task/:officeId/:taskId", validate(assignTaskSchema), assignTask);

export default router;
