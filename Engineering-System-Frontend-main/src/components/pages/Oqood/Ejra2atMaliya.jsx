import React, { useState } from "react";
import Input from "../../ui/Input/Input";

const projectsData = [
  { id: 1, raqmMashro3: "2588888", ismMashro3: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", taklfaMashro3: "100.000.000", kodFar3: "2546", ismFar3Monafez: "اللواء 152 انشاءات" },
  { id: 2, raqmMashro3: "2588888", ismMashro3: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", taklfaMashro3: "100.000.000", kodFar3: "2546", ismFar3Monafez: "اللواء 152 انشاءات" },
];

// Tab 1: عروض الشركات (same as technical page)
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
        <input defaultValue="50" className="border border-gray-300 rounded px-2 py-1 bg-background w-20" />
      </div>
      <div className="flex items-center gap-2 flex-wrap text-sm">
        <label className="font-medium">تاريخ العرض</label>
        <select className="border border-gray-300 rounded px-2 py-1 bg-background">
          <option>2025/8/10</option>
        </select>
        <label className="font-medium">تاريخ نهاية العرض</label>
        <select className="border border-gray-300 rounded px-2 py-1 bg-background">
          <option>2025/12/8</option>
        </select>
        <label className="font-medium">الترتيب المسلسل</label>
        <input defaultValue="202" className="border border-gray-300 rounded px-2 py-1 bg-background w-20" />
      </div>
      <div className="flex items-start gap-2 text-sm">
        <label className="font-medium mt-2 shrink-0">الشروط الاضافية</label>
        <textarea className="flex-1 border border-gray-300 rounded px-2 py-1 bg-background h-24" />
      </div>
    </div>
  );
}

