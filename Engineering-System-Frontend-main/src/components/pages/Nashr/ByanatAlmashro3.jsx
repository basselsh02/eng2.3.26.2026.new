import React, { useEffect, useMemo, useState } from "react";
import { Filter } from "lucide-react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import AppSelect from "../../ui/AppSelect/AppSelect";
import {
  createNashrProjectRecord,
  getNashrFullData,
  getNashrRecords,
  softDeleteNashrNominatedCompany,
  softDeleteNashrWorkItem,
} from "../../../api/nashr";

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

function MashroSection({ projectRecord, ownerOptions, onOwnerInputChange, onOwnerEnterSave, isSavingOwner }) {
  const ownerDatalistId = "owner-entity-options";

  return (
    <div className="space-y-3" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
        <Input label="كود نوع المشروع" defaultValue="اعمال المباني" />
        <Input label="العام المالي" type="select" options={[{ value: "2025/2024", label: "2025/2024" }]} />
        <Input label="تاريخ ورود الكارت" type="select" options={[{ value: "4585551456", label: "4585551456" }]} />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
        <Input label="تاريخ الاصدار" type="select" options={[{ value: "2020/2/8", label: "2020/2/8" }]} />
        <Input label="اسلوب النشر والتعاقد" type="select" options={[{ value: "4585551456", label: "4585551456" }]} />
        <Input label="تاريخ البداية الفعلي" type="select" options={[{ value: "2020/2/15", label: "2020/2/15" }]} />
        <Input label="تاريخ النهاية الفعلي" type="select" options={[{ value: "2025/8/10", label: "2025/8/10" }]} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
        <div className="md:col-span-2">
          <Input
            label="الجهة الطالبة"
            list={ownerDatalistId}
            value={projectRecord.metadata?.ownerEntity || ""}
            onChange={(e) => onOwnerInputChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                onOwnerEnterSave();
              }
            }}
            disabled={isSavingOwner}
          />
          <datalist id={ownerDatalistId}>
            {ownerOptions.map((option) => (
              <option key={option} value={option} />
            ))}
          </datalist>
        </div>
        <Input label="التكلفة التقديرية" defaultValue="125.252.500" />
        <Input label="نسبة العلاوة" defaultValue="0.25" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
        <Input label="رقم مذكرة الفرع المالي" defaultValue="500" />
        <Input label="الفرع المسؤل" defaultValue="فرع الصيانة" />
        <Input label="الشركة" defaultValue="شاكر للمقاولات العامة والموردات" />
        <Input label="تاريخ النشر" type="select" options={[{ value: "2025/5/20", label: "2025/5/20" }]} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
        <Input label="الموظف المسؤل" type="select" options={[{ value: "الاستاذة/مي", label: "الاستاذة/مي" }]} />
        <Input label="تاريخ الفتح الفعلي" type="select" options={[{ value: "2025/10/2", label: "2025/10/2" }]} />
        <Input label="المشروع الرئيسي" defaultValue="4585551456" />
        <Button size="sm" variant="warning" className="h-[48px]">طباعة تقرير اللجان</Button>
      </div>

      <div className="flex justify-start">
        <Button size="sm" variant="primary" onClick={onOwnerEnterSave} disabled={isSavingOwner}>
          {isSavingOwner ? "جاري الحفظ..." : "حفظ"}
        </Button>
      </div>
    </div>
  );
}

