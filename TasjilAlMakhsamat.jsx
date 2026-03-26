import React, { useState } from "react";

export default function TasjilAlMakhsamat() {
  const [searchVal, setSearchVal] = useState("");

  return (
    <div className="p-4 space-y-4" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex flex-col gap-2">
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">TRDD_UF</span>
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">20252028</span>
        </div>
        <div className="flex-1 flex justify-center">
          <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">تسجيل المخصمات المالية</h1>
        </div>
        <div className="flex flex-col gap-2">
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">فرع التموين</button>
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">فرع التموين</button>
        </div>
      </div>

      {/* Top Filter Fields */}
      <div className="bg-base border border-gray-200 rounded p-4 space-y-3 text-sm">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">القائمة</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option value="">اختر...</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">نوع المشروع</label>
            <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">الجهة</label>
            <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">الصرف</label>
            <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <label className="font-medium w-44 shrink-0 text-right">الجهة المستفيدة</label>
            <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
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

      {/* Main Form Fields */}
      <div className="bg-base border border-gray-200 rounded p-4 space-y-3 text-sm">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">العام المالي</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>2026/2025</option>
              <option>2025/2024</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">كود الموازنة</label>
            <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">كود البند</label>
            <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">كود الصرف</label>
            <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">الجهة المستفيدة</label>
            <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">بند الخصم</label>
            <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">الجهة المستفيدة</label>
            <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">قيمة المخصص</label>
            <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
        </div>

        {/* Total */}
        <div className="flex items-center gap-3 mt-2 pt-2 border-t border-gray-200">
          <span className="border border-gray-300 rounded px-4 py-2 text-sm bg-primary-500 text-white font-semibold">100.000.222</span>
          <span className="text-sm font-medium">اجمالي الصرف</span>
        </div>
      </div>
    </div>
  );
}
