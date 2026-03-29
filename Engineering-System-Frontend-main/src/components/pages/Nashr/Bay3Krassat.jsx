import React, { useEffect, useMemo, useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import TableFilterCell, { applyFilters } from "../../ui/TableFilter/TableFilterCell";
import { getNashrFullData } from "../../../api/nashr";

const fallbackProjectsData = [
  { id: 1, raqmMashro3: "2588888", ismMashro3: "اعمال رفع كفاءة شبكة الكهرباء الرئيسية بالمجمع الطبي بكوبري القبة", taklfaMashro3: "45478744.0000", kodFar3: "12", ismFar3Monafez: "فرع الصيانة" },
  { id: 2, raqmMashro3: "2588888", ismMashro3: "توريد اسمنت لزوم مباني ميناء ابو قير الجديد بشرق الاسكندرية (ابو قير)", taklfaMashro3: "41545451012.544", kodFar3: "65", ismFar3Monafez: "فرع الامداد" },
  { id: 3, raqmMashro3: "2588888", ismMashro3: "اعمال التصميمات لرفع كفاءة مستشفى سوهاج العسكري", taklfaMashro3: "487754.000", kodFar3: "877", ismFar3Monafez: "اللواء 150 اشغال" },
  { id: 4, raqmMashro3: "2588888", ismMashro3: "توريد كابلات نحاس لزوم انشاء مشروع مزارير(3)", taklfaMashro3: "781.122.000", kodFar3: "587", ismFar3Monafez: "اللواء 152 انشاءات" },
  { id: 5, raqmMashro3: "2588888", ismMashro3: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية", taklfaMashro3: "878784.000", kodFar3: "222", ismFar3Monafez: "اللواء 152 انشاءات" },
  { id: 6, raqmMashro3: "2588888", ismMashro3: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية", taklfaMashro3: "100.000.000", kodFar3: "7", ismFar3Monafez: "اللواء 152 انشاءات" },
];

const fallbackCompaniesData = [
  { id: 1, kod: "ملتزم", ismSharika: "شركة المقاولون العرب", tamAlShra: true, tariqaDaf3: "بدون" },
  { id: 2, kod: "ملتزم", ismSharika: "اطلس العامة للمقاولات", tamAlShra: false, tariqaDaf3: "بدون" },
  { id: 3, kod: "ملتزم", ismSharika: "كيان للمقاولات", tamAlShra: true, tariqaDaf3: "بدون" },
  { id: 4, kod: "ملتزم", ismSharika: "القاهرة للمقاولات والتوريدات العمومية", tamAlShra: false, tariqaDaf3: "بدون" },
];

export default function Bay3Krassat() {
  const [searchVal, setSearchVal] = useState("");
  const [kodMashro3] = useState("4585551456");
  const [amMali] = useState("2026/2025");
  const [filters, setFilters] = useState({raqmMashro3: "", ismMashro3: "", taklfaMashro3: "", kodFar3: "", ismFar3Monafez: ""});
  const [companyFilters, setCompanyFilters] = useState({ kod: "", ismSharika: "", tamAlShra: "", tariqaDaf3: "" });
  const [projectsData, setProjectsData] = useState(fallbackProjectsData);
  const [companiesData, setCompaniesData] = useState(fallbackCompaniesData);

  useEffect(() => {
    getNashrFullData(kodMashro3).then((payload) => {
      if (payload?.bay3KrassatProjects?.length) {
        setProjectsData(payload.bay3KrassatProjects.map((item, index) => ({
          id: item.id || index + 1,
          raqmMashro3: item.metadata?.raqmMashro3 || item.projectCode || "",
          ismMashro3: item.title || "",
          taklfaMashro3: String(item.amount ?? ""),
          kodFar3: item.metadata?.kodFar3 || "",
          ismFar3Monafez: item.metadata?.ismFar3Monafez || "",
        })));
      }

      if (payload?.bay3KrassatCompanies?.length) {
        setCompaniesData(payload.bay3KrassatCompanies.map((item, index) => ({
          id: item.id || index + 1,
          kod: item.metadata?.kod || "",
          ismSharika: item.title || "",
          tamAlShra: Boolean(item.metadata?.tamAlShra),
          tariqaDaf3: item.metadata?.tariqaDaf3 || "بدون",
        })));
      }
    }).catch(() => {});
  }, [kodMashro3]);

  const filteredRows = useMemo(() => applyFilters(projectsData, filters), [projectsData, filters]);
  const filteredCompanies = useMemo(() => applyFilters(companiesData, companyFilters), [companiesData, companyFilters]);

  return (
    <div className="p-4 space-y-4" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex flex-col gap-2">
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">TRDD_UF</span>
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">20252028</span>
        </div>
        <div className="flex-1 flex justify-center">
          <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">بيع الكراسات واستلام التأمين الابتدائي</h1>
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

            <tr className="border-b border-gray-200 bg-base align-top">
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.raqmMashro3} onChange={(v) => setFilters((p) => ({ ...p, raqmMashro3: v }))} placeholder="فلتر" /></th>
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.ismMashro3} onChange={(v) => setFilters((p) => ({ ...p, ismMashro3: v }))} placeholder="فلتر" /></th>
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.taklfaMashro3} onChange={(v) => setFilters((p) => ({ ...p, taklfaMashro3: v }))} placeholder="فلتر" /></th>
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.kodFar3} onChange={(v) => setFilters((p) => ({ ...p, kodFar3: v }))} placeholder="فلتر" /></th>
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.ismFar3Monafez} onChange={(v) => setFilters((p) => ({ ...p, ismFar3Monafez: v }))} placeholder="فلتر" /></th>
            </tr>
            <tr className="border-b border-gray-200 bg-base align-top">
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={companyFilters.kod} onChange={(v) => setCompanyFilters((p) => ({ ...p, kod: v }))} placeholder="فلتر الكود" /></th>
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={companyFilters.ismSharika} onChange={(v) => setCompanyFilters((p) => ({ ...p, ismSharika: v }))} placeholder="فلتر الشركة" /></th>
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={companyFilters.tamAlShra} onChange={(v) => setCompanyFilters((p) => ({ ...p, tamAlShra: v }))} placeholder="فلتر الشراء" /></th>
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={companyFilters.tariqaDaf3} onChange={(v) => setCompanyFilters((p) => ({ ...p, tariqaDaf3: v }))} placeholder="فلتر الدفع" /></th>
              <th className="p-2" />
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, idx) => (
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

      {/* Companies Table */}
      <div className="overflow-x-auto border border-gray-200 rounded bg-base mt-4">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200">الكود</th>
              <th className="p-3 font-semibold border-l border-gray-200">اسم الشركة المرشحة</th>
              <th className="p-3 font-semibold border-l border-gray-200">تم الشراء</th>
              <th className="p-3 font-semibold">طريقة دفع التأمين</th>
              <th className="p-3 font-semibold border-l border-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-3 border-l border-gray-100">{row.kod}</td>
                <td className="p-3 border-l border-gray-100">{row.ismSharika}</td>
                <td className="p-3 border-l border-gray-100">
                  <input type="checkbox" checked={row.tamAlShra} readOnly className="w-4 h-4 accent-primary-500" />
                </td>
                <td className="p-3">
                  <select defaultValue={row.tariqaDaf3} className="border border-gray-300 rounded px-2 py-1 text-sm bg-background">
                    <option>بدون</option>
                    <option>نقدي</option>
                    <option>شيك</option>
                  </select>
                </td>
                <td className="p-2 border-l border-gray-100">
                  <Button size="sm" variant="primary">تعديل البيان</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
