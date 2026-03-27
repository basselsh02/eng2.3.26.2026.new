import React from "react";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../../api/client";

export default function EmployeeTasks({ officeId, officeName }) {
  const currentEmployeeId = localStorage.getItem("employeeId") || localStorage.getItem("userId") || "me";

  const { data: tasks = [] } = useQuery({
    queryKey: ["employee-tasks", officeId, currentEmployeeId],
    queryFn: async () => {
      const { data } = await apiClient.get(`/tasks/assigned`, {
        params: { officeId, employeeId: currentEmployeeId, excludeStatus: "done" },
      });
      const rows = data?.tasks || data || [];
      return rows.filter((task) => task.status !== "done");
    },
  });

  return (
    <div className="p-4 space-y-4" dir="rtl">
      <div className="flex-1 flex justify-center">
        <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">مهام الموظف - {officeName}</h1>
      </div>
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3">عنوان المهمة</th>
              <th className="p-3">المكتب</th>
              <th className="p-3">تاريخ/وقت الإسناد</th>
              <th className="p-3">تاريخ الاستحقاق</th>
              <th className="p-3">الحالة</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id || task._id} className="border-b border-gray-100">
                <td className="p-3">{task.title || task.description}</td>
                <td className="p-3">{task.officeName || officeName}</td>
                <td className="p-3">{task.assignedAt ? new Date(task.assignedAt).toLocaleString("ar-EG") : "-"}</td>
                <td className="p-3">{task.dueDate ? new Date(task.dueDate).toLocaleDateString("ar-EG") : "-"}</td>
                <td className="p-3">{task.status || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
