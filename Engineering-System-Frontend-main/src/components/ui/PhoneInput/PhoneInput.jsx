import React, { forwardRef } from 'react';

const PhoneInput = forwardRef(({ label, error, className = '', ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">+966</span>
        </div>
        <input
          ref={ref}
          type="tel"
          dir="ltr"
          className={`
            w-full rounded-lg border-gray-300 shadow-sm
            focus:border-blue-500 focus:ring-blue-500
            pr-16 pl-4 py-2 text-left
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error.message}</p>
      )}
    </div>
  );
});

PhoneInput.displayName = 'PhoneInput';
export default PhoneInput;