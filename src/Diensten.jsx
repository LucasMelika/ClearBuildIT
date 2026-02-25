import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesCard from './components/ServicesCard';

export default function Diensten() {
  return (
    <>
      <Helmet>
        <title>Onze Diensten · SaaS, WebApps & Mobile Apps | ClearBuildIT</title>
        <meta name="description" content="Ontdek onze diensten: SaaS-platformen, interactieve webapps en native mobile apps. Volledig maatwerk voor uw bedrijf." />
        <meta property="og:title" content="Diensten · ClearBuildIT" />
        <meta name="keywords" content="SaaS platform, webapp development, mobile app, React Native, Flutter" />
      </Helmet>
    <main className="bg-white min-h-screen pb-16">
      <section className="max-w-3xl mx-auto px-4 pt-20 pb-20 flex flex-col items-stretch gap-10">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Onze diensten
          </h1>
          <p className="text-lg text-neutral-600 max-w-xl mx-auto mb-6">
            Van SaaS-platformen tot mobiele apps. Wij bouwen digitale oplossingen die werken voor jouw bedrijf.
          </p>
          <a href="#contact" className="inline-block px-7 py-2.5 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition">Neem contact op</a>
        </div>
        <div className="flex justify-center">
          <ServicesCard />
        </div>
      </section>
    </main>
    </>
  );
}
