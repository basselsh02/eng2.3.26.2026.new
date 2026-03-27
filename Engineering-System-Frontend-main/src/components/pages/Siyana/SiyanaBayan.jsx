import React, { useState } from "react";

const mockData = [
  {
    id: 1,
    raqmMashro3: "54454",
    sharika: "المقاولون العرب",
    bayanMashro3: "مشروع انشاءات",
    mablaMansorf: "64554645",
    min: "2026/1/8",
    ila: "2026/1/8",
    amakenMashar: "2026/1/8",
    mutawaqif: "2026/1/8",
    taslimBilHia: "2026/1/8",
    tarikIstalm: "2026/1/8",
  },
  {
    id: 2,
    raqmMashro3: "54454",
    sharika: "المقاولون العرب",
    bayanMashro3: "مشروع انشاءات",
    mablaMansorf: "64554645",
    min: "2026/1/8",
    ila: "2026/1/8",
    amakenMashar: "2026/1/8",
    mutawaqif: "2026/1/8",
    taslimBilHia: "2026/1/8",
    tarikIstalm: "2026/1/8",
  },
];

export default function SiyanaBayan() {
  const [searchVal, setSearchVal] = useState("");

  const filtered = mockData.filter(
    (row) =>
      !searchVal ||
      row.sharika.includes(searchVal) ||
      row.bayanMashro3.includes(searchVal) ||
      row.raqmMashro3.includes(searchVal)
  );

  return (
    <div className="p-4 space-y-4" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-center">
        <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded w-full text-center">
          بيان بالمتوقف في قسم الصيانة حتى تاريخ
        </h1>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Search */}
      <div className="flex items-center gap-2 border border-gray-200 rounded p-2 bg-base">
        <button className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <button className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <input
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          placeholder="البحث"
          className="flex-1 bg-transparent outline-none text-sm"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="p-3 font-bold border-l border-gray-200 bg-primary-500 text-white">م</th>
              <th className="p-3 font-bold border-l border-gray-200 bg-primary-500 text-white">رقم المشروع</th>
              <th className="p-3 font-bold border-l border-gray-200 bg-primary-500 text-white">الشركة</th>
              <th className="p-3 font-bold border-l border-gray-200 bg-primary-500 text-white">بيان المشروع</th>
              <th className="p-3 font-bold border-l border-gray-200 bg-primary-500 text-white">المبلغ المنصرف</th>
              <th className="p-3 font-bold border-l border-gray-200 bg-primary-500 text-white">من</th>
              <th className="p-3 font-bold border-l border-gray-200 bg-primary-500 text-white">الي</th>
              <th className="p-3 font-bold border-l border-gray-200 bg-primary-500 text-white">الاماكن المشارع</th>
              <th className="p-3 font-bold border-l border-gray-200 bg-primary-500 text-white">متوقف</th>
              <th className="p-3 font-bold border-l border-gray-200 bg-primary-500 text-white">تسليم بالهيئة</th>
              <th className="p-3 font-bold bg-primary-500 text-white">تاريخ استلم في الصالة</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, idx) => (
              <tr
                key={row.id}
                className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}
              >
                <td className="p-3 border-l border-gray-100">{row.id}</td>
                <td className="p-3 border-l border-gray-100">{row.raqmMashro3}</td>
                <td className="p-3 border-l border-gray-100">{row.sharika}</td>
                <td className="p-3 border-l border-gray-100">{row.bayanMashro3}</td>
                <td className="p-3 border-l border-gray-100">{row.mablaMansorf}</td>
                <td className="p-3 border-l border-gray-100">{row.min}</td>
                <td className="p-3 border-l border-gray-100">{row.ila}</td>
                <td className="p-3 border-l border-gray-100">{row.amakenMashar}</td>
                <td className="p-3 border-l border-gray-100">{row.mutawaqif}</td>
                <td className="p-3 border-l border-gray-100">{row.taslimBilHia}</td>
                <td className="p-3">{row.tarikIstalm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
