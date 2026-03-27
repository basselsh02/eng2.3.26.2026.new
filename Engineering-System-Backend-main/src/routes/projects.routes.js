import { Router } from "express";
import { createProject, getProjects } from "../controllers/projects.controller.js";
import { validate } from "../middleware/validate.js";
import { createProjectSchema, paginationQuerySchema } from "../validators.js";

const router = Router();

router.post("/", validate(createProjectSchema), createProject);
router.get("/", validate(paginationQuerySchema, "query"), getProjects);

export default router;
