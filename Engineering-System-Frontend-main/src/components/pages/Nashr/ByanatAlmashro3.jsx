import React, { useState } from "react";
import Button from "../../ui/Button/Button";

const tabs = ["المشروع", "شروط المشروع", "ترشيح الشركات", "بنود الاعمال"];

const companiesData = [
  { id: 1, sharika: "المقاولون العرب", raqmSijl: "20026", raqmMwafaqa: "5454" },
  { id: 2, sharika: "اطلس العامة للمقاولات", raqmSijl: "454", raqmMwafaqa: "7878" },
  { id: 3, sharika: "كيان للمقاولات", raqmSijl: "1456", raqmMwafaqa: "44" },
  { id: 4, sharika: "القاهرة للمقاولات والتوريدات العمومية", raqmSijl: "5554252", raqmMwafaqa: "78" },
  { id: 5, sharika: "الشركة الدولية للتوريدات الهندسية والمقاولات", raqmSijl: "23233", raqmMwafaqa: "8787" },
  { id: 6, sharika: "طية لانبسكيب للمقاولات العامة", raqmSijl: "2125", raqmMwafaqa: "54" },
];

const bunodData = [
  { id: 1, mosalsal: 1, wasf: "تم التعاقد بالمناقصة المحدودة", kod: "3", wahda: "152", kamiya: "25555", qima: "100.222.222", ijmali: "5451121.0000" },
  { id: 2, mosalsal: 1, wasf: "تم التعاقد بالمناقصة المحدودة", kod: "3", wahda: "152", kamiya: "25555", qima: "100.222.222", ijmali: "255455" },
  { id: 3, mosalsal: 1, wasf: "تم التعاقد بالمناقصة المحدودة", kod: "3", wahda: "152", kamiya: "25555", qima: "100.222.222", ijmali: "255455" },
  { id: 4, mosalsal: 1, wasf: "تم التعاقد بالمناقصة المحدودة", kod: "3", wahda: "152", kamiya: "25555", qima: "100.222.222", ijmali: "255455" },
  { id: 5, mosalsal: 1, wasf: "تم التعاقد بالمناقصة المحدودة", kod: "3", wahda: "152", kamiya: "25555", qima: "100.222.222", ijmali: "255455" },
  { id: 6, mosalsal: 1, wasf: "تم التعاقد بالمناقصة المحدودة", kod: "3", wahda: "152", kamiya: "25555", qima: "100.222.222", ijmali: "255455" },
];

const shorotData = [
  { id: 1, kod: "455", ismNaw3Shart: "القيمة التقديرية", mosalsal: "9", wasf: "اكثر من 500 الف جنية", tartib: "2", qima: "" },
  { id: 2, kod: "787", ismNaw3Shart: "طريقة التعاقد", mosalsal: "99", wasf: "المناقصة المحدودة", tartib: "3", qima: "500" },
  { id: 3, kod: "325", ismNaw3Shart: "قيمة التامين المؤقت", mosalsal: "3", wasf: "جنية", tartib: "4", qima: "700" },
  { id: 4, kod: "545", ismNaw3Shart: "نمن كراسة الشروط", mosalsal: "4", wasf: "طبقاً للمادة 57 من القانون وذلك لاعتبارات الامن القومي وعدم توافر الوقت", tartib: "5", qima: "" },
  { id: 5, kod: "44", ismNaw3Shart: "تم التعاقد بالمناقصة المحدودة", mosalsal: "92", wasf: "على الشركات المرشحة ذات الخبرة والسمعة الطيبة والمصداق عليها من جواز", tartib: "6", qima: "" },
];

