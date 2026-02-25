export default function ProcessTimeline() {
  const steps = [
    {
      number: 1,
      title: 'Discovery & Planning',
      duration: '1-2 weken',
      description: 'We beginnen met een diepgaande gesprek over jouw doelen, doelgroep en requirements. Wireframes en project roadmap worden gemaakt.',
      icon: '🔍',
      details: [
        'Strategy call',
        'Requirements gathering',
        'Wireframes & mockups',
        'Project roadmap',
        'Budget & timeline estimate'
      ]
    },
    {
      number: 2,
      title: 'Design & Prototyping',
      duration: '1-3 weken',
      description: 'High-fidelity designs in Figma. Interactive prototypes voor user testing. Iteraties op basis van feedback.',
      icon: '🎨',
      details: [
        'Visual design system',
        'UI/UX detailed designs',
        'Interactive prototypes',
        'User feedback rounds',
        'Design approval'
      ]
    },
    {
      number: 3,
      title: 'Development',
      duration: '4-10 weken',
      description: 'Agile development met wekelijkse updates. Clean code, automated tests, en regular code reviews.',
      icon: '⚙️',
      details: [
        'Frontend development',
        'Backend APIs (if needed)',
        'Database setup',
        'Third-party integrations',
        'Automated testing',
        'Code reviews'
      ]
    },
    {
      number: 4,
      title: 'Testing & Optimization',
      duration: '1-2 weken',
      description: 'Quality assurance, performance testing, security audits. Optimalisatie voor speed en SEO.',
      icon: '✅',
      details: [
        'QA testing',
        'Cross-browser testing',
        'Performance optimization',
        'Security audit',
        'SEO optimization',
        'Accessibility check'
      ]
    },
    {
      number: 5,
      title: 'Launch & Support',
      duration: 'Ongoing',
      description: 'Production deployment met monitoring. Continued support, updates, en maintenance.',
      icon: '🚀',
      details: [
        'Final deployment',
        'Performance monitoring',
        'Security monitoring',
        'Post-launch support',
        'Bug fixes',
        'Feature updates'
      ]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Hoe we werken
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Een gestructureerd proces met transparantie en regelmatige feedback op elk moment.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Vertical line (hide on last step) */}
              {index !== steps.length - 1 && (
                <div className="absolute left-12 top-24 w-0.5 h-32 bg-gradient-to-b from-green-600 to-slate-200" />
              )}

              <div className="flex gap-8">
                {/* Step number circle */}
                <div className="relative flex flex-col items-center flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-white">
                    {step.icon}
                  </div>
                </div>

                {/* Step content */}
                <div className="flex-grow pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full w-fit">
                      {step.duration}
                    </span>
                  </div>

                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details Grid */}
                  <div className="grid sm:grid-cols-2 gap-3 bg-white rounded-lg p-6 border border-slate-200">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-green-600 font-bold mt-0.5">✓</span>
                        <span className="text-slate-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Metrics */}
        <div className="mt-20 grid sm:grid-cols-3 gap-8 p-8 bg-white rounded-lg border border-slate-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">6-20</div>
            <p className="text-slate-600 font-semibold">Weken gemiddeld</p>
          </div>
          <div className="text-center border-l border-r border-slate-200">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <p className="text-slate-600 font-semibold">Transparantie</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">∞</div>
            <p className="text-slate-600 font-semibold">Support</p>
          </div>
        </div>

        {/* Ready to start? */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Klaar om te starten?
          </h3>
          <p className="text-slate-600 mb-8">
            Laten we beginnen met een orientatie gesprek.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Maak een afspraak
          </a>
        </div>
      </div>
    </section>
  );
}
