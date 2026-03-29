import React, { useEffect, useMemo, useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import apiClient from "../../../api/client";

const tabs = ["المشروع", "شروط المشروع", "ترشيح الشركات", "بنود الاعمال"];

const emptyProject = {
  projectTypeCode: "",
  cardReceivedDate: "",
  releaseDate: "",
  publishingMethod: "",
  actualStartDate: "",
  actualEndDate: "",
  requestingParty: "",
  estimatedCost: "",
  bonusRate: "",
  financialMemoNo: "",
  responsibleBranch: "",
  company: "",
  publishDate: "",
  responsibleEmployee: "",
  parentProject: "",
  openingDate: "",
};

const defaultState = {
  financialYear: "",
  selectedProject: { code: "", name: "" },
  project: emptyProject,
  shorot: [],
  tarshihCompanies: [],
  bunod: [],
  requestingParties: [],
};

const toNumber = (v) => Number(String(v || "").replace(/,/g, "")) || 0;
const bunodIjmali = (row) => (toNumber(row.kamiya) * toNumber(row.qima)).toFixed(2);

function FilterIconCell({ value, onChange }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex justify-center">
      <button type="button" className="text-primary-600" onClick={() => setOpen((p) => !p)} title="فلتر">⏷</button>
      {open && (
        <div className="absolute top-6 z-20 w-40 rounded border border-gray-200 bg-base p-2 shadow">
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="بحث"
            className="w-full rounded border border-gray-300 px-2 py-1 text-xs"
          />
          <button type="button" className="mt-2 text-xs text-red-500" onClick={() => { onChange(""); setOpen(false); }}>مسح</button>
        </div>
      )}
    </div>
  );
}

function SaveButton({ onClick }) {
  return <div className="pt-3"><Button onClick={onClick}>حفظ</Button></div>;
}

