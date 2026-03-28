import { Router } from "express";
import { getPermissionCatalog, getUserPermissions, upsertUserPermissions } from "../controllers/permissions.controller.js";

const router = Router();

router.get("/catalog", getPermissionCatalog);
router.get("/:userId", getUserPermissions);
router.put("/:userId", upsertUserPermissions);

export default router;
