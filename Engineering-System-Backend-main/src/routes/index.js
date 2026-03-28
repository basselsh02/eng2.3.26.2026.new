import { Router } from "express";
import projectsRouter from "./projects.routes.js";
import tasksRouter from "./tasks.routes.js";
import suggestionsRouter from "./suggestions.routes.js";
import datatableRouter from "./datatable.routes.js";
import nashrRouter from "./nashr.routes.js";
import oqoodRouter from "./oqood.routes.js";
import siyanaRouter from "./siyana.routes.js";
import tawridatRouter from "./tawridat.routes.js";
import mashtarawatRouter from "./mashtarawat.routes.js";
import mizaniyaRouter from "./mizaniya.routes.js";
import hesabatRouter from "./hesabat.routes.js";
import usersRouter from "./users.routes.js";

const router = Router();

router.use("/projects", projectsRouter);
router.use("/tasks", tasksRouter);
router.use("/suggestions", suggestionsRouter);
router.use("/data-table", datatableRouter);
router.use("/nashr", nashrRouter);
router.use("/oqood", oqoodRouter);
router.use("/siyana", siyanaRouter);
router.use("/tawridat", tawridatRouter);
router.use("/mashtarawat", mashtarawatRouter);
router.use("/mizaniya", mizaniyaRouter);
router.use("/hesabat", hesabatRouter);
router.use("/users", usersRouter);

export default router;
