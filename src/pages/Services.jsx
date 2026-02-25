import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Services() {
  const services = [
    {
      icon: '💻',
      title: 'SaaS Platforms',
      desc: 'Schaalbare software-as-a-service platforms met gebruikersbeheer, betaalmogelijkheden en analytics.',
      features: ['Multi-tenant architectuur', 'Payment integratie', 'Real-time data', 'Authenticatie & autorisatie']
    },
    {
      icon: '🌐',
      title: 'Websites',
      desc: 'Moderne, snelle en SEO-geoptimaliseerde websites die conversies genereren.',
      features: ['Responsive design', 'SEO-optimized', 'Performance tuning', 'CMS integratie']
    },
    {
      icon: '📱',
      title: 'Web Apps',
      desc: 'Progressive web applications die desktop-achtige ervaringen bieden in browsers.',
      features: ['Offline support', 'Push notifications', 'Native-like UX', 'Cloud sync']
    },
    {
      icon: '📲',
      title: 'Mobile Apps',
      desc: 'Native of cross-platform mobile apps die jouw bedrijf in zakken passen.',
      features: ['iOS & Android', 'Push notifications', 'Offline functionality', 'App store deployment']
    },
    {
      icon: '📊',
      title: 'E-commerce',
      desc: 'Volledige webshops met product management, shopping carts en payment processing.',
      features: ['Product catalog', 'Inventory management', 'Payment gateways', 'Order tracking']
    },
    {
      icon: '🔧',
      title: 'Integraties',
      desc: 'Verbind je systemen met API-integraties naar populaire tools en services.',
      features: ['REST API\'s', 'Third-party services', 'Data synchronisatie', 'Webhooks']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Diensten | ClearBuildIT - Software & Web Development</title>
        <meta name="description" content="Maatwerk SaaS-platforms, websites, webapps en mobile apps. Van concept tot deployment - wij zorgen voor alles." />
        <meta name="keywords" content="software development, websiteXontwikkeling, SaaS, webapps, mobile apps" />
        <meta property="og:title" content="Diensten | ClearBuildIT" />
        <meta property="og:description" content="Maatwerk software solutions: SaaS, websites, webapps en mobile apps" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white pt-20 pb-20">
        <div className="max-w-5xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Onze Diensten
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Van concept tot deployment - wij bouwen exactly wat jij nodig hebt. Maatwerk software voor jouw unieke uitdagingen.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl border border-neutral-200 p-8 hover:shadow-lg transition">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-700 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-neutral-600">
                      <span className="w-2 h-2 rounded-full bg-green-600"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">Ons uitvoeringsproces</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { num: '1', title: 'Intake gesprek', desc: 'Wij leren je kennen en begrijpen je doelen' },
                { num: '2', title: 'Planning', desc: 'Gedetailleerde plan en timeline' },
                { num: '3', title: 'Development', desc: 'Agile iteratie met regelmatige updates' },
                { num: '4', title: 'Testing', desc: 'Grondige QA en bug fixing' },
                { num: '5', title: 'Launch', desc: 'Deployment en ondersteuning' }
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white flex items-center justify-center font-bold">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-8 mb-16">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Onze tech stack</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-neutral-900 mb-3">Frontend</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• React / Next.js</li>
                  <li>• Vue.js</li>
                  <li>• Tailwind CSS</li>
                  <li>• TypeScript</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-3">Backend</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Node.js / Express</li>
                  <li>• Python / Django</li>
                  <li>• PostgreSQL</li>
                  <li>• MongoDB</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-3">Infrastructure</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• AWS / Google Cloud</li>
                  <li>• Docker & Kubernetes</li>
                  <li>• CI/CD pipelines</li>
                  <li>• Serverless solutions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Heb je een project in gedachten?</h2>
            <p className="text-green-100 mb-6 max-w-xl mx-auto">
              Laat ons weten wat je nodig hebt. We helpen je graag.
            </p>
            <a href="/contact" className="inline-block px-8 py-3 rounded-full bg-white text-green-700 font-bold hover:bg-green-50 transition">
              Neem contact op
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