function ShorotSection({ shorotData }) {
  const [filters, setFilters] = useState({ kod: "", ismNaw3Shart: "", mosalsal: "", wasf: "", qima: "", tartib: "" });
  const [openFilter, setOpenFilter] = useState(null);
  const [conditions, setConditions] = useState(shorotData);
  const filtered = useMemo(() => applyFilters(conditions, filters), [conditions, filters]);
  const totalQima = useMemo(
    () => filtered.reduce((sum, row) => sum + (Number.parseFloat(String(row.qima || "").replace(/,/g, "")) || 0), 0),
    [filtered],
  );

  useEffect(() => {
    setConditions(shorotData);
  }, [shorotData]);

  const addCondition = () => setConditions((prev) => [...prev, { id: Date.now(), kod: "", ismNaw3Shart: "", mosalsal: "", wasf: "", tartib: "", qima: "" }]);
  const removeCondition = (id) => setConditions((prev) => prev.filter((row) => row.id !== id));
  const updateCondition = (id, key, value) => setConditions((prev) => prev.map((row) => row.id === id ? { ...row, [key]: value } : row));
  const renderFilterDropdown = (key, placeholder) => (
    <div className="relative inline-flex">
      <button
        type="button"
        className="rounded p-1 text-primary-600 hover:bg-primary-50"
        onClick={() => setOpenFilter((prev) => prev === key ? null : key)}
        aria-label={`فلتر ${placeholder}`}
      >
        <Filter size={14} />
      </button>
      {openFilter === key && (
        <div className="absolute top-7 right-0 z-20 min-w-44 rounded border border-gray-200 bg-base p-2 shadow-lg">
          <input
            value={filters[key]}
            onChange={(event) => setFilters((prev) => ({ ...prev, [key]: event.target.value }))}
            placeholder={placeholder}
            className="w-full rounded border border-gray-300 px-2 py-1 text-xs"
          />
          <button
            type="button"
            className="mt-2 text-xs text-red-500 hover:underline"
            onClick={() => {
              setFilters((prev) => ({ ...prev, [key]: "" }));
              setOpenFilter(null);
            }}
          >
            مسح
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-3" dir="rtl">
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="order-2 lg:order-1 flex-1 overflow-x-auto border border-gray-200 rounded bg-base">
          <table className="w-full text-sm text-right">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="p-3 font-semibold border-l border-gray-200"><div className="flex items-center justify-between gap-2"><span>كود نوع الشرط</span>{renderFilterDropdown("kod", "فلتر كود نوع الشرط")}</div></th>
                <th className="p-3 font-semibold border-l border-gray-200"><div className="flex items-center justify-between gap-2"><span>اسم نوع الشرط</span>{renderFilterDropdown("ismNaw3Shart", "فلتر اسم النوع")}</div></th>
                <th className="p-3 font-semibold border-l border-gray-200"><div className="flex items-center justify-between gap-2"><span>مسلسل/ الكود</span>{renderFilterDropdown("mosalsal", "فلتر المسلسل")}</div></th>
                <th className="p-3 font-semibold border-l border-gray-200"><div className="flex items-center justify-between gap-2"><span>وصف الشرط</span>{renderFilterDropdown("wasf", "فلتر الوصف")}</div></th>
                <th className="p-3 font-semibold border-l border-gray-200"><div className="flex items-center justify-between gap-2"><span>القيمة</span>{renderFilterDropdown("qima", "فلتر القيمة")}</div></th>
                <th className="p-3 font-semibold border-l border-gray-200"><div className="flex items-center justify-between gap-2"><span>ترتيب الشروط</span>{renderFilterDropdown("tartib", "فلتر الترتيب")}</div></th>
                <th className="p-3 font-semibold">إجراء</th>
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
                <td className="p-3 border-l border-gray-100" />
                <td className="p-3 border-l border-gray-100" />
                <td className="p-3 border-l border-gray-100" />
                <td className="p-3 border-l border-gray-100">الإجمالي</td>
                <td className="p-3 border-l border-gray-100">{totalQima.toLocaleString("ar-EG")}</td>
                <td className="p-3 border-l border-gray-100" />
                <td className="p-3" />
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
      <div className="flex justify-start">
        <Button size="sm" variant="primary">حفظ</Button>
      </div>
    </div>
  );
}

function TarshihSection({ companiesData }) {
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const companyOptions = companiesData.map((company) => ({ value: company.sharika, label: company.sharika }));
  const [filtersRight, setFiltersRight] = useState({ sharika: "", raqmSijl: "", raqmMwafaqa: "" });
  const [openFilter, setOpenFilter] = useState(null);
  const [companies, setCompanies] = useState(companiesData);

  useEffect(() => {
    setCompanies(companiesData);
  }, [companiesData]);

  const rightRows = useMemo(() => applyFilters(companies, filtersRight), [companies, filtersRight]);

  const renderFilterDropdown = (key, placeholder) => (
    <div className="relative inline-flex">
      <button
        type="button"
        className="rounded p-1 text-primary-600 hover:bg-primary-50"
        onClick={() => setOpenFilter((prev) => prev === key ? null : key)}
        aria-label={`فلتر ${placeholder}`}
      >
        <Filter size={14} />
      </button>
      {openFilter === key && (
        <div className="absolute top-7 right-0 z-20 min-w-44 rounded border border-gray-200 bg-base p-2 shadow-lg">
          <input
            value={filtersRight[key]}
            onChange={(event) => setFiltersRight((prev) => ({ ...prev, [key]: event.target.value }))}
            placeholder={placeholder}
            className="w-full rounded border border-gray-300 px-2 py-1 text-xs"
          />
          <button
            type="button"
            className="mt-2 text-xs text-red-500 hover:underline"
            onClick={() => {
              setFiltersRight((prev) => ({ ...prev, [key]: "" }));
              setOpenFilter(null);
            }}
          >
            مسح
          </button>
        </div>
      )}
    </div>
  );

  const handleDeleteCompany = async (id) => {
    try {
      await softDeleteNashrNominatedCompany(id);
      setCompanies((prev) => prev.filter((company) => company.id !== id));
      if (selectedCompanyId === id) {
        setSelectedCompanyId(null);
      }
    } catch {
      // no-op
    }
  };

  return (
    <div className="space-y-3" dir="rtl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
        <AppSelect label="الشركة" isCreatable={false} options={companyOptions} value={companyOptions.find((opt) => opt.value === filtersRight.sharika) || null} onChange={(opt) => setFiltersRight((prev) => ({ ...prev, sharika: opt?.value || "" }))} />
        <Input label="السجل" showLabel={false} defaultValue="السجل" />
      </div>

      <div className="border border-gray-200 rounded bg-base overflow-hidden">
        <table className="w-full text-sm text-right">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="p-3 font-semibold border-l border-gray-200"><div className="flex items-center justify-between gap-2"><span>الشركات</span>{renderFilterDropdown("sharika", "فلتر الشركات")}</div></th>
              <th className="p-3 font-semibold border-l border-gray-200"><div className="flex items-center justify-between gap-2"><span>رقم السجل</span>{renderFilterDropdown("raqmSijl", "فلتر رقم السجل")}</div></th>
              <th className="p-3 font-semibold border-l border-gray-200"><div className="flex items-center justify-between gap-2"><span>رقم الموافقة</span>{renderFilterDropdown("raqmMwafaqa", "فلتر رقم الموافقة")}</div></th>
              <th className="p-3 font-semibold">الأجرائات</th>
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
                <td className="p-3 border-l border-gray-100">{c.raqmMwafaqa}</td>
                <td className="p-3">
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleDeleteCompany(c.id);
                    }}
                  >
                    حذف
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-start">
        <Button size="sm" variant="primary">حفظ</Button>
      </div>
    </div>
  );
}

