import React, { useMemo, useState } from "react";
import SearchBar from "../../ui/SearchBar/SearchBar";
import AppSelect from "../../ui/AppSelect/AppSelect";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import TableFilterCell, { applyFilters } from "../../ui/TableFilter/TableFilterCell";

const yearOptions = [
  { value: "2026/2025", label: "2026/2025" },
  { value: "2025/2024", label: "2025/2024" },
];

export default function TasjilAlMawqifAlMali() {
  const [year, setYear] = useState(yearOptions[0]);
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({ kod: "", wasf: "" });
  const [rows, setRows] = useState([
    { id: 1, kod: "E-001", wasf: "فتح المظاريف الفنية" },
    { id: 2, kod: "E-002", wasf: "إحالة إلى اللجنة المالية" },
  ]);

  const filteredRows = useMemo(() => {
    const base = applyFilters(rows, filters);
    if (!searchText) return base;
    return base.filter((row) => Object.values(row).some((v) => String(v).toLowerCase().includes(searchText.toLowerCase())));
  }, [rows, filters, searchText]);

  return (
    <div className="p-4 space-y-4" dir="rtl">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 items-end border border-gray-200 rounded p-3 bg-base">
        <div className="lg:col-span-3">
          <SearchBar
            placeholder="بحث في الأحداث المالية"
            fields={[
              { value: "kod", label: "الكود" },
              { value: "wasf", label: "وصف الحدث" },
            ]}
            onSearch={(value) => setSearchText(value)}
          />
        </div>
        <AppSelect label="العام المالي" options={yearOptions} value={year} onChange={setYear} isCreatable={false} />
      </div>

      <div className="border border-gray-200 rounded bg-base p-3 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">تسجيل الموقف المالي</h3>
          <Button
            size="sm"
            onClick={() => setRows((prev) => [...prev, { id: Date.now(), kod: `E-${String(prev.length + 1).padStart(3, "0")}`, wasf: "" }])}
          >
            إضافة صف
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-right">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="p-3 font-semibold border-l border-gray-200">الكود</th>
                <th className="p-3 font-semibold">وصف الحدث</th>
              </tr>
              <tr className="border-b border-gray-200 bg-base align-top">
                <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.kod} onChange={(v) => setFilters((p) => ({ ...p, kod: v }))} placeholder="فلتر الكود" /></th>
                <th className="p-2"><TableFilterCell value={filters.wasf} onChange={(v) => setFilters((p) => ({ ...p, wasf: v }))} placeholder="فلتر الوصف" /></th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, idx) => (
                <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"}`}>
                  <td className="p-2 border-l border-gray-100 min-w-44">
                    <Input
                      showLabel={false}
                      label="الكود"
                      value={row.kod}
                      onChange={(e) => setRows((prev) => prev.map((r) => r.id === row.id ? { ...r, kod: e.target.value } : r))}
                    />
                  </td>
                  <td className="p-2 min-w-96">
                    <Input
                      showLabel={false}
                      label="الوصف"
                      value={row.wasf}
                      onChange={(e) => setRows((prev) => prev.map((r) => r.id === row.id ? { ...r, wasf: e.target.value } : r))}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
