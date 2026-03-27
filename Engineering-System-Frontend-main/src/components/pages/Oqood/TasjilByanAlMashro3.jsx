import React, { useMemo, useState } from "react";
import SearchBar from "../../ui/SearchBar/SearchBar";
import AppSelect from "../../ui/AppSelect/AppSelect";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import TableFilterCell, { applyFilters } from "../../ui/TableFilter/TableFilterCell";

const years = [
  { value: "2026/2025", label: "2026/2025" },
  { value: "2025/2024", label: "2025/2024" },
];

const projectOptions = [
  { value: "all", label: "كل المشروعات" },
  { value: "build", label: "مشروعات مباني" },
  { value: "infra", label: "مشروعات بنية تحتية" },
];

const projectsData = [
  { id: 1, raqmMashro3: "2588888", ismMashro3: "إنشاء الهيكل رقم 9", taklfaMashro3: "100.000.000", kodFar3: "2546", ismFar3Monafez: "اللواء 152 إنشاءات" },
  { id: 2, raqmMashro3: "2589999", ismMashro3: "تطوير شبكة مياه", taklfaMashro3: "86.500.000", kodFar3: "3320", ismFar3Monafez: "فرع الصيانة" },
  { id: 3, raqmMashro3: "2590000", ismMashro3: "توريد معدات", taklfaMashro3: "40.000.000", kodFar3: "6500", ismFar3Monafez: "فرع الإمداد" },
];

const companyOptions = [
  { value: "شركة المقاولون العرب", label: "شركة المقاولون العرب" },
  { value: "أطلس للمقاولات", label: "أطلس للمقاولات" },
  { value: "كيان للمقاولات", label: "كيان للمقاولات" },
];

const purchaseSeed = [
  { id: 1, kod: "ملتزم", ismSharika: "شركة المقاولون العرب", tamAlShra: true, tariqaDaf3: "بدون" },
  { id: 2, kod: "ملتزم", ismSharika: "أطلس للمقاولات", tamAlShra: false, tariqaDaf3: "نقدي" },
];

const [VIEW_COMMITTEE, VIEW_PURCHASE] = ["committee", "purchase"];

