import React, { useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

const tabs = ["المشروع", "شروط المشروع", "ترشيح الشركات", "بنود الاعمال"];

const shorotData = [
  { id: 1, kod: "343", ismNaw3Shart: "تم التعاقد بالمناقصة المحدودة", mosalsal: "3", wasf: "طبقاً للمادة 57 من القانون وذلك لاعتبارات الامن القومي وعدم توافر الوقت", tartib: "5", qima: "5000" },
  { id: 2, kod: "343", ismNaw3Shart: "تم التعاقد بالمناقصة المحدودة", mosalsal: "3", wasf: "طبقاً للمادة 57 من القانون وذلك لاعتبارات الامن القومي وعدم توافر الوقت", tartib: "5", qima: "5000" },
  { id: 3, kod: "343", ismNaw3Shart: "تم التعاقد بالمناقصة المحدودة", mosalsal: "3", wasf: "طبقاً للمادة 57 من القانون وذلك لاعتبارات الامن القومي وعدم توافر الوقت", tartib: "5", qima: "5000" },
  { id: 4, kod: "343", ismNaw3Shart: "تم التعاقد بالمناقصة المحدودة", mosalsal: "3", wasf: "طبقاً للمادة 57 من القانون وذلك لاعتبارات الامن القومي وعدم توافر الوقت", tartib: "5", qima: "5000" },
  { id: 5, kod: "343", ismNaw3Shart: "تم التعاقد بالمناقصة المحدودة", mosalsal: "3", wasf: "طبقاً للمادة 57 من القانون وذلك لاعتبارات الامن القومي وعدم توافر الوقت", tartib: "5", qima: "5000" },
  { id: 6, kod: "343", ismNaw3Shart: "تم التعاقد بالمناقصة المحدودة", mosalsal: "3", wasf: "طبقاً للمادة 57 من القانون وذلك لاعتبارات الامن القومي وعدم توافر الوقت", tartib: "5", qima: "5000" },
];

const companiesData = [
  { id: 1, sharika: "المقاولون العرب", raqmSijl: "3", raqmAsmSijl: "5000" },
  { id: 2, sharika: "المقاولون العرب", raqmSijl: "3", raqmAsmSijl: "5000" },
  { id: 3, sharika: "المقاولون العرب", raqmSijl: "3", raqmAsmSijl: "5000" },
  { id: 4, sharika: "المقاولون العرب", raqmSijl: "3", raqmAsmSijl: "5000" },
  { id: 5, sharika: "المقاولون العرب", raqmSijl: "3", raqmAsmSijl: "5000" },
  { id: 6, sharika: "المقاولون العرب", raqmSijl: "3", raqmAsmSijl: "5000" },
];

const bunodData = [
  { id: 1, mosalsal: 1, wasf: "تم التعاقد بالمناقصة المحدودة", kod: "3", wahda: "152", kamiya: "25555", qima: "100.222.222", ijmali: "255455" },
  { id: 2, mosalsal: 1, wasf: "تم التعاقد بالمناقصة المحدودة", kod: "3", wahda: "152", kamiya: "25555", qima: "100.222.222", ijmali: "255455" },
  { id: 3, mosalsal: 1, wasf: "تم التعاقد بالمناقصة المحدودة", kod: "3", wahda: "152", kamiya: "25555", qima: "100.222.222", ijmali: "255455" },
  { id: 4, mosalsal: 1, wasf: "تم التعاقد بالمناقصة المحدودة", kod: "3", wahda: "152", kamiya: "25555", qima: "100.222.222", ijmali: "255455" },
  { id: 5, mosalsal: 1, wasf: "تم التعاقد بالمناقصة المحدودة", kod: "3", wahda: "152", kamiya: "25555", qima: "100.222.222", ijmali: "255455" },
  { id: 6, mosalsal: 1, wasf: "تم التعاقد بالمناقصة المحدودة", kod: "3", wahda: "152", kamiya: "25555", qima: "100.222.222", ijmali: "255455" },
];

// Image 7 - المشروع tab
function MashroSection() {
  return (
    <div className="space-y-3" dir="rtl">
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">كود المشروع</label>
          <input defaultValue="4585551456" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">كود نوع المشروع</label>
          <input defaultValue="اعمال المباني" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">العام المالي</label>
          <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
            <option>2025/2024</option>
          </select>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <label className="font-medium w-44 shrink-0 text-right">اسم المشروع</label>
        <input
          defaultValue="اعمال انشاء الهيكل الخرساني رقم 2 بمشروع 800 مدان المرحلة الثانية من محور 9 طوابي الى محور 13 طوابي"
          className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background"
        />
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">اسلوب النشر والتعاقد</label>
          <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
            <option>4585551456</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">تاريخ الاصدار</label>
          <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
            <option>2020/2/8</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">تاريخ ورود الكارت</label>
          <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
            <option>4585551456</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">تاريخ البداية الفعلي</label>
          <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
            <option>2020/2/15</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">تاريخ النهاية الفعلي</label>
          <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
            <option>2025/8/10</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">الجهة الطالبة</label>
          <input defaultValue="مشروع 800 فدان غرب" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">التكلفة التقديرية</label>
          <input defaultValue="125.252.500" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">نسبة العلاوة</label>
          <input defaultValue="0.25" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">رقم تذكرة الفرع المالي</label>
          <input defaultValue="500" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">الفرع المسؤل</label>
          <input defaultValue="اللواء 152 انشاءات" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">الشركة</label>
          <input defaultValue="شاكر للمقاولات العامة والموردات" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">تاريخ النشر</label>
          <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
            <option>2025/5/20</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">الموظف المسؤل</label>
          <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
            <option>162</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">تاريخ الفتح الفعلي</label>
          <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
            <option>2025/10/2</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">المشروع الرئيسي</label>
          <input defaultValue="4585551456" className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background" />
        </div>
      </div>
    </div>
  );
}

// Image 8 - شروط المشروع tab
function ShorotSection() {
  return (
    <div className="space-y-3" dir="rtl">
      <div className="flex items-center gap-2 flex-wrap text-sm">
        <div className="flex items-center gap-2">
          <label className="font-medium">كود المشروع</label>
          <input defaultValue="4585551456" className="border border-gray-300 rounded px-2 py-1 bg-background w-32" />
        </div>
        <div className="flex items-center gap-2 flex-1">
          <label className="font-medium">اسم المشروع</label>
          <input defaultValue="اعمال انشاء الهيكل الخرساني رقم 2 بمشروع 800 مدان المرحلة الثانية من محور 9 طوابي" className="flex-1 border border-gray-300 rounded px-2 py-1 bg-background min-w-40" />
        </div>
      </div>
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">كود نوع الشرط</th>
              <th className="p-3 font-semibold border-l border-gray-200">اسم نوع الشرط</th>
              <th className="p-3 font-semibold border-l border-gray-200">مسلسل الكود</th>
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

// Image 9 - بنود الاعمال tab
function BunodSection() {
  return (
    <div className="space-y-3" dir="rtl">
      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">المسلسل</th>
              <th className="p-3 font-semibold border-l border-gray-200">وصف ب</th>
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
    </div>
  );
}

// Image 10 - ترشيح الشركات tab
function TarshihSection() {
  return (
    <div className="space-y-3" dir="rtl">
      <div className="flex items-center gap-4 flex-wrap text-sm">
        <div className="flex items-center gap-2">
          <label className="font-medium">الشركة</label>
          <input defaultValue="المقاولون العرب" className="border border-gray-300 rounded px-2 py-1 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium">كود نوع المشروع</label>
          <input defaultValue="25555" className="border border-gray-300 rounded px-2 py-1 bg-background w-24" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-gray-200 rounded bg-base overflow-hidden">
          <div className="bg-gray-50 p-2 text-center font-semibold text-sm border-b border-gray-200">اسم الشركات المرشحة</div>
          <div className="divide-y divide-gray-100 max-h-60 overflow-y-auto">
            {companiesData.map((c) => (
              <div key={c.id} className="p-2 text-sm hover:bg-primary-50 cursor-pointer">شركة {c.sharika}</div>
            ))}
          </div>
        </div>
        <div className="border border-gray-200 rounded bg-base overflow-hidden">
          <div className="bg-gray-50 p-2 text-sm border-b border-gray-200">
            <div className="grid grid-cols-3 gap-2 font-semibold text-center">
              <span>الشركات</span>
              <span>رقم السجل</span>
              <span>رقم اسم السجل</span>
            </div>
          </div>
          <div className="divide-y divide-gray-100 max-h-60 overflow-y-auto">
            {companiesData.map((c) => (
              <div key={c.id} className="p-2 text-sm hover:bg-primary-50 grid grid-cols-3 gap-2 text-center">
                <span>{c.sharika}</span>
                <span>{c.raqmSijl}</span>
                <span>{c.raqmAsmSijl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ByanatAlmashro3Oqood() {
  const [activeTab, setActiveTab] = useState("المشروع");
  const [searchVal, setSearchVal] = useState("");
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
        <div className="flex flex-col gap-2">
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">TRDD_UF</span>
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">20252028</span>
        </div>
        <div className="flex-1 flex justify-center">
          <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">بيانات المشروع</h1>
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