export default function ByanatAlmashro3() {
  const [activeTab, setActiveTab] = useState("المشروع");
  const [form, setForm] = useState(defaultState);
  const [projectQuery, setProjectQuery] = useState("");
  const [projectOptions, setProjectOptions] = useState([]);
  const [partyOptions, setPartyOptions] = useState([]);
  const [shorotFilters, setShorotFilters] = useState({ kod: "", ismNaw3Shart: "", mosalsal: "", wasf: "", qima: "", tartib: "" });
  const [tarshihFilters, setTarshihFilters] = useState({ sharika: "", raqmSijl: "", raqmMwafaqa: "" });
  const [bunodFilters, setBunodFilters] = useState({ mosalsal: "", wasf: "", kod: "", wahda: "", kamiya: "", qima: "", ijmali: "" });

  useEffect(() => {
    apiClient.get("/api/nashr/byanat-almashro3").then(({ data }) => {
      setForm({ ...defaultState, ...data.data.metadata });
      setProjectQuery(`${data.data.metadata?.selectedProject?.code || ""}`);
    });
  }, []);

  useEffect(() => {
    const run = async () => {
      const { data } = await apiClient.get("/api/nashr/byanat-almashro3/projects", { params: { query: projectQuery } });
      setProjectOptions(data.items || []);
    };
    run();
  }, [projectQuery]);

  useEffect(() => {
    const run = async () => {
      const { data } = await apiClient.get("/api/nashr/byanat-almashro3/requesting-parties", { params: { query: form.project.requestingParty } });
      setPartyOptions(data.items || []);
    };
    run();
  }, [form.project.requestingParty]);

  const saveAll = async () => {
    await apiClient.put("/api/nashr/byanat-almashro3", {
      projectCode: form.selectedProject.code,
      metadata: form,
    });
  };

  const filterRows = (rows, filters, extra = {}) => rows.filter((row) => Object.entries(filters).every(([k, v]) => !v || String(extra[k] ? extra[k](row) : row[k] || "").includes(v)));

  const filteredShorot = useMemo(() => filterRows(form.shorot, shorotFilters), [form.shorot, shorotFilters]);
  const filteredTarshih = useMemo(() => filterRows(form.tarshihCompanies.filter((r) => !r.isDeleted), tarshihFilters), [form.tarshihCompanies, tarshihFilters]);
  const filteredBunod = useMemo(() => filterRows(form.bunod.filter((r) => !r.isDeleted), bunodFilters, { ijmali: bunodIjmali }), [form.bunod, bunodFilters]);
  const shorotTotal = filteredShorot.reduce((acc, row) => acc + toNumber(row.qima), 0).toFixed(2);
  const bunodTotal = filteredBunod.reduce((acc, row) => acc + Number(bunodIjmali(row)), 0).toFixed(2);

  return (
    <div className="p-4 space-y-4" dir="rtl">
      <div className="flex flex-wrap items-end gap-3 border border-gray-200 rounded p-3 bg-base">
        <Input label="العام المالي" type="select" options={[{ value: form.financialYear || "", label: form.financialYear || "" }]} />
        <div className="relative flex-1 min-w-[300px]">
          <Input label="البحث (كود / اسم المشروع)" value={projectQuery} onChange={(e) => setProjectQuery(e.target.value)} />
          {!!projectOptions.length && (
            <div className="absolute z-20 mt-1 max-h-52 w-full overflow-auto rounded border border-gray-200 bg-base shadow">
              {projectOptions.map((p) => (
                <button
                  key={p.code}
                  type="button"
                  className="block w-full border-b border-gray-100 px-3 py-2 text-right hover:bg-primary-50"
                  onClick={() => {
                    setForm((prev) => ({ ...prev, selectedProject: { code: p.code, name: p.name }, financialYear: String(p.financialYear || prev.financialYear) }));
                    setProjectQuery(`${p.code} - ${p.name}`);
                  }}
                >{p.code} - {p.name}</button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-4 border-b border-gray-200 pb-1">{tabs.map((tab) => <button key={tab} onClick={() => setActiveTab(tab)} className={`px-3 py-1.5 text-sm ${activeTab === tab ? "text-primary-600 border-b-2 border-primary-600" : "text-gray-500"}`}>{tab}</button>)}</div>

      <div className="bg-base rounded border border-gray-100 p-4">
        {activeTab === "المشروع" && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">{Object.entries({ "كود نوع المشروع": "projectTypeCode", "تاريخ ورود الكارت": "cardReceivedDate", "تاريخ الاصدار": "releaseDate", "اسلوب النشر والتعاقد": "publishingMethod", "تاريخ البداية الفعلي": "actualStartDate", "تاريخ النهاية الفعلي": "actualEndDate", "التكلفة التقديرية": "estimatedCost", "نسبة العلاوة": "bonusRate", "رقم مذكرة الفرع المالي": "financialMemoNo", "الفرع المسؤل": "responsibleBranch", "الشركة": "company", "تاريخ النشر": "publishDate", "الموظف المسؤل": "responsibleEmployee", "تاريخ الفتح الفعلي": "openingDate", "المشروع الرئيسي": "parentProject" }).map(([label, key]) => <Input key={key} label={label} value={form.project[key]} onChange={(e) => setForm((p) => ({ ...p, project: { ...p.project, [key]: e.target.value } }))} />)}</div>
            <div className="relative">
              <Input label="الجهة الطالبة" value={form.project.requestingParty} onChange={(e) => setForm((p) => ({ ...p, project: { ...p.project, requestingParty: e.target.value } }))} onKeyDown={async (e) => {
                if (e.key === "Enter") {
                  const current = form.project.requestingParty.trim();
                  if (!current) return;
                  const has = partyOptions.includes(current) || form.requestingParties.includes(current);
                  if (!has) {
                    await apiClient.post("/api/nashr/byanat-almashro3/requesting-parties", { name: current });
                    setForm((p) => ({ ...p, requestingParties: [...new Set([...p.requestingParties, current])] }));
                  }
                }
              }} />
              {!!partyOptions.length && <div className="absolute z-20 mt-1 w-full rounded border border-gray-200 bg-base shadow">{partyOptions.map((x) => <button key={x} type="button" className="block w-full px-3 py-2 text-right hover:bg-primary-50" onClick={() => setForm((p) => ({ ...p, project: { ...p.project, requestingParty: x } }))}>{x}</button>)}</div>}
            </div>
            <SaveButton onClick={saveAll} />
          </div>
        )}

        {activeTab === "شروط المشروع" && <div className="space-y-3 overflow-auto"><table className="w-full text-sm text-right"><thead><tr className="bg-gray-50"><th className="p-2">كود نوع الشرط</th><th className="p-2">اسم نوع الشرط</th><th className="p-2">مسلسل/ الكود</th><th className="p-2">وصف الشرط</th><th className="p-2">القيمة</th><th className="p-2">ترتيب الشروط</th><th className="p-2">فلتر</th></tr></thead><tbody>{filteredShorot.map((r,i)=><tr key={r.id||i} className="border-t"><td><Input showLabel={false} value={r.kod} onChange={(e)=>setForm((p)=>({...p,shorot:p.shorot.map((x)=>x===r?{...x,kod:e.target.value}:x)}))}/></td><td><Input showLabel={false} value={r.ismNaw3Shart} onChange={(e)=>setForm((p)=>({...p,shorot:p.shorot.map((x)=>x===r?{...x,ismNaw3Shart:e.target.value}:x)}))}/></td><td><Input showLabel={false} value={r.mosalsal} onChange={(e)=>setForm((p)=>({...p,shorot:p.shorot.map((x)=>x===r?{...x,mosalsal:e.target.value}:x)}))}/></td><td><Input showLabel={false} value={r.wasf} onChange={(e)=>setForm((p)=>({...p,shorot:p.shorot.map((x)=>x===r?{...x,wasf:e.target.value}:x)}))}/></td><td><Input showLabel={false} value={r.qima} onChange={(e)=>setForm((p)=>({...p,shorot:p.shorot.map((x)=>x===r?{...x,qima:e.target.value}:x)}))}/></td><td><Input showLabel={false} value={r.tartib} onChange={(e)=>setForm((p)=>({...p,shorot:p.shorot.map((x)=>x===r?{...x,tartib:e.target.value}:x)}))}/></td><td className="align-top"><FilterIconCell value={shorotFilters.kod} onChange={(v)=>setShorotFilters((f)=>({...f,kod:v}))}/></td></tr>)}</tbody><tfoot><tr className="font-semibold bg-gray-50"><td colSpan="4" className="p-2 text-left">الإجمالي</td><td className="p-2">{shorotTotal}</td><td colSpan="2" /></tr></tfoot></table><SaveButton onClick={saveAll} /></div>}

        {activeTab === "ترشيح الشركات" && <div className="space-y-3 overflow-auto"><table className="w-full text-sm text-right"><thead><tr className="bg-gray-50"><th className="p-2">الشركات</th><th className="p-2">رقم السجل</th><th className="p-2">رقم الموافقة</th><th className="p-2">الأجرائات</th><th className="p-2">فلتر</th></tr></thead><tbody>{filteredTarshih.map((r)=><tr key={r.id} className="border-t"><td className="p-2">{r.sharika}</td><td className="p-2">{r.raqmSijl}</td><td className="p-2">{r.raqmMwafaqa}</td><td className="p-2"><Button size="sm" variant="danger" onClick={()=>setForm((p)=>({...p,tarshihCompanies:p.tarshihCompanies.map((x)=>x.id===r.id?{...x,isDeleted:true}:x)}))}>حذف</Button></td><td><FilterIconCell value={tarshihFilters.sharika} onChange={(v)=>setTarshihFilters((f)=>({...f,sharika:v}))}/></td></tr>)}</tbody></table><SaveButton onClick={saveAll} /></div>}

        {activeTab === "بنود الاعمال" && <div className="space-y-3 overflow-auto"><table className="w-full text-sm text-right"><thead><tr className="bg-gray-50"><th className="p-2">المسلسل</th><th className="p-2">وصف البند</th><th className="p-2">الكود</th><th className="p-2">الوحدة</th><th className="p-2">الكمية</th><th className="p-2">القيمة</th><th className="p-2">الاجمالي</th><th className="p-2">الأجرائات</th><th className="p-2">فلتر</th></tr></thead><tbody>{filteredBunod.map((r)=><tr key={r.id} className="border-t"><td><Input showLabel={false} value={r.mosalsal} onChange={(e)=>setForm((p)=>({...p,bunod:p.bunod.map((x)=>x.id===r.id?{...x,mosalsal:e.target.value}:x)}))}/></td><td><Input showLabel={false} value={r.wasf} onChange={(e)=>setForm((p)=>({...p,bunod:p.bunod.map((x)=>x.id===r.id?{...x,wasf:e.target.value}:x)}))}/></td><td><Input showLabel={false} value={r.kod} onChange={(e)=>setForm((p)=>({...p,bunod:p.bunod.map((x)=>x.id===r.id?{...x,kod:e.target.value}:x)}))}/></td><td><Input showLabel={false} value={r.wahda} onChange={(e)=>setForm((p)=>({...p,bunod:p.bunod.map((x)=>x.id===r.id?{...x,wahda:e.target.value}:x)}))}/></td><td><Input showLabel={false} value={r.kamiya} onChange={(e)=>setForm((p)=>({...p,bunod:p.bunod.map((x)=>x.id===r.id?{...x,kamiya:e.target.value}:x)}))}/></td><td><Input showLabel={false} value={r.qima} onChange={(e)=>setForm((p)=>({...p,bunod:p.bunod.map((x)=>x.id===r.id?{...x,qima:e.target.value}:x)}))}/></td><td className="p-2">{bunodIjmali(r)}</td><td className="p-2"><Button size="sm" variant="danger" onClick={()=>setForm((p)=>({...p,bunod:p.bunod.map((x)=>x.id===r.id?{...x,isDeleted:true}:x)}))}>حذف</Button></td><td><FilterIconCell value={bunodFilters.wasf} onChange={(v)=>setBunodFilters((f)=>({...f,wasf:v}))}/></td></tr>)}</tbody><tfoot><tr className="font-semibold bg-gray-50"><td colSpan="4"/><td colSpan="3" className="p-2">اجمالي الاعمال: {bunodTotal}</td><td colSpan="2"/></tr></tfoot></table><div><Button onClick={()=>setForm((p)=>({...p,bunod:[...p.bunod,{id:`bn-${Date.now()}`,mosalsal:"",wasf:"",kod:"",wahda:"",kamiya:"",qima:"",isDeleted:false}]}))}>إضافة</Button></div><SaveButton onClick={saveAll} /></div>}
      </div>
    </div>
  );
}
