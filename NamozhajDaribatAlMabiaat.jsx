import React, { useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

const projectsData = [
  { id: 1, raqmMashro3: "25/112 مباني", ismMashro3: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", taklfaMashro3: "100.000.000", kodFar3: "2546", ismFar3Monafez: "اللواء 152 انشاءات" },
  { id: 2, raqmMashro3: "25/112 مباني", ismMashro3: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", taklfaMashro3: "100.000.000", kodFar3: "2546", ismFar3Monafez: "اللواء 152 انشاءات" },
];

const printButtons = [
  "طباعة العقد/سفر",
  "طباعة نموذج 1 ضريبة مبيعات",
  "طباعة العقد القديم",
  "طباعة 50 ج.ح",
  "طباعة العقد الجديد/سفر",
  "طباعة مذكرة العرض",
  "العقد / بدون سفر",
  "تحميل اعداد المستندات",
  "العقد بدون قيم",
  "طباعة العقد / قانون 204",
  "طباعة نموذج 41 معدل ضرائب",
  "العقد/ كمية اضافية",
  "طباعة الاقرار",
  "طباعة نموذج 41 معدل / دفعة",
  "طباعة الشهادة",
];

export default function NamozhajDaribatAlMabiaat() {
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
          <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">نموذج ضريبة المبيعات - توريدات</h1>
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

      {/* Projects Table */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">رقم المشروع</th>
              <th className="p-3 font-semibold border-l border-gray-200">اسم المشروع</th>
              <th className="p-3 font-semibold border-l border-gray-200">تكلفة المشروع</th>
              <th className="p-3 font-semibold border-l border-gray-200">كود الفرع</th>
              <th className="p-3 font-semibold border-l border-gray-200">اسم الفرع المنفذ</th>
              <th className="p-3 font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-3 border-l border-gray-100">{row.raqmMashro3}</td>
                <td className="p-3 border-l border-gray-100 max-w-xs">{row.ismMashro3}</td>
                <td className="p-3 border-l border-gray-100">{row.taklfaMashro3}</td>
                <td className="p-3 border-l border-gray-100">{row.kodFar3}</td>
                <td className="p-3 border-l border-gray-100">{row.ismFar3Monafez}</td>
                <td className="p-2">
                  <Button size="sm" variant="secondary">تحميل البيان</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Lower Section */}
      <div className="flex gap-4">
        {/* Print Buttons */}
        <div className="flex flex-col gap-2 w-52 shrink-0">
          {printButtons.map((btn) => (
            <Button key={btn} variant="primary" size="sm" fullWidth>{btn}</Button>
          ))}
        </div>

        {/* Form Fields */}
        <div className="flex-1 border border-gray-200 rounded p-4 bg-base space-y-3 text-sm">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">قيمة امر التوريد</label>
              <input defaultValue="548745145" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
            </div>
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">نسبة الضريبة</label>
              <input defaultValue="3" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
            </div>
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">رقم الامر/العقد</label>
              <input defaultValue="25/مباني/11" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
            </div>
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">قيمة الضريبة</label>
              <div className="flex-1 flex gap-2 items-center">
                <input defaultValue="154.000" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
                <span className="text-sm font-medium border border-gray-300 rounded px-2 py-1.5 bg-gray-50 whitespace-nowrap">50 ج.ح جزء</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">تاريخ التعاقد</label>
              <input defaultValue="2026/5/8" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
            </div>
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">قيمة التقريب</label>
              <input defaultValue="0.00" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
            </div>
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">قيمة جزء</label>
              <input defaultValue="0" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
            </div>
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">نسبة الدفعة المقدمة</label>
              <input defaultValue="3" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
            </div>
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">قيمة الدفعة المقدمة</label>
              <input defaultValue="0" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 border-t border-gray-200 pt-3">
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">القيمة المحسوبية الاثبات</label>
              <div className="flex-1 flex gap-2">
                <input defaultValue="548745145" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
                <input defaultValue="0" className="w-16 border border-gray-300 rounded px-2 py-1.5 bg-background" placeholder="%" />
                <label className="self-center text-xs">النسبة</label>
                <input defaultValue="0" className="w-20 border border-gray-300 rounded px-2 py-1.5 bg-background" />
                <label className="self-center text-xs">الارقام</label>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">ضمان اثبات</label>
              <Button size="sm" variant="secondary">ضمان اثبات</Button>
            </div>
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">القيمة المحسوبية الصناعة</label>
              <div className="flex-1 flex gap-2">
                <input defaultValue="548745145" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
                <input defaultValue="0" className="w-16 border border-gray-300 rounded px-2 py-1.5 bg-background" placeholder="%" />
                <label className="self-center text-xs">النسبة</label>
                <input defaultValue="0" className="w-20 border border-gray-300 rounded px-2 py-1.5 bg-background" />
                <label className="self-center text-xs">الارقام</label>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">ضمان صناعة</label>
              <Button size="sm" variant="secondary">ضمان صناعة</Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 border-t border-gray-200 pt-3">
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">الشركة</label>
              <input defaultValue="مكتب اصالة للمقاولات العامة" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
            </div>
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">عنوان الشركة</label>
              <input defaultValue="شن عثمان بن عفمان / قسم ثان العريش / شمال سيناء" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
            </div>
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">اسم المدير المسؤل</label>
              <input defaultValue="عبدالله على محمد" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
            </div>
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">بيان السلفة</label>
              <input defaultValue="3" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
            </div>
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">رقم التسجيل بضريبة المبيعات</label>
              <input defaultValue="548745145" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
            </div>
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">المأمورية التابعة لها</label>
              <input defaultValue="العريش" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
            </div>
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">رقم البطاقة الضريبية عامة</label>
              <input defaultValue="548745145" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
            </div>
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">المأمورية التابعة لها</label>
              <input defaultValue="العريش" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
            </div>
            <div className="flex items-center gap-2">
              <label className="font-medium w-44 shrink-0 text-right">رقم الملف الضريبي</label>
              <input defaultValue="15448" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Button variant="primary" size="sm">طباعة نموذج 41 جزء</Button>
            <Button variant="secondary" size="sm">طباعة الاقرار</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
