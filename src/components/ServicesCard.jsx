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
    <div className="relative rounded-2xl bg-neutral-100 text-neutral-900 border border-green-200 shadow-xl overflow-hidden transition-all duration-300">
      <div className="p-8 flex flex-col gap-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-bold tracking-tight text-green-800 font-sans border-l-4 border-green-400 pl-3">Onze diensten</span>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <ServiceItem key={s.title} {...s} />
          ))}
        </div>
        <div className="mt-4 text-xs text-neutral-700 bg-green-50 rounded-xl p-4 border border-green-200 flex flex-col gap-1">
          <p className="font-semibold text-green-700 mb-0.5 text-sm">Samen groeien?</p>
          <p>We denken mee over roadmap, architectuur en iteratieve delivery.</p>
        </div>
      </div>
    </div>
  );
}

function ServiceItem({ title, desc, icon: Icon }) {
  return (
    <div className="flex gap-4 items-start p-3 rounded-xl hover:bg-green-100/70 transition-all duration-200 group shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-green-100 via-green-50 to-white text-green-700 border border-green-200 shadow group-hover:scale-105 group-hover:shadow-md transition-transform">
        <Icon className="h-6 w-6" />
      </div>
      <div className="space-y-1">
        <p className="text-base font-semibold leading-5 text-neutral-900 font-sans">{title}</p>
        <p className="text-xs text-neutral-600 leading-normal font-sans">{desc}</p>
      </div>
    </div>
  );
}
