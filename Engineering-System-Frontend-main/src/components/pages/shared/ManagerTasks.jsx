import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../../api/client";

export default function ManagerTasks({ officeId, officeName }) {
  const navigate = useNavigate();

  const { data: tasks = [] } = useQuery({
    queryKey: ["manager-tasks", officeId],
    queryFn: async () => {
      const { data } = await apiClient.get(`/tasks`, { params: { officeId } });
      return data?.tasks || data || [];
    },
  });

  return (
    <div className="p-4 space-y-4" dir="rtl">
      <div className="flex-1 flex justify-center">
        <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">مهام المدير - {officeName}</h1>
      </div>
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3">رقم المهمة</th>
              <th className="p-3">عنوان / وصف المهمة</th>
              <th className="p-3">الحالة</th>
              <th className="p-3">الموظف</th>
              <th className="p-3">تاريخ/وقت الإسناد</th>
              <th className="p-3">تاريخ الاستحقاق</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr
                key={task.id || task._id}
                className="border-b border-gray-100 hover:bg-primary-50 cursor-pointer"
                onClick={() => navigate(`/assign-task/${officeId}/${task.id || task._id}`)}
              >
                <td className="p-3">{task.id || task._id}</td>
                <td className="p-3">{task.title || task.description}</td>
                <td className="p-3">{task.status || "-"}</td>
                <td className="p-3">{task.employeeName || task.assignedEmployeeName || "-"}</td>
                <td className="p-3">{task.assignedAt ? new Date(task.assignedAt).toLocaleString("ar-EG") : "-"}</td>
                <td className="p-3">{task.dueDate ? new Date(task.dueDate).toLocaleDateString("ar-EG") : "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
