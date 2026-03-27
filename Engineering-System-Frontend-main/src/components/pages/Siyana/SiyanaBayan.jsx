import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import AppSelect from "@/components/ui/AppSelect/AppSelect";
import FormDatePicker from "@/components/ui/FormDatePicker/FormDatePicker";
import Button from "@/components/ui/Button/Button";

const projectOptions = [
  { value: "p-101", label: "تطوير شبكة الصرف - قطاع أ" },
  { value: "p-102", label: "إحلال وتجديد خطوط المياه - قطاع ب" },
  { value: "p-103", label: "صيانة إنارة عامة - المرحلة الثالثة" },
];

const companyOptions = [
  { value: "c-1", label: "المقاولون العرب" },
  { value: "c-2", label: "أوراسكوم" },
  { value: "c-3", label: "حسن علام" },
];

function ColumnFilterDropdown({ column }) {
  const [open, setOpen] = useState(false);
  const value = column.getFilterValue() ?? "";

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        className="text-xs text-primary-600 hover:underline"
        onClick={() => setOpen((prev) => !prev)}
      >
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

function DataTable({ columns, data }) {
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
            <tr key={headerGroup.id} className="border-b border-gray-200 bg-primary-500 text-white">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-3 font-semibold border-l border-white/20 align-top">
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
          {table.getRowModel().rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="p-4 text-center text-gray-500">
                لا توجد مشاريع متوقفة حالياً.
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row, index) => (
              <tr
                key={row.id}
                className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-base" : "bg-primary-50"} hover:bg-primary-50`}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-3 border-l border-gray-100">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default function SiyanaBayan() {
  const [haltedProjects, setHaltedProjects] = useState([]);
  const [formError, setFormError] = useState("");

  const {
    control,
    setValue,
    watch,
    reset,
  } = useForm({
    defaultValues: {
      project: null,
      company: null,
      haltedDate: null,
      authorityHandoverDate: null,
      hallHandoverDate: null,
      dateRange: null,
    },
  });

  const values = watch();

  const validateForm = () => {
    const requiredFields = [
      values.project,
      values.company,
      values.haltedDate,
      values.authorityHandoverDate,
      values.hallHandoverDate,
      values.dateRange,
    ];

    return requiredFields.every(Boolean);
  };

  const handleAdd = () => {
    if (!validateForm()) {
      setFormError("يرجى استكمال جميع بيانات المشروع المتوقف قبل الإضافة.");
      return;
    }

    setFormError("");

    setHaltedProjects((prev) => [
      ...prev,
      {
        id: Date.now(),
        projectName: values.project.label,
        companyName: values.company.label,
        haltedDate: values.haltedDate,
        authorityHandoverDate: values.authorityHandoverDate,
        hallHandoverDate: values.hallHandoverDate,
        dateRange: values.dateRange,
      },
    ]);

    reset({
      project: null,
      company: null,
      haltedDate: null,
      authorityHandoverDate: null,
      hallHandoverDate: null,
      dateRange: null,
    });
  };

  const handleDelete = (id) => {
    setHaltedProjects((prev) => prev.filter((item) => item.id !== id));
  };

  const formatDate = (value) => {
    if (!value) return "-";
    return new Date(value).toLocaleDateString("ar-EG");
  };

  const columns = useMemo(
    () => [
      {
        id: "index",
        header: "م",
        cell: ({ row }) => row.index + 1,
        enableColumnFilter: false,
      },
      {
        accessorKey: "projectName",
        header: "اسم المشروع",
        enableColumnFilter: true,
      },
      {
        accessorKey: "companyName",
        header: "الشركة",
        enableColumnFilter: true,
      },
      {
        accessorKey: "haltedDate",
        header: "تاريخ التوقف",
        cell: ({ row }) => formatDate(row.original.haltedDate),
        enableColumnFilter: false,
      },
      {
        accessorKey: "authorityHandoverDate",
        header: "تاريخ تسليم الجهة",
        cell: ({ row }) => formatDate(row.original.authorityHandoverDate),
        enableColumnFilter: false,
      },
      {
        accessorKey: "hallHandoverDate",
        header: "تاريخ استلام الصالة",
        cell: ({ row }) => formatDate(row.original.hallHandoverDate),
        enableColumnFilter: false,
      },
      {
        accessorKey: "dateRange",
        header: "الفترة",
        cell: ({ row }) => formatDate(row.original.dateRange),
        enableColumnFilter: false,
      },
      {
        id: "actions",
        header: "الإجراءات",
        enableColumnFilter: false,
        cell: ({ row }) => (
          <Button
            variant="danger"
            size="sm"
            onClick={() => handleDelete(row.original.id)}
          >
            حذف
          </Button>
        ),
      },
    ],
    [],
  );

  return (
    <div className="p-4 space-y-4" dir="rtl">
      <div className="flex items-center justify-center">
        <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded w-full text-center">
          إدارة المشاريع المتوقفة - مكتب الصيانة
        </h1>
      </div>

      <div className="border border-gray-200 rounded p-4 bg-base space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <AppSelect
            label="المشروع"
            options={projectOptions}
            value={values.project}
            onChange={(option) => setValue("project", option)}
            isCreatable={false}
          />

          <AppSelect
            label="الشركة"
            options={companyOptions}
            value={values.company}
            onChange={(option) => setValue("company", option)}
            isCreatable={false}
          />

          <FormDatePicker name="haltedDate" control={control} label="تاريخ التوقف" required />
          <FormDatePicker name="authorityHandoverDate" control={control} label="تاريخ تسليم الجهة" required />
          <FormDatePicker name="hallHandoverDate" control={control} label="تاريخ استلام الصالة" required />
          <FormDatePicker name="dateRange" control={control} label="الفترة الزمنية" required />
        </div>

        {formError && <p className="text-sm text-red-600">{formError}</p>}

        <div className="flex justify-start">
          <Button variant="primary" className="bg-primary-500 hover:bg-primary-600" onClick={handleAdd}>
            إضافة
          </Button>
        </div>
      </div>

      <DataTable columns={columns} data={haltedProjects} />
    </div>
  );
}
