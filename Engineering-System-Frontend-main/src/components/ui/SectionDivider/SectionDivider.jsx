import React from 'react';

export default function SectionDivider({ title, icon }) {
  return (
    <div className="relative my-8">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-4 py-2 text-sm font-medium text-gray-900 rounded-full shadow-sm flex items-center space-x-2 space-x-reverse">
          {icon && <span className="text-gray-500">{icon}</span>}
          <span>{title}</span>
        </span>
      </div>
    </div>
  );
}