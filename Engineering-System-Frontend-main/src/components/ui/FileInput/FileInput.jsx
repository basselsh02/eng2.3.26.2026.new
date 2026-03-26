import React, { forwardRef, useState } from "react";
import getFileUrl from "../../../utils/getDownladLink";

const FileInput = forwardRef(
  (
    {
      label = "بيانات",
      id = "fileInput",
      onChange,
      multiple,
      compact = false,
      existingFiles = [],
      ...props
    },
    ref,
  ) => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleChange = (e) => {
      const files = Array.from(e.target.files || []);
      setSelectedFiles(files);

      // تمرير الحدث لـ RHF
      if (onChange) onChange(e);
    };

    // حذف ملف معين
    const removeFile = (index) => {
      const newFiles = selectedFiles.filter((_, i) => i !== index);
      setSelectedFiles(newFiles);

      // تحديث RHF: نرجّع FileList جديدة
      const dataTransfer = new DataTransfer();
      newFiles.forEach((file) => dataTransfer.items.add(file));

      const fileInput = document.getElementById(id);
      fileInput.files = dataTransfer.files;

      // نعمل trigger لـ onChange داخليًا
      if (onChange) {
        const event = new Event("change", { bubbles: true });
        Object.defineProperty(event, "target", {
          writable: false,
          value: fileInput,
        });
        onChange(event);
      }
    };

    // Compact mode: just show the button
    if (compact) {
      return (
        <div className="w-full my-2">
          <p className="mb-2">{label}</p>

          {/* Hidden Input */}
          <input
            id={id}
            type="file"
            ref={ref}
            onChange={handleChange}
            multiple={multiple}
            className="hidden"
            {...props}
          />

          {/* Compact Button */}
          <button
            type="button"
            onClick={() => document.getElementById(id).click()}
            className="inline-flex items-center text-white bg-primary-500 hover:bg-primary-600 border border-transparent font-medium rounded-base text-sm px-3 py-2 focus:outline-none"
          >
            تحميل الملف
          </button>

          {/* File List (if any) */}
          {selectedFiles.length > 0 && (
            <div className="mt-3 p-3 border rounded-lg">
              <p className="font-medium text-sm mb-2">الملفات المختارة:</p>
              <ul className="text-sm space-y-2">
                {selectedFiles.map((file, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center p-2 rounded border"
                  >
                    <span>
                      📄 {file.name} — {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </span>

                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="bg-red-500 rounded-lg text-white px-2 py-1.5 hover:underline text-xs cursor-pointer"
                    >
                      حذف
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    }

    // Default mode: full upload box
    return (
      <div className="w-full my-2">
        <p>{label}</p>

        {/* Existing Files */}
        {existingFiles && existingFiles.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-2">
            {existingFiles.map((file, index) => (
              <a
                key={index}
                href={getFileUrl(file)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-600 border border-blue-200 rounded text-xs hover:bg-blue-100"
              >
                📎 الملف الحالي
              </a>
            ))}
          </div>
        )}

        {/* Upload Box */}
        <div className="flex flex-col items-center justify-center w-full h-fit bg-neutral-secondary-medium border border-dashed rounded-lg">
          <div className="flex flex-col items-center justify-center p-3">
            <svg
              className="w-8 h-8 mb-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01"
              />
            </svg>
            <p className="mb-1 text-sm">اضغط لتحميل الملف</p>
            <p className="text-xs mb-1">
              اقصى حجم الملف: <span className="font-semibold">30MB</span>
            </p>

            <button
              type="button"
              onClick={() => document.getElementById(id).click()}
              className="inline-flex items-center text-white bg-primary-500 hover:bg-primary-600 border border-transparent font-medium rounded-base text-sm px-3 py-2 focus:outline-none"
            >
              تحميل الملف
            </button>
          </div>
        </div>

        {/* Hidden Input */}
        <input
          id={id}
          type="file"
          ref={ref}
          onChange={handleChange}
          multiple={multiple}
          className="hidden"
          {...props}
        />

        {/* File List */}
        {selectedFiles.length > 0 && (
          <div className="mt-3 p-3 border rounded-lg">
            <p className="font-medium text-sm mb-2">الملفات المختارة:</p>
            <ul className="text-sm space-y-2">
              {selectedFiles.map((file, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-2 rounded border"
                >
                  <span>
                    📄 {file.name} — {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </span>

                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="bg-red-500 rounded-lg text-white px-2 py-1.5 hover:underline text-xs cursor-pointer"
                  >
                    حذف
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
);

export default FileInput;