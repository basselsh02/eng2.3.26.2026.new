import React from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import apiClient from "../../../api/client";
import Button from "../../ui/Button/Button";

export default function AssignTask() {
  const { officeId, taskId } = useParams();

  const { data: employees = [], isLoading } = useQuery({
    queryKey: ["office-employees", officeId],
    queryFn: async () => {
      const { data } = await apiClient.get(`/employees`, { params: { officeId } });
      return data?.employees || data || [];
    },
  });

  const assignMutation = useMutation({
    mutationFn: async (employeeId) => {
      const assignedAt = new Date().toISOString();
      return apiClient.post(`/task-assignments`, {
        taskId,
        employeeId,
        officeId,
        assignedAt,
      });
    },
    onSuccess: () => toast.success("تم إسناد المهمة بنجاح"),
    onError: () => toast.error("فشل إسناد المهمة"),
  });

  return (
    <div className="p-4 space-y-4" dir="rtl">
      <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded w-fit">إسناد المهمة</h1>
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3">الموظف</th>
              <th className="p-3">الكود</th>
              <th className="p-3">إجراء</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td className="p-3" colSpan={3}>جاري التحميل...</td></tr>
            ) : employees.map((employee) => (
              <tr key={employee.id || employee._id} className="border-b border-gray-100">
                <td className="p-3">{employee.name || employee.fullName}</td>
                <td className="p-3">{employee.employeeCode || employee.id || employee._id}</td>
                <td className="p-3">
                  <Button
                    size="sm"
                    variant="primary"
                    loading={assignMutation.isPending}
                    onClick={() => assignMutation.mutate(employee.id || employee._id)}
                  >
                    إسناد
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
