import React, { useEffect, useMemo, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import SearchBar from "../../ui/SearchBar/SearchBar";
import AppSelect from "../../ui/AppSelect/AppSelect";

const wait = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

const MOCK_PROJECTS = [
  { id: 1, raqmMashro3: "2588888", ismMashro3: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", taklfaMashro3: "100.000.000", kodFar3: "2546", ismFar3Monafez: "اللواء 152 انشاءات" },
  { id: 2, raqmMashro3: "2589999", ismMashro3: "تطوير شبكات الكهرباء بالمنطقة الصناعية", taklfaMashro3: "75.000.000", kodFar3: "3311", ismFar3Monafez: "اللواء 153 كهرباء" },
  { id: 3, raqmMashro3: "2590000", ismMashro3: "رفع كفاءة الطرق الداخلية", taklfaMashro3: "55.200.000", kodFar3: "2210", ismFar3Monafez: "اللواء 91 طرق" },
];

const MOCK_COMPANIES = [
  { value: "arab-contractors", label: "المقاولون العرب" },
  { value: "orasc", label: "أوراسكوم" },
  { value: "hassan-allam", label: "حسن علام" },
  { value: "el-sewedy", label: "السويدي" },
];

const fetchProjects = async () => {
  await wait();
  return MOCK_PROJECTS;
};

const fetchCommitteeRows = async (projectId, type) => {
  await wait();
  return [
    { id: `${projectId}-${type}-1`, company: MOCK_COMPANIES[0] },
    { id: `${projectId}-${type}-2`, company: MOCK_COMPANIES[1] },
  ];
};

const loadCompanyOptions = async (search = "") => {
  await wait();
  const normalized = search.trim().toLowerCase();
  return {
    options: MOCK_COMPANIES.filter((option) => option.label.toLowerCase().includes(normalized)),
    hasMore: false,
  };
};

function ColumnFilterDropdown({ column }) {
  const [open, setOpen] = useState(false);
  const value = column.getFilterValue() ?? "";

  return (
    <div className="relative inline-flex">
      <button type="button" className="text-xs text-primary-600 hover:underline" onClick={() => setOpen((prev) => !prev)}>
        تصفية
      </button>
      {open && (
        <div className="absolute top-6 z-20 min-w-44 rounded border border-gray-200 bg-base p-2 shadow-lg">
          <input
            value={value}
            onChange={(event) => column.setFilterValue(event.target.value)}
            placeholder="بحث بالعمود"
            className="w-full rounded border border-gray-300 px-2 py-1 text-xs"
          />
          <button
            type="button"
            className="mt-2 text-xs text-red-500 hover:underline"
            onClick={() => {
              column.setFilterValue("");
              setOpen(false);
            }}
          >
            مسح
          </button>
        </div>
      )}
    </div>
  );
}

function DataTable({ columns, data, onRowClick, selectedRowId }) {
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: { columnFilters },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="overflow-x-auto border border-gray-200 rounded bg-base">
      <table className="w-full text-sm text-right">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b border-gray-200 bg-gray-50">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-2 font-semibold border-l border-gray-200 align-top">
                  <div className="flex flex-col gap-1">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getCanFilter() && <ColumnFilterDropdown column={header.column} />}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <tr
              key={row.id}
              onClick={() => onRowClick?.(row.original)}
              className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-base" : "bg-gray-50/50"} ${onRowClick ? "cursor-pointer hover:bg-primary-50" : ""} ${selectedRowId === row.original.id ? "bg-primary-50" : ""}`}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-2 border-l border-gray-100">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function TasjilByanAlMashro3() {
  const [kodMashro3] = useState("4585551456");
  const [amMali] = useState("2026/2025");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [committeeRows, setCommitteeRows] = useState([]);
  const [memberRows, setMemberRows] = useState([]);

  useEffect(() => {
    fetchProjects().then((response) => {
      setProjects(response);
      setFilteredProjects(response);
    });
  }, []);

  useEffect(() => {
    if (!selectedProject) return;

    fetchCommitteeRows(selectedProject.id, "committee").then(setCommitteeRows);
    fetchCommitteeRows(selectedProject.id, "members").then(setMemberRows);
  }, [selectedProject]);

  const searchFields = useMemo(
    () => [
      { value: "raqmMashro3", label: "رقم المشروع" },
      { value: "ismMashro3", label: "اسم المشروع" },
      { value: "kodFar3", label: "كود الفرع" },
      { value: "ismFar3Monafez", label: "الفرع المنفذ" },
    ],
    [],
  );

  const handleSearch = (value, field) => {
    const normalized = value.trim().toLowerCase();
    if (!normalized) {
      setFilteredProjects(projects);
      return;
    }

    setFilteredProjects(
      projects.filter((project) => {
        if (field === "all") {
          return Object.values(project).some((item) => String(item).toLowerCase().includes(normalized));
        }

        return String(project[field] ?? "").toLowerCase().includes(normalized);
      }),
    );
  };

  const mainColumns = useMemo(
    () => [
      { accessorKey: "raqmMashro3", header: "رقم المشروع" },
      { accessorKey: "ismMashro3", header: "اسم المشروع" },
      { accessorKey: "taklfaMashro3", header: "تكلفة المشروع" },
      { accessorKey: "kodFar3", header: "كود الفرع" },
      { accessorKey: "ismFar3Monafez", header: "اسم الفرع المنفذ" },
    ],
    [],
  );

  const makeCompanyColumns = (rows, setRows) => [
    {
      id: "recordNumber",
      header: "رقم السجل",
      cell: ({ row }) => row.index + 1,
      enableColumnFilter: false,
    },
    {
      id: "company",
      header: "الشركة",
      accessorFn: (row) => row.company?.label || "",
      cell: ({ row }) => (
        <AppSelect
          label="الشركة"
          isCreatable={false}
          options={null}
          value={row.original.company || null}
          loadOptionsFn={loadCompanyOptions}
          onChange={(option) => {
            setRows((prev) =>
              prev.map((item) => (item.id === row.original.id ? { ...item, company: option } : item)),
            );
          }}
        />
      ),
    },
  ];

  const addCommitteeRow = () => {
    setCommitteeRows((prev) => [...prev, { id: `committee-${Date.now()}`, company: null }]);
  };

  const addMemberRow = () => {
    setMemberRows((prev) => [...prev, { id: `member-${Date.now()}`, company: null }]);
  };

  return (
    <div className="p-4 space-y-4" dir="rtl">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex flex-col gap-2">
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">TRDD_UF</span>
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">20252028</span>
        </div>
        <div className="flex-1 flex justify-center">
          <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">تسجيل بيان المشروع</h1>
        </div>
        <div className="flex flex-col gap-2">
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">قسم العقود</button>
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">اجراثات التعاقد /قسم العقود</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 border border-gray-200 rounded p-3 bg-base">
        <Input label="كود المشروع" showLabel={false} value={kodMashro3} readOnly />
        <Input label="العام المالي" type="select" showLabel={false} options={[{ value: amMali, label: amMali }]} />
        <SearchBar fields={searchFields} placeholder="ابحث في المشاريع" onSearch={handleSearch} />
      </div>

      <DataTable
        columns={mainColumns}
        data={filteredProjects}
        onRowClick={(project) => setSelectedProject(project)}
        selectedRowId={selectedProject?.id}
      />

      {selectedProject && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">بيانات اللجنة</h3>
              <Button size="sm" onClick={addCommitteeRow}>إضافة صف</Button>
            </div>
            <DataTable columns={makeCompanyColumns(committeeRows, setCommitteeRows)} data={committeeRows} />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">بيانات اعضاء اللجنة</h3>
              <Button size="sm" onClick={addMemberRow}>إضافة صف</Button>
            </div>
            <DataTable columns={makeCompanyColumns(memberRows, setMemberRows)} data={memberRows} />
          </div>
        </div>
      )}
    </div>
  );
}
