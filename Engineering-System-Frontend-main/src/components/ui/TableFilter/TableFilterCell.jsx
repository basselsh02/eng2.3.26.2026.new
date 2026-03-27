import React from "react";
import Input from "../Input/Input";

export function applyFilters(rows, filters) {
  return rows.filter((row) =>
    Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      return String(row[key] ?? "").toLowerCase().includes(String(value).toLowerCase());
    })
  );
}

export default function TableFilterCell({ value, onChange, placeholder }) {
  return (
    <div className="min-w-28">
      <Input
        label={placeholder}
        showLabel={false}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
