import React, { useState } from "react";
import Button from "../../ui/Button/Button";

const tabs = ["بيانات المشروع", "بيانات التعاقد", "بيانات الصرف", "صرف خامات"];

// --- Tab 1: بيانات المشروع (Image 4) ---
function ByanatAlMashro3Section() {
  return (
    <div className="space-y-3 text-sm" dir="rtl">
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">رقم المشروع</label>
          <input defaultValue="4585551456" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">كود نوع المشروع</label>
          <input defaultValue="اعمال اعشارية" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">العام المالي</label>
          <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
            <option>2026/2025</option>
          </select>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <label className="font-medium w-44 shrink-0 text-right">اسم المشروع</label>
        <input
          defaultValue="اعمال الهيكل الخرساني بمشروع مزارين (2) المرحلة الثانية بالعالمين الجديدة"
          className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">بداية المشروع</label>
          <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
            <option>1/11/2022</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">تاريخ نهاية المشروع</label>
          <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
            <option>1/11/2029</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">الاتفاق/العقد</label>
          <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">جوة التمويل</label>
          <input defaultValue="هيئة الشئون المالية للقوات المسلحة" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2 col-span-2">
          <label className="font-medium w-44 shrink-0 text-right">الجهة المستفيدة</label>
          <input defaultValue="مشروع مزارين (2) شرق مدينة العالمين الجديدة" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">الفرع المسئول</label>
          <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">المشروع الرئيسى</label>
          <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2 col-span-2">
          <label className="font-medium w-44 shrink-0 text-right">كود الشركة</label>
          <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
      </div>
      <div>
        <Button size="sm" variant="primary">تسجيل بيان جديد</Button>
      </div>
    </div>
  );
}

// --- Tab 2: بيانات التعاقد (Image 5) ---
const printButtons = [
  "طباعة بيان التعاقد 1",
  "طباعة بيان التعاقد 2",
  "طباعة بيان التعاقد 3",
  "طباعة بيان التعاقد 4",
  "طباعة بيان الارتباطات السابقة",
  "بيان الارتباطات السابقة برقم المشروع",
  "بيان الارتباطات حسب الصرف",
  "بيان الارتباطات حسب بند الخصم",
  "بيان مشروعات جهة بدون بند الخصم",
  "معرفة حساب الصرف",
  "بيان الصرف / الخصم",
  "طباعة كشف الارتباطات المالية",
];

function ByanatAlTa3aqudSection() {
  return (
    <div className="space-y-3 text-sm" dir="rtl">
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">رقم المشروع</label>
          <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">رقم المسلسل</label>
          <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2 col-span-2">
          <label className="font-medium w-44 shrink-0 text-right">وصف المشروع</label>
          <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">العام المالي</label>
          <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
            <option>2026/2025</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">الموازنة</label>
          <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">البند</label>
          <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">الصرف</label>
          <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">بند الخصم</label>
          <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">القيمة التعاقدية</label>
          <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">كود الشركة</label>
          <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2 col-span-2">
          <label className="font-medium w-44 shrink-0 text-right">القيمة التقديرية</label>
          <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
      </div>

      {/* Print Buttons Grid */}
      <div className="grid grid-cols-2 gap-2 mt-4">
        {printButtons.map((btn) => (
          <Button key={btn} variant="primary" size="sm" fullWidth>{btn}</Button>
        ))}
      </div>
    </div>
  );
}

// --- Tab 3: بيانات الصرف (Image 2) ---
const sarfData = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  raqmAkhtar: "45",
  tarikhSarf: "2026/1/8",
  mablakhMansarf: "1000.1000.000",
  rasidSabiq: "7879892.000",
  rasidHali: "4878799.000",
  kodSharika: "65874",
  ismSharika: "المقاولون العرب",
  raqmDaf3a: "152",
  molahazat: "تم التسليم",
}));

