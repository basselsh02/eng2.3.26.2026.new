import { Router } from "express";
import { getSuggestions } from "../controllers/suggestions.controller.js";
import { validate } from "../middleware/validate.js";
import { suggestionsQuerySchema } from "../validators.js";

const router = Router();

router.get("/", validate(suggestionsQuerySchema, "query"), getSuggestions);

export default router;
