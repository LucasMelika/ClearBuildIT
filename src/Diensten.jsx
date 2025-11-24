import React from 'react';
import ServicesCard from './components/ServicesCard';

export default function Diensten() {
  return (
    <main className="bg-neutral-50 min-h-screen pb-16">
      <section className="max-w-6xl mx-auto px-4 pt-12 pb-16 flex flex-col items-stretch gap-10">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight mb-4">
            Onze diensten
          </h1>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            ClearBuildIT biedt een breed scala aan digitale diensten: van maatwerk SaaS-platformen tot mobiele apps en consultancy. Ontdek wat wij voor jouw bedrijf kunnen betekenen.
          </p>
        </div>
        <div className="flex justify-center">
          <ServicesCard />
        </div>
      </section>
    </main>
  );
}
