import mobileImg from '../assets/mobile.png';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import webappImg from '../assets/webapp.png';
import saasImg from '../assets/saas.png';
import websiteImg from '../assets/website.png';

const projects = [
  {
    title: 'Web App Template',
    description: 'Interactieve dashboards en portals voor realtime inzicht.',
    image: webappImg,
    label: 'Web App',
    logo: '/assets/webapp-logo.png',
    range: 'Schaalbaar & veilig',
    link: '/demo/webapp',
  },
  {
    title: 'SaaS Platform',
    description: 'Multi-tenant SaaS oplossing voor groeiende bedrijven.',
    image: saasImg,
    label: 'SaaS',
    logo: '/assets/saas-logo.png',
    range: 'Cloud-native',
    link: '/demo/saas',
  },
  {
    title: 'Mobiele App',
    description: 'Native-gevoel mobiele apps voor iOS en Android.',
    image: mobileImg,
    label: 'Mobile',
    logo: '/assets/mobile-logo.png',
    range: 'iOS & Android',
    link: '/demo/mobile',
  },
];

export default function ProjectSlider() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector('div[data-card]');
    const cardWidth = card ? card.offsetWidth + 32 : 350; // 32px gap
    el.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1600px] mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 text-center mb-14 tracking-tight">
          Maak kennis met onze digitale oplossingen
        </h2>
        {/* Mobiel: slider met scroll en knoppen */}
        <div className="relative block md:hidden">
          <button
            aria-label="Scroll left"
            onClick={() => scroll(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-600 border-2 border-green-700 shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:bg-green-700 hover:scale-105 transition disabled:opacity-40"
            style={{ marginLeft: '-32px' }}
          >
            <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
          </button>
          <div
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto pb-6 snap-x scroll-smooth"
            style={{ scrollBehavior: 'smooth' }}
          >
            {projects.map((project, idx) => (
              <Link
                key={project.title}
                to={project.link}
                data-card
                className="relative min-w-[340px] max-w-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-neutral-200 bg-white snap-center transition-transform scale-90 hover:scale-100 hover:shadow-lg group cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover object-center border-b-2 border-green-100 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full p-5 bg-white/95">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block w-1.5 h-7 bg-green-500 rounded-full mr-2 align-middle shadow" />
                    <span className="text-base font-bold text-neutral-900 tracking-tight group-hover:text-green-700 transition">{project.title}</span>
                  </div>
                  <p className="text-neutral-800 text-sm mb-1 font-semibold">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-700 text-xs font-semibold">{project.range}</span>
                    <span className="text-green-600 text-xs font-semibold group-hover:underline">Bekijk demo →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button
            aria-label="Scroll right"
            onClick={() => scroll(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-600 border-2 border-green-700 shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:bg-green-700 hover:scale-105 transition disabled:opacity-40"
            style={{ marginRight: '-32px' }}
          >
            <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
        {/* Desktop: grid zonder scroll of knoppen */}
        <div className="hidden md:grid grid-cols-3 gap-10 justify-center">
          {projects.map((project, idx) => (
            <Link
              key={project.title}
              to={project.link}
              data-card
              className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-neutral-200 bg-white transition-transform mx-auto w-[420px] h-[240px] flex flex-col hover:scale-105 hover:shadow-3xl group cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[150px] object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex-1 flex flex-col justify-end">
                <div className="p-3 bg-white w-full">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-block w-1.5 h-6 bg-green-500 rounded-full mr-2 align-middle shadow" />
                    <span className="text-sm font-bold text-neutral-900 tracking-tight group-hover:text-green-700 transition">{project.title}</span>
                  </div>
                  <p className="text-neutral-800 text-xs mb-0.5 font-semibold">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-700 text-[11px] font-semibold">{project.range}</span>
                    <span className="text-green-600 text-[11px] font-semibold group-hover:underline">Bekijk demo →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
