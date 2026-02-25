import React from 'react';
import { Link } from 'react-router-dom';
import { CloudIcon, DevicePhoneMobileIcon, CodeBracketSquareIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'SaaS Platformen',
    desc: 'Van MVP tot enterprise schaal, multi-tenant architectuur en subscription billing integraties.',
    icon: CloudIcon,
    accent: 'bg-green-100 text-green-700',
  },
  {
    title: 'Web Apps',
    desc: 'Interactieve dashboards, portals en workflow tools gebouwd op moderne frameworks.',
    icon: CodeBracketSquareIcon,
    accent: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Mobile Apps',
    desc: 'Native-gevoel React Native / Flutter apps met realtime sync en offline support.',
    icon: DevicePhoneMobileIcon,
    accent: 'bg-purple-100 text-purple-700',
  },
];


export default function ServicesCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {services.map((s, i) => (
        <ServiceListItem key={s.title} {...s} />
      ))}
    </div>
  );
}



function getDemoPath(title) {
  if (title.toLowerCase().includes('saas')) return '/demo/saas';
  if (title.toLowerCase().includes('web app')) return '/demo/webapp';
  if (title.toLowerCase().includes('mobile')) return '/demo/mobile';
  return '/';
}

function ServiceListItem({ title, desc, icon: Icon, accent }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 p-8 hover:shadow-xl transition-all group hover:scale-105 hover:border-green-200">
      <Link to={getDemoPath(title)} className="block">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center border border-green-200 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all">
            <Icon className="h-8 w-8 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-green-700 transition">{title}</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">{desc}</p>
          </div>
          <div className="mt-2 text-green-600 text-sm font-semibold group-hover:underline underline-offset-4">
            Bekijk demo →
          </div>
        </div>
      </Link>
    </div>
  );
}
