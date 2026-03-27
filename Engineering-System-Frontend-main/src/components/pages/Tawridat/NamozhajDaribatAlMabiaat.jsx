import React, { useMemo, useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import SearchBar from "../../ui/SearchBar/SearchBar";
import DataTable from "../../ui/DataTable/DataTable";

const projectsData = [
  {
    id: 1,
    code: "25/112 مباني",
    name: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية",
    cost: "100.000.000",
    branchCode: "2546",
    branchName: "اللواء 152 انشاءات",
    form: {
      orderValue: "548745145",
      taxPercent: "3",
      orderNumber: "25/مباني/11",
      taxValue: "154.000",
      contractDate: "2026/5/8",
      roundingValue: "0.00",
      partValue: "0",
      prepaymentPercent: "3",
      prepaymentValue: "0",
      company: "مكتب أصالة للمقاولات العامة",
      companyAddress: "العريش / شمال سيناء",
      managerName: "عبدالله على محمد",
      taxRegistrationNo: "548745145",
    },
  },
  {
    id: 2,
    code: "33/201 كهرباء",
    name: "تطوير شبكة الكهرباء بالمنطقة الصناعية",
    cost: "75.000.000",
    branchCode: "3311",
    branchName: "اللواء 153 كهرباء",
    form: {
      orderValue: "11200000",
      taxPercent: "14",
      orderNumber: "33/كهرباء/5",
      taxValue: "1568000",
      contractDate: "2026/3/14",
      roundingValue: "0",
      partValue: "50",
      prepaymentPercent: "10",
      prepaymentValue: "1120000",
      company: "شركة الدلتا للتوريدات",
      companyAddress: "مدينة نصر - القاهرة",
      managerName: "محمود سيد أحمد",
      taxRegistrationNo: "7733001",
    },
  },
];

const tabs = ["سجل الإجراءات", "البيانات الضريبية", "الطباعة"];

const makeDefaultForm = (project) => ({ ...project.form });

export default function NamozhajDaribatAlMabiaat() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);
  const [formData, setFormData] = useState(makeDefaultForm(projectsData[0]));
  const [projectSearch, setProjectSearch] = useState("");
  const [selectedProjectDisplay, setSelectedProjectDisplay] = useState(`[${projectsData[0].code}] - ${projectsData[0].name}`);

  const projectColumns = useMemo(
    () => [
      { accessorKey: "code", header: "رقم المشروع" },
      { accessorKey: "name", header: "اسم المشروع" },
      { accessorKey: "cost", header: "تكلفة المشروع" },
      { accessorKey: "branchCode", header: "كود الفرع" },
      { accessorKey: "branchName", header: "اسم الفرع المنفذ" },
      {
        id: "select",
        header: "تحميل",
        enableColumnFilter: false,
        cell: ({ row }) => (
          <Button
            size="sm"
            onClick={(event) => {
              event.stopPropagation();
              const project = row.original;
              setSelectedProject(project);
              setSelectedProjectDisplay(`[${project.code}] - ${project.name}`);
              setFormData(makeDefaultForm(project));
            }}
          >
            تحميل البيان
          </Button>
        ),
      },
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

  const handleFieldChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  return (
    <div className="space-y-4 p-4" dir="rtl">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 className="rounded bg-primary-500 px-8 py-2 text-xl font-bold text-white">نموذج ضريبة المبيعات - توريدات</h1>
        <div className="flex items-center gap-2" dir="ltr">
          <Button variant="warning" size="sm">Print Declaration</Button>
          <Button variant="warning" size="sm">Print Form 41</Button>
          <Button variant="warning" size="sm">Download Statement</Button>
        </div>
      </div>

      <div className="rounded border border-gray-200 bg-base p-3">
        <SearchBar
          fields={[
            { value: "code", label: "رقم المشروع" },
            { value: "name", label: "اسم المشروع" },
          ]}
          placeholder="ابحث عن مشروع"
          onSearch={(value) => setProjectSearch(value)}
        />
        <div className="mt-2 grid grid-cols-1 gap-3 md:grid-cols-2">
          <Input label="المشروع" value={selectedProjectDisplay} readOnly />
          <Input label="رقم المشروع" value={selectedProject?.code ?? ""} readOnly />
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
          <div className="mt-3">
            <DataTable
              columns={projectColumns}
              data={filteredProjects}
              isSearchable
              selectedRowId={selectedProject?.id}
              onRowClick={(project) => {
                setSelectedProject(project);
                setSelectedProjectDisplay(`[${project.code}] - ${project.name}`);
                setFormData(makeDefaultForm(project));
              }}
            />
          </div>
        )}

        {activeTab === "البيانات الضريبية" && (
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            <Input label="قيمة امر التوريد" value={formData.orderValue} onChange={handleFieldChange("orderValue")} />
            <Input label="نسبة الضريبة" value={formData.taxPercent} onChange={handleFieldChange("taxPercent")} />
            <Input label="رقم الامر/العقد" value={formData.orderNumber} onChange={handleFieldChange("orderNumber")} />
            <Input label="قيمة الضريبة" value={formData.taxValue} onChange={handleFieldChange("taxValue")} />
            <Input label="تاريخ التعاقد" value={formData.contractDate} onChange={handleFieldChange("contractDate")} />
            <Input label="قيمة التقريب" value={formData.roundingValue} onChange={handleFieldChange("roundingValue")} />
            <Input label="قيمة جزء" value={formData.partValue} onChange={handleFieldChange("partValue")} />
            <Input label="نسبة الدفعة المقدمة" value={formData.prepaymentPercent} onChange={handleFieldChange("prepaymentPercent")} />
            <Input label="قيمة الدفعة المقدمة" value={formData.prepaymentValue} onChange={handleFieldChange("prepaymentValue")} />
            <Input label="الشركة" value={formData.company} onChange={handleFieldChange("company")} />
            <Input label="عنوان الشركة" value={formData.companyAddress} onChange={handleFieldChange("companyAddress")} />
            <Input label="اسم المدير المسؤل" value={formData.managerName} onChange={handleFieldChange("managerName")} />
            <Input label="رقم التسجيل بضريبة المبيعات" value={formData.taxRegistrationNo} onChange={handleFieldChange("taxRegistrationNo")} />
          </div>
        )}

        {activeTab === "الطباعة" && (
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
