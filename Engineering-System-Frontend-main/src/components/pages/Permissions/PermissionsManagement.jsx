import React, { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import apiClient from "../../../api/client";
import Button from "../../ui/Button/Button";

const hierarchy = ["سوبر أدمن", "مدير الادارة", "مدير الفرع", "رئيس القسم", "موظف"];

const roleRank = (role) => hierarchy.indexOf(role);

const toGrantMap = (grants) => {
  const map = {};

  grants.forEach((grant) => {
    const key = `${grant.moduleId}::${grant.tabId}::${grant.pageId}::${grant.fieldKey}`;
    map[key] = {
      read: Boolean(grant.read),
      update: Boolean(grant.update),
      soft_delete: Boolean(grant.soft_delete),
    };
  });

  return map;
};

export default function PermissionsManagement() {
  const [actorRole, setActorRole] = useState("سوبر أدمن");
  const [selectedUserId, setSelectedUserId] = useState("");
  const [grantMap, setGrantMap] = useState({});

  const { data: usersResponse } = useQuery({
    queryKey: ["users", "all"],
    queryFn: async () => {
      const response = await apiClient.get("/api/users", { params: { page: 1, pageSize: 300 } });
      return response.data;
    },
  });

  const { data: catalogResponse } = useQuery({
    queryKey: ["permissions", "catalog"],
    queryFn: async () => {
      const response = await apiClient.get("/api/permissions/catalog");
      return response.data;
    },
  });

  const { data: userPermissionResponse, isFetching: isFetchingPermissions } = useQuery({
    queryKey: ["permissions", selectedUserId],
    enabled: Boolean(selectedUserId),
    queryFn: async () => {
      const response = await apiClient.get(`/api/permissions/${selectedUserId}`);
      return response.data;
    },
  });

  const users = usersResponse?.items || [];
  const catalog = catalogResponse?.data || [];

  const manageableUsers = useMemo(
    () => users.filter((user) => roleRank(actorRole) !== -1 && roleRank(actorRole) < roleRank(user.role)),
    [users, actorRole]
  );

  useEffect(() => {
    if (!selectedUserId) {
      return;
    }

    const selectedStillValid = manageableUsers.some((user) => user._id === selectedUserId);

    if (!selectedStillValid) {
      setSelectedUserId("");
      setGrantMap({});
    }
  }, [manageableUsers, selectedUserId]);

  useEffect(() => {
    if (!userPermissionResponse?.data) {
      return;
    }

    setGrantMap(toGrantMap(userPermissionResponse.data.grants || []));
  }, [userPermissionResponse]);

  const saveMutation = useMutation({
    mutationFn: async () => {
      const grants = [];

      catalog.forEach((module) => {
        module.tabs.forEach((tab) => {
          tab.pages.forEach((page) => {
            page.fields.forEach((field) => {
              const key = `${module.moduleId}::${tab.tabId}::${page.pageId}::${field.fieldKey}`;
              const flags = grantMap[key] || { read: false, update: false, soft_delete: false };
              grants.push({
                moduleId: module.moduleId,
                tabId: tab.tabId,
                pageId: page.pageId,
                fieldKey: field.fieldKey,
                ...flags,
              });
            });
          });
        });
      });

      await apiClient.put(`/api/permissions/${selectedUserId}`, {
        actorRole,
        grants,
      });
    },
    onSuccess: () => toast.success("تم حفظ الصلاحيات بنجاح"),
    onError: (error) => {
      toast.error(error?.response?.data?.message || "تعذر حفظ الصلاحيات");
    },
  });

  const togglePermission = (key, permissionType) => {
    setGrantMap((prev) => {
      const current = prev[key] || { read: false, update: false, soft_delete: false };
      return {
        ...prev,
        [key]: {
          ...current,
          [permissionType]: !current[permissionType],
        },
      };
    });
  };

  const selectedUser = users.find((user) => user._id === selectedUserId) || null;

  return (
    <div className="p-4 space-y-4" dir="rtl">
      <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded w-fit">إدارة الصلاحيات</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-base border border-gray-200 rounded p-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">الدور الحالي (منفّذ العملية)</label>
          <select className="w-full rounded border border-gray-300 p-2" value={actorRole} onChange={(e) => setActorRole(e.target.value)}>
            {hierarchy.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">اختر المستخدم المستهدف</label>
          <select className="w-full rounded border border-gray-300 p-2" value={selectedUserId} onChange={(e) => setSelectedUserId(e.target.value)}>
            <option value="">اختر المستخدم</option>
            {manageableUsers.map((user) => (
              <option key={user._id} value={user._id}>
                {user.arabicName} - {user.role}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedUser?.role === "سوبر أدمن" ? (
        <div className="rounded border border-green-200 bg-green-50 p-4 text-green-700">
          صلاحيات السوبر أدمن كاملة بشكل افتراضي ولا تحتاج تعديل.
        </div>
      ) : null}

      {selectedUserId ? (
        <div className="overflow-x-auto border border-gray-200 rounded bg-base">
          <table className="w-full text-sm text-right">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="p-3">الموديول</th>
                <th className="p-3">التبويب</th>
                <th className="p-3">الصفحة</th>
                <th className="p-3">الحقل</th>
                <th className="p-3 text-center">قراءة</th>
                <th className="p-3 text-center">تعديل</th>
                <th className="p-3 text-center">حذف ناعم</th>
              </tr>
            </thead>
            <tbody>
              {catalog.flatMap((module) =>
                module.tabs.flatMap((tab) =>
                  tab.pages.flatMap((page) =>
                    page.fields.map((field) => {
                      const key = `${module.moduleId}::${tab.tabId}::${page.pageId}::${field.fieldKey}`;
                      const current = grantMap[key] || { read: false, update: false, soft_delete: false };

                      return (
                        <tr key={key} className="border-b border-gray-100">
                          <td className="p-3">{module.moduleLabel}</td>
                          <td className="p-3">{tab.tabLabel}</td>
                          <td className="p-3">{page.pageLabel}</td>
                          <td className="p-3">{field.fieldLabel}</td>
                          {[
                            { id: "read", value: current.read },
                            { id: "update", value: current.update },
                            { id: "soft_delete", value: current.soft_delete },
                          ].map((permissionCell) => (
                            <td key={permissionCell.id} className="p-3 text-center">
                              <input
                                type="checkbox"
                                checked={permissionCell.value}
                                onChange={() => togglePermission(key, permissionCell.id)}
                              />
                            </td>
                          ))}
                        </tr>
                      );
                    })
                  )
                )
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="rounded border border-gray-200 bg-gray-50 p-4 text-gray-600">اختر مستخدمًا لعرض صلاحياته.</div>
      )}

      <div>
        <Button type="button" variant="primary" loading={saveMutation.isPending || isFetchingPermissions} onClick={() => saveMutation.mutate()} disabled={!selectedUserId}>
          حفظ الصلاحيات
        </Button>
      </div>
    </div>
  );
}
