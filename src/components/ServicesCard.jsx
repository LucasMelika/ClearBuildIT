import React from 'react';
import { CloudIcon, GlobeAltIcon, DevicePhoneMobileIcon, CodeBracketSquareIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'SaaS Platformen',
    desc: 'Van MVP tot enterprise schaal, multi-tenant architectuur en subscription billing integraties.',
    icon: CloudIcon,
  },
  {
    title: 'Websites',
    desc: 'High-performance marketing & content sites met SEO en internationale uitrol.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Web Apps',
    desc: 'Interactieve dashboards, portals en workflow tools gebouwd op moderne frameworks.',
    icon: CodeBracketSquareIcon,
  },
  {
    title: 'Mobile Apps',
    desc: 'Native-gevoel React Native / Flutter apps met realtime sync en offline support.',
    icon: DevicePhoneMobileIcon,
  },
];

export default function ServicesCard() {
  return (
    <div className="relative rounded-2xl bg-neutral-900 text-neutral-50 shadow-card overflow-hidden">
      <div className="absolute inset-0 bg-hero-radial opacity-40" aria-hidden="true" />
      <div className="p-6 flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand-500 text-white font-bold">CB</span>
          <span className="text-sm font-semibold tracking-wide">Onze diensten</span>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map(s => (
            <ServiceItem key={s.title} {...s} />
          ))}
        </div>
        <div className="mt-4 text-xs text-neutral-300">
          <p className="font-medium text-neutral-100">Samen groeien?</p>
          <p>We denken mee over roadmap, architectuur en iteratieve delivery.</p>
        </div>
      </div>
    </div>
  );
}

function ServiceItem({ title, desc, icon: Icon }) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-md bg-brand-500/20 text-brand-500">
        <Icon className="h-5 w-5" />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-semibold leading-5">{title}</p>
        <p className="text-xs text-neutral-300 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
