import { Router } from "express";
import { createUser, getUsers } from "../controllers/users.controller.js";
import { validate } from "../middleware/validate.js";
import { createUserSchema, paginationQuerySchema } from "../validators.js";

const router = Router();

router.post("/", validate(createUserSchema), createUser);
router.get("/", validate(paginationQuerySchema, "query"), getUsers);

export default router;
