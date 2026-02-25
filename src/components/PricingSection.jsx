import { CheckIcon } from '@heroicons/react/24/solid';

export default function PricingSection() {
  const plans = [
    {
      id: 1,
      name: 'Starter',
      description: 'Perfect voor kleine bedrijven',
      price: '€2.500',
      period: 'project',
      features: [
        'Responsive website',
        'SEO optimization',
        ' Google speed optimization',
        '5 pagina\'s',
        'Contact formulier',
        'Mobile responsive',
        'SSL certificaat'
      ],
      cta: 'Meer info',
      highlighted: false
    },
    {
      id: 2,
      name: 'Professional',
      description: 'Voor groeiende bedrijven',
      price: '€5.000',
      period: 'project',
      features: [
        'Alles uit Starter',
        'Custom design',
        'CMS integratie',
        '10-15 pagina\'s',
        'Analytics & tracking',
        'Email integratie',
        'Performance monitoring',
        'Ondersteuning 3 maanden'
      ],
      cta: 'Meest populair',
      highlighted: true
    },
    {
      id: 3,
      name: 'Enterprise',
      description: 'Voor complexe projecten',
      price: 'Custom',
      period: 'offerte',
      features: [
        'Alles uit Professional',
        'SaaS/web platform',
        'Database design',
        'API integratie',
        'Payment processing',
        'User authentication',
        'Ondersteuning 6-12 maanden',
        'Hosting setup',
        'Training included'
      ],
      cta: 'Offerteaanvraag',
      highlighted: false
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Duidelijke, transparante prijzen
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Kies het plan dat past bij jouw project. Alle prijzen zijn excl. BTW.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-lg relative flex flex-col h-full ${
                plan.highlighted
                  ? 'border-2 border-green-600 shadow-xl scale-105'
                  : 'border border-slate-200 shadow-sm'
              } overflow-hidden bg-white`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className="bg-green-600 text-white text-sm font-semibold py-2 px-4 text-center">
                  MEEST GEKOZEN
                </div>
              )}

              <div className="p-8 flex flex-col flex-grow">
                {/* Plan name */}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-600">/{plan.period}</span>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all mb-8 ${
                    plan.highlighted
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'border-2 border-green-600 text-green-600 hover:bg-green-50'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <div className="space-y-4 flex-grow">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-slate-900 mb-4">💡 Over alle plannen:</h3>
          <div className="grid sm:grid-cols-2 gap-6 text-sm text-slate-700">
            <div>
              <p className="font-semibold text-slate-900 mb-2">✓ Inclusief</p>
              <ul className="space-y-1">
                <li>• Git versiebeheer & documentatie</li>
                <li>• Code reviews & best practices</li>
                <li>• Testing & quality assurance</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-900 mb-2">🚀 Na launch</p>
              <ul className="space-y-1">
                <li>• Deployment & hosting setup</li>
                <li>• Performance monitoring</li>
                <li>• Ondersteuning & updates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Heb je vragen of wil je een custom offerte?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Neem contact op
          </a>
        </div>
      </div>
    </section>
  );
}
