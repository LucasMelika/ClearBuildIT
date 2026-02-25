import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | ClearBuildIT - Neem contact op</title>
        <meta name="description" content="Neem contact op met ClearBuildIT. Wij helpen je graag met jouw software- en webprojecten. Geen verplichtingen, gewoon een vrijblijvend gesprek." />
        <meta name="keywords" content="contact, clearbuildIT, software development, webontwikkeling" />
        <meta property="og:title" content="Contact | ClearBuildIT" />
        <meta property="og:description" content="Neem contact op voor jouw software- en webprojecten" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Laten we samen iets geweldigs bouwen
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Heb je een project in gedachten? Wij helpen je graag om je digitale ambities waar te maken. Neem contact op voor een vrijblijvend gesprek.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Email */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-1">Email</h3>
                    <a href="mailto:info@clearbuildit.nl" className="text-neutral-700 font-semibold hover:text-green-700 transition">
                      info@clearbuildit.nl
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-1">Telefoon</h3>
                    <a href="tel:+31647894521" className="text-neutral-700 font-semibold hover:text-blue-700 transition">
                      +31 6 47 89 45 21
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 2m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-1">Responstijd</h3>
                    <p className="text-neutral-700 font-semibold">
                      Wij reageren binnen 24 uur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl border border-neutral-200 p-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Veelgestelde vragen</h2>
            <div className="space-y-4">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-4 px-4 rounded-lg hover:bg-neutral-50 font-semibold text-neutral-900">
                  Hoe lang duurt een project?
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-neutral-600">
                  Dit hangt af van de omvang en complexiteit. Een website duurt meestal 6-12 weken, een SaaS-platform 3-6 maanden.
                </div>
              </details>
              
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-4 px-4 rounded-lg hover:bg-neutral-50 font-semibold text-neutral-900">
                  Wat zijn jouw prijzen?
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-neutral-600">
                  Onze prijzen zijn gebaseerd op jouw specifieke project. Wij bieden op maat gemaakte offerte na een gratis intake gesprek.
                </div>
              </details>
              
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-4 px-4 rounded-lg hover:bg-neutral-50 font-semibold text-neutral-900">
                  Kunnen jullie onderhoud doen?
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-neutral-600">
                  Ja! Wij bieden maintenance en support pakketten voor alle websites en platforms die wij hebben gebouwd.
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