function BunodSection({ bunodData, projectCode }) {
  const [filters, setFilters] = useState({ mosalsal: "", wasf: "", kod: "", wahda: "", kamiya: "", qima: "", ijmali: "" });
  const [rows, setRows] = useState(bunodData);
  const [isSaving, setIsSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const filtered = useMemo(() => applyFilters(rows, filters), [rows, filters]);
  const totals = useMemo(
    () => rows.reduce((acc, row) => {
      const wahda = Number.parseFloat(String(row.wahda || "").replace(/,/g, "")) || 0;
      const kamiya = Number.parseFloat(String(row.kamiya || "").replace(/,/g, "")) || 0;
      const qima = Number.parseFloat(String(row.qima || "").replace(/,/g, "")) || 0;
      const ijmali = Number.parseFloat(String(row.ijmali || "").replace(/,/g, "")) || 0;
      return {
        wahda: acc.wahda + wahda,
        kamiya: acc.kamiya + kamiya,
        qima: acc.qima + qima,
        ijmali: acc.ijmali + ijmali,
      };
    }, { wahda: 0, kamiya: 0, qima: 0, ijmali: 0 }),
    [rows],
  );

  useEffect(() => {
    setRows(bunodData);
  }, [bunodData]);

  const normalizeNumber = (value) => {
    const parsed = Number.parseFloat(String(value || "").replace(/,/g, ""));
    return Number.isFinite(parsed) ? parsed : 0;
  };

  const updateCondition = (id, key, value) => {
    setRows((prev) => prev.map((row) => {
      if (row.id !== id) return row;
      const updated = { ...row, [key]: value };
      if (key === "qima" || key === "kamiya") {
        const qima = normalizeNumber(key === "qima" ? value : updated.qima);
        const kamiya = normalizeNumber(key === "kamiya" ? value : updated.kamiya);
        updated.ijmali = String(qima * kamiya);
      }
      return updated;
    }));
  };

  const addRow = () => setRows((prev) => [...prev, {
    id: `new-${Date.now()}`,
    mosalsal: "",
    wasf: "",
    kod: "",
    wahda: "",
    kamiya: "",
    qima: "",
    ijmali: "0",
  }]);

  const removeRow = async (id) => {
    if (String(id).startsWith("new-")) {
      setRows((prev) => prev.filter((row) => row.id !== id));
      return;
    }
    setDeletingId(id);
    try {
      await softDeleteNashrWorkItem(id);
      setRows((prev) => prev.filter((row) => row.id !== id));
    } catch {
      // no-op
    } finally {
      setDeletingId(null);
    }
  };

  const saveRows = async () => {
    setIsSaving(true);
    try {
      await Promise.all(rows.map((row) => createNashrProjectRecord({
        subtype: "work-item",
        projectCode: projectCode || "4585551456",
        title: row.wasf || "بند اعمال",
        amount: normalizeNumber(row.ijmali),
        metadata: {
          mosalsal: row.mosalsal || "",
          kod: row.kod || "",
          wahda: row.wahda || "",
          kamiya: row.kamiya || "",
          qima: row.qima || "",
          ijmali: row.ijmali || "0",
        },
      })));
    } catch {
      // no-op
    } finally {
      setIsSaving(false);
    }
  };

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
              <th className="p-3 font-semibold border-l border-gray-200">الاجمالي</th>
              <th className="p-3 font-semibold">الأجرائات</th>
            </tr>
            <tr className="border-b border-gray-200 bg-base align-top">
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.mosalsal} onChange={(v) => setFilters((p) => ({ ...p, mosalsal: v }))} placeholder="فلتر المسلسل" /></th>
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.wasf} onChange={(v) => setFilters((p) => ({ ...p, wasf: v }))} placeholder="فلتر الوصف" /></th>
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.kod} onChange={(v) => setFilters((p) => ({ ...p, kod: v }))} placeholder="فلتر الكود" /></th>
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.wahda} onChange={(v) => setFilters((p) => ({ ...p, wahda: v }))} placeholder="فلتر الوحدة" /></th>
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.kamiya} onChange={(v) => setFilters((p) => ({ ...p, kamiya: v }))} placeholder="فلتر الكمية" /></th>
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.qima} onChange={(v) => setFilters((p) => ({ ...p, qima: v }))} placeholder="فلتر القيمة" /></th>
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.ijmali} onChange={(v) => setFilters((p) => ({ ...p, ijmali: v }))} placeholder="فلتر الاجمالي" /></th>
              <th className="p-2" />
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, idx) => (
              <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}>
                <td className="p-3 border-l border-gray-100"><Input showLabel={false} value={row.mosalsal} onChange={(e)=>updateCondition(row.id,"mosalsal",e.target.value)} label="mosalsal" /></td>
                <td className="p-3 border-l border-gray-100"><Input showLabel={false} value={row.wasf} onChange={(e)=>updateCondition(row.id,"wasf",e.target.value)} label="wasf" /></td>
                <td className="p-3 border-l border-gray-100"><Input showLabel={false} value={row.kod} onChange={(e)=>updateCondition(row.id,"kod",e.target.value)} label="kod" /></td>
                <td className="p-3 border-l border-gray-100"><Input showLabel={false} value={row.wahda} onChange={(e)=>updateCondition(row.id,"wahda",e.target.value)} label="wahda" /></td>
                <td className="p-3 border-l border-gray-100"><Input showLabel={false} value={row.kamiya} onChange={(e)=>updateCondition(row.id,"kamiya",e.target.value)} label="kamiya" /></td>
                <td className="p-3 border-l border-gray-100"><Input showLabel={false} value={row.qima} onChange={(e)=>updateCondition(row.id,"qima",e.target.value)} label="qima" /></td>
                <td className="p-3 border-l border-gray-100"><Input showLabel={false} value={row.ijmali} label="ijmali" readOnly disabled /></td>
                <td className="p-3">
                  <Button size="sm" variant="danger" onClick={() => removeRow(row.id)} disabled={deletingId === row.id}>
                    حذف
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium">اجمالي الاعمال</span>
        <span className="border border-gray-300 rounded px-4 py-2 text-sm bg-base font-semibold min-w-[120px] text-center">{totals.wahda}</span>
        <span className="border border-gray-300 rounded px-4 py-2 text-sm bg-base font-semibold min-w-[120px] text-center">{totals.kamiya}</span>
        <span className="border border-gray-300 rounded px-4 py-2 text-sm bg-base font-semibold min-w-[120px] text-center">{totals.qima}</span>
        <span className="border border-gray-300 rounded px-4 py-2 text-sm bg-primary-500 text-white font-semibold min-w-[120px] text-center">{totals.ijmali}</span>
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="primary" onClick={addRow}>إضافة</Button>
      </div>
      <div className="flex justify-start">
        <Button size="sm" variant="primary" onClick={saveRows} disabled={isSaving}>
          {isSaving ? "جاري الحفظ..." : "حفظ"}
        </Button>
      </div>
    </div>
  );
}

