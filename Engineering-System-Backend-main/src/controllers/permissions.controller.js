import { buildSuperAdminGrants, HIERARCHY_ROLES, PERMISSIONS_CATALOG } from "../constants/permissions-catalog.js";
import { repositories } from "../repositories/index.js";

const getRoleRank = (role) => HIERARCHY_ROLES.indexOf(role);

const canManageRole = (actorRole, targetRole) => {
  const actorRank = getRoleRank(actorRole);
  const targetRank = getRoleRank(targetRole);

  if (actorRank === -1 || targetRank === -1) {
    return false;
  }

  return actorRank < targetRank;
};

export const getPermissionCatalog = (_req, res) => {
  res.json({ success: true, data: PERMISSIONS_CATALOG, actions: ["read", "update", "soft_delete"] });
};

export const getUserPermissions = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await repositories.User.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (user.role === "سوبر أدمن") {
      return res.json({
        success: true,
        data: {
          userId,
          role: user.role,
          isSuperAdmin: true,
          grants: buildSuperAdminGrants(),
        },
      });
    }

    const permissionDoc = await repositories.Permission.findOne({ userId });
    return res.json({
      success: true,
      data: {
        userId,
        role: user.role,
        isSuperAdmin: false,
        grants: permissionDoc?.grants || [],
      },
    });
  } catch (error) {
    next(error);
  }
};

export const upsertUserPermissions = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { actorRole, actorUserId = null, grants } = req.body;

    if (!actorRole || !Array.isArray(grants)) {
      return res.status(400).json({ success: false, message: "actorRole and grants are required" });
    }

    const targetUser = await repositories.User.findById(userId);

    if (!targetUser) {
      return res.status(404).json({ success: false, message: "Target user not found" });
    }

    if (targetUser.role === "سوبر أدمن") {
      return res.status(400).json({ success: false, message: "Super Admin permissions are fixed and always full access" });
    }

    if (!canManageRole(actorRole, targetUser.role)) {
      return res.status(403).json({ success: false, message: "You can only manage users below your hierarchy level" });
    }

    const sanitizedGrants = grants.map((grant) => ({
      moduleId: grant.moduleId,
      tabId: grant.tabId,
      pageId: grant.pageId,
      fieldKey: grant.fieldKey,
      read: Boolean(grant.read),
      update: Boolean(grant.update),
      soft_delete: Boolean(grant.soft_delete),
    }));

    const permission = await repositories.Permission.updateOne(
      { userId: targetUser._id },
      {
        userId: targetUser._id,
        role: targetUser.role,
        grants: sanitizedGrants,
        updatedBy: actorUserId,
      },
      { upsert: true }
    );

    return res.json({ success: true, data: permission });
  } catch (error) {
    next(error);
  }
};