// Tab 2: اجراءات الفتح المالي (Image 4)
function Ejra2atAlFathAlMali() {
  const data = [
    {
      id: 1, mosalsal: "3/1",
      kodSharika: "مكتب الشرق للمقاولات",
      sharika: "مكتب الشرق للمقاولات",
      naw3: "عرض اساسي",
      taminIbtidaai: "ورود بدون تأمين ابتدائي",
      qimaOrd: "25456552255.000",
      adad: "13",
      naw3Nisba: "خصم",
      nisba: "0",
      nisbaDaf3a: "0",
      qimaDaf3aBa3d: "25456552255.000",
    },
  ];

  const committeeData = [
    { id: 1, raqmRatba: "مقدم", raqm: "احمد محمد على", wazifa: "عضو اللجنة الفني", ta3mal: true, tiba3a: "طباعة نموذج 12" },
    { id: 2, raqmRatba: "ملازم", raqm: "ياسر على محمود", wazifa: "عضو هيئة القضاء", ta3mal: false, tiba3a: "طباعة نموذج 12" },
    { id: 3, raqmRatba: "ملازم", raqm: "تامر السيد احمد", wazifa: "رئيس اللجنة", ta3mal: true, tiba3a: "طباعة نموذج 12" },
    { id: 4, raqmRatba: "ملازم", raqm: "محمود احمد على", wazifa: "مراجع", ta3mal: false, tiba3a: "طباعة نموذج 12" },
  ];

  return (
    <div className="space-y-4" dir="rtl">
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-2 font-semibold border-l border-gray-200">المسلسل</th>
              <th className="p-2 font-semibold border-l border-gray-200">كود الشركة</th>
              <th className="p-2 font-semibold border-l border-gray-200">اسم الشركة</th>
              <th className="p-2 font-semibold border-l border-gray-200">نوع العرض</th>
              <th className="p-2 font-semibold border-l border-gray-200">التأمين الابتدائي</th>
              <th className="p-2 font-semibold border-l border-gray-200">قيمة العرض المالي</th>
              <th className="p-2 font-semibold border-l border-gray-200">عدد الاوراق المالية</th>
              <th className="p-2 font-semibold border-l border-gray-200">نوع النسبة</th>
              <th className="p-2 font-semibold border-l border-gray-200">النسبة %</th>
              <th className="p-2 font-semibold border-l border-gray-200">نسبة الدفعة المقدمة %</th>
              <th className="p-2 font-semibold">العرض بعد النسبة</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-2 border-l border-gray-100">{row.mosalsal}</td>
                <td className="p-2 border-l border-gray-100">{row.kodSharika}</td>
                <td className="p-2 border-l border-gray-100">{row.sharika}</td>
                <td className="p-2 border-l border-gray-100">{row.naw3}</td>
                <td className="p-2 border-l border-gray-100">{row.taminIbtidaai}</td>
                <td className="p-2 border-l border-gray-100">{row.qimaOrd}</td>
                <td className="p-2 border-l border-gray-100">{row.adad}</td>
                <td className="p-2 border-l border-gray-100">
                  <select defaultValue={row.naw3Nisba} className="border border-gray-300 rounded px-1 py-0.5 text-xs bg-background">
                    <option>خصم</option>
                    <option>زيادة</option>
                  </select>
                </td>
                <td className="p-2 border-l border-gray-100">{row.nisba}</td>
                <td className="p-2 border-l border-gray-100">{row.nisbaDaf3a}</td>
                <td className="p-2">{row.qimaDaf3aBa3d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">الرتبة</th>
              <th className="p-3 font-semibold border-l border-gray-200">الاسم</th>
              <th className="p-3 font-semibold border-l border-gray-200">الوظيفة</th>
              <th className="p-3 font-semibold border-l border-gray-200">تعمل</th>
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
                  <input type="checkbox" checked={row.ta3mal} readOnly className="w-4 h-4 accent-primary-500" />
                </td>
                <td className="p-3">{row.tiba3a}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Tab 3: اجراءات البث المالي (Image 5)
function Ejra2atAlBathAlMali() {
  const data = [
    {
      id: 1,
      tartibMabdaai: "3/1",
      kodSharika: "مكتب الشرق للمقاولات",
      sharika: "مكتب الشرق للمقاولات",
      naw3: "عرض اساسي",
      qimaMali: "25456552255.000",
      qimaHisabiya: "25456552255.000",
      nisba: "14.50",
      daf3a: "0.00",
      qimaFaeda: "0.00",
      qimaNihaia: "25456552255.000",
      nisbaBa3d: "25456552255.000",
      qimaItaaQabl: "0.00",
      qimaItaaNihaia: "25456552255.000",
    },
  ];

  const committeeData = [
    { id: 1, raqmRatba: "مقدم", raqm: "احمد محمد على", wazifa: "عضو اللجنة الفني", tawqi3: true, tasjilOrd: "طباعة نموذج 12", tiba3a: "طباعة نموذج 12" },
    { id: 2, raqmRatba: "ملازم", raqm: "ياسر على محمود", wazifa: "عضو هيئة القضاء", tawqi3: false, tasjilOrd: "طباعة نموذج 12", tiba3a: "طباعة نموذج 12" },
    { id: 3, raqmRatba: "ملازم", raqm: "تامر السيد احمد", wazifa: "رئيس اللجنة", tawqi3: true, tasjilOrd: "طباعة نموذج 12", tiba3a: "طباعة نموذج 12" },
    { id: 4, raqmRatba: "ملازم", raqm: "محمود احمد على", wazifa: "مراجع", tawqi3: false, tasjilOrd: "طباعة نموذج 12", tiba3a: "طباعة نموذج 12" },
  ];

  return (
    <div className="space-y-4" dir="rtl">
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-2 font-semibold border-l border-gray-200">المسلسل</th>
              <th className="p-2 font-semibold border-l border-gray-200">كود الشركة</th>
              <th className="p-2 font-semibold border-l border-gray-200">اسم الشركة</th>
              <th className="p-2 font-semibold border-l border-gray-200">نوع العرض</th>
              <th className="p-2 font-semibold border-l border-gray-200">القيمة المالية قبل المراجعة الحسابية</th>
              <th className="p-2 font-semibold border-l border-gray-200">القيمة المالية قبل المراجعة</th>
              <th className="p-2 font-semibold border-l border-gray-200">فائدة البنك %</th>
              <th className="p-2 font-semibold border-l border-gray-200">الدفعة المقدمة %</th>
              <th className="p-2 font-semibold border-l border-gray-200">قيمة الفائدة للدفعة قبل</th>
              <th className="p-2 font-semibold border-l border-gray-200">القيمة النهائية بعد النسبة %</th>
              <th className="p-2 font-semibold border-l border-gray-200">نسبة بعد</th>
              <th className="p-2 font-semibold border-l border-gray-200">قيمة العطاء قبل</th>
              <th className="p-2 font-semibold">قيمة العطاء النهائية</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-2 border-l border-gray-100">{row.tartibMabdaai}</td>
                <td className="p-2 border-l border-gray-100">{row.kodSharika}</td>
                <td className="p-2 border-l border-gray-100">{row.sharika}</td>
                <td className="p-2 border-l border-gray-100">{row.naw3}</td>
                <td className="p-2 border-l border-gray-100">{row.qimaMali}</td>
                <td className="p-2 border-l border-gray-100">{row.qimaHisabiya}</td>
                <td className="p-2 border-l border-gray-100">{row.nisba}</td>
                <td className="p-2 border-l border-gray-100">{row.daf3a}</td>
                <td className="p-2 border-l border-gray-100">{row.qimaFaeda}</td>
                <td className="p-2 border-l border-gray-100">{row.qimaNihaia}</td>
                <td className="p-2 border-l border-gray-100">{row.nisbaBa3d}</td>
                <td className="p-2 border-l border-gray-100">{row.qimaItaaQabl}</td>
                <td className="p-2">{row.qimaItaaNihaia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">الرتبة</th>
              <th className="p-3 font-semibold border-l border-gray-200">الاسم</th>
              <th className="p-3 font-semibold border-l border-gray-200">الوظيفة</th>
              <th className="p-3 font-semibold border-l border-gray-200">توقيع</th>
              <th className="p-3 font-semibold border-l border-gray-200">تسجيل العرض المالي</th>
              <th className="p-3 font-semibold">طباعة نموذج13</th>
            </tr>
          </thead>
          <tbody>
            {committeeData.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-3 border-l border-gray-100">{row.raqmRatba}</td>
                <td className="p-3 border-l border-gray-100">{row.raqm}</td>
                <td className="p-3 border-l border-gray-100">{row.wazifa}</td>
                <td className="p-3 border-l border-gray-100">
                  <input type="checkbox" checked={row.tawqi3} readOnly className="w-4 h-4 accent-primary-500" />
                </td>
                <td className="p-3 border-l border-gray-100">{row.tasjilOrd}</td>
                <td className="p-3">{row.tiba3a}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Ejra2atMaliya() {
  const [activeTab, setActiveTab] = useState("عروض الشركات");
  const [searchVal, setSearchVal] = useState("");
  const [kodMashro3] = useState("4585551456");
  const [amMali] = useState("2026/2025");

  const tabs = ["عروض الشركات", "اجراءات الفتح المالي", "اجراءات البث المالي"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "عروض الشركات": return <OrdoodAlsharaket />;
      case "اجراءات الفتح المالي": return <Ejra2atAlFathAlMali />;
      case "اجراءات البث المالي": return <Ejra2atAlBathAlMali />;
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
          <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">الاجراءات المالية</h1>
        </div>
        <div className="flex flex-col gap-2">
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">قسم العقود</button>
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">اجراثات التعاقد /قسم العقود</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 border border-gray-200 rounded p-3 bg-base">
        <Input label="كود المشروع" showLabel={false} value={kodMashro3} readOnly />
        <Input label="العام المالي" type="select" showLabel={false} options={[{ value: amMali, label: amMali }]} />
        <Input label="البحث" showLabel={false} value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
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
      <div className="flex gap-4 border-b border-gray-200 pb-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 text-sm font-medium transition-colors ${
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
