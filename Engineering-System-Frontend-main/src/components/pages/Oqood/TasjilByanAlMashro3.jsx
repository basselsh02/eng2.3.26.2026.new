import React, { useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

const projectsData = [
  { id: 1, raqmMashro3: "2588888", ismMashro3: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", taklfaMashro3: "100.000.000", kodFar3: "2546", ismFar3Monafez: "اللواء 152 انشاءات" },
  { id: 2, raqmMashro3: "2588888", ismMashro3: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", taklfaMashro3: "100.000.000", kodFar3: "2546", ismFar3Monafez: "اللواء 152 انشاءات" },
  { id: 3, raqmMashro3: "2588888", ismMashro3: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", taklfaMashro3: "100.000.000", kodFar3: "2546", ismFar3Monafez: "اللواء 152 انشاءات" },
  { id: 4, raqmMashro3: "2588888", ismMashro3: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", taklfaMashro3: "100.000.000", kodFar3: "2546", ismFar3Monafez: "اللواء 152 انشاءات" },
  { id: 5, raqmMashro3: "2588888", ismMashro3: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", taklfaMashro3: "100.000.000", kodFar3: "2546", ismFar3Monafez: "اللواء 152 انشاءات" },
  { id: 6, raqmMashro3: "2588888", ismMashro3: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", taklfaMashro3: "100.000.000", kodFar3: "2546", ismFar3Monafez: "اللواء 152 انشاءات" },
];

// Image 11 - لجنة البيان section
const committeeData = [
  { id: 1, sharika: "المقاولون العرب", raqmSijl: "3", raqmAsmSijl: "5000" },
  { id: 2, sharika: "المقاولون العرب", raqmSijl: "3", raqmAsmSijl: "5000" },
  { id: 3, sharika: "المقاولون العرب", raqmSijl: "3", raqmAsmSijl: "5000" },
];

const committeeMembersData = [
  { id: 1, sharika: "المقاولون العرب", raqmSijl: "3", raqmAsmSijl: "5000" },
  { id: 2, sharika: "المقاولون العرب", raqmSijl: "3", raqmAsmSijl: "5000" },
  { id: 3, sharika: "المقاولون العرب", raqmSijl: "3", raqmAsmSijl: "5000" },
];

// Image 12 - شراء الكراسات section
const purchaseData = [
  { id: 1, kod: "ملتزم", ismSharika: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", tamAlShra: true, tariqaDaf3: "بدون" },
  { id: 2, kod: "ملتزم", ismSharika: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", tamAlShra: false, tariqaDaf3: "بدون" },
  { id: 3, kod: "ملتزم", ismSharika: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", tamAlShra: true, tariqaDaf3: "بدون" },
  { id: 4, kod: "ملتزم", ismSharika: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", tamAlShra: false, tariqaDaf3: "بدون" },
];

const [VIEW_COMMITTEE, VIEW_PURCHASE] = ["committee", "purchase"];

export default function TasjilByanAlMashro3() {
  const [searchVal, setSearchVal] = useState("");
  const [kodMashro3] = useState("4585551456");
  const [amMali] = useState("2026/2025");
  const [view, setView] = useState(VIEW_COMMITTEE);

  return (
    <div className="p-4 space-y-4" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex flex-col gap-2">
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">TRDD_UF</span>
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">20252028</span>
        </div>
        <div className="flex-1 flex justify-center">
          <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">تسجيل بيان المشروع</h1>
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

      {/* Toggle Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => setView(VIEW_COMMITTEE)}
          className={`px-4 py-2 text-sm rounded border transition-colors ${view === VIEW_COMMITTEE ? "bg-primary-500 text-white border-primary-500" : "border-gray-300 hover:bg-primary-50"}`}
        >
          بيانات اللجنة وأعضائها
        </button>
        <button
          onClick={() => setView(VIEW_PURCHASE)}
          className={`px-4 py-2 text-sm rounded border transition-colors ${view === VIEW_PURCHASE ? "bg-primary-500 text-white border-primary-500" : "border-gray-300 hover:bg-primary-50"}`}
        >
          شراء الكراسات
        </button>
      </div>

      {view === VIEW_COMMITTEE && (
        <div className="grid grid-cols-2 gap-4">
          {/* بيانات اللجنة */}
          <div className="border border-gray-200 rounded bg-base overflow-hidden">
            <div className="bg-gray-50 p-2 text-center font-semibold text-sm border-b border-gray-200">بيانات اللجنة</div>
            <table className="w-full text-sm text-right">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="p-2 font-semibold border-l border-gray-200">الشركات</th>
                  <th className="p-2 font-semibold border-l border-gray-200">رقم السجل</th>
                  <th className="p-2 font-semibold">رقم اسم السجل</th>
                </tr>
              </thead>
              <tbody>
                {committeeData.map((c, idx) => (
                  <tr key={c.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                    <td className="p-2 border-l border-gray-100">{c.sharika}</td>
                    <td className="p-2 border-l border-gray-100">{c.raqmSijl}</td>
                    <td className="p-2">{c.raqmAsmSijl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* بيانات اعضاء اللجنة */}
          <div className="border border-gray-200 rounded bg-base overflow-hidden">
            <div className="bg-gray-50 p-2 text-center font-semibold text-sm border-b border-gray-200">بيانات اعضاء اللجنة</div>
            <table className="w-full text-sm text-right">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="p-2 font-semibold border-l border-gray-200">الشركات</th>
                  <th className="p-2 font-semibold border-l border-gray-200">رقم السجل</th>
                  <th className="p-2 font-semibold border-l border-gray-200">رقم السجل</th>
                  <th className="p-2 font-semibold">رقم اسم السجل</th>
                </tr>
              </thead>
              <tbody>
                {committeeMembersData.map((c, idx) => (
                  <tr key={c.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                    <td className="p-2 border-l border-gray-100">{c.sharika}</td>
                    <td className="p-2 border-l border-gray-100">{c.raqmSijl}</td>
                    <td className="p-2 border-l border-gray-100">{c.raqmSijl}</td>
                    <td className="p-2">{c.raqmAsmSijl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {view === VIEW_COMMITTEE && (
        <div className="flex gap-2 justify-center">
          <Button variant="secondary">تسجيل المنتج المالي</Button>
          <Button variant="primary">تسجيل المالي</Button>
          <Button variant="secondary">طباعة امر التشغيل</Button>
        </div>
      )}

      {view === VIEW_PURCHASE && (
        <div className="overflow-x-auto border border-gray-200 rounded bg-base">
          <table className="w-full text-sm text-right">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="p-3 font-semibold border-l border-gray-200">الكود</th>
                <th className="p-3 font-semibold border-l border-gray-200">اسم الشركة المرشحة</th>
                <th className="p-3 font-semibold border-l border-gray-200">تم الشراء</th>
                <th className="p-3 font-semibold border-l border-gray-200">طريقة دفع</th>
                <th className="p-3 font-semibold">تعديل البيان</th>
              </tr>
            </thead>
            <tbody>
              {purchaseData.map((row, idx) => (
                <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                  <td className="p-3 border-l border-gray-100">{row.kod}</td>
                  <td className="p-3 border-l border-gray-100 max-w-xs text-xs">{row.ismSharika}</td>
                  <td className="p-3 border-l border-gray-100">
                    <input type="checkbox" checked={row.tamAlShra} readOnly className="w-4 h-4 accent-primary-500" />
                  </td>
                  <td className="p-3 border-l border-gray-100">
                    <select defaultValue={row.tariqaDaf3} className="border border-gray-300 rounded px-2 py-1 text-sm bg-background">
                      <option>بدون</option>
                      <option>نقدي</option>
                      <option>شيك</option>
                    </select>
                  </td>
                  <td className="p-2">
                    <Button size="sm" variant="primary">تعديل البيان</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
