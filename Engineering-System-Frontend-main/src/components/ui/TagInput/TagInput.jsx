import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

/**
 * TagInput Component
 * Allows users to manually type and add multiple text values as tags
 */
export default function TagInput({ 
    label, 
    value = [], 
    onChange, 
    placeholder = "اكتب اسم واضغط Enter",
    error,
    isInvalid = false,
}) {
    const [inputValue, setInputValue] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue.trim()) {
            e.preventDefault();
            const newValue = inputValue.trim();
            
            // Avoid duplicates
            if (!value.includes(newValue)) {
                onChange([...value, newValue]);
            }
            setInputValue("");
        } else if (e.key === "Backspace" && !inputValue && value.length > 0) {
            // Remove last tag when backspace is pressed on empty input
            onChange(value.slice(0, -1));
        }
    };

    const removeTag = (indexToRemove) => {
        onChange(value.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-foreground mb-1.5">
                    {label}
                </label>
            )}
            
            <div
                className={`min-h-[42px] w-full rounded-md border bg-background px-3 py-2 text-sm 
                    focus-within:outline-none focus-within:ring-2 focus-within:ring-ring 
                    ${isInvalid ? "border-red-500 focus-within:ring-red-500" : "border-input"}
                    transition-colors`}
            >
                {/* Display tags */}
                <div className="flex flex-wrap gap-2 mb-2">
                    {value.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md 
                                bg-primary-100 text-primary-800 text-sm font-medium
                                border border-primary-200"
                        >
                            {tag}
                            <button
                                type="button"
                                onClick={() => removeTag(index)}
                                className="hover:text-primary-900 focus:outline-none ml-1"
                                aria-label={`Remove ${tag}`}
                            >
                                <FaTimes className="w-3 h-3" />
                            </button>
                        </span>
                    ))}
                </div>

                {/* Input field */}
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={value.length === 0 ? placeholder : ""}
                    className="w-full bg-transparent border-none outline-none text-foreground 
                        placeholder:text-muted-foreground"
                />
            </div>

            {error && (
                <p className="mt-1.5 text-sm text-red-600">{error}</p>
            )}
            
            <p className="mt-1 text-xs text-muted-foreground">
                اكتب اسم الضابط واضغط Enter للإضافة
            </p>
        </div>
    );
}
