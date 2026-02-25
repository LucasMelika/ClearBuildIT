import React from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const articles = [
  {
    id: 1,
    title: "SaaS Platform Development: Van Idee tot Launch",
    description: "Leer hoe je een succesvolle SaaS-platform bouwt met moderne technologie, best practices en real-world voorbeelden.",
    category: "SaaS Development",
    readTime: "8 min",
    date: "25 Feb 2026",
    slug: "#blog/saas-platform-development"
  },
  {
    id: 2,
    title: "Web App vs Mobile App: Welke Moet Je Kiezen?",
    description: "Complete gids om te bepalen of je een webapp, native app of cross-platform oplossing nodig hebt voor jouw bedrijf.",
    category: "Development Strategy",
    readTime: "6 min",
    date: "20 Feb 2026",
    slug: "#blog/web-app-vs-mobile-app"
  },
  {
    id: 3,
    title: "Agile Development: Flexibel en Transparant Bouwen",
    description: "Waarom agile development de beste aanpak is voor software projecten en hoe ClearBuildIT dit implementeert.",
    category: "Development",
    readTime: "7 min",
    date: "15 Feb 2026",
    slug: "#blog/agile-development"
  },
  {
    id: 4,
    title: "Cloud Native Architectuur voor Schaalbare Apps",
    description: "How to architect cloud-native applications die automatisch schalen met vraag. AWS, Azure en GCP best practices.",
    category: "Cloud & Infrastructure",
    readTime: "9 min",
    date: "10 Feb 2026",
    slug: "#blog/cloud-native-architecture"
  }
];

export default function BlogSection() {
  return (
    <section id="resources" className="max-w-6xl mx-auto px-4 py-20 scroll-mt-16 md:scroll-mt-20">
      <div className="mb-4">
        <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wide mb-4">
          📚 Kenniscentrum
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Leer van onze <span className="text-green-700">expertise</span>
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Diepgaande gidsen, best practices en inzichten over SaaS, webapps, mobile apps en cloud architectuur.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="group p-6 rounded-lg border border-neutral-200 hover:border-green-400 hover:shadow-lg transition-all bg-white hover:bg-green-50/30"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span className="text-xs text-neutral-500">{article.readTime}</span>
            </div>
            
            <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-green-700 transition">
              {article.title}
            </h3>
            
            <p className="text-neutral-600 text-sm mb-4">
              {article.description}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
              <span className="text-xs text-neutral-500">{article.date}</span>
              <a
                href={article.slug}
                className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition group-hover:translate-x-1 transform"
              >
                Lees meer
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-neutral-600 mb-4">
          Meer artikelen beschikbaar op ons kenniscentrum
        </p>
        <a
          href="#resources"
          className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold hover:from-blue-700 hover:to-green-700 transition-all hover:scale-105"
        >
          Alle artikelen bekijken
        </a>
      </div>
    </section>
  );
}
