import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Team() {
  const team = [
    {
      name: 'Lucas Melika',
      role: 'Fullstack Developer & Founder',
      bio: 'Expert in React, Node.js en cloud architectuur. Passie voor building scalable solutions.',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL']
    },
    {
      name: 'Sarah de Vries',
      role: 'UX/UI Designer',
      bio: 'Specialiseerd in user-centered design en conversion optimization.',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'CSS']
    },
    {
      name: 'Michiel van den Berg',
      role: 'Backend Engineer',
      bio: 'Expert databases architect en performance optimization. 10+ jaren ervaring.',
      skills: ['Python', 'PostgreSQL', 'Microservices', 'Docker', 'Kubernetes']
    },
    {
      name: 'Emma Hermans',
      role: 'QA & DevOps Engineer',
      bio: 'Zorgt ervoor dat alles werkt. Automation en infrastructure specialist.',
      skills: ['CI/CD', 'Testing', 'Linux', 'Monitoring', 'Git']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Team | ClearBuildIT - Ons team van experts</title>
        <meta name="description" content="Leer het team van ClearBuildIT kennen. Experts in software development, design en infrastructure." />
        <meta name="keywords" content="team, developers, designers, engineers, ClearBuildIT" />
        <meta property="og:title" content="Team | ClearBuildIT" />
        <meta property="og:description" content="Het team van experts achter ClearBuildIT" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white pt-20 pb-20">
        <div className="max-w-5xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Ons Team
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Een team van passionele developers, designers en engineers die jouw projecten tot leven brengen.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-6xl">
                  👤
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-neutral-600 mb-6">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Waarom met ons werken</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: '✨', title: 'Kwaliteit', desc: 'Clean code, best practices en cutting-edge technologies' },
                { icon: '🚀', title: 'Snelheid', desc: 'Agile development met snelle iteraties en updates' },
                { icon: '💬', title: 'Communicatie', desc: 'Regelmatig contact en transparantie over voortgang' },
                { icon: '🤝', title: 'Partnership', desc: 'Wij denken mee met jouw doelen en groei' },
                { icon: '📈', title: 'Resultaten', desc: 'Gericht op impact en bedrijfswaarde' },
                { icon: '♻️', title: 'Ondersteuning', desc: 'Maintenance en support na launch' }
              ].map((value, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">{value.icon}</div>
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-2">{value.title}</h3>
                    <p className="text-neutral-600 text-sm">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-16">
            {[
              { number: '50+', label: 'Projecten voltooid' },
              { number: '30+', label: 'Klanten geholpen' },
              { number: '150+', label: 'Jaren gezamenlijke ervaring' },
              { number: '98%', label: 'Tevreden klanten' }
            ].map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-12 text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Klaar om met ons team te werken?</h2>
            <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
              Laat ons kennis met je project. We kijken uit naar de samenwerking.
            </p>
            <a href="/contact" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold hover:shadow-lg transition">
              Maak een afspraak
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
