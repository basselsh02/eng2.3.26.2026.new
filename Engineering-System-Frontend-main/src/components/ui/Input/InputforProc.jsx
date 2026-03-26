import React, { forwardRef, useState, useEffect, useRef } from "react";

const ProcurementNameInput = forwardRef(
  (
    {
      label = "اسم طلب التدبير",
      value = "",
      onChange,
      error,
      required = false,
      disabled = false,
      id,
      ...props
    },
    ref,
  ) => {
    // Generate a unique ID for accessibility if none provided
    const fieldId = id || `procurement-name-${Math.random().toString(36).substr(2, 9)}`;

    // Refs for the three inputs (for focus management)
    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);

    // Parse the combined value into parts
    const parseValue = (val) => {
      if (!val) return ["", "", ""];
      const parts = val.split("/").map((s) => s.trim());
      if (parts.length === 3) return parts;
      // Fallback: if not exactly three parts, put everything in the first part
      return [val, "", ""];
    };

    const [parts, setParts] = useState(() => parseValue(value));
    const [isFocused, setIsFocused] = useState(false);

    // Update internal state when external value changes
    useEffect(() => {
      setParts(parseValue(value));
    }, [value]);

    const handlePartChange = (index, newValue) => {
      const newParts = [...parts];
      newParts[index] = newValue;
      setParts(newParts);
      // Combine and call onChange
      const combined = newParts.join("/");
      onChange?.(combined);
    };

    // Determine if the label should float
    const hasValue = parts.some((part) => part.trim() !== "");
    const shouldFloat = isFocused || hasValue;

    // Focus handlers
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => {
      // Use setTimeout to check if focus moved to another input inside the same container
      setTimeout(() => {
        if (!document.activeElement?.closest(".procurement-name-container")) {
          setIsFocused(false);
        }
      }, 0);
    };

    // Enter key navigation
    const handleKeyDown = (e, currentIndex) => {
      if (e.key === "Enter" && !disabled) {
        e.preventDefault();
        if (currentIndex === 0) input2Ref.current?.focus();
        else if (currentIndex === 1) input3Ref.current?.focus();
        else if (currentIndex === 2) input3Ref.current?.blur(); // or move to next field in the form
      }
    };

    return (
      <div className="mb-2">
        <div className="relative">
          {/* Container – mimics the input border and focus ring */}
          <div
            className={`
              procurement-name-container
              flex items-center gap-1
              block px-2.5 pb-2.5 pt-4 w-full text-sm text-heading bg-transparent rounded-lg border
              appearance-none focus-within:outline-none focus-within:ring-0
              ${error ? "border-red-500 focus-within:border-red-500" : "focus-within:border-primary-500"}
              ${disabled ? "cursor-not-allowed opacity-50" : ""}
            `}
          >
            {/* First part: text */}
            <input
              ref={input1Ref}
              type="text"
              value={parts[0]}
              onChange={(e) => handlePartChange(0, e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={(e) => handleKeyDown(e, 0)}
              placeholder="نص"
              disabled={disabled}
              className="flex-1 outline-none text-center bg-transparent disabled:cursor-not-allowed"
              style={{ minWidth: "80px" }}
              aria-label="الجزء النصي"
            />
            <span className="text-gray-400 font-bold select-none">/</span>

            {/* Second part: number */}
            <input
              ref={input2Ref}
              type="text"
              value={parts[1]}
              onChange={(e) => {
                const val = e.target.value.replace(/[^0-9]/g, "");
                handlePartChange(1, val);
              }}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={(e) => handleKeyDown(e, 1)}
              placeholder="رقم"
              disabled={disabled}
              className="flex-1 outline-none text-center bg-transparent disabled:cursor-not-allowed"
              style={{ minWidth: "80px" }}
              aria-label="الرقم الأول"
            />
            <span className="text-gray-400 font-bold select-none">/</span>

            {/* Third part: year */}
            <input
              ref={input3Ref}
              type="text"
              value={parts[2]}
              onChange={(e) => {
                const val = e.target.value.replace(/[^0-9]/g, "");
                handlePartChange(2, val);
              }}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={(e) => handleKeyDown(e, 2)}
              placeholder="سنة"
              disabled={disabled}
              className="flex-1 outline-none text-center bg-transparent disabled:cursor-not-allowed"
              style={{ minWidth: "80px" }}
              aria-label="الرقم الثاني (السنة)"
            />
          </div>

          {/* Floating label */}
          <label
            htmlFor={fieldId} // Not directly tied to an input, but used for accessibility
            className={`
              absolute text-sm duration-300 transform origin-left bg-background px-2
              ${shouldFloat ? "-translate-y-4 scale-75 top-2" : "translate-y-0 scale-100 top-1/2 -translate-y-1/2"}
              start-2 pointer-events-none
              ${error ? "text-red-500" : "text-body"}
            `}
          >
            {label}
            {required && <span className="text-red-500">*</span>}
          </label>
        </div>

        {/* Error message */}
        {error && (
          <p className="text-red-500 text-xs mt-2">
            {typeof error === "string" ? error : error.message}
          </p>
        )}
      </div>
    );
  },
);

export default ProcurementNameInput;