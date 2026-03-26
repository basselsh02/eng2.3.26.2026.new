import React, { useState } from "react";
import Button from "../../ui/Button/Button";

const mockData = [
  { id: 1, raqmMashro3: "2588888", ismMashro3: "اعمال رفع كفاءة شبكة الكهرباء الرئيسية بالمجمع الطبي بكوبري القبة", taklfaMashro3: "45478744.0000", kodFar3: "12", ismFar3Monafez: "فرع الصيانة", matbo3: "", meba3: "" },
  { id: 2, raqmMashro3: "2588888", ismMashro3: "توريد اسمنت لزوم مباني ميناء ابو قير الجديد بشرق الاسكندرية (ابو قير)", taklfaMashro3: "41545451012.544", kodFar3: "65", ismFar3Monafez: "فرع الامداد", matbo3: "", meba3: "" },
  { id: 3, raqmMashro3: "2588888", ismMashro3: "اعمال التصميمات لرفع كفاءة مستشفى سوهاج العسكري", taklfaMashro3: "487754.000", kodFar3: "877", ismFar3Monafez: "اللواء 150 اشغال", matbo3: "", meba3: "" },
  { id: 4, raqmMashro3: "2588888", ismMashro3: "توريد كابلات نحاس لزوم انشاء مشروع مزارير(3) لعدد(9)فيلا نموذج (A) والعدد (44) شانية نموذج (B) والعدد(10)", taklfaMashro3: "781.122.000", kodFar3: "587", ismFar3Monafez: "اللواء 152 انشاءات", matbo3: "", meba3: "" },
  { id: 5, raqmMashro3: "2588888", ismMashro3: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", taklfaMashro3: "878784.000", kodFar3: "222", ismFar3Monafez: "اللواء 152 انشاءات", matbo3: "", meba3: "" },
  { id: 6, raqmMashro3: "2588888", ismMashro3: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", taklfaMashro3: "100.000.000", kodFar3: "7", ismFar3Monafez: "اللواء 152 انشاءات", matbo3: "", meba3: "" },
];

export default function Tahsilat() {
  const [searchVal, setSearchVal] = useState("");
  const [kodMashro3, setKodMashro3] = useState("4585551456");
  const [amMali, setAmMali] = useState("2026/2025");

  return (
    <div className="p-4 space-y-4" dir="rtl">
      {/* Header Info */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex gap-2">
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">TRDD_UF</span>
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">20252028</span>
        </div>
        <div className="flex-1 flex justify-center">
          <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">التحصيلات</h1>
        </div>
        <div className="flex gap-2">
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">قسم العقود</button>
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">اجراثات التعاقد /قسم العقود</button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 flex-wrap border border-gray-200 rounded p-3 bg-base">
        <div className="flex items-center gap-2 mr-auto">
          <label className="text-sm font-medium">العام المالي</label>
          <select
            value={amMali}
            onChange={(e) => setAmMali(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-sm bg-background"
          >
            <option>2026/2025</option>
            <option>2025/2024</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">كود المشروع</label>
          <input
            value={kodMashro3}
            onChange={(e) => setKodMashro3(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-sm bg-background w-32"
          />
        </div>
      </div>

      {/* Search Bar */}
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
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold text-foreground border-l border-gray-200">رقم المشروع</th>
              <th className="p-3 font-semibold text-foreground border-l border-gray-200">اسم المشروع</th>
              <th className="p-3 font-semibold text-foreground border-l border-gray-200">تكلفة المشروع</th>
              <th className="p-3 font-semibold text-foreground border-l border-gray-200">كود الفرع</th>
              <th className="p-3 font-semibold text-foreground border-l border-gray-200">اسم الفرع المنفذ</th>
              <th className="p-3 font-semibold text-foreground border-l border-gray-200">المطبوع</th>
              <th className="p-3 font-semibold text-foreground">المباع</th>
              <th className="p-3 font-semibold text-foreground border-l border-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50 transition-colors`}>
                <td className="p-3 border-l border-gray-100">{row.raqmMashro3}</td>
                <td className="p-3 border-l border-gray-100 max-w-xs">{row.ismMashro3}</td>
                <td className="p-3 border-l border-gray-100">{row.taklfaMashro3}</td>
                <td className="p-3 border-l border-gray-100">{row.kodFar3}</td>
                <td className="p-3 border-l border-gray-100">{row.ismFar3Monafez}</td>
                <td className="p-3 border-l border-gray-100">{row.matbo3}</td>
                <td className="p-3">{row.meba3}</td>
                <td className="p-2 border-l border-gray-100">
                  <div className="flex gap-1">
                    <Button size="sm" variant="primary">البيان</Button>
                    <Button size="sm" variant="danger">الأمر</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
