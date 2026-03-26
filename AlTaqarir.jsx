import React, { useState } from "react";
import Button from "../../ui/Button/Button";

const printButtons = [
  "طباعة التقرير كل",
  "طباعة التقرير كل بمشروع",
  "طباعة تقرير بالشركات",
  "طباعة التقرير المتأخر",
  "طباعة التقرير كل متأخر",
  "طباعة المتأخرات من المستخلصات",
  "طباعة التقارير التي تم خروجها",
  "طباعة مشروع - تم خروجهم",
  "طباعة المستخلصات التي تم خروجها",
];

export default function AlTaqarir() {
  const [ismMashro3, setIsmMashro3] = useState("");
  const [kodMashro3Raisi, setKodMashro3Raisi] = useState("");
  const [kodSharika, setKodSharika] = useState("");
  const [mowazaf, setMowazaf] = useState("");
  const [ismSharika, setIsmSharika] = useState("");
  const [tarikhMin, setTarikhMin] = useState("2020/2/8");
  const [tarikhIla, setTarikhIla] = useState("2025/9/8");
  const [onwanAlTaqrir, setOnwanAlTaqrir] = useState("");

  return (
    <div className="p-4 space-y-4" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex flex-col gap-2">
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">TRDD_UF</span>
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">20252028</span>
        </div>
        <div className="flex-1 flex justify-center">
          <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">
            التقارير
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">
            فرع التموين
          </button>
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">
            قسم الحسابات
          </button>
        </div>
      </div>

      {/* Filter Form */}
      <div className="bg-base border border-gray-200 rounded p-4 space-y-3 text-sm">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">كود المشروع الرئيسي</label>
            <div className="flex-1 flex items-center gap-1">
              <select className="w-10 border border-gray-300 rounded px-1 py-1.5 bg-background text-xs">
                <option>v</option>
              </select>
              <input
                value={kodMashro3Raisi}
                onChange={(e) => setKodMashro3Raisi(e.target.value)}
                className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">كود الشركة</label>
            <div className="flex-1 flex items-center gap-1">
              <input
                value={kodSharika}
                onChange={(e) => setKodSharika(e.target.value)}
                className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background"
              />
              <select className="w-10 border border-gray-300 rounded px-1 py-1.5 bg-background text-xs">
                <option>v</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">الموظف</label>
            <div className="flex-1 flex items-center gap-1">
              <input
                value={mowazaf}
                onChange={(e) => setMowazaf(e.target.value)}
                className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background"
              />
              <select className="w-10 border border-gray-300 rounded px-1 py-1.5 bg-background text-xs">
                <option>v</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">اسم المشروع</label>
            <input
              value={ismMashro3}
              onChange={(e) => setIsmMashro3(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background"
            />
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <label className="font-medium w-44 shrink-0 text-right">اسم الشركة</label>
            <input
              value={ismSharika}
              onChange={(e) => setIsmSharika(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background"
            />
            <span className="font-medium px-2">و</span>
            <select className="w-24 border border-gray-300 rounded px-2 py-1.5 bg-background text-sm">
              <option>v</option>
            </select>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <label className="font-medium w-44 shrink-0 text-right">التاريخ من</label>
            <select
              value={tarikhMin}
              onChange={(e) => setTarikhMin(e.target.value)}
              className="w-40 border border-gray-300 rounded px-2 py-1.5 bg-background"
            >
              <option>{tarikhMin}</option>
            </select>
            <span className="font-medium px-4">التاريخ الي</span>
            <select
              value={tarikhIla}
              onChange={(e) => setTarikhIla(e.target.value)}
              className="w-40 border border-gray-300 rounded px-2 py-1.5 bg-background"
            >
              <option>{tarikhIla}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Print Buttons Grid */}
      <div className="grid grid-cols-3 gap-3">
        {printButtons.map((btn) => (
          <Button key={btn} variant="primary" size="md" fullWidth>
            {btn}
          </Button>
        ))}
      </div>

      {/* Report Title */}
      <div className="bg-base border border-gray-200 rounded p-4 text-sm">
        <div className="flex items-center gap-2">
          <label className="font-medium w-44 shrink-0 text-right">عنوان التقرير</label>
          <input
            value={onwanAlTaqrir}
            onChange={(e) => setOnwanAlTaqrir(e.target.value)}
            className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background"
          />
        </div>
      </div>
    </div>
  );
}