function ByanatAlSarfSection() {
  return (
    <div className="space-y-3 text-sm" dir="rtl">
      {/* Summary Fields */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">القيمة التعاقدية</label>
          <input defaultValue="4585551456" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">سابق صرفة</label>
          <input defaultValue="89787854154544" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">المتبقي من الرصيد</label>
          <input defaultValue="548778" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">اجمالي المنصرف</label>
          <input defaultValue="4585551456" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
      </div>

      {/* Sarf Table */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">رقم الاخطار</th>
              <th className="p-3 font-semibold border-l border-gray-200">تاريخ الصرف</th>
              <th className="p-3 font-semibold border-l border-gray-200">المبلغ المنصرف</th>
              <th className="p-3 font-semibold border-l border-gray-200">الرصيد السابق</th>
              <th className="p-3 font-semibold border-l border-gray-200">الرصيد الحالي</th>
              <th className="p-3 font-semibold border-l border-gray-200">كود الشركة</th>
              <th className="p-3 font-semibold border-l border-gray-200">اسم الشركة</th>
              <th className="p-3 font-semibold border-l border-gray-200">رقم الدفعة</th>
              <th className="p-3 font-semibold">الملاحظات</th>
            </tr>
          </thead>
          <tbody>
            {sarfData.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-3 border-l border-gray-100">{row.raqmAkhtar}</td>
                <td className="p-3 border-l border-gray-100">{row.tarikhSarf}</td>
                <td className="p-3 border-l border-gray-100">{row.mablakhMansarf}</td>
                <td className="p-3 border-l border-gray-100">{row.rasidSabiq}</td>
                <td className="p-3 border-l border-gray-100">{row.rasidHali}</td>
                <td className="p-3 border-l border-gray-100">{row.kodSharika}</td>
                <td className="p-3 border-l border-gray-100">{row.ismSharika}</td>
                <td className="p-3 border-l border-gray-100">{row.raqmDaf3a}</td>
                <td className="p-3">{row.molahazat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Print Buttons */}
      <div className="flex gap-2 flex-wrap">
        <Button size="sm" variant="primary">طباعة الاخطار الحالي</Button>
        <Button size="sm" variant="secondary">طباعة الاخطار اجمالي</Button>
      </div>
    </div>
  );
}

// --- Tab 4: صرف خامات (Image 3) ---
const khamaatData = Array.from({ length: 6 }, (_, i) => ({ id: i + 1, kod: "", wasfKhamaat: "", wahda: "", kamiya: "", sarWahda: "", ijmali: "" }));

function SarfKhamaatSection() {
  return (
    <div className="space-y-3 text-sm" dir="rtl">
      {/* Filter Fields */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">العام المالي</label>
          <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
            <option>2026/2025</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">الميزانية</label>
          <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">البت الفرعي</label>
          <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">الصرف</label>
          <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">بند الخصم</label>
          <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">رقم المشروع</label>
          <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
      </div>

      {/* Khamaat Table */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">الكود</th>
              <th className="p-3 font-semibold border-l border-gray-200">وصف الخامات</th>
              <th className="p-3 font-semibold border-l border-gray-200">الوحدة</th>
              <th className="p-3 font-semibold border-l border-gray-200">الكمية</th>
              <th className="p-3 font-semibold border-l border-gray-200">سعر الوحدة</th>
              <th className="p-3 font-semibold">الاجمالي</th>
            </tr>
          </thead>
          <tbody>
            {khamaatData.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`} style={{ height: "40px" }}>
                <td className="p-3 border-l border-gray-100">{row.kod}</td>
                <td className="p-3 border-l border-gray-100">{row.wasfKhamaat}</td>
                <td className="p-3 border-l border-gray-100">{row.wahda}</td>
                <td className="p-3 border-l border-gray-100">{row.kamiya}</td>
                <td className="p-3 border-l border-gray-100">{row.sarWahda}</td>
                <td className="p-3">{row.ijmali}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total */}
      <div className="flex items-center gap-3">
        <span className="border border-gray-300 rounded px-4 py-2 text-sm bg-primary-500 text-white font-semibold">100.000.222</span>
        <span className="text-sm font-medium">اجمالي صرف الخامات</span>
      </div>
    </div>
  );
}

// --- Main Component ---
export default function ByanAlTa3aqud() {
  const [activeTab, setActiveTab] = useState("بيانات المشروع");
  const [searchVal, setSearchVal] = useState("");

  const renderTabContent = () => {
    switch (activeTab) {
      case "بيانات المشروع": return <ByanatAlMashro3Section />;
      case "بيانات التعاقد": return <ByanatAlTa3aqudSection />;
      case "بيانات الصرف": return <ByanatAlSarfSection />;
      case "صرف خامات": return <SarfKhamaatSection />;
      default: return null;
    }
  };

  return (
    <div className="p-4 space-y-4" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex flex-col gap-2">
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">TRDD_UF</span>
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">20252028</span>
        </div>
        <div className="flex-1 flex justify-center">
          <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">تسجيل بيان التعاقد والموازنة والصرف</h1>
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
            <label className="font-medium w-44 shrink-0 text-right">العام المالي</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>2026/2025</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">الميزانية</label>
            <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">رقم المشروع</label>
            <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">الصرف</label>
            <input className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">بند الخصم</label>
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

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 pb-1 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === tab
                ? "text-primary-600 border-b-2 border-primary-600 -mb-1 font-bold"
                : "text-gray-500 hover:text-primary-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-base rounded border border-gray-100 p-4">
        {renderTabContent()}
      </div>
    </div>
  );
}
