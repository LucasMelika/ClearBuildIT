import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'Wat is de doorlooptijd van een project?',
      answer: 'De doorlooptijd hangt af van de omvang van het project. Een basis website (Starter) neemt 3-4 weken. Professional projecten duurt 6-8 weken. Enterprise/SaaS projecten kunnen 3-6 maanden duren. We communiceren wekelijks en je krijgt regelmatig updates.'
    },
    {
      id: 2,
      question: 'Wat gebeurt er na oplevering?',
      answer: 'Na oplevering bieden we ondersteuning en onderhoudsservices. We voeren updates, beveiligingspatches en kleine wijzigingen uit. Enterprise-klanten krijgen prioriteitsondersteuning. De eerste maanden staat ons team klaar voor vragen.'
    },
    {
      id: 3,
      question: 'Hebben jullie hosting/servers?',
      answer: 'We raden cloud-hosting aan (Vercel, Netlify voor frontends; AWS, Azure, DigitalOcean voor backends). Dit is betrouwbaar, schaalbaar en kosteneffectief. We helpen met setup en optimalisatie.'
    },
    {
      id: 4,
      question: 'Kan ik later aanpassingen laten doen?',
      answer: 'Absoluut! We bieden onderhoud- en uitbreidingspakketten. Kleine wijzigingen kunnen snel. Voor grote features kan een nieuw project nodig zijn. Al je code en documentatie zijn van jou.'
    },
    {
      id: 5,
      question: 'Hoe ziet het communicatieproces eruit?',
      answer: 'We starten met een oriëntatiemeeting om je doelen te begrijpen. Daarna krijg je wekelijks updates via Slack/email. Je ReviewT regelmatig prototypes en geeft feedback. We werken agile - kleine iteraties met feedback.'
    },
    {
      id: 6,
      question: 'Welke technologieën gebruiken jullie?',
      answer: 'We specialiseren ons in moderne JavaScript/React stacks. Voor frontends: React, TypeScript, Tailwind CSS, Next.js. Voor backends: Node.js, Python, PostgreSQL. We kiezen per project de beste tech based on requirements.'
    },
    {
      id: 7,
      question: 'Is mijn data veilig?',
      answer: 'Security is topprioriteit. We gebruiken encryption, secure authentication, regular security audits, en GDPR compliance. Voor sensitive data recommend we managed services (Firebase, Supabase, Auth0). Code reviews garanderen geen vulnerabilities.'
    },
    {
      id: 8,
      question: 'Wat als ik niet tevreden ben?',
      answer: 'We werken samen tot het perfect is. In het contract staat een acceptatieperiode. Je feedback bepaalt de finale vorm. Enterprise-clients hebben SLA\'s met guarantee clauses. Je tevredenheid is onze prioriteit.'
    },
    {
      id: 9,
      question: 'Kunnen jullie bestaande code verbeteren?',
      answer: 'Ja! We doen code audits, refactoring, en performance optimization. We helpen legacy systems moderniseren. Dit is kostenbewust en verhoogt je codebase quality. Ideaal voor groeiende teams.'
    },
    {
      id: 10,
      question: 'Hoe veel kost onderdelen van een project?',
      answer: 'We werken flexibel. Hele projecten, components, modules. Een API-integratie? €500-2k. Een feature? €1-5k. Een extra pagina? €300-800. We geven transparante estimates na een discovery call.'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-xl text-slate-600">
            Antwoorden op vragen die onze klanten stellen
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <h3 className="text-left font-semibold text-slate-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDownIcon
                  className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-slate-200 bg-slate-50">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 p-8 bg-green-50 rounded-lg border-2 border-green-200 text-center">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Heb je een specifieke vraag?
          </h3>
          <p className="text-slate-600 mb-6">
            Neem contact op met ons team. We beantwoorden je vragen graag persoonlijk.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Stuur ons een bericht
          </a>
        </div>
      </div>
    </section>
  );
}
