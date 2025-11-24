import React from 'react';

const rows = [
  { label: 'Luxe deelauto\'s', left: 'Mercedes, Polestar, Audi etc', right: false },
  { label: 'Ook reclamevrije auto\'s beschikbaar', left: true, right: false },
  { label: 'Alleen voor jouw buurt', left: true, right: false },
  { label: 'Gratis uren', left: true, right: false },
];

export default function ComparisonCard() {
  return (
    <div className="relative rounded-2xl bg-neutral-900 text-neutral-50 shadow-card overflow-hidden">
      <div className="absolute inset-0 bg-hero-radial opacity-40" aria-hidden="true" />
      <div className="grid grid-cols-3 sm:grid-cols-5 divide-x divide-neutral-800">
        <div className="col-span-1 sm:col-span-2 flex flex-col p-6 gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-block h-5 w-5 rounded-full bg-brand-500" />
            <span className="font-medium"></span>
          </div>
          {rows.map(r => (
            <div key={r.label} className="text-sm flex items-start gap-2">
              <Check available={r.left === true} />
              <div>
                <p className="font-medium leading-5">{r.label}</p>
                {typeof r.left === 'string' && <p className="text-neutral-300 text-xs mt-1">{r.left}</p>}
              </div>
            </div>
          ))}
          <div className="mt-auto text-xs">
            <p className="font-medium">Uurtarief</p>
            <p>€2,50/uur <span className="text-neutral-400">€0,26/km</span></p>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-3 flex flex-col p-6 gap-4 bg-neutral-800/40">
          <p className="font-medium">Andere deelauto\'s</p>
          {rows.map(r => (
            <div key={r.label} className="text-sm flex items-start gap-2">
              <Cross available={false} />
              <p className="font-medium leading-5">{r.label}</p>
            </div>
          ))}
          <div className="mt-auto text-xs">
            <p className="font-medium">Uurtarief</p>
            <p>€3,71/uur <span className="text-neutral-400">€0,35/km</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Check() {
  return <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-white">✓</span>;
}
function Cross() {
  return <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white">✕</span>;
}
