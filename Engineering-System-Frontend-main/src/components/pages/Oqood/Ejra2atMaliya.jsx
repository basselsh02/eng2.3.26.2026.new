import React, { useMemo, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import SearchBar from "../../ui/SearchBar/SearchBar";
import AppSelect from "../../ui/AppSelect/AppSelect";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import FormDatePicker from "../../ui/FormDatePicker/FormDatePicker";
import TableFilterCell, { applyFilters } from "../../ui/TableFilter/TableFilterCell";

const yearOptions = [
  { value: "2026/2025", label: "2026/2025" },
  { value: "2025/2024", label: "2025/2024" },
];
const projectOptions = [
  { value: "2588888", label: "2588888 - إنشاء الهيكل رقم 9" },
  { value: "2590000", label: "2590000 - تطوير مرافق" },
];
const offerTypeOptions = [
  { value: "أساسي", label: "عرض أساسي" },
  { value: "بديل", label: "عرض بديل" },
];
const decisionOptions = [
  { value: "مقبول", label: "مقبول" },
  { value: "مرفوض", label: "مرفوض" },
];
const paperTypeOptions = [
  { value: "مظروف مالي", label: "مظروف مالي" },
  { value: "مرفقات", label: "مرفقات" },
];

export default function Ejra2atMaliya() {
  const [year, setYear] = useState(yearOptions[0]);
  const [project, setProject] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [rankNames, setRankNames] = useState({ a: "الرتبة A", b: "الرتبة B", c: "الرتبة C" });
  const [filters, setFilters] = useState({ tarikh: "", qarar: "", adadAwraq: "", naw3Waraqa: "" });

  const { control, register } = useForm({
    defaultValues: {
      offers: [
        {
          offerType: offerTypeOptions[0],
          offerNo: "1",
          offerDate: new Date(),
          expiryDate: new Date(),
          serialOrder: "1",
          extraConditions: "",
        },
      ],
    },
  });

  const { fields: offers, append: appendOffer } = useFieldArray({ control, name: "offers" });

  const [bottomRows, setBottomRows] = useState([
    { id: 1, tarikh: "2026/03/20", qarar: "مقبول", securityApproval: "مؤمن", adadAwraq: "9", naw3Waraqa: "مظروف مالي" },
  ]);

  const filteredBottomRows = useMemo(() => {
    const base = applyFilters(bottomRows, filters);
    if (!searchText) return base;
    return base.filter((row) => Object.values(row).some((v) => String(v).toLowerCase().includes(searchText.toLowerCase())));
  }, [bottomRows, filters, searchText]);

  const rankTable = useMemo(() => [
    { rank: rankNames.a, company: "شركة المقاولون العرب", price: "95,000,000" },
    { rank: rankNames.b, company: "أطلس للمقاولات", price: "97,000,000" },
    { rank: rankNames.c, company: "كيان للمقاولات", price: "99,500,000" },
  ], [rankNames]);

  return (
    <div className="p-4 space-y-4" dir="rtl">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 items-end border border-gray-200 rounded p-3 bg-base">
        <div className="lg:col-span-2">
          <SearchBar
            fields={[{ value: "all", label: "كل الحقول" }, { value: "tarikh", label: "التاريخ" }, { value: "qarar", label: "قرار اللجنة" }]}
            onSearch={(value) => setSearchText(value)}
            placeholder="بحث في الإجراءات المالية"
          />
        </div>
        <AppSelect label="العام المالي" options={yearOptions} value={year} onChange={setYear} isCreatable={false} />
        <AppSelect label="المشروع" options={projectOptions} value={project} onChange={setProject} isCreatable={false} />
      </div>

      {project && (
        <>
          <div className="space-y-3 border border-gray-200 rounded bg-base p-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold">عروض الشركات</h3>
              <Button size="sm" onClick={() => appendOffer({ offerType: offerTypeOptions[0], offerNo: "", offerDate: null, expiryDate: null, serialOrder: String(offers.length + 1), extraConditions: "" })}>إضافة شركة</Button>
            </div>

            {offers.map((offer, index) => (
              <div key={offer.id} className="border border-gray-100 rounded p-3 space-y-3 bg-gray-50/40">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <Input label="اسم الشركة" defaultValue="شركة المقاولون العرب" />
                  <AppSelect label="نوع العرض" options={offerTypeOptions} isCreatable={false} />
                  <Input label="رقم العرض" {...register(`offers.${index}.offerNo`)} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <FormDatePicker control={control} name={`offers.${index}.offerDate`} label="تاريخ العرض" />
                  <FormDatePicker control={control} name={`offers.${index}.expiryDate`} label="تاريخ انتهاء العرض" />
                  <Input label="الترتيب المسلسل" {...register(`offers.${index}.serialOrder`)} />
                </div>
                <div>
                  <label className="block mb-1 text-sm text-gray-600">شروط إضافية</label>
                  <textarea className="w-full border border-gray-300 rounded px-3 py-2 bg-background min-h-20" {...register(`offers.${index}.extraConditions`)} />
                </div>
              </div>
            ))}
          </div>

          <div className="border border-gray-200 rounded bg-base p-3 space-y-3">
            <h3 className="font-bold">الرتب والتقييم المالي</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Input label="اسم الرتبة الأولى" value={rankNames.a} onChange={(e) => setRankNames((p) => ({ ...p, a: e.target.value }))} />
              <Input label="اسم الرتبة الثانية" value={rankNames.b} onChange={(e) => setRankNames((p) => ({ ...p, b: e.target.value }))} />
              <Input label="اسم الرتبة الثالثة" value={rankNames.c} onChange={(e) => setRankNames((p) => ({ ...p, c: e.target.value }))} />
            </div>
            <table className="w-full text-sm text-right border border-gray-100 rounded overflow-hidden">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-2 border-l border-gray-200">الرتبة</th>
                  <th className="p-2 border-l border-gray-200">الشركة</th>
                  <th className="p-2">القيمة المالية</th>
                </tr>
              </thead>
              <tbody>
                {rankTable.map((row, idx) => (
                  <tr key={row.rank} className={idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"}>
                    <td className="p-2 border-l border-gray-100">{row.rank}</td>
                    <td className="p-2 border-l border-gray-100">{row.company}</td>
                    <td className="p-2">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-start gap-2">
              <Button variant="warning">طباعة نموذج 7</Button>
              <Button variant="warning">طباعة نموذج 8</Button>
            </div>
          </div>

          <div className="border border-gray-200 rounded bg-base p-3 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold">البت المالي - بيانات الشركات</h3>
              <Button
                size="sm"
                onClick={() => setBottomRows((prev) => [...prev, { id: Date.now(), tarikh: "", qarar: "مقبول", securityApproval: "مؤمن", adadAwraq: "", naw3Waraqa: "مظروف مالي" }])}
              >
                إضافة صف
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-right">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="p-2 border-l border-gray-200">التاريخ</th>
                    <th className="p-2 border-l border-gray-200">قرار اللجنة</th>
                    <th className="p-2 border-l border-gray-200">الموافقة الأمنية</th>
                    <th className="p-2 border-l border-gray-200">عدد الأوراق</th>
                    <th className="p-2">نوع الورقة</th>
                  </tr>
                  <tr className="border-b border-gray-200 bg-base align-top">
                    <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.tarikh} onChange={(v) => setFilters((p) => ({ ...p, tarikh: v }))} placeholder="فلتر" /></th>
                    <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.qarar} onChange={(v) => setFilters((p) => ({ ...p, qarar: v }))} placeholder="فلتر" /></th>
                    <th className="p-2 border-l border-gray-100" />
                    <th className="p-2 border-l border-gray-100"><TableFilterCell value={filters.adadAwraq} onChange={(v) => setFilters((p) => ({ ...p, adadAwraq: v }))} placeholder="فلتر" /></th>
                    <th className="p-2"><TableFilterCell value={filters.naw3Waraqa} onChange={(v) => setFilters((p) => ({ ...p, naw3Waraqa: v }))} placeholder="فلتر" /></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBottomRows.map((row, idx) => (
                    <tr key={row.id} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-base" : "bg-gray-50/50"}`}>
                      <td className="p-2 border-l border-gray-100">
                        <Input showLabel={false} label="التاريخ" value={row.tarikh} onChange={(e) => setBottomRows((prev) => prev.map((r) => r.id === row.id ? { ...r, tarikh: e.target.value } : r))} />
                      </td>
                      <td className="p-2 border-l border-gray-100 min-w-40">
                        <AppSelect
                          label="قرار"
                          options={decisionOptions}
                          isCreatable={false}
                          value={decisionOptions.find((op) => op.value === row.qarar)}
                          onChange={(option) => setBottomRows((prev) => prev.map((r) => r.id === row.id ? { ...r, qarar: option?.value || "" } : r))}
                        />
                      </td>
                      <td className="p-2 border-l border-gray-100">{row.securityApproval}</td>
                      <td className="p-2 border-l border-gray-100">
                        <Input showLabel={false} label="عدد الأوراق" value={row.adadAwraq} onChange={(e) => setBottomRows((prev) => prev.map((r) => r.id === row.id ? { ...r, adadAwraq: e.target.value } : r))} />
                      </td>
                      <td className="p-2 min-w-44">
                        <AppSelect
                          label="نوع الورقة"
                          options={paperTypeOptions}
                          isCreatable={false}
                          value={paperTypeOptions.find((op) => op.value === row.naw3Waraqa)}
                          onChange={(option) => setBottomRows((prev) => prev.map((r) => r.id === row.id ? { ...r, naw3Waraqa: option?.value || "" } : r))}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
