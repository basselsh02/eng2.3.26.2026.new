import React, { useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

const tabs = ["المشروع", "شروط المشروع", "ترشيح الشركات", "أصنف المشروع", "طباعة المذكرات"];

const companiesData = [
  { id: 1, sharika: "المقاولون العرب", raqmSijl: "20026", raqmMwafaqa: "5454" },
  { id: 2, sharika: "اطلس العامة للمقاولات", raqmSijl: "454", raqmMwafaqa: "7878" },
  { id: 3, sharika: "كيان للمقاولات", raqmSijl: "1456", raqmMwafaqa: "44" },
  { id: 4, sharika: "القاهرة للمقاولات والتوريدات العمومية", raqmSijl: "5554252", raqmMwafaqa: "78" },
  { id: 5, sharika: "الشركة الدولية للتوريدات الهندسية والمقاولات", raqmSijl: "23233", raqmMwafaqa: "8787" },
  { id: 6, sharika: "طية لانبسكيب للمقاولات العامة", raqmSijl: "2125", raqmMwafaqa: "54" },
];

const shorotData = [
  { id: 1, kod: "455", ismNaw3Shart: "القيمة التقديرية", mosalsal: "9", wasf: "اكثر من 500 الف جنية", tartib: "2", qima: "" },
  { id: 2, kod: "787", ismNaw3Shart: "طريقة التعاقد", mosalsal: "99", wasf: "المناقصة المحدودة", tartib: "3", qima: "500" },
  { id: 3, kod: "325", ismNaw3Shart: "قيمة التامين المؤقت", mosalsal: "3", wasf: "جنية", tartib: "4", qima: "700" },
  { id: 4, kod: "545", ismNaw3Shart: "نمن كراسة الشروط", mosalsal: "4", wasf: "طبقاً للمادة 57 من القانون وذلك لاعتبارات الامن القومي وعدم توافر الوقت", tartib: "5", qima: "" },
  { id: 5, kod: "44", ismNaw3Shart: "تم التعاقد بالمناقصة المحدودة", mosalsal: "92", wasf: "على الشركات المرشحة ذات الخبرة والسمعة الطيبة والمصداق عليها من جواز", tartib: "6", qima: "" },
  { id: 6, kod: "343", ismNaw3Shart: "النشر", mosalsal: "17", wasf: "ادارة الاشغال العسكرية", tartib: "7", qima: "" },
  { id: 7, kod: "84", ismNaw3Shart: "محل الطارج", mosalsal: "90", wasf: "3 شهور تحسب اعتبارا من تاريخ فتح المصاريف الفنية", tartib: "8", qima: "" },
  { id: 8, kod: "864", ismNaw3Shart: "مدة سريان", mosalsal: "89", wasf: "المواصفات على نواية التعاقدات العامة وذلك لاعتبارات الامن القومي", tartib: "9", qima: "" },
  { id: 9, kod: "877", ismNaw3Shart: "عدم نشر كراسة الشروط", mosalsal: "93", wasf: "شهر", tartib: "10", qima: "12" },
  { id: 10, kod: "788", ismNaw3Shart: "مدة التنفيذ", mosalsal: "2", wasf: "غير شاملة الضريبة على القيمة المضافة", tartib: "11", qima: "" },
];

const tiba3aButtons = [
  "طباعة الشركات المرشحة",
  "طباعة كشف الاصناف",
  "طباعة عرض الاصناف",
  "طباعة العرض بالشروط الجديدة",
  "طباعة العقد",
  "طباعة العقد فارغ",
  "طباعة العقد/ بسطر",
  "طباعة الشهادة",
];

function MashroSection() {
  return (
    <div className="space-y-3 text-sm" dir="rtl">
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2">
          <label className="font-medium w-40 shrink-0 text-right">كود المشروع</label>
          <input defaultValue="4585551456" className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-40 shrink-0 text-right">كود نوع المشروع</label>
          <input defaultValue="اعمال المباني" className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-40 shrink-0 text-right">العام المالي</label>
          <select className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background">
            <option>2025/2024</option>
          </select>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <label className="font-medium w-40 shrink-0 text-right">اسم المشروع</label>
        <input defaultValue="اعمال انشاء الهيكل الخرساني رقم 2 بمشروع 800 مدان المرحلة الثانية من محور 9 طوابي الى محور 13 طوابي" className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2">
          <label className="font-medium w-40 shrink-0 text-right">تاريخ ورود الكارت</label>
          <select className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background"><option>4585551456</option></select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-40 shrink-0 text-right">تاريخ الاصدار</label>
          <select className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background"><option>2020/2/8</option></select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-40 shrink-0 text-right">اسلوب النشر والتعاقد</label>
          <select className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background"><option>4585551456</option></select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-40 shrink-0 text-right">تاريخ البداية الفعلي</label>
          <select className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background"><option>2020/2/15</option></select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-40 shrink-0 text-right">تاريخ النهاية الفعلي</label>
          <select className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background"><option>2025/8/10</option></select>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <label className="font-medium w-40 shrink-0 text-right">الجهة الطالبة</label>
        <input defaultValue="مركز تدريب المنشاة النموذجي بالهايكسلت" className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background" />
        <Button size="sm" variant="primary">تسجيل جهة جديدة</Button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2">
          <label className="font-medium w-40 shrink-0 text-right">التكلفة التقديرية</label>
          <input defaultValue="125.252.500" className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-40 shrink-0 text-right">نسبة العلاوة</label>
          <input defaultValue="0.25" className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-40 shrink-0 text-right">رقم مذكرة الفرع المالي</label>
          <input defaultValue="500" className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-40 shrink-0 text-right">الفرع المسؤل</label>
          <input defaultValue="فرع الصيانة" className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-40 shrink-0 text-right">الشركة</label>
          <input defaultValue="شاكر للمقاولات العامة والموردات" className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-40 shrink-0 text-right">تاريخ النشر</label>
          <select className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background"><option>2025/5/20</option></select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-40 shrink-0 text-right">الموظف المسؤل</label>
          <select className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background"><option>الاستاذة/مي</option></select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-40 shrink-0 text-right">تاريخ الفتح الفعلي</label>
          <select className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background"><option>2025/10/2</option></select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium w-40 shrink-0 text-right">المشروع الرئيسي</label>
          <input defaultValue="4585551456" className="flex-1 border border-gray-300 rounded px-3 py-2 bg-background" />
        </div>
      </div>
      <Button size="sm" variant="primary">طباعة تقرير اللجان</Button>
    </div>
  );
}

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
          <input defaultValue="صيانة وتشغيل شبكة الكهرباء والمولدات/اجهزت تكيف، قدرات مختلفة/شبكة الصرف الصحي/المسطحات الخضراء/القلايات بمركز تدريس المنشاة النموذجي" className="flex-1 border border-gray-300 rounded px-2 py-1 bg-background min-w-40" />
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
      <div className="flex items-center gap-4 flex-wrap text-sm">
        <div className="flex items-center gap-2">
          <label className="font-medium">الشركة</label>
          <input defaultValue="المقاولون العرب" className="border border-gray-300 rounded px-2 py-1 bg-background" />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium">السجل</label>
          <input defaultValue="25555" className="border border-gray-300 rounded px-2 py-1 bg-background w-24" />
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="primary">بحث</Button>
          <Button size="sm" variant="danger">حذف</Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-gray-200 rounded bg-base overflow-hidden">
          <div className="bg-gray-50 p-2 text-center font-semibold text-sm border-b border-gray-200">اسم الشركات المرشحة</div>
          <div className="divide-y divide-gray-100 max-h-60 overflow-y-auto">
            {companiesData.map((c) => (
              <div key={c.id} className="p-2 text-sm hover:bg-primary-50 cursor-pointer">{c.sharika}</div>
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
          <div className="divide-y divide-gray-100 max-h-60 overflow-y-auto">
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

function AsnafSection() {
  return (
    <div className="p-8 text-center text-gray-400 text-sm" dir="rtl">
      <p>قسم أصنف المشروع</p>
    </div>
  );
}

function Tiba3aSection() {
  return (
    <div className="space-y-3" dir="rtl">
      <div className="flex items-center gap-3 flex-wrap text-sm">
        <div className="flex items-center gap-2">
          <label className="font-medium">رقم المشروع</label>
          <input defaultValue="4585551456" className="border border-gray-300 rounded px-2 py-1 bg-background w-32" />
        </div>
        <div className="flex items-center gap-2 flex-1">
          <label className="font-medium">نوع المشروع</label>
          <input defaultValue="توريد اصناف لزوم مركز تدريب المنشاة النموذجي بالهايكسنت" className="flex-1 border border-gray-300 rounded px-2 py-1 bg-background min-w-40" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 max-w-md">
        {tiba3aButtons.map((btn) => (
          <Button key={btn} variant="primary" size="md" fullWidth>{btn}</Button>
        ))}
      </div>
    </div>
  );
}

export default function IstkmalByanat() {
  const [activeTab, setActiveTab] = useState("المشروع");
  const [kodMashro3] = useState("4585551456");
  const [amMali] = useState("2026/2025");
  const [searchVal, setSearchVal] = useState("");

  const renderTabContent = () => {
    switch (activeTab) {
      case "المشروع": return <MashroSection />;
      case "شروط المشروع": return <ShorotSection />;
      case "ترشيح الشركات": return <TarshihSection />;
      case "أصنف المشروع": return <AsnafSection />;
      case "طباعة المذكرات": return <Tiba3aSection />;
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
          <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">استكمال بيانات المشروع بالنشر</h1>
        </div>
        <div className="flex flex-col gap-2">
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">قسم النشر</button>
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">اجراثات التعاقد /التوريدات</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 border border-gray-200 rounded p-3 bg-base">
        <Input label="كود المشروع" showLabel={false} value={kodMashro3} readOnly />
        <Input label="العام المالي" showLabel={false} type="select" options={[{ value: amMali, label: amMali }]} />
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

      {/* Content */}
      <div className="bg-base rounded border border-gray-100 p-4">
        {renderTabContent()}
      </div>
    </div>
  );
}
