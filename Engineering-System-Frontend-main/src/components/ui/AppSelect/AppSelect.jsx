import React, { useState, useCallback } from "react";
import Select from "react-select";
import { AsyncPaginate, withAsyncPaginate } from "react-select-async-paginate";
import Creatable from "react-select/creatable";
import toast from "react-hot-toast";
const CreatableAsyncPaginate = withAsyncPaginate(Creatable);

export default function AppSelect({
  options,
  value,
  onChange,
  isMulti = false,
  label = "Floating outlined",
  error,
  isInvalid = false,
  isRequired = false,
  isCreatable = true,
  loadOptionsFn = null,
  createOptionsFn = null,
  isSearchable = true,
  isClearable = true,
  size = "md",
  isDisabled = false,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const loadOptions = useCallback(async (search, loadedOptions, additional) => {
      try {
          const res = await loadOptionsFn(search || "");

          if (res && typeof res === 'object') {
              if (res.options && Array.isArray(res.options)) {
                  return {
                      options: res.options,
                      hasMore: res.hasMore || false,
                      additional: {
                          page: (additional?.page || 1) + 1,
                      },
                  };
              }

              if (Array.isArray(res)) {
                  return {
                      options: res,
                      hasMore: false,
                      additional: {
                          page: 1,
                      },
                  };
              }
          }

          return {
              options: [],
              hasMore: false,
              additional: {
                  page: 1,
              },
          };
      } catch (error) {
          console.error('❌ Error in loadOptions:', error);
          return {
              options: [],
              hasMore: false,
              additional: {
                  page: 1,
              },
          };
      }
  }, [loadOptionsFn]);

  const handleCreate = async (inputValue) => {
      console.log("🔵 Creating new option:", inputValue);
      
      // Show loading state (optional)
      const toastId = toast.loading("جاري التحقق...");
      
      try {
          // First, check if the name already exists by searching
          const searchResult = await loadOptionsFn(inputValue);
          console.log("🔍 Search result for duplicates:", searchResult);
          
          // Check if any existing option has the same label (case-insensitive)
          const existingOptions = searchResult.options || [];
          const duplicateOption = existingOptions.find(
              option => option.label.toLowerCase() === inputValue.toLowerCase()
          );
          
          if (duplicateOption) {
              console.log("⚠️ Duplicate found:", duplicateOption);
              
              // Update toast to show error
              toast.error("اسم الجهة هذا موجود مسبقا", { id: toastId });
              
              // Automatically select the existing option
              onChange(duplicateOption);
              
              return; // Stop the creation process
          }
          
          // Update toast to show creating
          toast.loading("جاري إضافة الجهة...", { id: toastId });
          
          // If no duplicate, proceed with creation
          console.log("✅ No duplicate found, creating new option");
          
          // Call the API to create the owner entity
          const saved = await createOptionsFn(inputValue);
          console.log("✅ Option created successfully:", saved);
          
          // The saved object should be in { value, label } format
          if (saved && saved.value && saved.label) {
              onChange(saved);
              toast.success("تم إضافة الجهة بنجاح", { id: toastId });
          } else {
              console.error("Invalid saved format:", saved);
              toast.error("خطأ في تنسيق البيانات المستلمة", { id: toastId });
          }
      } catch (err) {
          console.error("❌ Failed to create option:", err);
          
          // Check if error is from backend duplicate check
          if (err.response?.data?.message === "اسم الجهة هذا موجود مسبقا") {
              toast.error("اسم الجهة هذا موجود مسبقا", { id: toastId });
          } else {
              toast.error("فشل في إنشاء الجهة المالكة", { id: toastId });
          }
      }
  };  

  

  const hasValue = isMulti ? Array.isArray(value) && value.length > 0 : !!value;

  const float = isFocused || hasValue;

  const styles = {
    control: (base) => ({
      ...base,
      backgroundColor: "var(--color-background)",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: isInvalid
        ? "#dc2626"
        : isFocused
          ? "var(--color-primary-500)"
          : "var(--color-foreground)",
      borderRadius: "8px",
      minHeight: size === "sm" ? "32px" : "48px",
      boxShadow: "none",
      alignItems: "center",
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 99999,
    }),

    valueContainer: (base) => ({
      ...base,
      padding: size === "sm" ? "0 8px" : "0 12px",
      boxSizing: "border-box",
      alignItems: "center",
    }),

    input: (base) => ({
      ...base,
      margin: 0,
      padding: "0",
    }),

    singleValue: (base) => ({
      ...base,
      color: "var(--color-foreground)",
    }),

    menu: (base) => ({
      ...base,
      zIndex: 9999,
      backgroundColor: "var(--color-background)",
    }),

    placeholder: () => ({
      display: "none",
    }),

    option: (base, state) => ({
      ...base,
      fontSize: "14px",
      padding: "10px 12px",
      cursor: state.isDisabled ? "not-allowed" : "pointer",
      backgroundColor: state.isSelected
        ? "var(--color-primary-500)"
        : state.isFocused
          ? "var(--color-primary-50)"
          : "transparent",
      color: state.isSelected
        ? "var(--color-primary-content-500)"
        : state.isFocused
          ? "var(--color-primary-content-50)"
          : "",
    }),
  };

  const commonProps = {
    isClearable,
    isSearchable,
    value,
    onChange,
    isMulti,
    isDisabled,
    styles,
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    menuPlacement: "auto",
    menuPosition: "fixed",
    menuPortalTarget: document.body,
  };

  return (
    <div className="relative w-full">
      <label
        className={`
          absolute z-10 px-2 bg-background text-sm duration-300 origin-left
          start-1
          ${
            float
              ? "top-2 scale-75 -translate-y-4"
              : "top-1/2 -translate-y-1/2 scale-100"
          }
          ${isFocused ? "text-primary-500" : ""}
          ${isInvalid ? "text-red-600" : ""}
        `}
      >
        {label}
        {isRequired && <span className="text-red-500">*</span>}
      </label>

      {options ? (
        <Select {...commonProps} options={options} />
      ) : isCreatable ? (
        <CreatableAsyncPaginate
          {...commonProps}
          loadOptions={loadOptions}
          additional={{ page: 1 }}
          debounceTimeout={300}
          onCreateOption={handleCreate}
          isValidNewOption={(input) => input.trim().length >= 2}
          formatCreateLabel={(input) => `إضافة "${input}"`}
        />
      ) : (
        <AsyncPaginate
          {...commonProps}
          debounceTimeout={300}
          loadOptions={loadOptions}
          additional={{ page: 1 }}
        />
      )}

      {isInvalid && (
        <span className="mt-1 block text-xs text-red-600">{error}</span>
      )}
    </div>
  );
}
