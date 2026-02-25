import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesCard from './components/ServicesCard';
import ContactForm from './components/ContactForm';
import FAQSection from './components/FAQSection';
import ScrollCTA from './components/ScrollCTA';
import { CloudIcon, ShieldCheckIcon, BoltIcon, UsersIcon, DevicePhoneMobileIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

// Animated stat counter component
function AnimatedStat({ value, prefix = '', suffix = '', label, sublabel, started }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <div className="text-center p-4 rounded-2xl bg-white/60 border border-green-100/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 group">
      <div className="text-4xl font-black text-green-700 mb-1 group-hover:scale-110 transition-transform">
        {prefix}{started ? count : 0}{suffix}
      </div>
      <div className="text-xs font-semibold text-neutral-700 uppercase tracking-wide">{label}</div>
      <div className="text-xs text-neutral-500 mt-1">{sublabel}</div>
    </div>
  );
}

export default function Home() {
  const [countStarted, setCountStarted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countStarted) {
          setCountStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [countStarted]);

  return (
    <>
      <ScrollCTA />
      <Helmet>
        <title>ClearBuildIT · Maatwerk SaaS & Apps voor Groeiende Bedrijven</title>
        <meta name="description" content="ClearBuildIT bouwt maatwerk SaaS-platformen, webapps en mobile apps die uw bedrijf laten groeien. Van MVP tot enterprise oplossingen." />
        <meta property="og:title" content="ClearBuildIT · Premium Digitale Oplossingen" />
        <meta property="og:description" content="Schaalbare SaaS-platformen en apps voor groeiende bedrijven" />
        <meta name="keywords" content="SaaS ontwikkeling, webapp ontwikkeling, mobile app ontwikkeling, maatwerk software, Nederland" />
      </Helmet>
    <main className="bg-white min-h-screen pb-16 scroll-smooth">
      {/* Hero Section */}
      <section id="hero" className="relative max-w-6xl mx-auto px-4 pt-12 pb-16 flex flex-col md:flex-row items-stretch gap-10 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-40 w-80 h-80 bg-green-400/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-40 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-1/2 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight">
            Welkom bij <span className="text-green-700">ClearBuildIT</span>
          </h1>
          <p className="text-lg text-neutral-700 max-w-xl">
            Wij bouwen digitale oplossingen die jouw bedrijf laten groeien. Van SaaS-platformen tot mobiele apps, wij denken mee en leveren kwaliteit.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#contact" className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold shadow-lg hover:from-green-700 hover:to-green-800 hover:shadow-xl transition-all transform hover:scale-105">Start je project</a>
            <a href="#features" className="inline-block px-6 py-3 rounded-full bg-white border-2 border-green-600 text-green-700 font-semibold shadow hover:bg-green-50 transition">Waarom wij?</a>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          {/* Stats & Social Proof */}
          <div className="relative bg-gradient-to-br from-green-50/50 via-white to-emerald-50/30 rounded-3xl p-8 shadow-xl border border-green-100/50 backdrop-blur-sm">
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-tr from-green-300/15 to-blue-300/15 rounded-full blur-3xl"></div>
            
            <div className="relative space-y-6">
              {/* Heading */}
              <div className="text-center pb-4 border-b border-neutral-200/60">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Resultaten die spreken</h3>
                <p className="text-sm text-neutral-600">Vertrouwd door groeiende bedrijven</p>
              </div>

              {/* Stats Grid */}
              <div ref={statsRef} className="grid grid-cols-2 gap-6">
                <AnimatedStat value={15} suffix="+" label="Projecten" sublabel="Succesvol opgeleverd" started={countStarted} />
                <AnimatedStat value={100} suffix="%" label="Maatwerk" sublabel="Op maat gemaakt" started={countStarted} />
                <AnimatedStat value={98} suffix="%" label="Tevredenheid" sublabel="Klantretentie rate" started={countStarted} />
                <AnimatedStat value={6} prefix="~" label="Weken" sublabel="Gemiddelde oplevering" started={countStarted} />
              </div>

              {/* Rating */}
              <div className="pt-6 border-t border-neutral-200/60">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-700">Klantbeoordeling</span>
                  <div className="flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-lg font-bold text-neutral-900">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diensten Section */}
      <section id="diensten" className="max-w-6xl mx-auto px-4 py-20 bg-white scroll-mt-16 md:scroll-mt-20">
        <div className="mb-4">
          <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-bold uppercase tracking-wide mb-4">
            01. Diensten
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Onze <span className="text-green-700">Diensten</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-6 px-4">
            Van SaaS-platformen tot mobiele apps. Wij bouwen digitale oplossingen die werken voor jouw bedrijf.
          </p>
        </div>
        <ServicesCard />
      </section>

      {/* Hoe werken wij Section */}
      <section id="proces" className="max-w-6xl mx-auto px-4 py-20 scroll-mt-16 md:scroll-mt-20">
        <div className="mb-4">
          <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-bold uppercase tracking-wide mb-4">
            02. Proces
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
            Hoe werken wij?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Van eerste gesprek tot live product: ons proces is transparant, iteratief en volledig afgestemd op jouw behoeften.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-2xl font-bold shadow-xl mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Kennismaking</h3>
              <p className="text-sm text-neutral-600">
                Gratis en vrijblijvend gesprek om je idee en wensen te bespreken.
              </p>
            </div>
            <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-green-300 -translate-x-1/2"></div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-2xl font-bold shadow-xl mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Plan & Offerte</h3>
              <p className="text-sm text-neutral-600">
                We maken een duidelijk plan met tijdlijn, scope en transparante prijzen.
              </p>
            </div>
            <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-blue-300 -translate-x-1/2"></div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-xl mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Development</h3>
              <p className="text-sm text-neutral-600">
                Iteratief ontwikkelen met regelmatige updates en feedback momenten.
              </p>
            </div>
            <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 -translate-x-1/2"></div>
          </div>

          {/* Step 4 */}
          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-xl mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Launch & Support</h3>
              <p className="text-sm text-neutral-600">
                Live gang, overdracht en doorlopende support voor optimale performance.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold shadow-lg hover:from-green-700 hover:to-green-800 hover:shadow-xl transition-all transform hover:scale-105">
            Start vandaag nog
          </a>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="bg-gradient-to-br from-neutral-50 to-blue-50 py-20 scroll-mt-16 md:scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-4">
            <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-bold uppercase tracking-wide mb-4">
              03. Technologie
            </div>
          </div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              Moderne technologie
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We werken met de nieuwste en meest betrouwbare technologieën voor schaalbare, veilige oplossingen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Frontend</h3>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• React / Next.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• React Native</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Backend</h3>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Node.js / Python</li>
                <li>• PostgreSQL / MongoDB</li>
                <li>• REST & GraphQL</li>
                <li>• Microservices</li>
              </ul>
            </div>

            {/* Cloud */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Cloud & DevOps</h3>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• AWS / Azure / GCP</li>
                <li>• Docker / Kubernetes</li>
                <li>• CI/CD Pipelines</li>
                <li>• Infrastructure as Code</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Tools & Methods</h3>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Agile / Scrum</li>
                <li>• Git version control</li>
                <li>• Automated testing</li>
                <li>• Code reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom wij? Section */}
      <section id="features" className="max-w-6xl mx-auto px-4 mb-20 mt-20 bg-white scroll-mt-16 md:scroll-mt-20">
        <div className="mb-4">
          <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-bold uppercase tracking-wide mb-4">
            04. Waarom wij?
          </div>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Waarom <span className="text-green-700">kiezen voor ons</span>?
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto px-4">
            Bij ClearBuildIT draait alles om vertrouwen, kwaliteit en resultaat. We bouwen niet alleen software—we bouwen langdurige partnerships met bedrijven die willen groeien.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 shadow-lg shadow-green-500/25">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Betrouwbare partner</h3>
            <p className="text-neutral-700 leading-relaxed">
              Wij staan voor transparante communicatie, heldere afspraken en deadlines die we nakomen. Jouw succes is ons succes.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/25">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Bewezen resultaten</h3>
            <p className="text-neutral-700 leading-relaxed">
              Met 15+ succesvolle projecten en een tevredenheid van 98% hebben we bewezen dat onze aanpak werkt. Check onze demo's!
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center mb-4 shadow-lg shadow-green-600/25">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Persoonlijke aandacht</h3>
            <p className="text-neutral-700 leading-relaxed">
              Geen anoniem ticketsysteem. Je hebt direct contact met ons team van experts die meedenken en snel schakelen.
            </p>
          </div>
        </div>

        {/* Why Choose Us Grid */}
        <div className="bg-gradient-to-br from-neutral-50 to-green-50/30 rounded-3xl p-8 md:p-12 border border-neutral-200/50">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Wat maakt ons anders?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">100% Maatwerk oplossingen</h4>
                <p className="text-neutral-700">Geen templates of standaard oplossingen. Alles op maat van jouw wensen en groeiambities.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Moderne technologie</h4>
                <p className="text-neutral-700">We werken met toonaangevende tech zoals React, Node.js en cloud-native architectuur voor schaalbaarheid.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Snelle oplevering (±6 weken)</h4>
                <p className="text-neutral-700">Door onze agile werkwijze gaan we snel van idee naar live product, met constante feedback loops.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Ondersteuning na oplevering</h4>
                <p className="text-neutral-700">Ook na go-live blijven we beschikbaar. Van kleine aanpassingen tot grote uitbreidingen.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Veiligheid & privacy</h4>
                <p className="text-neutral-700">Compliance met AVG, veilige hosting en best practices voor databeveiliging zijn standaard.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Eerlijke prijzen</h4>
                <p className="text-neutral-700">Heldere offertes zonder verborgen kosten. Je weet precies waar je aan toe bent.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-neutral-700 mb-6 font-medium">Klaar om jouw digitale project te starten?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white font-bold shadow-xl hover:shadow-2xl hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Plan een gratis gesprek
            </a>
            <a 
              href="#diensten" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white border-2 border-green-600 text-green-700 font-bold shadow-lg hover:bg-green-50 hover:border-green-700 hover:shadow-xl transition-all transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Bekijk onze diensten
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <TestimonialsSection /> */}

      {/* Pricing Section */}
      {/* <PricingSection /> */}

      {/* Process Timeline */}
      {/* <ProcessTimeline /> */}

      {/* Team Section */}
      {/* <TeamSection /> */}

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-4 py-20 scroll-mt-16 md:scroll-mt-20">
        <div className="mb-4">
          <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-bold uppercase tracking-wide mb-4">
            05. Contact
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
            Klaar om te starten?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Neem contact op en ontdek hoe wij jouw digitale ambities kunnen realiseren. Geen verplichtingen, gewoon een vrijblijvend gesprek.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Direct contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-neutral-500">Email</div>
                    <a href="mailto:info@clearbuildit.nl" className="text-neutral-900 font-semibold hover:text-green-700 transition">info@clearbuildit.nl</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-neutral-500">Telefoon</div>
                    <a href="tel:+31612345678" className="text-neutral-900 font-semibold hover:text-blue-700 transition">+31 6 1234 5678</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-neutral-500">Locatie</div>
                    <div className="text-neutral-900 font-semibold">Nederland</div>
                    <div className="text-sm text-neutral-600">Remote-first, op locatie mogelijk</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Snelle respons</h3>
              <p className="text-sm text-neutral-600 mb-4">
                We streven ernaar om binnen <strong className="text-green-700">24 uur</strong> te reageren op alle aanvragen. Meestal hoor je binnen een paar uur al van ons!
              </p>
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Geen verplichtingen, gratis kennismaking</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
