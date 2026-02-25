import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline';

const caseStudies = [
  {
    id: 1,
    title: 'TechStartup BV - SaaS Platform Launch',
    industry: 'SaaS',
    description: 'Van idee tot professioneel SaaS platform in 8 weken',
    results: [
      '500+ actieve gebruikers in eerste maand',
      '99.8% uptime guaranteed',
      '3x sneller dan concurrent platforms',
      '$50k revenue gegenereerd'
    ],
    challenge: 'TechStartup had een goed idee maar geen technisch team. Ze hadden een professioneel SaaS platform nodig dat schaalbaar was en security-first.',
    solution: 'We bouwden een volledig custom SaaS platform met React frontend, Node.js backend, PostgreSQL database en AWS hosting. Inclusief user authentication, payment processing en analytics.',
    impact: 'De launch was succesvol en ze hebben blijkbare groei gezien. Nu werken we aan feature expansions.',
    image: '🚀',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'E-commerce Shop - Web App Modernisering',
    industry: 'E-commerce',
    description: 'Legacy website getransformeerd naar modern React app',
    results: [
      'Load tijd -70%',
      'Conversie +45%',
      'Mobile traffic +200%',
      'Support tickets -50%'
    ],
    challenge: 'Oude ASP.NET website was traag, outdated en slecht voor mobile. Conversie liep terug.',
    solution: 'Complete redesign met React, modernisering van backend, optimalisatie voor mobile. Implementatie van progressive web app functionality.',
    impact: 'Verkoopstijging van 45% na launch. Tevreden klanten en minder technical debt.',
    image: '🛍️',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 3,
    title: 'FinTech Corp - Complex Financial Dashboard',
    industry: 'FinTech',
    description: 'Real-time financial dashboard voor institutionele traders',
    results: [
      'Real-time data processing',
      '10,000+ concurrent users',
      'Sub-100ms latency',
      'Zero-downtime deployments'
    ],
    challenge: 'Nodig: schaalbare realtime dashboard voor financiële data. Requirements: high performance, security, compliance.',
    solution: 'Gebouwd met React, WebSockets, Redis voor caching, Kubernetes voor orchestration. Uitgebreide security audits en compliance checks.',
    impact: 'Platform handelt miljoenen in transacties af. Verhoogde klant vertrouwen en inzicht.',
    image: '💹',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 4,
    title: 'Logistics Corp - Supply Chain System',
    industry: 'Logistics',
    description: 'Custom supply chain management system',
    results: [
      'Operationeel efficiëntie +30%',
      'Tracking accuracy 99.9%',
      'API voor 100+ partners',
      'Cost savings €500k/jaar'
    ],
    challenge: 'Wereldwijd logistiek bedrijf had nodig om alle operations in één platform te integreren.',
    solution: 'Custom full-stack application met GPS tracking, real-time notifications, partner integrations en advanced analytics.',
    impact: 'Sterk verbeterde efficiency, kostenbesparing en klant satisfactie.',
    image: '📦',
    color: 'from-orange-500 to-orange-600'
  }
];

export default function CaseStudies() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <>
      <Helmet>
        <title>Case Studies - ClearBuildIT | Project Success Stories</title>
        <meta name="description" content="Lees onze case studies: succesvolle projecten van SaaS platforms tot e-commerce shops. Resultaten en impact." />
        <meta name="keywords" content="case studies, projects, web development, SaaS, e-commerce, success stories" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 mt-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-3">Case Studies</h1>
            <p className="text-lg text-blue-100">Kijk hoe we bedrijven hebben getransformeerd</p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="space-y-6">
            {caseStudies.map(study => (
              <div
                key={study.id}
                className="border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Header */}
                <button
                  onClick={() => setExpandedId(expandedId === study.id ? null : study.id)}
                  className="w-full bg-white p-6 flex items-start justify-between gap-4 hover:bg-neutral-50 transition-colors text-left"
                >
                  <div className="flex gap-4 flex-1">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${study.color} text-3xl flex items-center justify-center flex-shrink-0`}>
                      {study.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-neutral-900 mb-1">{study.title}</h3>
                      <p className="text-neutral-600 text-sm mb-2">{study.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs font-semibold rounded">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ArrowRightIcon className={`w-6 h-6 text-green-600 flex-shrink-0 transition-transform ${expandedId === study.id ? 'rotate-90' : ''}`} />
                </button>

                {/* Expanded Content */}
                {expandedId === study.id && (
                  <div className="border-t border-neutral-200 bg-neutral-50 p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Left: Challenge & Solution */}
                      <div>
                        <div className="mb-6">
                          <h4 className="font-bold text-neutral-900 mb-2">🎯 Uitdaging</h4>
                          <p className="text-neutral-700 text-sm">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-neutral-900 mb-2">⚙️ Oplossing</h4>
                          <p className="text-neutral-700 text-sm">{study.solution}</p>
                        </div>
                      </div>

                      {/* Right: Results & Impact */}
                      <div>
                        <div className="mb-6">
                          <h4 className="font-bold text-neutral-900 mb-3">✨ Resultaten</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                                <CheckIcon className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-neutral-900 mb-2">💡 Impact</h4>
                          <p className="text-neutral-700 text-sm">{study.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center p-8 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Jouw project volgende?</h3>
            <p className="text-neutral-600 mb-6">Laat ons weten wat je wilt bereiken. We helpen je graag.</p>
            <a href="#contact" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Plan een gesprek
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
