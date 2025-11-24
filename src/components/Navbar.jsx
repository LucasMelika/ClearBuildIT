import React, { useState } from 'react';
import LocationSelect from './LocationSelect.jsx';

// Primary navigation (bovenste rij) voor ClearBuildIT
const primary = [
  { label: 'Diensten', href: '#diensten' },
  { label: 'Cases', href: '#cases' },
  { label: 'Proces', href: '#proces' },
  { label: 'Technologie', href: '#tech' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact', badge: 'LET\'S TALK' }
];
// Secondary subnav (anker links op landingspagina)
const secondary = [
  { label: 'Home', href: '#', current: true },
  { label: 'SaaS', href: '#saas' },
  { label: 'Websites', href: '#websites' },
  { label: 'Web Apps', href: '#webapps' },
  { label: 'Mobile Apps', href: '#mobileapps' },
  { label: 'Stack', href: '#stack' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
      {/* Top row */}
      <div className="container-page flex h-14 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 font-semibold text-lg">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand-500 text-white font-bold">CB</span> ClearBuildIT
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {primary.map(item => (
              <a
                key={item.label}
                href={item.href}
                className="group relative text-sm font-medium text-neutral-700 hover:text-neutral-900"
              >
                {item.label}
                {item.badge && (
                  <span className="ml-2 rounded-full bg-brand-100 text-[10px] font-semibold text-brand-700 px-2 py-1 leading-none">
                    {item.badge}
                  </span>
                )}
                <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LocationSelect />
          </div>
          <button className="btn btn-primary hidden sm:inline-flex">Download de app</button>
          <button
            aria-label="Open menu"
            className="lg:hidden inline-flex items-center justify-center rounded-md h-10 w-10 border border-neutral-300"
            onClick={() => setOpen(o => !o)}
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-[5px]">
              <span className="block h-0.5 w-5 bg-neutral-900" />
              <span className="block h-0.5 w-5 bg-neutral-900" />
              <span className="block h-0.5 w-5 bg-neutral-900" />
            </div>
          </button>
        </div>
      </div>
      {/* Secondary subnav */}
      <div className="hidden md:block border-t border-neutral-200 bg-white/70">
        <div className="container-page flex items-center gap-4 py-2">
          {secondary.map(item => (
            <a
              key={item.label}
              href={item.href}
              className={
                'text-xs sm:text-sm font-medium rounded-full px-3 py-1 transition-colors ' +
                (item.current ? 'bg-neutral-200 text-neutral-900' : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900')
              }
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/40" onClick={() => setOpen(false)}>
          <div
            className="absolute left-0 top-0 h-full w-72 max-w-[80%] bg-white shadow-xl flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 h-14 border-b border-neutral-200">
              <a href="#" className="flex items-center gap-2 font-semibold text-lg">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand-500 text-white font-bold">CB</span> ClearBuildIT
              </a>
              <button
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-300"
                onClick={() => setOpen(false)}
              >×</button>
            </div>
            <div className="overflow-y-auto flex-1 px-4 py-6 space-y-8">
              <div className="flex flex-col gap-3">
                {primary.map(item => (
                  <a key={item.label} href={item.href} className="text-sm font-medium text-neutral-700">
                    {item.label}
                    {item.badge && (
                      <span className="ml-2 rounded-full bg-brand-100 text-[10px] font-semibold text-brand-700 px-2 py-1 leading-none">{item.badge}</span>
                    )}
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {secondary.map(item => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={
                      'text-xs font-medium rounded-full px-3 py-1 ' +
                      (item.current ? 'bg-neutral-200 text-neutral-900' : 'bg-neutral-100 text-neutral-700')
                    }
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <LocationSelect />
              <button className="btn btn-primary w-full">Download de app</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
