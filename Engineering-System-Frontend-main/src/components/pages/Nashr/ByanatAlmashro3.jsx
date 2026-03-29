import React, { useEffect, useMemo, useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import AppSelect from "../../ui/AppSelect/AppSelect";
import { getNashrFullData } from "../../../api/nashr";

const tabs = ["المشروع", "شروط المشروع", "ترشيح الشركات", "بنود الاعمال"];

const fallbackCompaniesData = [
  { id: 1, sharika: "المقاولون العرب", raqmSijl: "20026", raqmMwafaqa: "5454" },
  { id: 2, sharika: "اطلس العامة للمقاولات", raqmSijl: "454", raqmMwafaqa: "7878" },
  { id: 3, sharika: "كيان للمقاولات", raqmSijl: "1456", raqmMwafaqa: "44" },
  { id: 4, sharika: "القاهرة للمقاولات والتوريدات العمومية", raqmSijl: "5554252", raqmMwafaqa: "78" },
  { id: 5, sharika: "الشركة الدولية للتوريدات الهندسية والمقاولات", raqmSijl: "23233", raqmMwafaqa: "8787" },
  { id: 6, sharika: "طية لانبسكيب للمقاولات العامة", raqmSijl: "2125", raqmMwafaqa: "54" },
];

const fallbackBunodData = [
  { id: 1, mosalsal: 1, wasf: "تم التعاقد بالمناقصة المحدودة", kod: "3", wahda: "152", kamiya: "25555", qima: "100.222.222", ijmali: "5451121.0000" },
  { id: 2, mosalsal: 1, wasf: "تم التعاقد بالمناقصة المحدودة", kod: "3", wahda: "152", kamiya: "25555", qima: "100.222.222", ijmali: "255455" },
  { id: 3, mosalsal: 1, wasf: "تم التعاقد بالمناقصة المحدودة", kod: "3", wahda: "152", kamiya: "25555", qima: "100.222.222", ijmali: "255455" },
  { id: 4, mosalsal: 1, wasf: "تم التعاقد بالمناقصة المحدودة", kod: "3", wahda: "152", kamiya: "25555", qima: "100.222.222", ijmali: "255455" },
  { id: 5, mosalsal: 1, wasf: "تم التعاقد بالمناقصة المحدودة", kod: "3", wahda: "152", kamiya: "25555", qima: "100.222.222", ijmali: "255455" },
  { id: 6, mosalsal: 1, wasf: "تم التعاقد بالمناقصة المحدودة", kod: "3", wahda: "152", kamiya: "25555", qima: "100.222.222", ijmali: "255455" },
];

const fallbackShorotData = [
  { id: 1, kod: "455", ismNaw3Shart: "القيمة التقديرية", mosalsal: "9", wasf: "اكثر من 500 الف جنية", tartib: "2", qima: "" },
  { id: 2, kod: "787", ismNaw3Shart: "طريقة التعاقد", mosalsal: "99", wasf: "المناقصة المحدودة", tartib: "3", qima: "500" },
  { id: 3, kod: "325", ismNaw3Shart: "قيمة التامين المؤقت", mosalsal: "3", wasf: "جنية", tartib: "4", qima: "700" },
  { id: 4, kod: "545", ismNaw3Shart: "نمن كراسة الشروط", mosalsal: "4", wasf: "طبقاً للمادة 57 من القانون وذلك لاعتبارات الامن القومي وعدم توافر الوقت", tartib: "5", qima: "" },
  { id: 5, kod: "44", ismNaw3Shart: "تم التعاقد بالمناقصة المحدودة", mosalsal: "92", wasf: "على الشركات المرشحة ذات الخبرة والسمعة الطيبة والمصداق عليها من جواز", tartib: "6", qima: "" },
];

function applyFilters(rows, filters) {
  return rows.filter((row) => Object.entries(filters).every(([key, value]) => !value || String(row[key] || "").includes(value)));
}

function TableFilterCell({ value, onChange, placeholder }) {
  return (
    <div className="min-w-28">
      <Input label={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function MashroSection() {
  return (
    <div className="space-y-3" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
        <Input label="كود نوع المشروع" defaultValue="اعمال المباني" />
        <Input label="العام المالي" type="select" showLabel={false} options={[{ value: "2025/2024", label: "2025/2024" }]} />
        <Input label="تاريخ ورود الكارت" type="select" showLabel={false} options={[{ value: "4585551456", label: "4585551456" }]} />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
        <Input label="تاريخ الاصدار" type="select" showLabel={false} options={[{ value: "2020/2/8", label: "2020/2/8" }]} />
        <Input label="اسلوب النشر والتعاقد" type="select" showLabel={false} options={[{ value: "4585551456", label: "4585551456" }]} />
        <Input label="تاريخ البداية الفعلي" type="select" showLabel={false} options={[{ value: "2020/2/15", label: "2020/2/15" }]} />
        <Input label="تاريخ النهاية الفعلي" type="select" showLabel={false} options={[{ value: "2025/8/10", label: "2025/8/10" }]} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
        <Input label="الجهة الطالبة" defaultValue="مركز تدريب المنشاة النموذجي بالهايكسلت" />
        <Input label="التكلفة التقديرية" showLabel={false} defaultValue="125.252.500" />
        <Input label="نسبة العلاوة" showLabel={false} defaultValue="0.25" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
        <Input label="رقم مذكرة الفرع المالي" showLabel={false} defaultValue="500" />
        <Input label="الفرع المسؤل" showLabel={false} defaultValue="فرع الصيانة" />
        <Input label="الشركة" showLabel={false} defaultValue="شاكر للمقاولات العامة والموردات" />
        <Input label="تاريخ النشر" type="select" showLabel={false} options={[{ value: "2025/5/20", label: "2025/5/20" }]} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
        <Input label="الموظف المسؤل" type="select" showLabel={false} options={[{ value: "الاستاذة/مي", label: "الاستاذة/مي" }]} />
        <Input label="تاريخ الفتح الفعلي" type="select" showLabel={false} options={[{ value: "2025/10/2", label: "2025/10/2" }]} />
        <Input label="المشروع الرئيسي" showLabel={false} defaultValue="4585551456" />
        <Button size="sm" variant="warning" className="h-[48px]">طباعة تقرير اللجان</Button>
      </div>
    </div>
  );
}

function ShorotSection({ shorotData }) {
  const [filters, setFilters] = useState({ kod: "", ismNaw3Shart: "", mosalsal: "", wasf: "", qima: "", tartib: "" });
  const [conditions, setConditions] = useState(shorotData);
  const filtered = useMemo(() => applyFilters(conditions, filters), [conditions, filters]);

  useEffect(() => {
    setConditions(shorotData);
  }, [shorotData]);

  const addCondition = () => setConditions((prev) => [...prev, { id: Date.now(), kod: "", ismNaw3Shart: "", mosalsal: "", wasf: "", tartib: "", qima: "" }]);
  const removeCondition = (id) => setConditions((prev) => prev.filter((row) => row.id !== id));
  const updateCondition = (id, key, value) => setConditions((prev) => prev.map((row) => row.id === id ? { ...row, [key]: value } : row));

  return (
    <div className="space-y-3" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div><Input label="كود المشروع" showLabel={false} defaultValue="4585551456" /></div>
        <div><Input label="اسم المشروع" showLabel={false} defaultValue="صيانة وتشغيل شبكة الكهرباء والمولدات..." /></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-3">
        <div className="order-2 lg:order-1 flex-1 overflow-x-auto border border-gray-200 rounded bg-base">
          <table className="w-full text-sm text-right">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="p-3 font-semibold border-l border-gray-200">كود نوع الشرط</th>
                <th className="p-3 font-semibold border-l border-gray-200">اسم نوع الشرط</th>
                <th className="p-3 font-semibold border-l border-gray-200">مسلسل/ الكود</th>
                <th className="p-3 font-semibold border-l border-gray-200">وصف الشرط</th>
                <th className="p-3 font-semibold border-l border-gray-200">القيمة</th>
                <th className="p-3 font-semibold border-l border-gray-200">ترتيب الشروط</th>
                <th className="p-3 font-semibold">إجراء</th>
              </tr>
              <tr className="border-b border-gray-200 bg-base align-top">
                <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.kod} onChange={(v) => setFilters((p) => ({ ...p, kod: v }))} placeholder="فلتر كود نوع الشرط" /></th>
                <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.ismNaw3Shart} onChange={(v) => setFilters((p) => ({ ...p, ismNaw3Shart: v }))} placeholder="فلتر اسم النوع" /></th>
                <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.mosalsal} onChange={(v) => setFilters((p) => ({ ...p, mosalsal: v }))} placeholder="فلتر المسلسل" /></th>
                <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.wasf} onChange={(v) => setFilters((p) => ({ ...p, wasf: v }))} placeholder="فلتر الوصف" /></th>
                <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.qima} onChange={(v) => setFilters((p) => ({ ...p, qima: v }))} placeholder="فلتر القيمة" /></th>
                <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.tartib} onChange={(v) => setFilters((p) => ({ ...p, tartib: v }))} placeholder="فلتر الترتيب" /></th>
                <th className="p-2"/>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, idx) => (
                <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                  <td className="p-3 border-l border-gray-100"><Input showLabel={false} value={row.kod} onChange={(e)=>updateCondition(row.id,"kod",e.target.value)} label="kod" /></td>
                  <td className="p-3 border-l border-gray-100"><Input showLabel={false} value={row.ismNaw3Shart} onChange={(e)=>updateCondition(row.id,"ismNaw3Shart",e.target.value)} label="ismNaw3Shart" /></td>
                  <td className="p-3 border-l border-gray-100"><Input showLabel={false} value={row.mosalsal} onChange={(e)=>updateCondition(row.id,"mosalsal",e.target.value)} label="mosalsal" /></td>
                  <td className="p-3 border-l border-gray-100 max-w-xs text-xs"><Input showLabel={false} value={row.wasf} onChange={(e)=>updateCondition(row.id,"wasf",e.target.value)} label="wasf" /></td>
                  <td className="p-3 border-l border-gray-100"><Input showLabel={false} value={row.qima} onChange={(e)=>updateCondition(row.id,"qima",e.target.value)} label="qima" /></td>
                  <td className="p-3 border-l border-gray-100"><Input showLabel={false} value={row.tartib} onChange={(e)=>updateCondition(row.id,"tartib",e.target.value)} label="ترتيب" /></td>
                  <td className="p-3"><Button size="sm" variant="danger" onClick={() => removeCondition(row.id)}>حذف</Button></td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-50 font-semibold">
                <td className="p-3 border-l border-gray-100">الإجمالي: {filtered.length}</td>
                <td className="p-3 border-l border-gray-100">الإجمالي: {filtered.length}</td>
                <td className="p-3">الإجمالي: {filtered.length}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="order-1 lg:order-2 flex lg:flex-col gap-2 lg:w-52 self-start">
          <Button size="sm" variant="primary">تسجيل شروط النشر</Button>
          <Button size="sm" variant="primary" onClick={addCondition}>إضافة شرط</Button>
          <Button size="sm" variant="primary">تحميل شروط المذكرة</Button>
          <Button size="sm" className="bg-yellow-500 text-white hover:bg-yellow-600">طباعة العقد</Button>
          <Button size="sm" className="bg-yellow-500 text-white hover:bg-yellow-600">طباعة العقد مبدأئي/بدون</Button>
        </div>
      </div>
    </div>
  );
}

