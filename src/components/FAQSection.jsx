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
      answer: 'De prijs hangt volledig af van jouw wensen en de omvang van het project. Na een vrijblijvend gesprek waarin we samen jouw requirements opstellen, geven we een transparante offerte op maat. Geen verborgen kosten, geen verrassingen.'
    }
  ];

  return (
    <section className="py-4 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-600 mb-2">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">
            Veelgestelde <span className="text-green-700">vragen</span>
          </h2>
          <p className="text-base text-neutral-500 max-w-xl mx-auto">
            Antwoorden op de vragen die onze klanten het meest stellen.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                openIndex === index ? 'border-green-200 shadow-sm' : 'border-neutral-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-3.5 flex items-center justify-between hover:bg-neutral-50 transition-colors text-left"
              >
                <h3 className={`font-semibold pr-4 text-sm ${openIndex === index ? 'text-green-700' : 'text-neutral-900'}`}>
                  {faq.question}
                </h3>
                <ChevronDownIcon
                  className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-green-600' : 'text-neutral-400'
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-5 pb-4 border-t border-green-100 bg-green-50/40">
                  <p className="text-sm text-neutral-600 leading-relaxed pt-3">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-2xl border border-green-100 text-center">
          <h3 className="text-lg font-bold text-neutral-900 mb-2">
            Heb je een specifieke vraag?
          </h3>
          <p className="text-sm text-neutral-600 mb-4">
            Neem contact op en we beantwoorden je vragen graag persoonlijk.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full text-sm font-semibold hover:from-green-700 hover:to-green-800 hover:shadow-lg transition-all transform hover:scale-105"
          >
            Stuur ons een bericht
          </a>
        </div>
      </div>
    </section>
  );
}
