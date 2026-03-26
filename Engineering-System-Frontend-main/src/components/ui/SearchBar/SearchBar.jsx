import { useState, useEffect, useCallback } from "react";
import { Search, X } from "lucide-react";

/**
 * SearchBar Component - Replaces SearchInput
 * A styled search bar with field selector and debounced text input
 * 
 * @param {Object} props
 * @param {Array} props.fields - Array of searchable fields [{ value, label }]
 * @param {string} props.placeholder - Placeholder text (default: "بحث...")
 * @param {Function} props.onSearch - Callback (value, field) => void
 * @param {string} props.className - Optional additional CSS classes
 */
const SearchBar = ({ 
  fields = [], 
  placeholder = "بحث...", 
  onSearch = () => {}, 
  className = "" 
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedField, setSelectedField] = useState("all");
  const [debouncedValue, setDebouncedValue] = useState("");

  // Debounce search value with 300ms delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchValue]);

  // Trigger onSearch when debounced value or field changes
  useEffect(() => {
    onSearch(debouncedValue, selectedField);
  }, [debouncedValue, selectedField, onSearch]);

  const handleClear = useCallback(() => {
    setSearchValue("");
    setDebouncedValue("");
  }, []);

  const handleFieldChange = useCallback((e) => {
    const newField = e.target.value;
    setSelectedField(newField);
    setSearchValue("");
    setDebouncedValue("");
  }, []);

  return (
    <div className={`flex items-center w-full overflow-hidden border border-primary-200 rounded-lg bg-base focus-within:border-primary-500 transition-colors ${className}`}>
      {/* Field Selector */}
      <select
        value={selectedField}
        onChange={handleFieldChange}
        className="bg-primary-50 text-primary-700 text-sm border-e border-primary-200 px-3 py-2 outline-none cursor-pointer hover:bg-primary-100 transition-colors h-[48px] min-w-[120px]"
        aria-label="حقل البحث"
      >
        <option value="all">الكل</option>
        {fields.map((field) => (
          <option key={field.value} value={field.value}>
            {field.label}
          </option>
        ))}
      </select>

      {/* Search Icon */}
      <div className="px-3 text-primary-400">
        <Search size={20} />
      </div>

      {/* Search Input */}
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder={placeholder}
        className="flex-1 h-[48px] px-4 bg-transparent outline-none text-sm text-foreground placeholder:text-primary-300"
        aria-label="بحث"
      />

      {/* Clear Button */}
      {searchValue && (
        <button
          type="button"
          onClick={handleClear}
          className="px-3 text-primary-400 hover:text-primary-600 cursor-pointer transition-colors"
          aria-label="مسح البحث"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