export default function ByanatAlmashro3() {
  const [activeTab, setActiveTab] = useState("المشروع");
  const [kodMashro3, setKodMashro3] = useState("4585551456");
  const [amMali] = useState("2026/2025");
  const [projectLookupVal, setProjectLookupVal] = useState("");
  const [projectOptions, setProjectOptions] = useState([]);
  const [projectRecord, setProjectRecord] = useState({
    projectCode: "4585551456",
    title: "صيانة وتشغيل شبكة الكهرباء والمولدات...",
    metadata: { ownerEntity: "مركز تدريب المنشاة النموذجي بالهايكسلت" },
  });
  const [isSavingOwner, setIsSavingOwner] = useState(false);
  const [companiesData, setCompaniesData] = useState(fallbackCompaniesData);
  const [bunodData, setBunodData] = useState(fallbackBunodData);
  const [shorotData, setShorotData] = useState(fallbackShorotData);

  const filteredProjectOptions = useMemo(() => {
    const query = projectLookupVal.trim().toLowerCase();
    if (!query) return projectOptions;
    return projectOptions.filter((project) => (
      String(project.projectCode || "").toLowerCase().includes(query)
      || String(project.title || "").toLowerCase().includes(query)
    ));
  }, [projectOptions, projectLookupVal]);

  const ownerOptions = useMemo(() => {
    const allOwners = projectOptions
      .map((project) => project?.metadata?.ownerEntity)
      .filter(Boolean);
    const unique = [...new Set(allOwners)];
    const ownerQuery = (projectRecord.metadata?.ownerEntity || "").trim().toLowerCase();
    if (!ownerQuery) return unique;
    return unique.filter((owner) => owner.toLowerCase().includes(ownerQuery));
  }, [projectOptions, projectRecord.metadata?.ownerEntity]);

  const applySelectedProject = (selectedCode) => {
    if (!selectedCode) return;
    const selected = projectOptions.find((project) => project.projectCode === selectedCode);
    if (!selected) return;
    setKodMashro3(selected.projectCode);
    setProjectLookupVal(`${selected.projectCode} - ${selected.title}`);
    setProjectRecord((prev) => ({ ...prev, ...selected, metadata: selected.metadata || prev.metadata || {} }));
  };

  useEffect(() => {
    getNashrRecords({ page: 1, pageSize: 500 }).then((records) => {
      const projects = records.filter((item) => item.subtype === "project");
      const normalized = projects.map((item, index) => ({
        id: item.id || item._id || index + 1,
        projectCode: item.projectCode || "",
        title: item.title || "",
        metadata: item.metadata || {},
      }));
      setProjectOptions(normalized);
      const currentProject = normalized.find((project) => project.projectCode === kodMashro3);
      if (currentProject) {
        setProjectLookupVal(`${currentProject.projectCode} - ${currentProject.title}`);
        setProjectRecord((prev) => ({ ...prev, ...currentProject }));
      }
    }).catch(() => {});
  }, [kodMashro3]);

  useEffect(() => {
    getNashrFullData(kodMashro3).then((payload) => {
      if (payload?.project) {
        setProjectRecord({
          projectCode: payload.project.projectCode || kodMashro3,
          title: payload.project.title || "",
          metadata: payload.project.metadata || {},
        });
        setProjectLookupVal(`${payload.project.projectCode || kodMashro3} - ${payload.project.title || ""}`);
      }
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

  const saveProjectOwner = async () => {
    const ownerValue = projectRecord.metadata?.ownerEntity?.trim();
    if (!ownerValue) return;
    setIsSavingOwner(true);
    try {
      await createNashrProjectRecord({
        projectCode: projectRecord.projectCode || kodMashro3,
        title: projectRecord.title || "بيانات المشروع",
        amount: Number(projectRecord.amount || 0),
        metadata: {
          ...(projectRecord.metadata || {}),
          ownerEntity: ownerValue,
        },
      });
      if (!ownerOptions.includes(ownerValue)) {
        setProjectOptions((prev) => [
          ...prev,
          {
            id: Date.now(),
            projectCode: projectRecord.projectCode || kodMashro3,
            title: projectRecord.title || "بيانات المشروع",
            metadata: {
              ...(projectRecord.metadata || {}),
              ownerEntity: ownerValue,
            },
          },
        ]);
      }
    } catch {
      // no-op
    } finally {
      setIsSavingOwner(false);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "المشروع":
        return (
          <MashroSection
            projectRecord={projectRecord}
            ownerOptions={ownerOptions}
            onOwnerInputChange={(value) => setProjectRecord((prev) => ({
              ...prev,
              metadata: { ...(prev.metadata || {}), ownerEntity: value },
            }))}
            onOwnerEnterSave={saveProjectOwner}
            isSavingOwner={isSavingOwner}
          />
        );
      case "شروط المشروع": return <ShorotSection shorotData={shorotData} />;
      case "ترشيح الشركات": return <TarshihSection companiesData={companiesData} />;
      case "بنود الاعمال": return <BunodSection bunodData={bunodData} projectCode={kodMashro3} />;
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
        <div className="w-full md:w-auto md:min-w-[320px]">
          <Input
            label="بحث المشروع (الاسم / الكود)"
            value={projectLookupVal}
            onChange={(e) => setProjectLookupVal(e.target.value)}
            list="project-search-options"
            onBlur={() => {
              const matched = filteredProjectOptions.find((project) => (
                `${project.projectCode} - ${project.title}` === projectLookupVal
                || project.projectCode === projectLookupVal
                || project.title === projectLookupVal
              ));
              if (matched) applySelectedProject(matched.projectCode);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const matched = filteredProjectOptions.find((project) => (
                  `${project.projectCode} - ${project.title}` === projectLookupVal
                  || project.projectCode === projectLookupVal
                  || project.title === projectLookupVal
                ));
                if (matched) {
                  e.preventDefault();
                  applySelectedProject(matched.projectCode);
                }
              }
            }}
          />
          <datalist id="project-search-options">
            {filteredProjectOptions.map((project) => (
              <option key={`${project.id}-code-title`} value={`${project.projectCode} - ${project.title}`} />
            ))}
            {filteredProjectOptions.map((project) => (
              <option key={`${project.id}-code`} value={project.projectCode} />
            ))}
            {filteredProjectOptions.map((project) => (
              <option key={`${project.id}-title`} value={project.title} />
            ))}
          </datalist>
        </div>
        <Input label="العام المالي" type="select" showLabel={false} options={[{ value: amMali, label: amMali }]} />
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
