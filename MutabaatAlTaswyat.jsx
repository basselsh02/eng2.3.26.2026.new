import React, { useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

const taswyatData = [
  { id: 1, m: "45", tarikhWurudMashtarawat: "2026/1/8", tarikhWurudTaswyat: "2026/1/8", tarikhBudayaEjraa: "2026/1/8", kodMurajia: "544", ismMurajia: "أ/ هية محدث", tarikhErsalHaiya: "2026/1/8", qimaTaswyat: "15245445", molahazat: "بوجد سلف على الشركة رئيس الفحص نقيب كريم خالد" },
  { id: 2, m: "45", tarikhWurudMashtarawat: "2026/1/8", tarikhWurudTaswyat: "2026/1/8", tarikhBudayaEjraa: "2026/1/8", kodMurajia: "544", ismMurajia: "أ/ هية محدث", tarikhErsalHaiya: "2026/1/8", qimaTaswyat: "15245445", molahazat: "بوجد سلف على الشركة رئيس الفحص نقيب كريم خالد" },
  { id: 3, m: "45", tarikhWurudMashtarawat: "2026/1/8", tarikhWurudTaswyat: "2026/1/8", tarikhBudayaEjraa: "2026/1/8", kodMurajia: "544", ismMurajia: "أ/ هية محدث", tarikhErsalHaiya: "2026/1/8", qimaTaswyat: "15245445", molahazat: "بوجد سلف على الشركة رئيس الفحص نقيب كريم خالد" },
  { id: 4, m: "45", tarikhWurudMashtarawat: "2026/1/8", tarikhWurudTaswyat: "2026/1/8", tarikhBudayaEjraa: "2026/1/8", kodMurajia: "544", ismMurajia: "أ/ هية محدث", tarikhErsalHaiya: "2026/1/8", qimaTaswyat: "15245445", molahazat: "بوجد سلف على الشركة رئيس الفحص نقيب كريم خالد" },
  { id: 5, m: "45", tarikhWurudMashtarawat: "2026/1/8", tarikhWurudTaswyat: "2026/1/8", tarikhBudayaEjraa: "2026/1/8", kodMurajia: "544", ismMurajia: "أ/ هية محدث", tarikhErsalHaiya: "2026/1/8", qimaTaswyat: "15245445", molahazat: "بوجد سلف على الشركة رئيس الفحص نقيب كريم خالد" },
  { id: 6, m: "45", tarikhWurudMashtarawat: "2026/1/8", tarikhWurudTaswyat: "2026/1/8", tarikhBudayaEjraa: "2026/1/8", kodMurajia: "544", ismMurajia: "أ/ هية محدث", tarikhErsalHaiya: "2026/1/8", qimaTaswyat: "15245445", molahazat: "بوجد سلف على الشركة رئيس الفحص نقيب كريم خالد" },
];

export default function MutabaatAlTaswyat() {
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
          <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">متابعة التسويات</h1>
        </div>
        <div className="flex flex-col gap-2">
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">قسم النشر</button>
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">متابعة التحصيل للمشروعات</button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 flex-wrap border border-gray-200 rounded p-3 bg-base text-sm">
        <div className="flex items-center gap-2 mr-auto">
          <label className="font-medium">العام المالي</label>
          <select className="border border-gray-300 rounded px-2 py-1 bg-background">
            <option>{amMali}</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium">كود المشروع</label>
          <input value={kodMashro3} readOnly className="border border-gray-300 rounded px-2 py-1 bg-background w-32" />
        </div>
      </div>

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
        <input value={searchVal} onChange={(e) => setSearchVal(e.target.value)} placeholder="البحث" className="flex-1 bg-transparent outline-none text-sm" />
      </div>

      {/* Main Form */}
      <div className="bg-base border border-gray-200 rounded p-4 space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <Button size="sm" variant="primary">تأكيد ورود الامر</Button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">كود المشروع</label>
            <input defaultValue="4585551456" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">الوصف</label>
            <input defaultValue="اعمال انشاء الهيكل الخرساني رقم 2 بمشروع 800 فدان المرحلة الثانية من محور 9 طوابي الى محور 13 طوابي" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">رقم أمر التوريد</label>
            <input defaultValue="4585551456" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">تاريخ أمر التوريد</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>2020/2/8</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">قيمة الامر</label>
            <input defaultValue="4585551456" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">قيمة الخصم</label>
            <input defaultValue="0" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">نسبة الخصم %</label>
            <input defaultValue="0" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">القيمة الفعلية للامر</label>
            <input defaultValue="4585551456" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">الشركة</label>
            <input defaultValue="658554" className="w-24 border border-gray-300 rounded px-2 py-1.5 bg-background" />
            <input defaultValue="مركز تدريب المنشاة النموذجي بالهايكسنت" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">اسم الشركة</label>
            <input defaultValue="مركز تدريب المنشاة النموذجي بالهايكسنت" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
        </div>
      </div>

      {/* Taswyat Table */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">م</th>
              <th className="p-3 font-semibold border-l border-gray-200">تاريخ الورود من المشتريات</th>
              <th className="p-3 font-semibold border-l border-gray-200">تاريخ ورود التسوية</th>
              <th className="p-3 font-semibold border-l border-gray-200">تاريخ بداية الاجراء</th>
              <th className="p-3 font-semibold border-l border-gray-200">كود المراجع</th>
              <th className="p-3 font-semibold border-l border-gray-200">اسم المراجع</th>
              <th className="p-3 font-semibold border-l border-gray-200">تاريخ الارسال للهيئة</th>
              <th className="p-3 font-semibold border-l border-gray-200">قيمة التسوية</th>
              <th className="p-3 font-semibold">الملاحظات</th>
            </tr>
          </thead>
          <tbody>
            {taswyatData.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-3 border-l border-gray-100">{row.m}</td>
                <td className="p-3 border-l border-gray-100">{row.tarikhWurudMashtarawat}</td>
                <td className="p-3 border-l border-gray-100">{row.tarikhWurudTaswyat}</td>
                <td className="p-3 border-l border-gray-100">{row.tarikhBudayaEjraa}</td>
                <td className="p-3 border-l border-gray-100">{row.kodMurajia}</td>
                <td className="p-3 border-l border-gray-100">{row.ismMurajia}</td>
                <td className="p-3 border-l border-gray-100">{row.tarikhErsalHaiya}</td>
                <td className="p-3 border-l border-gray-100">{row.qimaTaswyat}</td>
                <td className="p-3">{row.molahazat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