export default function TasjilByanAlMashro3() {
  const [searchText, setSearchText] = useState("");
  const [searchField, setSearchField] = useState("all");
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedType, setSelectedType] = useState(projectOptions[0]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [view, setView] = useState(VIEW_COMMITTEE);

  const [committeeRows, setCommitteeRows] = useState([
    { id: 1, recordNo: "REC-0001", company: companyOptions[0], note: "لجنة فنية" },
  ]);

  const [memberRows, setMemberRows] = useState([
    { id: 1, recordNo: "MEM-0001", company: companyOptions[1], memberName: "م/ أحمد محمود" },
  ]);

  const [purchaseRows, setPurchaseRows] = useState(purchaseSeed);
  const [projectFilters, setProjectFilters] = useState({ raqmMashro3: "", ismMashro3: "", taklfaMashro3: "", kodFar3: "", ismFar3Monafez: "" });
  const [companyFilters, setCompanyFilters] = useState({ kod: "", ismSharika: "", tamAlShra: "", tariqaDaf3: "" });

  const onSearch = (value, field) => {
    setSearchText(value);
    setSearchField(field);
  };

  const filteredProjects = useMemo(() => {
    const base = applyFilters(projectsData, projectFilters);
    if (!searchText) return base;
    return base.filter((row) => {
      if (searchField === "all") return Object.values(row).some((v) => String(v).toLowerCase().includes(searchText.toLowerCase()));
      return String(row[searchField] ?? "").toLowerCase().includes(searchText.toLowerCase());
    });
  }, [projectFilters, searchField, searchText]);

  const filteredPurchaseRows = useMemo(() => applyFilters(purchaseRows, companyFilters), [purchaseRows, companyFilters]);

  const addCommitteeRow = () => {
    const next = committeeRows.length + 1;
    setCommitteeRows((prev) => [...prev, { id: Date.now(), recordNo: `REC-${String(next).padStart(4, "0")}`, company: null, note: "" }]);
  };

  const addMemberRow = () => {
    const next = memberRows.length + 1;
    setMemberRows((prev) => [...prev, { id: Date.now(), recordNo: `MEM-${String(next).padStart(4, "0")}`, company: null, memberName: "" }]);
  };

  return (
    <div className="p-4 space-y-4" dir="rtl">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 items-end border border-gray-200 rounded p-3 bg-base">
        <div className="lg:col-span-2">
          <SearchBar
            placeholder="ابحث في نتائج المشروع..."
            fields={[
              { value: "raqmMashro3", label: "رقم المشروع" },
              { value: "ismMashro3", label: "اسم المشروع" },
              { value: "ismFar3Monafez", label: "الفرع" },
            ]}
            onSearch={onSearch}
          />
        </div>
        <AppSelect label="العام المالي" options={years} value={selectedYear} onChange={setSelectedYear} isCreatable={false} />
        <AppSelect label="نوع المشروع" options={projectOptions} value={selectedType} onChange={setSelectedType} isCreatable={false} />
      </div>

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
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={projectFilters.raqmMashro3} onChange={(v) => setProjectFilters((p) => ({ ...p, raqmMashro3: v }))} placeholder="فلتر" /></th>
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={projectFilters.ismMashro3} onChange={(v) => setProjectFilters((p) => ({ ...p, ismMashro3: v }))} placeholder="فلتر" /></th>
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={projectFilters.taklfaMashro3} onChange={(v) => setProjectFilters((p) => ({ ...p, taklfaMashro3: v }))} placeholder="فلتر" /></th>
              <th className="p-2 border-l border-gray-100"><TableFilterCell value={projectFilters.kodFar3} onChange={(v) => setProjectFilters((p) => ({ ...p, kodFar3: v }))} placeholder="فلتر" /></th>
              <th className="p-2"><TableFilterCell value={projectFilters.ismFar3Monafez} onChange={(v) => setProjectFilters((p) => ({ ...p, ismFar3Monafez: v }))} placeholder="فلتر" /></th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((row, idx) => (
              <tr
                key={row.id}
                onClick={() => setSelectedProjectId(row.id)}
                className={`cursor-pointer border-b border-gray-100 ${selectedProjectId === row.id ? "bg-primary-100" : idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"} hover:bg-primary-50`}
              >
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

      <div className="flex gap-2">
        <Button onClick={() => setView(VIEW_COMMITTEE)} variant={view === VIEW_COMMITTEE ? "primary" : "secondary"}>بيانات اللجنة</Button>
        <Button onClick={() => setView(VIEW_PURCHASE)} variant={view === VIEW_PURCHASE ? "primary" : "secondary"}>شراء الكراسات</Button>
      </div>

      {selectedProjectId && view === VIEW_COMMITTEE && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded bg-base p-3 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold">بيانات اللجنة</h3>
              <Button size="sm" onClick={addCommitteeRow}>إضافة صف</Button>
            </div>
            <table className="w-full text-sm text-right">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-2 border-l border-gray-200">رقم القيد</th>
                  <th className="p-2 border-l border-gray-200">الشركة</th>
                  <th className="p-2">ملاحظات</th>
                </tr>
              </thead>
              <tbody>
                {committeeRows.map((row) => (
                  <tr key={row.id} className="border-b border-gray-100">
                    <td className="p-2 border-l border-gray-100">{row.recordNo}</td>
                    <td className="p-2 border-l border-gray-100 min-w-52">
                      <AppSelect
                        label="الشركة"
                        isCreatable={false}
                        options={companyOptions}
                        value={row.company}
                        onChange={(option) => setCommitteeRows((prev) => prev.map((r) => r.id === row.id ? { ...r, company: option } : r))}
                      />
                    </td>
                    <td className="p-2 min-w-52">
                      <Input showLabel={false} label="ملاحظات" value={row.note} onChange={(e) => setCommitteeRows((prev) => prev.map((r) => r.id === row.id ? { ...r, note: e.target.value } : r))} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border border-gray-200 rounded bg-base p-3 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold">بيانات أعضاء اللجنة</h3>
              <Button size="sm" onClick={addMemberRow}>إضافة صف</Button>
            </div>
            <table className="w-full text-sm text-right">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-2 border-l border-gray-200">رقم القيد</th>
                  <th className="p-2 border-l border-gray-200">الشركة</th>
                  <th className="p-2">اسم العضو</th>
                </tr>
              </thead>
              <tbody>
                {memberRows.map((row) => (
                  <tr key={row.id} className="border-b border-gray-100">
                    <td className="p-2 border-l border-gray-100">{row.recordNo}</td>
                    <td className="p-2 border-l border-gray-100 min-w-52">
                      <AppSelect
                        label="الشركة"
                        isCreatable={false}
                        options={companyOptions}
                        value={row.company}
                        onChange={(option) => setMemberRows((prev) => prev.map((r) => r.id === row.id ? { ...r, company: option } : r))}
                      />
                    </td>
                    <td className="p-2 min-w-52">
                      <Input showLabel={false} label="اسم العضو" value={row.memberName} onChange={(e) => setMemberRows((prev) => prev.map((r) => r.id === row.id ? { ...r, memberName: e.target.value } : r))} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {view === VIEW_PURCHASE && (
        <div className="space-y-3">
          <div className="overflow-x-auto border border-gray-200 rounded bg-base">
            <table className="w-full text-sm text-right">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="p-3 font-semibold border-l border-gray-200">الكود</th>
                  <th className="p-3 font-semibold border-l border-gray-200">اسم الشركة المرشحة</th>
                  <th className="p-3 font-semibold border-l border-gray-200">تم الشراء</th>
                  <th className="p-3 font-semibold">طريقة دفع التأمين</th>
                </tr>
                <tr className="border-b border-gray-200 bg-base align-top">
                  <th className="p-2 border-l border-gray-100"><TableFilterCell value={companyFilters.kod} onChange={(v) => setCompanyFilters((p) => ({ ...p, kod: v }))} placeholder="فلتر" /></th>
                  <th className="p-2 border-l border-gray-100"><TableFilterCell value={companyFilters.ismSharika} onChange={(v) => setCompanyFilters((p) => ({ ...p, ismSharika: v }))} placeholder="فلتر" /></th>
                  <th className="p-2 border-l border-gray-100"><TableFilterCell value={companyFilters.tamAlShra} onChange={(v) => setCompanyFilters((p) => ({ ...p, tamAlShra: v }))} placeholder="فلتر" /></th>
                  <th className="p-2"><TableFilterCell value={companyFilters.tariqaDaf3} onChange={(v) => setCompanyFilters((p) => ({ ...p, tariqaDaf3: v }))} placeholder="فلتر" /></th>
                </tr>
              </thead>
              <tbody>
                {filteredPurchaseRows.map((row, idx) => (
                  <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"}`}>
                    <td className="p-3 border-l border-gray-100">{row.kod}</td>
                    <td className="p-3 border-l border-gray-100">{row.ismSharika}</td>
                    <td className="p-3 border-l border-gray-100"><input type="checkbox" checked={row.tamAlShra} readOnly className="w-4 h-4 accent-primary-500" /></td>
                    <td className="p-3">{row.tariqaDaf3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex gap-2 justify-end">
            <Button variant="warning">حفظ</Button>
            <Button variant="warning">طباعة</Button>
          </div>
        </div>
      )}
    </div>
  );
}
