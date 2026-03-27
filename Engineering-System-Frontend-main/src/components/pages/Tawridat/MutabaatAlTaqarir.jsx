import React, { useState } from "react";
import Button from "../../ui/Button/Button";

export default function MutabaatAlTaqarir() {
  const [amMali] = useState("2026/2025");
  const [kodSharika, setKodSharika] = useState("154");
  const [ismSharika, setIsmSharika] = useState("السويس للاسمنت");
  const [jahatMostafida, setJahatMostafida] = useState("");
  const [mowazaf, setMowazaf] = useState("ماجدة محسن");
  const [kodMowazaf, setKodMowazaf] = useState("154");
  const [far3, setFar3] = useState("فرع الاول");
  const [tarikhMin, setTarikhMin] = useState("2020/2/8");
  const [tarikhIla, setTarikhIla] = useState("2020/2/8");

  return (
    <div className="p-4 space-y-4" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex flex-col gap-2">
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">TRDD_UF</span>
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">20252028</span>
        </div>
        <div className="flex-1 flex justify-center">
          <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">متابعة التقارير</h1>
        </div>
        <div className="flex flex-col gap-2">
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">قسم النشر</button>
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">متابعة التحصيل للمشروعات</button>
        </div>
      </div>

      {/* Action Buttons and Form */}
      <div className="flex gap-4">
        {/* Left - Action Buttons */}
        <div className="flex flex-col gap-2 w-52 shrink-0">
          <Button variant="primary" size="sm" fullWidth>طباعة التقرير</Button>
          <Button variant="primary" size="sm" fullWidth>طباعة المتأخرات من التسويات</Button>
          <Button variant="primary" size="sm" fullWidth>اوامر توريد لم ترد لها التسوية</Button>
          <Button variant="primary" size="sm" fullWidth>اوامر التوريد التي تم خروجها للهيئة</Button>
        </div>

        {/* Right - Form Fields */}
        <div className="flex-1 border border-gray-200 rounded p-4 bg-base space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">العام المالي</label>
            <select className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>{amMali}</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">كود الشركة</label>
            <input
              value={kodSharika}
              onChange={(e) => setKodSharika(e.target.value)}
              className="w-24 border border-gray-300 rounded px-2 py-1.5 bg-background"
            />
            <input
              value={ismSharika}
              onChange={(e) => setIsmSharika(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">الجهة المستفيدة</label>
            <input
              value={jahatMostafida}
              onChange={(e) => setJahatMostafida(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">الموظف</label>
            <input
              value={kodMowazaf}
              onChange={(e) => setKodMowazaf(e.target.value)}
              className="w-24 border border-gray-300 rounded px-2 py-1.5 bg-background"
            />
            <input
              value={mowazaf}
              onChange={(e) => setMowazaf(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">الفرع</label>
            <input
              value={far3}
              onChange={(e) => setFar3(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium w-44 shrink-0 text-right">عن الفترة من تاريخ</label>
            <select value={tarikhMin} onChange={(e) => setTarikhMin(e.target.value)} className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>2020/2/8</option>
            </select>
            <label className="font-medium shrink-0 px-2">الي تاريخ</label>
            <select value={tarikhIla} onChange={(e) => setTarikhIla(e.target.value)} className="flex-1 border border-gray-300 rounded px-2 py-1.5 bg-background">
              <option>2020/2/8</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
