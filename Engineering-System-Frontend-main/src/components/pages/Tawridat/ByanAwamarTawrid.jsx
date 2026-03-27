import React, { useState } from "react";
import Input from "../../ui/Input/Input";

const tawridData = [
  { id: 1, m: "1", raqmAmr: "54454", ismSharika: "المقاولون العرب", masmaMashro3: "مشروع انشاءات", qimaMansarfa: "64554645", tarikhAmr: "2026/1/8", tarikhTaswyaDukhul: "2026/1/8", tarikhTaswyaKhuruj: "2026/1/8", ismMowazaf: "أ/ هية محدث" },
  { id: 2, m: "1", raqmAmr: "54454", ismSharika: "المقاولون العرب", masmaMashro3: "مشروع انشاءات", qimaMansarfa: "64554645", tarikhAmr: "2026/1/8", tarikhTaswyaDukhul: "2026/1/8", tarikhTaswyaKhuruj: "2026/1/8", ismMowazaf: "أ/ هية محدث" },
];

export default function ByanAwamarTawrid() {
  const [searchVal, setSearchVal] = useState("");
  const [kodMashro3] = useState("4585551456");
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
            بيان بأوامر التوريد التي تم ارسالها للفرع المالي خلال شهر فبراير 2025-2026
          </h1>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">م</th>
              <th className="p-3 font-semibold border-l border-gray-200">رقم أمر التوريد</th>
              <th className="p-3 font-semibold border-l border-gray-200">اسم الشركة</th>
              <th className="p-3 font-semibold border-l border-gray-200">مسمى المشروع</th>
              <th className="p-3 font-semibold border-l border-gray-200">قيمة المنصرف</th>
              <th className="p-3 font-semibold border-l border-gray-200">تاريخ أمر التوريد</th>
              <th className="p-3 font-semibold border-l border-gray-200">تاريخ دخول التسوية للفرع</th>
              <th className="p-3 font-semibold border-l border-gray-200">تاريخ خروج التسوية للفرع</th>
              <th className="p-3 font-semibold">اسم الموظف</th>
            </tr>
          </thead>
          <tbody>
            {tawridData.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-3 border-l border-gray-100">{row.m}</td>
                <td className="p-3 border-l border-gray-100">{row.raqmAmr}</td>
                <td className="p-3 border-l border-gray-100">{row.ismSharika}</td>
                <td className="p-3 border-l border-gray-100">{row.masmaMashro3}</td>
                <td className="p-3 border-l border-gray-100">{row.qimaMansarfa}</td>
                <td className="p-3 border-l border-gray-100">{row.tarikhAmr}</td>
                <td className="p-3 border-l border-gray-100">{row.tarikhTaswyaDukhul}</td>
                <td className="p-3 border-l border-gray-100">{row.tarikhTaswyaKhuruj}</td>
                <td className="p-3">{row.ismMowazaf}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
