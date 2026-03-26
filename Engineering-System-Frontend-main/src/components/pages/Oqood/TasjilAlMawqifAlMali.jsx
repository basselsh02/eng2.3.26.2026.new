import React, { useState } from "react";

const eventsData = [
  { id: 1, kod: "5452", wasf: "تم التعاقد بالمناقصة المحدودة", tarikh: "2024/3/25", far3: "152", kodUser: "25555", ismUser: "المقاولون", molahazat: "تم التسليم" },
  { id: 2, kod: "", wasf: "", tarikh: "", far3: "", kodUser: "", ismUser: "", molahazat: "" },
  { id: 3, kod: "", wasf: "", tarikh: "", far3: "", kodUser: "", ismUser: "", molahazat: "" },
];

export default function TasjilAlMawqifAlMali() {
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
          <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">تسجيل الموقف المالي للمشروعات</h1>
        </div>
        <div className="flex flex-col gap-2">
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">قسم العقود</button>
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">اجراثات التعاقد /قسم العقود</button>
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
      <div className="bg-base border border-gray-200 rounded p-4 space-y-3" dir="rtl">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <label className="font-medium w-40 shrink-0 text-right">رقم المشروع</label>
            <input defaultValue="4585551456" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-40 shrink-0 text-right">نوع المشروع</label>
            <input defaultValue="اعمال المباني" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-40 shrink-0 text-right">العام المالي</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>2025/2024</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <label className="font-medium w-40 shrink-0 text-right">وصف المشروع</label>
          <input
            defaultValue="اعمال انشاء الهيكل الخرساني رقم 2 بمشروع 800 مدان المرحلة الثانية من محور 9 طوابي الى محور 13 طوابي"
            className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <label className="font-medium w-40 shrink-0 text-right">تاريخ البداية</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>4585551456</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-40 shrink-0 text-right">تاريخ النهاية</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>2020/2/8</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-40 shrink-0 text-right">تاريخ ورود الكارت</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>2020/2/8</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-40 shrink-0 text-right">تاريخ البث الفني</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>2020/2/15</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-40 shrink-0 text-right">تاريخ البث المالي</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>2025/8/10</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-40 shrink-0 text-right">التكلفة التقديرية</label>
            <input defaultValue="200.000.000" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-40 shrink-0 text-right">قيمة الارتباط</label>
            <input defaultValue="100.000.000" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-40 shrink-0 text-right">قيمة الصرف</label>
            <input defaultValue="100.500.000" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-40 shrink-0 text-right">الفرع المسؤل</label>
            <input defaultValue="اللواء 152 انشاءات" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-40 shrink-0 text-right">اسم الموظف</label>
            <input defaultValue="محمد على" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <label className="font-medium w-40 shrink-0 text-right">الجهة المستفيدة</label>
            <input defaultValue="اللواء 152 انشاءات" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <label className="font-medium w-40 shrink-0 text-right">اسم الشركة</label>
            <input defaultValue="شاكر للمقاولات العامة والموردات" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-40 shrink-0 text-right">تاريخ الفتح الفعلي</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>2025/10/2</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-40 shrink-0 text-right">البواية</label>
            <input defaultValue="162" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-40 shrink-0 text-right">الموظف المسؤل</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>الاستاذة/مي</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-40 shrink-0 text-right">الحرف</label>
            <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-40 shrink-0 text-right">بند الخصم</label>
            <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-40 shrink-0 text-right">اخر موقف</label>
            <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <label className="font-medium w-40 shrink-0 text-right">ملاحظات</label>
            <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
        </div>
      </div>

      {/* Events History Table */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">الكود</th>
              <th className="p-3 font-semibold border-l border-gray-200">وصف الحدث</th>
              <th className="p-3 font-semibold border-l border-gray-200">تاريخ الحدث</th>
              <th className="p-3 font-semibold border-l border-gray-200">الفرع/المكتب /القسم المسؤل</th>
              <th className="p-3 font-semibold border-l border-gray-200">الكود</th>
              <th className="p-3 font-semibold border-l border-gray-200">اسم المستخدم</th>
              <th className="p-3 font-semibold">ملاحظات</th>
            </tr>
          </thead>
          <tbody>
            {eventsData.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`} style={{ height: "40px" }}>
                <td className="p-3 border-l border-gray-100">{row.kod}</td>
                <td className="p-3 border-l border-gray-100">{row.wasf}</td>
                <td className="p-3 border-l border-gray-100">{row.tarikh}</td>
                <td className="p-3 border-l border-gray-100">{row.far3}</td>
                <td className="p-3 border-l border-gray-100">{row.kodUser}</td>
                <td className="p-3 border-l border-gray-100">{row.ismUser}</td>
                <td className="p-3">{row.molahazat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
