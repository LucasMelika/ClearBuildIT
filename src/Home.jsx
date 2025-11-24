import React from 'react';
import ServicesCard from './components/ServicesCard';
import ProjectSlider from './components/ProjectSlider';
import FeatureCard from './components/FeatureCard';
import { CloudIcon, ShieldCheckIcon, BoltIcon, UsersIcon, DevicePhoneMobileIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="bg-neutral-50 min-h-screen pb-16">
      {/* Hero Section */}

      <section className="max-w-6xl mx-auto px-4 pt-12 pb-16 flex flex-col md:flex-row items-stretch gap-10">
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight">
            Welkom bij <span className="text-green-700">ClearBuildIT</span>
          </h1>
          <p className="text-lg text-neutral-700 max-w-xl">
            Wij bouwen digitale oplossingen die jouw bedrijf laten groeien. Van SaaS-platformen tot mobiele apps, wij denken mee en leveren kwaliteit.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#contact" className="inline-block px-6 py-3 rounded-full bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">Neem contact op</a>
            <a href="#diensten" className="inline-block px-6 py-3 rounded-full bg-white border border-green-600 text-green-700 font-semibold shadow hover:bg-green-50 transition">Onze diensten</a>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <ServicesCard />
        </div>
      </section>

      {/* Project Slider Section */}
      <ProjectSlider />

      {/* Feature/Benefits Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
            Waarom kiezen voor <span className="text-green-700">ClearBuildIT</span>?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Wij bieden complete digitale oplossingen, volledig afgestemd op jouw groei en succes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <FeatureCard
            icon={CloudIcon}
            accent
            title="Schaalbare SaaS-platformen"
            description="Van MVP tot enterprise: wij bouwen veilige, schaalbare cloudoplossingen die met je bedrijf meegroeien."
          />
          <FeatureCard
            icon={ShieldCheckIcon}
            accent
            title="Veiligheid & Betrouwbaarheid"
            description="Jouw data is veilig. Wij implementeren best practices voor privacy, compliance en uptime."
          />
          <FeatureCard
            icon={BoltIcon}
            accent
            title="Snelle delivery, hoge kwaliteit"
            description="Iteratieve aanpak, korte lijnen en altijd zicht op resultaat. Snel live, zonder concessies aan kwaliteit."
          />
          <FeatureCard
            icon={DevicePhoneMobileIcon}
            accent
            title="Mobiele & Web Apps"
            description="Gebruiksvriendelijke apps voor elk device, met focus op performance en design."
          />
          <FeatureCard
            icon={GlobeAltIcon}
            accent
            title="Internationaal & Lokaal"
            description="Oplossingen die klaar zijn voor groei, in meerdere talen en markten."
          />
          <FeatureCard
            icon={UsersIcon}
            accent
            title="Persoonlijk contact"
            description="Direct contact met onze experts. Wij denken mee en zijn altijd bereikbaar."
          />
        </div>
      </section>
    </main>
  );
}
