import React, { useEffect, useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import { getNashrFullData } from "../../../api/nashr";

const fallbackShorotData = [
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
  { id: 11, kod: "55", ismNaw3Shart: "الاسعار", mosalsal: "5", wasf: "-", tartib: "12", qima: "" },
  { id: 12, kod: "45", ismNaw3Shart: "موعد الانتواء من اعمال اللجنة", mosalsal: "98", wasf: "", tartib: "13", qima: "" },
  { id: 13, kod: "87", ismNaw3Shart: "ضمان الصناعة", mosalsal: "19", wasf: "القانون رقم 182 لسنة 2018", tartib: "14", qima: "" },
  { id: 14, kod: "655", ismNaw3Shart: "القانون المشيع", mosalsal: "17", wasf: "شهر", tartib: "15", qima: "3" },
];

export default function IdafaShorot() {
  const [searchVal, setSearchVal] = useState("");
  const [kodMashro3] = useState("4585551456");
  const [amMali] = useState("2026/2025");
  const [selected, setSelected] = useState(null);
  const [rows, setRows] = useState(fallbackShorotData);

  useEffect(() => {
    getNashrFullData(kodMashro3).then((payload) => {
      if (!payload?.conditions?.length) return;
      setRows(payload.conditions.map((item, index) => ({
        id: item.id || index + 1,
        kod: item.metadata?.kod || "",
        ismNaw3Shart: item.title || "",
        mosalsal: item.metadata?.mosalsal || "",
        wasf: item.metadata?.wasf || "",
        tartib: item.metadata?.tartib || "",
        qima: item.metadata?.qima || "",
      })));
    }).catch(() => {});
  }, [kodMashro3]);

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

      <div className="flex flex-wrap items-end gap-3 border border-gray-200 rounded p-3 bg-base">
        <div className="w-full md:w-auto md:min-w-[220px]"><Input label="كود المشروع" showLabel={false} value={kodMashro3} readOnly /></div>
        <div className="w-full md:w-[140px]"><Input label="العام المالي" showLabel={false} type="select" options={[{ value: amMali, label: amMali }]} /></div>
        <div className="flex-1 min-w-[260px]"><Input label="البحث" showLabel={false} value={searchVal} onChange={(e) => setSearchVal(e.target.value)} /></div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 pb-1">
        {["المشروع", "شروط المشروع", "ترشيح الشركات", "بنود الاعمال"].map((tab) => (
          <button
            key={tab}
            className={`px-3 py-1.5 text-sm font-medium transition-colors ${
              tab === "شروط المشروع"
                ? "text-primary-600 border-b-2 border-primary-600 -mb-1 font-bold"
                : "text-gray-500 hover:text-primary-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Shorot Tab Content */}
      <div className="space-y-3 bg-base rounded border border-gray-100 p-4" dir="rtl">
        {/* Project search fields */}
        <div className="flex items-center gap-3 flex-wrap text-sm">
          <div className="flex items-center gap-2">
            <label className="font-medium">كود المشروع</label>
            <input defaultValue="4585551456" className="border border-gray-300 rounded px-2 py-1 bg-background w-32" />
          </div>
          <div className="flex items-center gap-2 flex-1">
            <label className="font-medium">اسم المشروع</label>
            <input
              defaultValue="صيانة وتشغيل شبكة الكهرباء والمولدات/اجهزت تكيف، قدرات مختلفة/شبكة الصرف الصحي/المسطحات الخضراء/القلايات بمركز تدريس المنشاة النموذجي"
              className="flex-1 border border-gray-300 rounded px-2 py-1 bg-background min-w-40"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 flex-wrap">
          <Button size="sm" variant="primary">تسجيل شروط النشر</Button>
          <Button size="sm" variant="primary">تحميل شروط المذكرة</Button>
          <Button size="sm" variant="primary">طباعة العقد</Button>
          <Button size="sm" variant="primary">طباعة العقد مبدأئي/بدون</Button>
        </div>

        {/* Shorot Table */}
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
              {rows
                .filter((r) =>
                  !searchVal ||
                  r.ismNaw3Shart.includes(searchVal) ||
                  r.wasf.includes(searchVal)
                )
                .map((row, idx) => (
                  <tr
                    key={row.id}
                    onClick={() => setSelected(row.id)}
                    className={`border-b border-gray-100 cursor-pointer transition-colors ${
                      selected === row.id
                        ? "bg-primary-100"
                        : idx % 2 === 0
                        ? "bg-base hover:bg-primary-50"
                        : "bg-gray-50/50 hover:bg-primary-50"
                    }`}
                  >
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
    </div>
  );
}
