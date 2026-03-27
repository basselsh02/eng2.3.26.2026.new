import React, { useEffect, useMemo, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import AppSelect from "../../ui/AppSelect/AppSelect";
import FormDatePicker from "../../ui/FormDatePicker/FormDatePicker";
import Modal from "../../ui/Modal/Modal";

const wait = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

const OFFER_TYPE_OPTIONS = [
  { value: "basic", label: "عرض اساسي" },
  { value: "alternative", label: "عرض بديل" },
  { value: "financial", label: "عرض مالي" },
];

const COMPANY_OPTIONS = [
  { value: "arab-contractors", label: "المقاولون العرب" },
  { value: "orasc", label: "أوراسكوم" },
  { value: "hassan-allam", label: "حسن علام" },
];

const fetchProjects = async () => {
  await wait();
  return [
    { id: 1, raqmMashro3: "2588888", ismMashro3: "انشاء الهيكل رقم 9 ببطاقة رقم 2 بمشروع الواجهة البحرية العربية لمدينة العالمين الجديدة", taklfaMashro3: "100.000.000", kodFar3: "2546", ismFar3Monafez: "اللواء 152 انشاءات" },
    { id: 2, raqmMashro3: "2589999", ismMashro3: "تطوير شبكات الكهرباء بالمنطقة الصناعية", taklfaMashro3: "75.000.000", kodFar3: "3311", ismFar3Monafez: "اللواء 153 كهرباء" },
  ];
};

const fetchRanks = async () => {
  await wait();
  return [
    { id: 1, rank: "مقدم", name: "احمد محمود السيد" },
    { id: 2, rank: "نقيب", name: "على احمد على" },
    { id: 3, rank: "رائد", name: "ممدوح شاكر فتحي" },
  ];
};

const loadOfferTypes = async (search = "") => {
  await wait();
  const normalized = search.trim().toLowerCase();
  return {
    options: OFFER_TYPE_OPTIONS.filter((option) => option.label.toLowerCase().includes(normalized)),
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
            <tr key={row.id} className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-base" : "bg-gray-50/50"}`}>
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

function CompanyOffersSection() {
  const { control, register } = useForm({
    defaultValues: {
      offers: [
        { offerType: null, offerDate: null, expiryDate: null, offerNumber: "" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "offers",
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">عروض الشركات</h3>
        <Button size="sm" onClick={() => append({ offerType: null, offerDate: null, expiryDate: null, offerNumber: "" })}>
          إضافة عرض
        </Button>
      </div>

      {fields.map((field, index) => (
        <div key={field.id} className="grid grid-cols-1 md:grid-cols-4 gap-3 border border-gray-200 rounded p-3">
          <Controller
            control={control}
            name={`offers.${index}.offerType`}
            render={({ field: fieldController }) => (
              <AppSelect
                label="نوع العرض"
                isCreatable={false}
                options={null}
                value={fieldController.value}
                loadOptionsFn={loadOfferTypes}
                onChange={(option) => fieldController.onChange(option)}
              />
            )}
          />

          <FormDatePicker control={control} name={`offers.${index}.offerDate`} label="تاريخ العرض" />
          <FormDatePicker control={control} name={`offers.${index}.expiryDate`} label="تاريخ انتهاء العرض" />
          <Input label="رقم العرض" showLabel={false} {...register(`offers.${index}.offerNumber`)} />

          <div className="md:col-span-4 flex justify-end">
            <Button size="sm" variant="danger" disabled={fields.length === 1} onClick={() => remove(index)}>
              حذف
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

function RankSection() {
  const [ranks, setRanks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRank, setEditingRank] = useState(null);
  const [editedName, setEditedName] = useState("");

  useEffect(() => {
    fetchRanks().then(setRanks);
  }, []);

  const columns = useMemo(
    () => [
      { accessorKey: "rank", header: "الرتبة" },
      { accessorKey: "name", header: "الاسم" },
      {
        id: "actions",
        header: "تعديل",
        enableColumnFilter: false,
        cell: ({ row }) => (
          <Button
            size="sm"
            onClick={() => {
              setEditingRank(row.original);
              setEditedName(row.original.name);
              setIsModalOpen(true);
            }}
          >
            تعديل الاسم
          </Button>
        ),
      },
    ],
    [],
  );

  const saveName = () => {
    if (!editingRank) return;

    setRanks((prev) =>
      prev.map((item) => (item.id === editingRank.id ? { ...item, name: editedName } : item)),
    );
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-start">
        <Button variant="warning">طباعة</Button>
      </div>

      <DataTable columns={columns} data={ranks} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="تعديل اسم الرتبة" size="sm">
        <div className="space-y-3">
          <Input label="الاسم" showLabel={false} value={editedName} onChange={(event) => setEditedName(event.target.value)} />
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>إلغاء</Button>
            <Button onClick={saveName}>حفظ</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default function Ejra2at() {
  const [projects, setProjects] = useState([]);
  const [kodMashro3] = useState("4585551456");
  const [amMali] = useState("2026/2025");

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  const projectColumns = useMemo(
    () => [
      { accessorKey: "raqmMashro3", header: "كود المشروع" },
      { accessorKey: "ismMashro3", header: "اسم المشروع" },
      { accessorKey: "taklfaMashro3", header: "تكلفة المشروع" },
      { accessorKey: "kodFar3", header: "كود الفرع" },
      { accessorKey: "ismFar3Monafez", header: "اسم الفرع المنفذ" },
    ],
    [],
  );

  return (
    <div className="p-4 space-y-4" dir="rtl">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex flex-col gap-2">
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">TRDD_UF</span>
          <span className="border border-gray-300 rounded px-3 py-1 text-sm bg-base">20252028</span>
        </div>
        <div className="flex-1 flex justify-center">
          <h1 className="text-xl font-bold bg-primary-500 text-white px-8 py-2 rounded">الاجراءات</h1>
        </div>
        <div className="flex flex-col gap-2">
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">قسم العقود</button>
          <button className="border border-gray-300 rounded px-3 py-1 text-sm bg-base hover:bg-primary-50">اجراثات التعاقد /قسم العقود</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 border border-gray-200 rounded p-3 bg-base">
        <Input label="كود المشروع" showLabel={false} value={kodMashro3} readOnly />
        <Input label="العام المالي" type="select" showLabel={false} options={[{ value: amMali, label: amMali }]} />
        <AppSelect label="الشركة" options={COMPANY_OPTIONS} isCreatable={false} />
      </div>

      <DataTable columns={projectColumns} data={projects} />

      <div className="bg-base rounded border border-gray-100 p-4">
        <CompanyOffersSection />
      </div>

      <div className="bg-base rounded border border-gray-100 p-4">
        <RankSection />
      </div>
    </div>
  );
}
