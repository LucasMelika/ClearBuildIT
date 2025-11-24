import mobileImg from '../assets/mobile.png';
import React, { useRef } from 'react';
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
  },
  {
    title: 'SaaS Platform',
    description: 'Multi-tenant SaaS oplossing voor groeiende bedrijven.',
    image: saasImg,
    label: 'SaaS',
    logo: '/assets/saas-logo.png',
    range: 'Cloud-native',
  },
  {
    title: 'Mobiele App',
    description: 'Native-gevoel mobiele apps voor iOS en Android.',
    image: mobileImg,
    label: 'Mobile',
    logo: '/assets/mobile-logo.png',
    range: 'iOS & Android',
  },
  {
    title: 'Website Template',
    description: 'Moderne, snelle websites met focus op conversie.',
    image: websiteImg,
    label: 'Website',
    logo: '/assets/website-logo.png',
    range: 'SEO & Performance',
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
    <section className="bg-neutral-50 py-16">
      <div className="max-w-[1800px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Maak kennis met onze digitale oplossingen
        </h2>
        <div className="relative">
          <button
            aria-label="Scroll left"
            onClick={() => scroll(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-neutral-200 shadow rounded-full w-10 h-10 flex items-center justify-center hover:bg-neutral-100 transition disabled:opacity-40"
            style={{ marginLeft: '-24px' }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
          </button>
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-4 snap-x scroll-smooth"
            style={{ scrollBehavior: 'smooth' }}
          >
            {projects.map((project, idx) => (
              <div
                key={project.title}
                data-card
                className="relative min-w-[420px] max-w-[520px] w-full rounded-3xl overflow-hidden shadow-lg bg-black/80 snap-center"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white/90 to-transparent">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block w-1 h-6 bg-green-500 rounded-full mr-2 align-middle" />
                    <span className="text-lg font-semibold text-gray-900">{project.title}</span>
                    {/* logo removed */}
                  </div>
                  <p className="text-gray-800 text-sm mb-1">{project.description}</p>
                  <span className="text-gray-700 text-xs">{project.range}</span>
                </div>
              </div>
            ))}
          </div>
          <button
            aria-label="Scroll right"
            onClick={() => scroll(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-neutral-200 shadow rounded-full w-10 h-10 flex items-center justify-center hover:bg-neutral-100 transition disabled:opacity-40"
            style={{ marginRight: '-24px' }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
