import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'Hoe lang duurt een project?',
      answer: 'Dit hangt af van het soort project en de omvang. Een website duurt meestal 6-12 weken, een SaaS-platform kan 3-6 maanden duren. In het intake gesprek geven wij een concrete planning.'
    },
    {
      id: 2,
      question: 'Wat zijn jouw prijzen?',
      answer: 'Onze prijzen zijn volledig op maat gemaakt naar jouw project. Wij werken met vaste projectbudgetten, time-and-materials, of retainer modellen. Na een gratis intake gesprek geven wij een gedetailleerde offerte.'
    },
    {
      id: 3,
      question: 'Kunnen jullie onderhoud doen na launch?',
      answer: 'Absoluut! Wij bieden maintenance pakketten waarin we bugs fixen, updates uitvoeren, monitoring instellen en met je meegroeien als je platform groeit.'
    },
    {
      id: 4,
      question: 'Welke technologieën gebruiken jullie?',
      answer: 'We zijn flexibel en kiezen de best geschikte technologie voor jouw project. Onze specialisaties: React/Next.js (frontend), Node.js/Python (backend), PostgreSQL/MongoDB (databases), AWS/Google Cloud (infrastructure).'
    },
    {
      id: 5,
      question: 'Kunnen jullie bestaande projecten overnemen?',
      answer: 'Ja, wij kunnen bestaande websites en applicaties overnemen, verbeteren en onderhouden. We doen altijd eerst een audit en kennismakingsgesprek.'
    },
    {
      id: 6,
      question: 'Hoe werken jullie met communicatie?',
      answer: 'Regelmatig contact is essentieel. We gebruiken wekelijkse standup calls, Slack voor dagelijkse communicatie, en maandelijkse demo\'s van nieuwe features. Geen verassingen!'
    },
    {
      id: 7,
      question: 'Zijn jullie beschikbaar voor URGENT work?',
      answer: 'We proberen spoed-orders in te passen als er capaciteit is. Neem contact op en we kijken samen hoe we kunnen helpen. Rush fees kunnen van toepassing zijn.'
    },
    {
      id: 8,
      question: 'Hoe zit het met hosting en deployment?',
      answer: 'We helpen met het instellen van hosting (AWS, Google Cloud, Vercel, etc.), deployment automation en monitoring. Dit kan onderdeel zijn van het project of aparte managed services.'
    },
    {
      id: 9,
      question: 'Wat als ik niet tevreden ben?',
      answer: 'We staan voor ons werk. In het contract spreken we duidelijk af wat "klaar" betekent. Als je niet tevreden bent, zullen we samen kijken hoe we het op kunnen lossen.'
    },
    {
      id: 10,
      question: 'Hoe jullie aan updates en verversing van de site?',
      answer: 'Na launch zorgen we ervoor dat je website up-to-date blijft met de nieuwste browsers, security patches en performance updates. Dit is onderdeel van ons maintenance pakket.'
    },
    {
      id: 11,
      question: 'Kunnen jullie SEO-optimalisatie doen?',
      answer: 'Ja! Alle websites die we bouwen zijn SEO-optimized. We zorgen voor snelle laadtijden, mobile optimization, correcte meta tags, schema markup en een goede URL-structuur.'
    },
    {
      id: 12,
      question: 'Hoelang kan ik met jullie samenwerken?',
      answer: 'Dat bepaal jij! We kunnen voor korte projecten (enkele weken) samenwerken of lange-termijn partnerships aangaan. Veel klanten blijven jaren bij ons voor ondersteuning en nieuwe features.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ | ClearBuildIT - Veelgestelde vragen</title>
        <meta name="description" content="Veelgestelde vragen over ClearBuildIT. Lees antwoorden op vragen over prijzen, projectduur, technologieën en meer." />
        <meta name="keywords" content="FAQ, veelgestelde vragen, prijzen, ClearBuildIT" />
        <meta property="og:title" content="FAQ | ClearBuildIT" />
        <meta property="og:description" content="Antwoorden op veelgestelde vragen over onze software development services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white pt-20 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Veelgestelde Vragen
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Heb je een vraag? Je bent niet alleen. Hier zijn de antwoorden op vragen die we regelmatig krijgen.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3 mb-16">
            {faqs.map((faq) => (
              <details
                key={faq.id}
                open={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:border-green-300 transition"
              >
                <summary className="flex items-start justify-between cursor-pointer p-6 font-semibold text-neutral-900 hover:bg-neutral-50 transition">
                  <span className="text-left">{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0 ml-4 transition transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-0 text-neutral-600 leading-relaxed border-t border-neutral-100">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          {/* Still have questions */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Nog meer vragen?</h2>
            <p className="text-green-100 mb-6">
              Heb je een vraag die hier niet beantwoord wordt? Neem gerust contact op!
            </p>
            <a href="/contact" className="inline-block px-8 py-3 rounded-full bg-white text-green-700 font-bold hover:bg-green-50 transition">
              Neem contact op
            </a>
          </div>

          {/* Contact Alternative */}
          <div className="mt-16 bg-white rounded-2xl border border-neutral-200 p-8 text-center">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Liever rechtstreeks praten?</h3>
            <p className="text-neutral-600 mb-6">
              We bellen graag terug. Laat je telefoonnummer achter en we nemen snel contact op.
            </p>
            <a href="/contact" className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold hover:shadow-lg transition">
              Plan een gesprek
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
