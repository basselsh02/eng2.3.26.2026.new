import React, { useState, useMemo, useRef } from "react";
import {
  AsyncPaginate,
  reduceGroupedOptions,
} from "react-select-async-paginate";
import { getSuggestions } from "../../../api/suggestionsAPI";
import { FaSearch } from "react-icons/fa";

export default function SearchInput({
  type = "global",
  model = "projects",
  column, // only used when type === "column"
  onSelect,
  placeholder = "بحث...",
  value: externalValue,
  allowFreeText = true,
  className = "",
  
  // Props for "Company" style (Field Selector)
  fields = [],
  selectedField,
  onSearchFieldChange,
  
  ...rest
}) {
  const [inputValue, setInputValue] = useState("");
  const debounceRef = useRef(null);

  // Use either the passed 'column' or the 'selectedField' if fields are provided
  const activeColumn = fields.length > 0 ? selectedField : column;
  const activeType = fields.length > 0 && selectedField && selectedField !== "all" ? "column" : type;

  // Normalize external value to always be {label, value} or null
  const normalizedValue = useMemo(() => {
    if (!externalValue) return null;

    if (typeof externalValue === "string") {
      return { label: externalValue, value: externalValue };
    }

    if (externalValue?.label && externalValue?.value !== undefined) {
      return externalValue;
    }

    // fallback — أي شيء آخر نحوله لـ string
    const str = String(externalValue);
    return { label: str, value: str };
  }, [externalValue]);

  const loadOptions = async (search, prevOptions, { page }) => {
    if (!search?.trim()) {
      return {
        options: [],
        hasMore: false,
        additional: { page: 1 },
      };
    }

    try {
      const response = await getSuggestions({
        model,
        type: activeType,
        column: activeType === "global" ? undefined : activeColumn,
        search,
        page,
        limit: activeType === "global" ? 10 : 8,
      });

      return {
        options: response.options || [],
        hasMore: !!response.hasMore,
        additional: {
          page: page + 1,
        },
      };
    } catch (err) {
      console.error("Suggestion load error:", err);
      return {
        options: [],
        hasMore: false,
        additional: { page },
      };
    }
  };

  const handleChange = (option) => {
    onSelect?.(option); // يمكن أن يكون null إذا تم المسح
  };

  const handleInputChange = (val) => {
    setInputValue(val);
    // إذا كان free text مسموح ولم يكن هناك خيار مختار → نحدّث القيمة مباشرة
    if (allowFreeText && !normalizedValue) {
      clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        onSelect?.(val.trim() ? { label: val.trim(), value: val.trim() } : null);
      }, 300);
    }
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      minHeight: "48px",
      borderRadius: "8px",
      borderColor: state.isFocused
        ? "var(--color-primary-500)"
        : "var(--color-primary-200)",
      boxShadow: "none",
      "&:hover": { borderColor: "var(--color-primary-500)" },
      paddingRight: "2.5rem", // للأيقونة
      backgroundColor: "transparent",
    }),
    singleValue: (base) => ({
      ...base,
      color: "inherit", // يمنع الغمقان
      fontWeight: "normal", // لو كان Bold
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "0 0.5rem",
      color: "inherit",
    }),
    input: (base) => ({
      ...base,
      margin: 0,
      padding: 0,
      color: "inherit",
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "8px",
      marginTop: "0.8rem",
      boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
      backgroundColor: "var(--color-base)",
      zIndex: 9999,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "var(--color-primary-500)"
        : state.isFocused
        ? "var(--color-primary-500)"
        : "transparent",

      color: state.isSelected
        ? "var(--color-primary-content-500)"
        : state.isFocused
        ? "var(--color-primary-content-500)"
        : "inherit",
    }),
  };

  return (
    <div className={`flex items-center gap-0 w-full overflow-hidden border border-primary-200 rounded-lg bg-base focus-within:border-primary-500 transition-colors ${className}`}>
      {/* Field Selector for "Company" style */}
      {fields.length > 0 && (
        <select
          value={selectedField || "all"}
          onChange={(e) => onSearchFieldChange?.(e.target.value)}
          className="bg-primary-50 text-primary-700 text-sm border-e border-primary-200 px-3 py-2 outline-none cursor-pointer hover:bg-primary-100 transition-colors h-[48px] min-w-[120px]"
        >
          <option value="all">الكل</option>
          {fields.map((field) => (
            <option key={field.value} value={field.value}>
              {field.label}
            </option>
          ))}
        </select>
      )}

      <div className="relative flex-1">
        {/* Search Icon */}
        {!fields.length && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none z-10 border-e border-primary-200 pe-2">
            <FaSearch size={15} className="text-primary-500" />
          </div>
        )}

        <AsyncPaginate
          value={normalizedValue}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onChange={handleChange}
          loadOptions={loadOptions}
          additional={{ page: 1 }}
          placeholder={placeholder}
          debounceTimeout={100}
          reduceOptions={reduceGroupedOptions}
          cacheOptions
          closeMenuOnSelect={true}
          isClearable={true}
          isSearchable={true}
          styles={{
            ...customStyles,
            control: (base, state) => ({
              ...customStyles.control(base, state),
              border: "none",
              paddingRight: fields.length ? "0.5rem" : "2.5rem",
            }),
          }}
          noOptionsMessage={() => "لا توجد نتائج مطابقة"}
          loadingMessage={() => "جاري البحث..."}
          errorMessage={() => "حدث خطأ أثناء جلب الاقتراحات"}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
          // دعم الكتابة اليدوية + Enter
          onKeyDown={(e) => {
            if (e.key === "Enter" && inputValue.trim() && allowFreeText) {
              e.preventDefault();
              const trimmed = inputValue.trim();
              onSelect?.({ label: trimmed, value: trimmed });
              setInputValue("");
            }
          }}
          {...rest}
        />
      </div>
    </div>
  );
}
