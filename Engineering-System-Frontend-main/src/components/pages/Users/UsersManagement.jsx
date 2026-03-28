import React, { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import apiClient from "../../../api/client";
import Button from "../../ui/Button/Button";

const roles = ["سوبر أدمن", "مدير الادارة", "مدير الفرع", "رئيس القسم", "موظف"];
const offices = [
  { value: "nashr", label: "مكتب النشر" },
  { value: "oqood", label: "مكتب العقود" },
  { value: "siyana", label: "مكتب الصيانة" },
  { value: "tawridat", label: "مكتب التوريدات" },
  { value: "mashtarawat", label: "مكتب المشتريات" },
  { value: "mizaniya", label: "مكتب الميزانية" },
  { value: "hesabat", label: "مكتب الحسابات" },
];

const officeRequiredRoles = ["موظف", "رئيس القسم"];

const initialForm = {
  arabicName: "",
  englishName: "",
  password: "",
  role: "موظف",
  officeAssignedTo: "",
};

export default function UsersManagement() {
  const queryClient = useQueryClient();
  const [form, setForm] = useState(initialForm);

  const isOfficeRequired = useMemo(() => officeRequiredRoles.includes(form.role), [form.role]);

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await apiClient.get("/api/users");
      return response.data;
    },
  });

  const createUser = useMutation({
    mutationFn: async (payload) => {
      return apiClient.post("/api/users", payload);
    },
    onSuccess: () => {
      toast.success("تم إنشاء المستخدم بنجاح");
      setForm(initialForm);
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      const message = error?.response?.data?.message || "حدث خطأ أثناء إنشاء المستخدم";
      toast.error(message);
    },
  });

  const users = data?.items || [];

  const onChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => {
      if (name === "role" && !officeRequiredRoles.includes(value)) {
        return { ...prev, role: value, officeAssignedTo: "" };
      }

      return { ...prev, [name]: value };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const payload = {
      arabicName: form.arabicName.trim(),
      englishName: form.englishName.trim(),
      password: form.password,
      role: form.role,
      officeAssignedTo: isOfficeRequired ? form.officeAssignedTo || null : null,
    };

    createUser.mutate(payload);
  };

  return (
    <div className="p-4 space-y-6" dir="rtl">
      <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded w-fit">إدارة المستخدمين</h1>

      <div className="rounded border border-gray-200 bg-base p-4">
        <h2 className="mb-4 font-semibold text-lg">إضافة مستخدم جديد</h2>
        <form className="grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={onSubmit}>
          <div className="space-y-2">
            <label className="block text-sm font-medium">الاسم بالعربي</label>
            <input
              className="w-full rounded border border-gray-300 p-2"
              name="arabicName"
              value={form.arabicName}
              onChange={onChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">الاسم بالإنكليزي</label>
            <input
              className="w-full rounded border border-gray-300 p-2"
              name="englishName"
              value={form.englishName}
              onChange={onChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">كلمة المرور</label>
            <input
              type="password"
              className="w-full rounded border border-gray-300 p-2"
              name="password"
              value={form.password}
              onChange={onChange}
              minLength={8}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">الدور</label>
            <select className="w-full rounded border border-gray-300 p-2" name="role" value={form.role} onChange={onChange}>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium">المكتب المخصص (اختياري إلا للموظف ورئيس القسم)</label>
            <select
              className="w-full rounded border border-gray-300 p-2"
              name="officeAssignedTo"
              value={form.officeAssignedTo}
              onChange={onChange}
              required={isOfficeRequired}
            >
              <option value="">بدون تخصيص</option>
              {offices.map((office) => (
                <option key={office.value} value={office.value}>
                  {office.label}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2 flex justify-start">
            <Button type="submit" variant="primary" loading={createUser.isPending}>
              إنشاء مستخدم
            </Button>
          </div>
        </form>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3">الاسم بالعربي</th>
              <th className="p-3">الاسم بالإنكليزي</th>
              <th className="p-3">الدور</th>
              <th className="p-3">المكتب</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={4} className="p-4 text-center">
                  جاري التحميل...
                </td>
              </tr>
            ) : users.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-4 text-center">
                  لا يوجد مستخدمون حالياً
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user._id} className="border-b border-gray-100">
                  <td className="p-3">{user.arabicName}</td>
                  <td className="p-3">{user.englishName}</td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3">{user.officeAssignedTo || "-"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