function MashroSection() {
  return (
    <div className="space-y-3" dir="rtl">
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2">
          <label className="text-right font-medium w-40 shrink-0">كود المشروع</label>
          <input defaultValue="4585551456" className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background text-sm" />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-right font-medium w-40 shrink-0">كود نوع المشروع</label>
          <input defaultValue="اعمال المباني" className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background text-sm" />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-right font-medium w-40 shrink-0">العام المالي</label>
          <select className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background text-sm">
            <option>2025/2024</option>
          </select>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <label className="font-medium w-40 shrink-0 text-right">اسم المشروع</label>
        <input defaultValue="اعمال انشاء الهيكل الخرساني رقم 2 بمشروع 800 مدان المرحلة الثانية من محور 9 طوابي الى محور 13 طوابي" className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background text-sm" />
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2">
          <label className="text-right font-medium w-40 shrink-0">تاريخ ورود الكارت</label>
          <select className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background text-sm"><option>4585551456</option></select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-right font-medium w-40 shrink-0">تاريخ الاصدار</label>
          <select className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background text-sm"><option>2020/2/8</option></select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-right font-medium w-40 shrink-0">اسلوب النشر والتعاقد</label>
          <select className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background text-sm"><option>4585551456</option></select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-right font-medium w-40 shrink-0">تاريخ البداية الفعلي</label>
          <select className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background text-sm"><option>2020/2/15</option></select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-right font-medium w-40 shrink-0">تاريخ النهاية الفعلي</label>
          <select className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background text-sm"><option>2025/8/10</option></select>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <label className="font-medium w-40 shrink-0 text-right">الجهة الطالبة</label>
        <input defaultValue="مركز تدريب المنشاة النموذجي بالهايكسلت" className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background text-sm" />
        <Button size="sm" variant="primary">تسجيل جهة جديدة</Button>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2">
          <label className="text-right font-medium w-40 shrink-0">التكلفة التقديرية</label>
          <input defaultValue="125.252.500" className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background text-sm" />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-right font-medium w-40 shrink-0">نسبة العلاوة</label>
          <input defaultValue="0.25" className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background text-sm" />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-right font-medium w-40 shrink-0">رقم مذكرة الفرع المالي</label>
          <input defaultValue="500" className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background text-sm" />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-right font-medium w-40 shrink-0">الفرع المسؤل</label>
          <input defaultValue="فرع الصيانة" className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background text-sm" />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-right font-medium w-40 shrink-0">الشركة</label>
          <input defaultValue="شاكر للمقاولات العامة والموردات" className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background text-sm" />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-right font-medium w-40 shrink-0">تاريخ النشر</label>
          <select className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background text-sm"><option>2025/5/20</option></select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-right font-medium w-40 shrink-0">الموظف المسؤل</label>
          <select className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background text-sm"><option>الاستاذة/مي</option></select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-right font-medium w-40 shrink-0">تاريخ الفتح الفعلي</label>
          <select className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background text-sm"><option>2025/10/2</option></select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-right font-medium w-40 shrink-0">المشروع الرئيسي</label>
          <input defaultValue="4585551456" className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background text-sm" />
        </div>
      </div>
      <div>
        <Button size="sm" variant="primary">طباعة تقرير اللجان</Button>
      </div>
    </div>
  );
}