function TarshihSection({ companiesData }) {
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [filtersLeft, setFiltersLeft] = useState({ sharika: "" });
  const companyOptions = companiesData.map((company) => ({ value: company.sharika, label: company.sharika }));
  const [filtersRight, setFiltersRight] = useState({ sharika: "", raqmSijl: "", raqmMwafaqa: "" });

  const leftRows = useMemo(() => applyFilters(companiesData, filtersLeft), [companiesData, filtersLeft]);
  const rightRows = useMemo(() => applyFilters(companiesData, filtersRight), [companiesData, filtersRight]);

  return (
    <div className="space-y-3" dir="rtl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 items-end">
        <AppSelect label="الشركة" isCreatable={false} options={companyOptions} value={companyOptions.find((opt) => opt.value === filtersLeft.sharika) || null} onChange={(opt) => setFiltersLeft({ sharika: opt?.value || "" })} />
        <Input label="المقاولون العرب" showLabel={false} defaultValue="المقاولون العرب" />
        <Input label="السجل" showLabel={false} defaultValue="السجل" />
        <Input label="25555" showLabel={false} defaultValue="25555" />
        <Button size="sm" variant="primary" className="h-[48px]">بحث</Button>
        <Button size="sm" variant="danger" className="h-[48px]">حذف</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border border-gray-200 rounded bg-base overflow-hidden">
          <table className="w-full text-sm text-right">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-3 font-semibold">اسم الشركات المرشحة</th>
              </tr>
              <tr className="bg-base border-b border-gray-200">
                <th className="p-2">-</th>
              </tr>
            </thead>
            <tbody>
              {leftRows.map((c, idx) => (
                <tr
                  key={c.id}
                  onClick={() => setSelectedCompanyId(c.id)}
                  className={`cursor-pointer border-b border-gray-100 ${selectedCompanyId === c.id ? "bg-primary-100" : idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}
                >
                  <td className="p-3">{c.sharika.includes("المقاولون") ? `شركة ${c.sharika}` : c.sharika}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border border-gray-200 rounded bg-base overflow-hidden">
          <table className="w-full text-sm text-right">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="p-3 font-semibold border-l border-gray-200">الشركات</th>
                <th className="p-3 font-semibold border-l border-gray-200">رقم السجل</th>
                <th className="p-3 font-semibold">رقم الموافقة</th>
              </tr>
              <tr className="border-b border-gray-200 bg-base align-top">
                <th className="p-2 border-l border-gray-100"><TableFilterCell value={filtersRight.sharika} onChange={(v) => setFiltersRight((p) => ({ ...p, sharika: v }))} placeholder="فلتر الشركات" /></th>
                <th className="p-2 border-l border-gray-100"><TableFilterCell value={filtersRight.raqmSijl} onChange={(v) => setFiltersRight((p) => ({ ...p, raqmSijl: v }))} placeholder="فلتر رقم السجل" /></th>
                <th className="p-2"><TableFilterCell value={filtersRight.raqmMwafaqa} onChange={(v) => setFiltersRight((p) => ({ ...p, raqmMwafaqa: v }))} placeholder="فلتر رقم الموافقة" /></th>
              </tr>
            </thead>
            <tbody>
              {rightRows.map((c, idx) => (
                <tr
                  key={c.id}
                  onClick={() => setSelectedCompanyId(c.id)}
                  className={`p-2 cursor-pointer border-b border-gray-100 ${selectedCompanyId === c.id ? "bg-primary-100" : idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}
                >
                  <td className="p-3 border-l border-gray-100">{c.sharika}</td>
                  <td className="p-3 border-l border-gray-100">{c.raqmSijl}</td>
                  <td className="p-3">{c.raqmMwafaqa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function BunodSection({ bunodData }) {
  const [filters, setFilters] = useState({ mosalsal: "", wasf: "", kod: "", wahda: "", kamiya: "", qima: "", ijmali: "" });
  const [rows, setRows] = useState(bunodData);
  const filtered = useMemo(() => applyFilters(rows, filters), [rows, filters]);

  useEffect(() => {
    setRows(bunodData);
  }, [bunodData]);

  const updateCondition = (id, key, value) => setRows((prev) => prev.map((row) => row.id === id ? { ...row, [key]: value } : row));

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
            <tr className="border-b border-gray-200 bg-base align-top">
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.mosalsal} onChange={(v) => setFilters((p) => ({ ...p, mosalsal: v }))} placeholder="فلتر المسلسل" /></th>
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.wasf} onChange={(v) => setFilters((p) => ({ ...p, wasf: v }))} placeholder="فلتر الوصف" /></th>
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.kod} onChange={(v) => setFilters((p) => ({ ...p, kod: v }))} placeholder="فلتر الكود" /></th>
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.wahda} onChange={(v) => setFilters((p) => ({ ...p, wahda: v }))} placeholder="فلتر الوحدة" /></th>
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.kamiya} onChange={(v) => setFilters((p) => ({ ...p, kamiya: v }))} placeholder="فلتر الكمية" /></th>
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.qima} onChange={(v) => setFilters((p) => ({ ...p, qima: v }))} placeholder="فلتر القيمة" /></th>
              <th className="p-2"><TableFilterCell value={filters.ijmali} onChange={(v) => setFilters((p) => ({ ...p, ijmali: v }))} placeholder="فلتر الاجمالي" /></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-3 border-l border-gray-100"><Input showLabel={false} value={row.mosalsal} onChange={(e)=>updateCondition(row.id,"mosalsal",e.target.value)} label="mosalsal" /></td>
                <td className="p-3 border-l border-gray-100"><Input showLabel={false} value={row.wasf} onChange={(e)=>updateCondition(row.id,"wasf",e.target.value)} label="wasf" /></td>
                <td className="p-3 border-l border-gray-100"><Input showLabel={false} value={row.kod} onChange={(e)=>updateCondition(row.id,"kod",e.target.value)} label="kod" /></td>
                <td className="p-3 border-l border-gray-100">{row.wahda}</td>
                <td className="p-3 border-l border-gray-100">{row.kamiya}</td>
                <td className="p-3 border-l border-gray-100"><Input showLabel={false} value={row.qima} onChange={(e)=>updateCondition(row.id,"qima",e.target.value)} label="qima" /></td>
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
  const [searchVal, setSearchVal] = useState("");
  const [companiesData, setCompaniesData] = useState(fallbackCompaniesData);
  const [bunodData, setBunodData] = useState(fallbackBunodData);
  const [shorotData, setShorotData] = useState(fallbackShorotData);

  useEffect(() => {
    getNashrFullData(kodMashro3).then((payload) => {
      if (payload?.nominatedCompanies?.length) {
        setCompaniesData(payload.nominatedCompanies.map((item, index) => ({
          id: item.id || index + 1,
          sharika: item.title || "",
          raqmSijl: item.metadata?.raqmSijl || "",
          raqmMwafaqa: item.metadata?.raqmMwafaqa || "",
        })));
      }
      if (payload?.workItems?.length) {
        setBunodData(payload.workItems.map((item, index) => ({
          id: item.id || index + 1,
          mosalsal: item.metadata?.mosalsal || "",
          wasf: item.title || "",
          kod: item.metadata?.kod || "",
          wahda: item.metadata?.wahda || "",
          kamiya: item.metadata?.kamiya || "",
          qima: item.metadata?.qima || "",
          ijmali: item.metadata?.ijmali || String(item.amount ?? ""),
        })));
      }
      if (payload?.conditions?.length) {
        setShorotData(payload.conditions.map((item, index) => ({
          id: item.id || index + 1,
          kod: item.metadata?.kod || "",
          ismNaw3Shart: item.title || "",
          mosalsal: item.metadata?.mosalsal || "",
          wasf: item.metadata?.wasf || "",
          tartib: item.metadata?.tartib || "",
          qima: item.metadata?.qima || "",
        })));
      }
    }).catch(() => {});
  }, [kodMashro3]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "المشروع": return <MashroSection />;
      case "شروط المشروع": return <ShorotSection shorotData={shorotData} />;
      case "ترشيح الشركات": return <TarshihSection companiesData={companiesData} />;
      case "بنود الاعمال": return <BunodSection bunodData={bunodData} />;
      default: return null;
    }
  };

  return (
    <div className="p-4 space-y-4" dir="rtl">
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
        <Input label="العام المالي" type="select" showLabel={false} options={[{ value: amMali, label: amMali }]} />
        <div className="flex-1 min-w-[260px]"><Input label="البحث" showLabel={false} value={searchVal} onChange={(e) => setSearchVal(e.target.value)} /></div>
      </div>

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

      <div className="bg-base rounded border border-gray-100 p-4">
        {renderTabContent()}
      </div>
    </div>
  );
}
