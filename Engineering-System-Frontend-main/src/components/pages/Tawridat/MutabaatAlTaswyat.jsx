import React, { useMemo, useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import AppSelect from "../../ui/AppSelect/AppSelect";
import SearchBar from "../../ui/SearchBar/SearchBar";
import DataTable from "../../ui/DataTable/DataTable";

const projectsData = [
  {
    id: 1,
    code: "4585551456",
    name: "إنشاء الهيكل الخرساني رقم 2 بمحور 9 طوابي",
    description: "اعمال انشاء الهيكل الخرساني رقم 2 بمشروع 800 فدان المرحلة الثانية",
    orderValue: "4585551456",
    companyCode: "658554",
    companyName: "مركز تدريب المنشاة النموذجي",
    orders: ["أ/توريد/11"],
  },
  {
    id: 2,
    code: "7890012244",
    name: "تطوير شبكة الكهرباء بالمنطقة الصناعية",
    description: "أعمال تطوير شبكة الكهرباء وإنارة الطرق الداخلية",
    orderValue: "19987500",
    companyCode: "777001",
    companyName: "شركة الدلتا للتوريدات",
    orders: ["أ/توريد/22", "أ/توريد/22-ملحق"],
  },
];

const taswyatData = [
  { id: 1, m: "45", tarikhWurudMashtarawat: "2026/1/8", tarikhWurudTaswyat: "2026/1/8", tarikhBudayaEjraa: "2026/1/8", kodMurajia: "544", ismMurajia: "أ/ هبة محدث", tarikhErsalHaiya: "2026/1/8", qimaTaswyat: "15245445", molahazat: "يوجد سلف على الشركة" },
  { id: 2, m: "46", tarikhWurudMashtarawat: "2026/1/9", tarikhWurudTaswyat: "2026/1/9", tarikhBudayaEjraa: "2026/1/10", kodMurajia: "545", ismMurajia: "أ/ كريم خالد", tarikhErsalHaiya: "2026/1/10", qimaTaswyat: "1754000", molahazat: "تم الرد من الهيئة" },
];

const tabs = ["سجل الإجراءات", "بيانات التسوية", "طباعة/تحميل"];

export default function MutabaatAlTaswyat() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [amMali] = useState("2026/2025");
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);
  const [projectSearch, setProjectSearch] = useState("");
  const [searchDisplay, setSearchDisplay] = useState(`[${projectsData[0].code}] - ${projectsData[0].name}`);
  const [selectedOrder, setSelectedOrder] = useState(projectsData[0].orders[0]);

  const projectColumns = useMemo(
    () => [
      { accessorKey: "code", header: "رقم المشروع" },
      { accessorKey: "name", header: "اسم المشروع" },
      {
        id: "choose",
        header: "اختيار",
        enableColumnFilter: false,
        cell: ({ row }) => (
          <Button
            size="sm"
            onClick={(event) => {
              event.stopPropagation();
              const project = row.original;
              setSelectedProject(project);
              setSearchDisplay(`[${project.code}] - ${project.name}`);
              setSelectedOrder(project.orders[0]);
            }}
          >
            تحميل
          </Button>
        ),
      },
    ],
    [],
  );

  const taswyatColumns = useMemo(
    () => [
      { accessorKey: "m", header: "م" },
      { accessorKey: "tarikhWurudMashtarawat", header: "تاريخ الورود من المشتريات" },
      { accessorKey: "tarikhWurudTaswyat", header: "تاريخ ورود التسوية" },
      { accessorKey: "tarikhBudayaEjraa", header: "تاريخ بداية الاجراء" },
      { accessorKey: "kodMurajia", header: "كود المراجع" },
      { accessorKey: "ismMurajia", header: "اسم المراجع" },
      { accessorKey: "tarikhErsalHaiya", header: "تاريخ الارسال للهيئة" },
      { accessorKey: "qimaTaswyat", header: "قيمة التسوية" },
      { accessorKey: "molahazat", header: "الملاحظات" },
    ],
    [],
  );

  const filteredProjects = useMemo(() => {
    if (!projectSearch.trim()) return projectsData;
    const normalized = projectSearch.trim().toLowerCase();
    return projectsData.filter(
      (project) =>
        project.code.toLowerCase().includes(normalized) ||
        project.name.toLowerCase().includes(normalized),
    );
  }, [projectSearch]);

  return (
    <div className="space-y-4 p-4" dir="rtl">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 className="rounded bg-primary-500 px-8 py-2 text-xl font-bold text-white">متابعة التسويات</h1>
        <div className="flex items-center gap-2" dir="ltr">
          <Button variant="warning" size="sm">Print Declaration</Button>
          <Button variant="warning" size="sm">Print Form 41</Button>
          <Button variant="warning" size="sm">Download Statement</Button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 rounded border border-gray-200 bg-base p-3 text-sm">
        <div className="mr-auto flex items-center gap-2">
          <label className="font-medium">العام المالي</label>
          <select className="rounded border border-gray-300 bg-background px-2 py-1">
            <option>{amMali}</option>
          </select>
        </div>

        <div className="flex min-w-[340px] flex-1 flex-col gap-2">
          <SearchBar
            fields={[
              { value: "code", label: "رقم المشروع" },
              { value: "name", label: "اسم المشروع" },
            ]}
            placeholder="ابحث عن مشروع"
            onSearch={(value) => setProjectSearch(value)}
          />
          <Input label="المشروع المختار" value={searchDisplay} readOnly showLabel={false} />
        </div>
      </div>

      <div className="rounded border border-gray-200 bg-base p-2">
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded px-4 py-2 text-sm ${
                activeTab === tab ? "bg-primary-500 text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "سجل الإجراءات" && (
          <div className="mt-3 space-y-3">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <Input label="رقم المشروع" value={selectedProject?.code ?? ""} readOnly />
              <Input label="الوصف" value={selectedProject?.description ?? ""} onChange={() => {}} />

              <div>
                {selectedProject?.orders?.length > 1 ? (
                  <AppSelect
                    label="رقم أمر التوريد"
                    isCreatable={false}
                    options={selectedProject.orders.map((order) => ({ value: order, label: order }))}
                    value={selectedOrder ? { value: selectedOrder, label: selectedOrder } : null}
                    onChange={(option) => setSelectedOrder(option?.value || "")}
                  />
                ) : (
                  <Input label="رقم أمر التوريد" value={selectedOrder || ""} onChange={(event) => setSelectedOrder(event.target.value)} />
                )}
              </div>

              <Input label="قيمة الامر" value={selectedProject?.orderValue ?? ""} onChange={() => {}} />
              <Input label="كود الشركة" value={selectedProject?.companyCode ?? ""} onChange={() => {}} />
              <Input label="اسم الشركة" value={selectedProject?.companyName ?? ""} onChange={() => {}} />
            </div>

            <DataTable
              columns={projectColumns}
              data={filteredProjects}
              isSearchable
              selectedRowId={selectedProject?.id}
              onRowClick={(project) => {
                setSelectedProject(project);
                setSearchDisplay(`[${project.code}] - ${project.name}`);
                setSelectedOrder(project.orders[0]);
              }}
            />
          </div>
        )}

        {activeTab === "بيانات التسوية" && <DataTable columns={taswyatColumns} data={taswyatData} isSearchable />}

        {activeTab === "طباعة/تحميل" && (
          <div className="mt-4 flex justify-start gap-2" dir="ltr">
            <Button variant="warning">Print Declaration</Button>
            <Button variant="warning">Print Form 41</Button>
            <Button variant="warning">Download Statement</Button>
          </div>
        )}
      </div>
    </div>
  );
}
