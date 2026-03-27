import React, { useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

const eventsData = [
  { id: 1, kod: "5", wasfHadath: "فرع الاعداد /تم تسجيل توريد", tarikhHadath: "2026/1/8", waqt: "01:08", far3: "فرع الاعداد", kodUser: "544", ismUser: "أ/ محمد عبد الفني", molahazat: "بوجد سلف على الشركة رئيس الفحص نقيب كريم خالد" },
  { id: 2, kod: "2", wasfHadath: "قسم النشر/تم تسجيل اللجان", tarikhHadath: "2026/1/9", waqt: "02:08", far3: "قسم النشر", kodUser: "544", ismUser: "أ/ أحمد رجب أحمد", molahazat: "بوجد سلف على الشركة رئيس الفحص نقيب كريم خالد" },
  { id: 3, kod: "7", wasfHadath: "تم الارسال الى قسم المشتريات/عقود", tarikhHadath: "2026/1/25", waqt: "06:08", far3: "قسم النشر", kodUser: "544", ismUser: "أ/ أحمد رجب أحمد", molahazat: "بوجد سلف على الشركة رئيس الفحص نقيب كريم خالد" },
];

export default function TasjilAlMawqifAlHali() {
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
          <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">تسجيل الموقف الحالي للمشروع</h1>
        </div>
        <div className="flex flex-col gap-2">
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">قسم النشر</button>
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">متابعة التحصيل للمشروعات</button>
        </div>
      </div>

      {/* Top Filter Fields */}
      <div className="flex items-center gap-4 flex-wrap border border-gray-200 rounded p-3 bg-base text-sm">
        <div className="flex items-center gap-2 mr-auto">
          <label className="font-medium">العام المالي</label>
          <select className="border border-gray-300 rounded px-2 py-1 bg-background">
            <option>{amMali}</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium">رقم المشروع</label>
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
            <label className="font-medium w-44 shrink-0 text-right">رقم المشروع</label>
            <input defaultValue="5454" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">نوع المشروع</label>
            <input defaultValue="توريدات" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">وصف المشروع</label>
          <input
            defaultValue="توريد اصناف لزوم انشاء مستودع التعبئات الرئيسي رقم (1) بالقيادة الاسراتيجية/ل 151 أشن"
            className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">تاريخ البداية</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>2020/2/8</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">تاريخ النهاية</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>2020/2/8</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">تاريخ ورود الكرت</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>2020/2/8</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">تاريخ البت الفني</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>2020/2/8</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">تاريخ البت المالي</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>2020/2/8</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">التكلفة التقديرية</label>
            <input defaultValue="4585551456" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">قيمة الارتباط</label>
            <input defaultValue="4585551456" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">قيمة الصرف</label>
            <input defaultValue="4585551456" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">الفرع المسؤل</label>
            <input defaultValue="اللواء 151 انشاءات" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">اسم الموظف</label>
            <input defaultValue="أ/ محمد عبد الفني" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">الجهة المستفيدة</label>
            <input defaultValue="مشروع القيادة الاستراتيجية" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">اسم الشركة</label>
            <input defaultValue="مكتب الاصالة للمقاولات العامة" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">الميوالية</label>
            <input defaultValue="جهات عسكرية خارج الموازنة" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">البند</label>
            <input defaultValue="تصديق هيئة الشئون المالية" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">بند الخصم</label>
            <input defaultValue="تصديق هيئة الشئون المالية" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">الحرف</label>
            <input defaultValue="المبالغ المخصصة لزمة تنفيذ المطالب الانشائية لزمة تمركز مستودع التعبئات المختلط رقم (1) بمقر القيادة الاسراتيجية" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">ملاحظات</label>
            <input defaultValue="تم" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">اخر موقف</label>
            <input defaultValue="قسم المشتريات / تم انشاء امر التوريد" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
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
              <th className="p-3 font-semibold border-l border-gray-200">الفرع / المكتب / القسم المسؤل</th>
              <th className="p-3 font-semibold border-l border-gray-200">الكود</th>
              <th className="p-3 font-semibold border-l border-gray-200">اسم المستخدم</th>
              <th className="p-3 font-semibold">الملاحظات</th>
            </tr>
          </thead>
          <tbody>
            {eventsData.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-3 border-l border-gray-100">{row.kod}</td>
                <td className="p-3 border-l border-gray-100">{row.wasfHadath}</td>
                <td className="p-3 border-l border-gray-100">{row.tarikhHadath} {row.waqt}</td>
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
