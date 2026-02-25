import React from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'diensten', label: 'Diensten' },
  { id: 'projecten', label: 'Projecten' },
  { id: 'features', label: 'Voordelen' },
];

export default function SubNavbar() {
  return (
    <nav className="sticky top-[64px] z-30 bg-white border-b border-neutral-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex gap-2 md:gap-6 h-12 items-center justify-center">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="px-3 py-1.5 rounded-full text-sm font-medium text-neutral-700 hover:bg-green-50 hover:text-green-700 transition focus:bg-green-100 focus:text-green-800"
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
