import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <>
      <Helmet>
        <title>Over ons | ClearBuildIT - Over het team</title>
        <meta name="description" content="Leer meer over ClearBuildIT. Wij zijn een team van experts in software development, webontwikkeling en SaaS-platforms." />
        <meta name="keywords" content="over ons, team, ClearBuildIT, software development, webontwikkeling" />
        <meta property="og:title" content="Over ons | ClearBuildIT" />
        <meta property="og:description" content="Leer meer over ClearBuildIT en ons team van software experts" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Over ClearBuildIT
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Wij bouwen digitale oplossingen die bedrijven transformeren en groeien.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Missie</h2>
              <p className="text-neutral-700 leading-relaxed">
                Wij helpen ondernemers en bedrijven hun digitale ambities waar te maken door maatwerk software, websites en platforms te bouwen die echt waarde creëren.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Visie</h2>
              <p className="text-neutral-700 leading-relaxed">
                Een wereld waar technologie bedrijven helpt om sneller, slimmer en schaalbaar te groeien. Technologie moet dienen, niet hinderen.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Onze waarden</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: '🎯', title: 'Focus', desc: 'Volledig gericht op jouw succes' },
                { icon: '⚡', title: 'Kwaliteit', desc: 'Code die werkt en schaalt' },
                { icon: '💡', title: 'Innovatief', desc: 'Moderne technologie & trends' },
                { icon: '🤝', title: 'Workshop', desc: 'Partnerships die groeien' }
              ].map((value, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-neutral-200 text-center hover:shadow-lg transition">
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h3 className="font-bold text-neutral-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-neutral-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Story */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-8 mb-16">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Ons verhaal</h2>
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>
                ClearBuildIT is ontstaan uit de frustratie dat veel softwarebedrijven hun klanten niet doen voelen dat ze écht om hen geven. Wij wilden iets anders doen: een bedrijf waar klanten niet zomaar een ticketnummer zijn, maar echte partners in hun groei.
              </p>
              <p>
                Ons team bestaat uit developers, designers en strategieën met jaren ervaring in het bouwen van succesvolle SaaS-platforms, e-commerce websites en custom web-applicaties. We werken samen met startups, scale-ups en gevestigde bedrijven.
              </p>
              <p>
                Wat ons onderscheidt? We luisteren echt naar wat jij nodig hebt. We stellen lastige vragen. We denken mee over je bedrijfsmodel. En we bouwen niet zomaar code—we bouwen groei.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { number: '50+', label: 'Projecten voltooid' },
              { number: '30+', label: 'Tevreden klanten' },
              { number: '7+', label: 'Jaar ervaring' }
            ].map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Klaar om samen te werken?</h2>
            <p className="text-green-100 mb-6 max-w-xl mx-auto">
              Leren we elkaar kennen. Geen verplichtingen, gewoon een vrijblijvend gesprek.
            </p>
            <a href="/contact" className="inline-block px-8 py-3 rounded-full bg-white text-green-700 font-bold hover:bg-green-50 transition">
              Start een project
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