function ShorotSection() {
  return (
    <div className="space-y-3" dir="rtl">
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">كود المشروع</label>
          <input defaultValue="4585551456" className="border border-gray-300 rounded px-2 py-1 text-sm bg-background w-32" />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">اسم المشروع</label>
          <input defaultValue="صيانة وتشغيل شبكة الكهرباء والمولدات..." className="border border-gray-300 rounded px-2 py-1 text-sm bg-background flex-1 min-w-60" />
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Button size="sm" variant="primary">تسجيل شروط النشر</Button>
        <Button size="sm" variant="primary">تحميل شروط المذكرة</Button>
        <Button size="sm" variant="primary">طباعة العقد</Button>
        <Button size="sm" variant="primary">طباعة العقد مبدأئي/بدون</Button>
      </div>
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">كود نوع الشرط</th>
              <th className="p-3 font-semibold border-l border-gray-200">اسم نوع الشرط</th>
              <th className="p-3 font-semibold border-l border-gray-200">مسلسل/ الكود</th>
              <th className="p-3 font-semibold border-l border-gray-200">وصف الشرط</th>
              <th className="p-3 font-semibold border-l border-gray-200">القيمة</th>
              <th className="p-3 font-semibold">ترتيب الشروط</th>
            </tr>
          </thead>
          <tbody>
            {shorotData.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-3 border-l border-gray-100">{row.kod}</td>
                <td className="p-3 border-l border-gray-100">{row.ismNaw3Shart}</td>
                <td className="p-3 border-l border-gray-100">{row.mosalsal}</td>
                <td className="p-3 border-l border-gray-100 max-w-xs text-xs">{row.wasf}</td>
                <td className="p-3 border-l border-gray-100">{row.qima}</td>
                <td className="p-3">{row.tartib}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TarshihSection() {
  return (
    <div className="space-y-3" dir="rtl">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">الشركة</label>
          <input defaultValue="المقاولون العرب" className="border border-gray-300 rounded px-2 py-1 text-sm bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">السجل</label>
          <input defaultValue="25555" className="border border-gray-300 rounded px-2 py-1 text-sm bg-background w-24" />
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="primary">بحث</Button>
          <Button size="sm" variant="danger">حذف</Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-gray-200 rounded bg-base overflow-hidden">
          <div className="bg-gray-50 p-2 text-center font-semibold text-sm border-b border-gray-200">اسم الشركات المرشحة</div>
          <div className="divide-y divide-gray-100">
            {companiesData.map((c) => (
              <div key={c.id} className="p-2 text-sm hover:bg-primary-50 cursor-pointer">{c.sharika.includes("المقاولون") ? "شركة " + c.sharika : c.sharika}</div>
            ))}
          </div>
        </div>
        <div className="border border-gray-200 rounded bg-base overflow-hidden">
          <div className="bg-gray-50 p-2 text-sm border-b border-gray-200">
            <div className="grid grid-cols-3 gap-2 font-semibold text-center">
              <span>الشركات</span>
              <span>رقم السجل</span>
              <span>رقم الموافقة</span>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {companiesData.map((c) => (
              <div key={c.id} className="p-2 text-sm hover:bg-primary-50 grid grid-cols-3 gap-2 text-center">
                <span>{c.sharika}</span>
                <span>{c.raqmSijl}</span>
                <span>{c.raqmMwafaqa}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BunodSection() {
  return (
    <div className="space-y-3" dir="rtl">
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">المسلسل</th>
              <th className="p-3 font-semibold border-l border-gray-200">وصف البند</th>
              <th className="p-3 font-semibold border-l border-gray-200">الكود</th>
              <th className="p-3 font-semibold border-l border-gray-200">الوحدة</th>
              <th className="p-3 font-semibold border-l border-gray-200">الكمية</th>
              <th className="p-3 font-semibold border-l border-gray-200">القيمة</th>
              <th className="p-3 font-semibold">الاجمالي</th>
            </tr>
          </thead>
          <tbody>
            {bunodData.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-3 border-l border-gray-100">{row.mosalsal}</td>
                <td className="p-3 border-l border-gray-100">{row.wasf}</td>
                <td className="p-3 border-l border-gray-100">{row.kod}</td>
                <td className="p-3 border-l border-gray-100">{row.wahda}</td>
                <td className="p-3 border-l border-gray-100">{row.kamiya}</td>
                <td className="p-3 border-l border-gray-100">{row.qima}</td>
                <td className="p-3">{row.ijmali}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center gap-2">
        <span className="border border-gray-300 rounded px-4 py-2 text-sm bg-primary-500 text-white font-semibold">100.000.222</span>
        <span className="text-sm font-medium">اجمالي الاعمال</span>
      </div>
    </div>
  );
}

export default function ByanatAlmashro3() {
  const [activeTab, setActiveTab] = useState("المشروع");
  const [kodMashro3] = useState("4585551456");
  const [amMali] = useState("2026/2025");

  const renderTabContent = () => {
    switch (activeTab) {
      case "المشروع": return <MashroSection />;
      case "شروط المشروع": return <ShorotSection />;
      case "ترشيح الشركات": return <TarshihSection />;
      case "بنود الاعمال": return <BunodSection />;
      default: return null;
    }
  };

  return (
    <div className="p-4 space-y-4" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex gap-2">
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">TRDD_UF</span>
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">20252028</span>
        </div>
        <div className="flex-1 flex justify-center">
          <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">بيانات المشروع</h1>
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
        <input placeholder="البحث" className="flex-1 bg-transparent outline-none text-sm" />
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
