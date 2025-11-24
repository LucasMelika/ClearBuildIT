import React from 'react';
import ServicesCard from '../components/ServicesCard.jsx';

export default function Hero() {
  return (
    <section className="py-12 sm:py-20" aria-labelledby="hero-heading">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-6 max-w-xl">
          <span className="badge-deal">Nieuw · ClearBuildIT</span>
          <h1 id="hero-heading" className="h1-hero">Maatwerk SaaS & Digitale Producten</h1>
          <p className="text-sm leading-relaxed text-neutral-700">
            Wij ontwerpen en ontwikkelen schaalbare software voor ambitieuze organisaties: van SaaS-platformen en converterende marketing websites tot complexe webapps en hoge-performantie mobile apps.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2"><Bullet /> End-to-end product teams (design, dev, cloud)</li>
            <li className="flex items-start gap-2"><Bullet /> Moderne stacks: React, Next.js, Node, Python, AWS/Azure</li>
            <li className="flex items-start gap-2"><Bullet /> Focus op snelheid, security & schaalbaarheid</li>
          </ul>
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="btn btn-primary">Plan een kennismaking</button>
            <button className="btn btn-outline">Bekijk cases</button>
          </div>
        </div>
        <div className="lg:pl-6">
          <ServicesCard />
        </div>
      </div>
    </section>
  );
}

function Bullet() {
  return <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-white text-xs">✓</span>;
}
