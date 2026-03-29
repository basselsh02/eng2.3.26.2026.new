import React, { useEffect, useMemo, useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import TableFilterCell, { applyFilters } from "../../ui/TableFilter/TableFilterCell";
import { getNashrFullData } from "../../../api/nashr";

const fallbackData = [
  { id: 1, raqmMashro3: "2588888", ismMashro3: "اعمال رفع كفاءة شبكة الكهرباء الرئيسية بالمجمع الطبي بكوبري القبة", taklfaMashro3: "45478744.0000", kodFar3: "12", ismFar3Monafez: "فرع الصيانة", askariMadani: true },
  { id: 2, raqmMashro3: "2588888", ismMashro3: "توريد اسمنت لزوم مباني ميناء ابو قير الجديد بشرق الاسكندرية (ابو قير)", taklfaMashro3: "41545451012.544", kodFar3: "65", ismFar3Monafez: "فرع الامداد", askariMadani: false },
  { id: 3, raqmMashro3: "2588888", ismMashro3: "اعمال التصميمات لرفع كفاءة مستشفى سوهاج العسكري", taklfaMashro3: "487754.000", kodFar3: "877", ismFar3Monafez: "اللواء 150 اشغال", askariMadani: true },
];

export default function Tiba3aMozakrat() {
  const [searchVal, setSearchVal] = useState("");
  const [kodMashro3] = useState("4585551456");
  const [amMali] = useState("2026/2025");
  const [filters, setFilters] = useState({ raqmMashro3: "", ismMashro3: "", taklfaMashro3: "", kodFar3: "", ismFar3Monafez: "", askariMadani: "" });
  const [rows, setRows] = useState(fallbackData);

  useEffect(() => {
    getNashrFullData(kodMashro3).then((payload) => {
      if (!payload?.tiba3aMozakrat?.length) return;
      setRows(payload.tiba3aMozakrat.map((item, index) => ({
        id: item.id || index + 1,
        raqmMashro3: item.metadata?.raqmMashro3 || item.projectCode || "",
        ismMashro3: item.title || "",
        taklfaMashro3: String(item.amount ?? ""),
        kodFar3: item.metadata?.kodFar3 || "",
        ismFar3Monafez: item.metadata?.ismFar3Monafez || "",
        askariMadani: Boolean(item.metadata?.askariMadani),
      })));
    }).catch(() => {});
  }, [kodMashro3]);

  const filtered = useMemo(() => applyFilters(rows, filters), [rows, filters]);

  return (
    <div className="p-4 space-y-4" dir="rtl">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex-1 flex justify-center">
          <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">طباعة مذكرات النشر</h1>
        </div>
      </div>

      <div className="flex flex-wrap items-end gap-3 border border-gray-200 rounded p-3 bg-base">
        <div className="w-full md:w-auto md:min-w-[220px]"><Input label="كود المشروع" showLabel={false} value={kodMashro3} readOnly /></div>
        <div className="w-full md:w-[140px]"><Input label="العام المالي" showLabel={false} type="select" options={[{ value: amMali, label: amMali }]} /></div>
        <div className="flex-1 min-w-[260px]"><Input label="البحث" showLabel={false} value={searchVal} onChange={(e) => setSearchVal(e.target.value)} /></div>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded bg-base">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">رقم المشروع</th><th className="p-3 font-semibold border-l border-gray-200">اسم المشروع</th><th className="p-3 font-semibold border-l border-gray-200">تكلفة المشروع</th><th className="p-3 font-semibold border-l border-gray-200">الكود</th><th className="p-3 font-semibold border-l border-gray-200">اسم الفرع المنفذ</th><th className="p-3 font-semibold">عسكري/مدني</th><th className="p-3 font-semibold border-l border-gray-200">طباعة مذكرة النشر</th>
            </tr>
            <tr className="border-b border-gray-200 bg-base align-top">
              <th className="p-2"><TableFilterCell value={filters.raqmMashro3} onChange={(v) => setFilters((p) => ({ ...p, raqmMashro3: v }))} placeholder="فلتر رقم المشروع" /></th>
              <th className="p-2"><TableFilterCell value={filters.ismMashro3} onChange={(v) => setFilters((p) => ({ ...p, ismMashro3: v }))} placeholder="فلتر اسم المشروع" /></th>
              <th className="p-2"><TableFilterCell value={filters.taklfaMashro3} onChange={(v) => setFilters((p) => ({ ...p, taklfaMashro3: v }))} placeholder="فلتر التكلفة" /></th>
              <th className="p-2"><TableFilterCell value={filters.kodFar3} onChange={(v) => setFilters((p) => ({ ...p, kodFar3: v }))} placeholder="فلتر الكود" /></th>
              <th className="p-2"><TableFilterCell value={filters.ismFar3Monafez} onChange={(v) => setFilters((p) => ({ ...p, ismFar3Monafez: v }))} placeholder="فلتر اسم الفرع" /></th>
              <th className="p-2"><TableFilterCell value={filters.askariMadani} onChange={(v) => setFilters((p) => ({ ...p, askariMadani: v }))} placeholder="فلتر النوع" /></th>
              <th className="p-2" />
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-3 border-l border-gray-100">{row.raqmMashro3}</td><td className="p-3 border-l border-gray-100 max-w-xs">{row.ismMashro3}</td><td className="p-3 border-l border-gray-100">{row.taklfaMashro3}</td><td className="p-3 border-l border-gray-100">{row.kodFar3}</td><td className="p-3 border-l border-gray-100">{row.ismFar3Monafez}</td><td className="p-3"><input type="checkbox" checked={row.askariMadani} readOnly className="w-4 h-4 accent-primary-500" /></td>
                <td className="p-2 border-l border-gray-100"><div className="flex gap-1 flex-wrap"><Button size="sm" className="bg-yellow-400 text-yellow-900 hover:bg-yellow-500">أ</Button><Button size="sm" className="bg-yellow-500 text-white hover:bg-yellow-600">ب</Button><Button size="sm" className="bg-yellow-600 text-white hover:bg-yellow-700">ش</Button><Button size="sm" className="bg-amber-500 text-white hover:bg-amber-600">خطاب</Button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
