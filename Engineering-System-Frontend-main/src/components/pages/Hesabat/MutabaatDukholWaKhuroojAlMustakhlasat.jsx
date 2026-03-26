import React, { useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

const mockData = [
  {
    id: 1,
    raqmMustakhlас: "5",
    tarikhAlWurud: "2025/5/8",
    tarikhAlMutabaah: "2025/5/8",
    naw3AlMustakhlas: "ختامي",
    alKod: "544",
    alMowazaf: "أ/محمد سمير علي",
    alFar3: "لواء 151 اشن",
    tarikhSarf: "2025/5/8",
    qimaAlMustakhlas: "645564774",
    alMustahaq: "645564774",
    tarikhKhurooj: "2025/5/8",
    molahazatAlIstifaa: "تم",
  },
  {
    id: 2,
    raqmMustakhlas: "2",
    tarikhAlWurud: "2025/5/8",
    tarikhAlMutabaah: "2025/5/8",
    naw3AlMustakhlas: "جاري",
    alKod: "544",
    alMowazaf: "أ/محمد سمير علي",
    alFar3: "لواء 151 اشن",
    tarikhSarf: "2025/5/8",
    qimaAlMustakhlas: "645564774",
    alMustahaq: "645564774",
    tarikhKhurooj: "2025/5/8",
    molahazatAlIstifaa: "تم",
  },
  {
    id: 3,
    raqmMustakhlas: "7",
    tarikhAlWurud: "2025/5/8",
    tarikhAlMutabaah: "2025/5/8",
    naw3AlMustakhlas: "اعمال 5%",
    alKod: "544",
    alMowazaf: "أ/محمد سمير علي 5%",
    alFar3: "لواء 151 اشن",
    tarikhSarf: "2025/5/8",
    qimaAlMustakhlas: "645564774",
    alMustahaq: "645564774",
    tarikhKhurooj: "2025/5/8",
    molahazatAlIstifaa: "تم",
  },
];

export default function MutabaatDukholWaKhuroojAlMustakhlasat() {
  const [searchVal, setSearchVal] = useState("");
  const [raqmAlMashro3] = useState("4585551456");
  const [amMali] = useState("2026/2025");

  return (
    <div className="p-4 space-y-4" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex flex-col gap-2">
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">TRDD_UF</span>
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">20252028</span>
        </div>
        <div className="flex-1 flex justify-center">
          <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">
            متابعة دخول وخروج المستخلصات
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">
            فرع التموين
          </button>
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">
            خطابات الضمان
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 border border-gray-200 rounded p-3 bg-base">
        <Input label="رقم المشروع" showLabel={false} value={raqmAlMashro3} readOnly />
        <Input label="العام المالي" type="select" showLabel={false} options={[{ value: amMali, label: amMali }]} />
        <Input label="البحث" showLabel={false} value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
      </div>

      {/* Project Info Form */}
      <div className="bg-base border border-gray-200 rounded p-4 space-y-3 text-sm">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">رقم المشروع</label>
            <input defaultValue="5454" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">الكود المكون</label>
            <input defaultValue="5444" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">وصف المشروع</label>
          <input
            defaultValue="اعمال تسوية ونقل مخلفات الموقع العام بمنطقة النادي بمشروع استغلال قطعة ارض 1355 فدان شمال محور المشير طنطاوي RAVILE"
            className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">الشركة</label>
            <input defaultValue="544" className="w-20 border border-gray-300 rounded px-2 py-1.5 bg-background" />
            <input
              defaultValue="شركة مجموعة المدي الاستثمارية للتنمية العمرانية"
              className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">القيمة الراسية</label>
            <input defaultValue="547867451.000" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">مدة المشروع</label>
            <input defaultValue="3 سنوات" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">تاريخ البث المالي</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>2020/2/8</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">تاريخ استلام الموقع</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>2026/2/8</option>
            </select>
          </div>
        </div>
      </div>

      {/* Print Button */}
      <div className="flex justify-start">
        <Button variant="primary" size="md">طباعة التقرير</Button>
      </div>

      {/* Mustakhlasat Table */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">رقم المستخلص</th>
              <th className="p-3 font-semibold border-l border-gray-200">تاريخ الورود بالارشيف</th>
              <th className="p-3 font-semibold border-l border-gray-200">تاريخ المتابعة الاستيفاء</th>
              <th className="p-3 font-semibold border-l border-gray-200">نوع المستخلص</th>
              <th className="p-3 font-semibold border-l border-gray-200">الكود</th>
              <th className="p-3 font-semibold border-l border-gray-200">الموظف المسؤل</th>
              <th className="p-3 font-semibold border-l border-gray-200">الفرع المسؤل</th>
              <th className="p-3 font-semibold border-l border-gray-200">تاريخ</th>
              <th className="p-3 font-semibold border-l border-gray-200">قيمة المستخلص</th>
              <th className="p-3 font-semibold border-l border-gray-200">المستحق صرفه</th>
              <th className="p-3 font-semibold border-l border-gray-200">تاريخ خروج</th>
              <th className="p-3 font-semibold">ملاحظات الاستيفاء</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, idx) => (
              <tr
                key={row.id}
                className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50 transition-colors`}
              >
                <td className="p-3 border-l border-gray-100">{row.raqmMustakhlas || row.raqmMustakhlас}</td>
                <td className="p-3 border-l border-gray-100">{row.tarikhAlWurud}</td>
                <td className="p-3 border-l border-gray-100">{row.tarikhAlMutabaah}</td>
                <td className="p-3 border-l border-gray-100">
                  <select defaultValue={row.naw3AlMustakhlas} className="border border-gray-300 rounded px-1 py-0.5 text-xs bg-background">
                    <option>ختامي</option>
                    <option>جاري</option>
                    <option>اعمال 5%</option>
                  </select>
                </td>
                <td className="p-3 border-l border-gray-100">{row.alKod}</td>
                <td className="p-3 border-l border-gray-100">{row.alMowazaf}</td>
                <td className="p-3 border-l border-gray-100">{row.alFar3}</td>
                <td className="p-3 border-l border-gray-100">{row.tarikhSarf}</td>
                <td className="p-3 border-l border-gray-100">{row.qimaAlMustakhlas}</td>
                <td className="p-3 border-l border-gray-100">{row.alMustahaq}</td>
                <td className="p-3 border-l border-gray-100">{row.tarikhKhurooj}</td>
                <td className="p-3">{row.molahazatAlIstifaa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
