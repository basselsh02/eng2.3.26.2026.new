import React, { useMemo, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

export default function DataTable({
  columns,
  data,
  isSearchable = false,
  onRowClick,
  selectedRowId,
  className = "",
}) {
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      columnFilters,
    },
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const visibleColumns = useMemo(() => table.getVisibleLeafColumns(), [table]);

  return (
    <div className={`space-y-2 ${className}`}>
      {isSearchable && (
        <input
          value={globalFilter ?? ""}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
          placeholder="بحث في الجدول"
        />
      )}

      <div className="overflow-x-auto rounded border border-gray-200 bg-base">
        <table className="w-full text-right text-sm">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <React.Fragment key={headerGroup.id}>
                <tr className="border-b border-gray-200 bg-gray-50">
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="border-l border-gray-200 p-2 font-semibold">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
                <tr className="border-b border-gray-200 bg-base">
                  {visibleColumns.map((column) => (
                    <th key={`${column.id}-filter`} className="border-l border-gray-100 p-1">
                      {column.getCanFilter() ? (
                        <input
                          value={column.getFilterValue() ?? ""}
                          onChange={(event) => column.setFilterValue(event.target.value)}
                          placeholder="فلتر"
                          className="w-full rounded border border-gray-300 px-2 py-1 text-xs"
                        />
                      ) : null}
                    </th>
                  ))}
                </tr>
              </React.Fragment>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row, index) => (
              <tr
                key={row.id}
                onClick={() => onRowClick?.(row.original)}
                className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-base" : "bg-gray-50/50"} ${
                  onRowClick ? "cursor-pointer hover:bg-primary-50" : ""
                } ${selectedRowId === row.original.id ? "!bg-primary-100" : ""}`}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="border-l border-gray-100 p-2 align-top">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}

            {table.getRowModel().rows.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="p-3 text-center text-gray-500">
                  لا توجد بيانات مطابقة.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
