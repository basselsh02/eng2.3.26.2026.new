import React from "react";
import { useNavigate } from "react-router";
import { hasAnyPermission } from "../../../utils/permission.utils";

export default function SidebarNode({ node, isOpen, level = 0, user, isChild = false }) {
  const navigate = useNavigate();

  // Check if user has permission to view this node
  const nodeHasPermission =
    !node.permissions ||
    node.permissions.length === 0 ||
    hasAnyPermission(user, node.permissions);

  if (!nodeHasPermission) {
    return null;
  }

  // Handle click based on whether it's a parent or leaf node
  const handleClick = () => {
    if (node.path) {
      navigate(node.path);
    } else if (node.isParent && node.onClick) {
      node.onClick();
    }
  };

  // Determine if this node is a parent that can be expanded
  const isParentNode = node.isParent || (node.children && node.children.length > 0);

  return (
    <div className="relative group">
      <div
        onClick={handleClick}
        className={`
          flex items-center gap-2 w-full p-2 rounded-md cursor-pointer
          hover:bg-primary-300 hover:text-primary-content-300 transition-colors duration-200 relative
          ${level > 0 ? "mr-4" : ""}
          ${isChild ? "text-sm pr-6" : ""}
          ${!isOpen && "justify-center"}
        `}
        style={{ paddingRight: isChild ? '1.5rem' : undefined }}
      >
        {node.icon && <span className="text-lg shrink-0">{node.icon}</span>}
        {isOpen && (
          <>
            <span className="font-medium flex-1 text-right">{node.label}</span>
            {isParentNode && node.children && (
              <span className="text-xs">
                {node.isExpanded ? '▼' : '◀'}
              </span>
            )}
          </>
        )}
      </div>
      
      {/* Tooltip for collapsed state */}
      {!isOpen && node.label && (
        <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 hidden group-hover:block z-50">
          <div className="bg-base-800 text-white text-sm py-1 px-2 rounded whitespace-nowrap">
            {node.label}
          </div>
        </div>
      )}
    </div>
  );
}