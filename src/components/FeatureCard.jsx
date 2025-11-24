import React from 'react';

export default function FeatureCard({ icon: Icon, title, description, accent }) {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-neutral-100 p-6 flex flex-col items-start min-h-[180px]">
      <div className="mb-3">
        {Icon && <Icon className={`h-8 w-8 ${accent ? 'text-green-600' : 'text-neutral-400'}`} />}
      </div>
      <h3 className="font-semibold text-lg text-neutral-900 mb-1">
        {title}
      </h3>
      <p className="text-sm text-neutral-600 leading-snug">
        {description}
      </p>
    </div>
  );
}
