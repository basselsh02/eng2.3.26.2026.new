import React, { useState } from "react";
import Button from "../../ui/Button/Button";

const bunodData = [
  { id: 1, wasfAlBand: "خصم عام على اعمال الخضواني", bandAlKhasm: "بند رقم 122" },
  { id: 2, wasfAlBand: "خصم عام على اعمال الخضواني", bandAlKhasm: "بند رقم 122" },
];

const actionButtons = [
  "تقرير الادارة المركزية",
  "تقرير الادارة المركزية......",
  "تقرير الجهات الاخرى",
  "تسجيل بنك جديد",
  "تجديد خطاب ضمان",
  "تقرير مشروع / شركة",
  "تحديث خطابات خلال فترة",
];

export default function TasjilKhetabaatAlDaman() {
  const [searchVal, setSearchVal] = useState("");
  const [kodMashro3] = useState("4585551456");
  const [amMali] = useState("2026/2025");
  const [selectedRow, setSelectedRow] = useState(null);

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
            تسجيل خطابات الضمان
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

      {/* Filters */}
      <div className="flex items-center gap-4 flex-wrap border border-gray-200 rounded p-3 bg-base">
        <div className="flex items-center gap-2 mr-auto">
          <label className="text-sm font-medium">العام المالي</label>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm bg-background">
            <option>{amMali}</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">كود المشروع</label>
          <input
            value={kodMashro3}
            readOnly
            className="border border-gray-300 rounded px-2 py-1 text-sm bg-background w-32"
          />
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
        <input
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          placeholder="البحث"
          className="flex-1 bg-transparent outline-none text-sm"
        />
      </div>

      {/* Main Form */}
      <div className="bg-base border border-gray-200 rounded p-4 space-y-3 text-sm">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">رقم المشروع</label>
            <input defaultValue="4585551456" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">نوع المشروع</label>
            <input defaultValue="اعمال المباني" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">قيمة المشروع</label>
            <input defaultValue="54658471" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">وصف المشروع</label>
          <input
            defaultValue="اعمال انشاء الهيكل الخرساني رقم 2 بمشروع 800 فدان المرحلة الثانية من محور 9 طوابي الى محور 13 طوابي"
            className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background"
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">الشركة</label>
          <input
            defaultValue="عليه للمقاولات والتوريدات"
            className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background"
          />
        </div>
      </div>

      {/* Band Table */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200 w-8">
                <input type="checkbox" className="w-4 h-4 accent-primary-500" />
              </th>
              <th className="p-3 font-semibold border-l border-gray-200">وصف البند</th>
              <th className="p-3 font-semibold">بند الخصم</th>
            </tr>
          </thead>
          <tbody>
            {bunodData.map((row, idx) => (
              <tr
                key={row.id}
                onClick={() => setSelectedRow(row.id)}
                className={`border-b border-gray-100 cursor-pointer transition-colors ${
                  selectedRow === row.id
                    ? "bg-primary-100"
                    : idx % 2 === 0
                    ? "bg-base hover:bg-primary-50"
                    : "bg-gray-50/50 hover:bg-primary-50"
                }`}
              >
                <td className="p-3 border-l border-gray-100">
                  <input type="checkbox" checked={selectedRow === row.id} readOnly className="w-4 h-4 accent-primary-500" />
                </td>
                <td className="p-3 border-l border-gray-100">{row.wasfAlBand}</td>
                <td className="p-3">{row.bandAlKhasm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Guarantee Details Form */}
      <div className="bg-base border border-gray-200 rounded p-4 space-y-3 text-sm">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">رقم خطاب الضمان</label>
            <input defaultValue="645485490300/250" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">تاريخ خطاب الضمان</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>2026/5/2</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">تاريخ التجديد</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>2026/5/2</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">تاريخ انشاء الضمان</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>2026/5/2</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">نوع الخطاب</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>خطاب ضمان نهائي</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">قيمة خطاب الضمان</label>
            <input defaultValue="4985551456" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">البند</label>
            <input defaultValue="6944" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">الجهة</label>
            <input defaultValue="198" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">ملاحظات</label>
            <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">مؤشر الانشاء</label>
            <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">فترة التجديد من</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option></option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">الي</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option></option>
            </select>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <label className="font-medium w-44 shrink-0 text-right">عدد الخطابات</label>
            <input defaultValue="1" className="w-24 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2">
        {actionButtons.map((btn) => (
          <Button key={btn} variant="primary" size="sm" fullWidth>
            {btn}
          </Button>
        ))}
      </div>
    </div>
  );
}
