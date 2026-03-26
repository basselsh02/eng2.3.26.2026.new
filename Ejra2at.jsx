import React, { useState } from "react";
import Button from "../../ui/Button/Button";

const projectsData = [
  { id: 1, raqmMashro3: "2588888", ismMashro3: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", taklfaMashro3: "100.000.000", kodFar3: "2546", ismFar3Monafez: "اللواء 152 انشاءات" },
  { id: 2, raqmMashro3: "2588888", ismMashro3: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", taklfaMashro3: "100.000.000", kodFar3: "2546", ismFar3Monafez: "اللواء 152 انشاءات" },
];

// Tab 1: عروض الشركات (Image 1)
function OrdoodAlsharaket() {
  return (
    <div className="space-y-4" dir="rtl">
      <div className="flex items-center gap-2 flex-wrap text-sm">
        <label className="font-medium">الشركة</label>
        <input defaultValue="مكتب الشرق للمقاولات" className="border border-gray-300 rounded px-2 py-1 bg-background flex-1 min-w-40" />
        <label className="font-medium">نوع العرض</label>
        <select className="border border-gray-300 rounded px-2 py-1 bg-background">
          <option>عرض اساسي</option>
        </select>
        <label className="font-medium">رقم العرض</label>
        <input defaultValue="2" className="border border-gray-300 rounded px-2 py-1 bg-background w-20" />
      </div>
      <div className="flex items-center gap-2 flex-wrap text-sm">
        <label className="font-medium">تاريخ العرض</label>
        <select className="border border-gray-300 rounded px-2 py-1 bg-background">
          <option>2026/5/6</option>
        </select>
        <label className="font-medium">تاريخ نهاية العرض</label>
        <select className="border border-gray-300 rounded px-2 py-1 bg-background">
          <option>2026/9/5</option>
        </select>
        <label className="font-medium">الترتيب المسلسل</label>
        <input defaultValue="25" className="border border-gray-300 rounded px-2 py-1 bg-background w-20" />
      </div>
      <div className="flex items-start gap-2 text-sm">
        <label className="font-medium mt-2 shrink-0">الشروط الاضافية</label>
        <textarea className="flex-1 border border-gray-300 rounded px-2 py-1 bg-background h-24" />
      </div>
    </div>
  );
}

// Tab 2: اجراءات الفتح الفني (Image 2 / Image 6)
function Ejra2atAlFathAlFani() {
  const committeeData = [
    { id: 1, raqmRatba: "مقدم أج", raqm: "احمد محمود السيد", wazifa: "رئيس اللجنة", mawqi3: true, tiba3a: "طباعة نموذج 7" },
    { id: 2, raqmRatba: "نقيب", raqm: "على احمد على", wazifa: "عضو اللجنة", mawqi3: false, tiba3a: "طباعة نموذج 8" },
    { id: 3, raqmRatba: "مقدم", raqm: "ممدوح شاكر فتحي", wazifa: "مندوب العقود", mawqi3: true, tiba3a: "طباعة نموذج 12" },
    { id: 4, raqmRatba: "ملازم", raqm: "عبدالله محمد احمد", wazifa: "عضو هيئة القضاء", mawqi3: false, tiba3a: "طباعة نموذج 11" },
  ];

  const companiesResult = [
    { id: 1, mosalsal: 1, kod: "6618", sharika: "مكتب الشرق للمقاولات", naw3: "عرض اساسي", tamin: "بدون تأمين ابتدائي", tarikh: "2025/5/3", qarar: "مقبول", raqmMwafaqa: "29555", adad: "12", naw3Waraqa: "مبلغ إجمالي" },
    { id: 2, mosalsal: 2, kod: "6619", sharika: "مكتب الشرق للمقاولات", naw3: "عرض اساسي", tamin: "بدون تأمين ابتدائي", tarikh: "2025/5/3", qarar: "مقبول", raqmMwafaqa: "29555", adad: "22", naw3Waraqa: "طابعة شاحة" },
    { id: 3, mosalsal: 3, kod: "9555", sharika: "مكتب الشرق للمقاولات", naw3: "عرض اساسي", tamin: "بدون تأمين ابتدائي", tarikh: "2025/5/3", qarar: "مقبول", raqmMwafaqa: "29555", adad: "15", naw3Waraqa: "مبلغ إجمالي" },
    { id: 4, mosalsal: 4, kod: "2145", sharika: "مكتب الشرق للمقاولات", naw3: "عرض اساسي", tamin: "بدون تأمين ابتدائي", tarikh: "2025/5/3", qarar: "مقبول", raqmMwafaqa: "29555", adad: "6", naw3Waraqa: "شفافة بلاك" },
  ];

  return (
    <div className="space-y-4" dir="rtl">
      {/* Committee table */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">الرتبة</th>
              <th className="p-3 font-semibold border-l border-gray-200">اسم العضو</th>
              <th className="p-3 font-semibold border-l border-gray-200">الوظيفة</th>
              <th className="p-3 font-semibold border-l border-gray-200">موقع</th>
              <th className="p-3 font-semibold">طباعة نموذج</th>
            </tr>
          </thead>
          <tbody>
            {committeeData.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-3 border-l border-gray-100">{row.raqmRatba}</td>
                <td className="p-3 border-l border-gray-100">{row.raqm}</td>
                <td className="p-3 border-l border-gray-100">{row.wazifa}</td>
                <td className="p-3 border-l border-gray-100">
                  <input type="checkbox" checked={row.mawqi3} readOnly className="w-4 h-4 accent-primary-500" />
                </td>
                <td className="p-3">{row.tiba3a}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Companies result table */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-2 font-semibold border-l border-gray-200">المسلسل</th>
              <th className="p-2 font-semibold border-l border-gray-200">الكود</th>
              <th className="p-2 font-semibold border-l border-gray-200">الشركة</th>
              <th className="p-2 font-semibold border-l border-gray-200">نوع العرض</th>
              <th className="p-2 font-semibold border-l border-gray-200">التأمين الابتدائي</th>
              <th className="p-2 font-semibold border-l border-gray-200">تاريخ البث الفني</th>
              <th className="p-2 font-semibold border-l border-gray-200">قرار اللجنة</th>
              <th className="p-2 font-semibold border-l border-gray-200">رقم الموافقة الامنية</th>
              <th className="p-2 font-semibold border-l border-gray-200">عدد الاوراق</th>
              <th className="p-2 font-semibold">نوع الورقة</th>
            </tr>
          </thead>
          <tbody>
            {companiesResult.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-2 border-l border-gray-100">{row.mosalsal}</td>
                <td className="p-2 border-l border-gray-100">{row.kod}</td>
                <td className="p-2 border-l border-gray-100">{row.sharika}</td>
                <td className="p-2 border-l border-gray-100">{row.naw3}</td>
                <td className="p-2 border-l border-gray-100">{row.tamin}</td>
                <td className="p-2 border-l border-gray-100">{row.tarikh}</td>
                <td className="p-2 border-l border-gray-100">
                  <select defaultValue={row.qarar} className="border border-gray-300 rounded px-1 py-0.5 text-xs bg-background">
                    <option>مقبول</option>
                    <option>مرفوض</option>
                  </select>
                </td>
                <td className="p-2 border-l border-gray-100">{row.raqmMwafaqa}</td>
                <td className="p-2 border-l border-gray-100">{row.adad}</td>
                <td className="p-2">
                  <select defaultValue={row.naw3Waraqa} className="border border-gray-300 rounded px-1 py-0.5 text-xs bg-background">
                    <option>مبلغ إجمالي</option>
                    <option>طابعة شاحة</option>
                    <option>شفافة بلاك</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Tab 3: اجراءات البث الفني (Image 3)
function Ejra2atAlBathAlFani() {
  const data = [
    { id: 1, kod: "55", wasf: "تم التعاقد بالمناقصة المحدودة", wahda: "3", kamiya: "20", sarOrd: "25555", ijmali: "100.222.222" },
    { id: 2, kod: "4", wasf: "تم التعاقد بالمناقصة المحدودة", wahda: "3", kamiya: "15", sarOrd: "25555", ijmali: "100.222.222" },
    { id: 3, kod: "684", wasf: "تم التعاقد بالمناقصة المحدودة", wahda: "3", kamiya: "1555", sarOrd: "25555", ijmali: "100.222.222" },
    { id: 4, kod: "45", wasf: "تم التعاقد بالمناقصة المحدودة", wahda: "3", kamiya: "456", sarOrd: "25555", ijmali: "100.222.222" },
    { id: 5, kod: "7877", wasf: "تم التعاقد بالمناقصة المحدودة", wahda: "3", kamiya: "887", sarOrd: "25555", ijmali: "100.222.222" },
    { id: 6, kod: "222", wasf: "تم التعاقد بالمناقصة المحدودة", wahda: "3", kamiya: "544", sarOrd: "25555", ijmali: "100.222.222" },
  ];

  return (
    <div className="space-y-4" dir="rtl">
      {/* Header info */}
      <div className="flex items-center gap-4 flex-wrap text-sm border border-gray-200 rounded p-3 bg-base">
        <div className="flex items-center gap-2">
          <label className="font-medium">الشركة</label>
          <input defaultValue="مكتب الشرق للمقاولات" className="border border-gray-300 rounded px-2 py-1 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium">نوع العرض</label>
          <select className="border border-gray-300 rounded px-2 py-1 bg-background">
            <option>عرض اساسي</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium">رقم العرض</label>
          <input defaultValue="50" className="border border-gray-300 rounded px-2 py-1 bg-background w-20" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium">تاريخ العرض</label>
          <select className="border border-gray-300 rounded px-2 py-1 bg-background">
            <option>2025/8/10</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium">تاريخ نهاية العرض</label>
          <select className="border border-gray-300 rounded px-2 py-1 bg-background">
            <option>2025/12/8</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium">الترتيب المسلسل</label>
          <input defaultValue="202" className="border border-gray-300 rounded px-2 py-1 bg-background w-20" />
        </div>
      </div>

      {/* Items table */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-2 font-semibold border-l border-gray-200">كود الصنف</th>
              <th className="p-2 font-semibold border-l border-gray-200">اسم الصنف</th>
              <th className="p-2 font-semibold border-l border-gray-200">الوحدة</th>
              <th className="p-2 font-semibold border-l border-gray-200">الكمية</th>
              <th className="p-2 font-semibold border-l border-gray-200">سعر الوحدة</th>
              <th className="p-2 font-semibold">الاجمالي</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-2 border-l border-gray-100">{row.kod}</td>
                <td className="p-2 border-l border-gray-100">{row.wasf}</td>
                <td className="p-2 border-l border-gray-100">{row.wahda}</td>
                <td className="p-2 border-l border-gray-100">{row.kamiya}</td>
                <td className="p-2 border-l border-gray-100">{row.sarOrd}</td>
                <td className="p-2">{row.ijmali}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Ejra2at() {
  const [activeTab, setActiveTab] = useState("عروض الشركات");
  const [searchVal, setSearchVal] = useState("");
  const [kodMashro3] = useState("4585551456");
  const [amMali] = useState("2026/2025");

  const tabs = ["عروض الشركات", "اجراءات الفتح الفني", "اجراءات البث الفني"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "عروض الشركات": return <OrdoodAlsharaket />;
      case "اجراءات الفتح الفني": return <Ejra2atAlFathAlFani />;
      case "اجراءات البث الفني": return <Ejra2atAlBathAlFani />;
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
          <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">الاجراءات</h1>
        </div>
        <div className="flex flex-col gap-2">
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">قسم العقود</button>
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">اجراثات التعاقد /قسم العقود</button>
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
          <input value={kodMashro3} readOnly className="border border-gray-300 rounded px-2 py-1 text-sm bg-background w-32" />
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

      {/* Projects Table */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">كود المشروع</th>
              <th className="p-3 font-semibold border-l border-gray-200">اسم المشروع</th>
              <th className="p-3 font-semibold border-l border-gray-200">تكلفة المشروع</th>
              <th className="p-3 font-semibold border-l border-gray-200">كود الفرع</th>
              <th className="p-3 font-semibold">اسم الفرع المنفذ</th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-3 border-l border-gray-100">{row.raqmMashro3}</td>
                <td className="p-3 border-l border-gray-100 max-w-xs">{row.ismMashro3}</td>
                <td className="p-3 border-l border-gray-100">{row.taklfaMashro3}</td>
                <td className="p-3 border-l border-gray-100">{row.kodFar3}</td>
                <td className="p-3">{row.ismFar3Monafez}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200 pb-1 overflow-x-auto">
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
