import React, { useState, useEffect } from 'react';
import logo from '../assets/logoTrans.png';
import { Link } from 'react-router-dom';

const primary = [
  { label: 'Diensten', href: '#diensten' },
  { label: 'Proces', href: '#proces' },
  { label: 'Technologie', href: '#tech' },
  { label: 'Waarom wij?', href: '#features' },
  { label: 'Veelgestelde vragen', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Active section detection
      const sections = primary.map(item => item.href.replace('#', '')).filter(h => h);
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-md border-b border-neutral-200' 
        : 'bg-white border-b border-neutral-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center hover:opacity-80 transition flex-shrink-0 active:scale-95" aria-label="Home">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex gap-6 items-center whitespace-nowrap">
            {primary.map(item => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.label} className="flex items-center">
                  {item.href.startsWith('/') ? (
                    <Link
                      to={item.href}
                      className={`text-xs font-medium px-1 py-2 rounded transition duration-150 active:scale-95 cursor-pointer ${
                        isActive 
                          ? 'text-green-700 font-semibold underline underline-offset-2 decoration-green-600 decoration-2' 
                          : 'text-neutral-700 hover:text-green-600 hover:underline hover:underline-offset-2 hover:decoration-green-400 hover:decoration-1'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className={`text-xs font-medium px-1 py-2 rounded transition duration-150 active:scale-95 cursor-pointer ${
                        isActive 
                          ? 'text-green-700 font-semibold underline underline-offset-2 decoration-green-600 decoration-2' 
                          : 'text-neutral-700 hover:text-green-600 hover:underline hover:underline-offset-2 hover:decoration-green-400 hover:decoration-1'
                      }`}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 hover:bg-neutral-100 rounded transition"
          aria-label="Menu"
          onClick={() => setOpen(true)}
        >
          <svg className="w-6 h-6 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Mobile drawer */}
        {open && (
          <div className="fixed inset-0 z-50 bg-black/40 flex justify-end" onClick={() => setOpen(false)}>
            <div
              className="relative h-full w-full max-w-xs flex flex-col items-end"
              onClick={e => e.stopPropagation()}
            >
              <div className="w-full p-4">
                <div className="bg-white rounded-2xl shadow-2xl w-full">
                  <div className="flex items-center justify-between px-5 pt-5 pb-2">
                    <Link to="/" className="flex items-center" aria-label="Home">
                      <img src={logo} alt="Logo" className="h-10 w-auto select-none" draggable="false" />
                    </Link>
                    <button
                      className="inline-flex h-8 w-8 items-center justify-center rounded border border-neutral-200 text-2xl"
                      onClick={() => setOpen(false)}
                      aria-label="Close menu"
                    >×</button>
                  </div>
                  <nav className="flex-1 overflow-y-auto px-2 pb-2 pt-1">
                    <ul className="flex flex-col divide-y divide-neutral-100">
                      {primary.map(item => (
                        <li key={item.label} className="flex items-center group">
                          {item.href.startsWith('/') ? (
                            <Link
                              to={item.href}
                              className="flex-1 flex items-center text-base font-medium text-neutral-800 hover:text-green-700 px-4 py-4 transition"
                              onClick={() => setOpen(false)}
                            >
                              {item.label}
                              {item.label === 'Contact' && (
                                <span className="ml-2 px-3 py-1 rounded-full bg-green-100 text-green-900 text-xs font-semibold align-middle" style={{letterSpacing: '0.3px'}}>LET'S TALK</span>
                              )}
                            </Link>
                          ) : (
                            <a
                              href={item.href}
                              className="flex-1 flex items-center text-base font-medium text-neutral-800 hover:text-green-700 px-4 py-4 transition"
                              onClick={(e) => {
                                setOpen(false);
                                // Smooth scroll voor anker links
                                if (item.href.startsWith('#')) {
                                  e.preventDefault();
                                  const target = document.querySelector(item.href);
                                  if (target) {
                                    setTimeout(() => {
                                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }, 300);
                                  }
                                }
                              }}
                            >
                              {item.label}
                            </a>
                          )}
                          <span className="pr-4 text-neutral-300 group-hover:text-green-400">
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6"/></svg>
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 px-4 pb-4">
                      <div className="text-xs text-neutral-500 font-semibold mb-1">Contact us</div>
                      <div className="flex justify-between text-sm py-1">
                        <span className="text-neutral-700">Bellen</span>
                        <span className="text-neutral-900 font-medium">+312 94 30 00 03</span>
                      </div>
                      <div className="flex justify-between text-sm py-1">
                        <span className="text-neutral-700">E-mail</span>
                        <span className="text-neutral-900 font-medium">info@clearbuildit.nl</span>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
