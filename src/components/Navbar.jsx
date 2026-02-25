import React, { useState, useEffect } from 'react';
import logo from '../assets/logoTrans.png';
import { Link } from 'react-router-dom';

const primary = [
  { label: 'Diensten', href: '#diensten' },
  { label: 'Proces', href: '#proces' },
  { label: 'Technologie', href: '#tech' },
  { label: 'Waarom wij?', href: '#features' },
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
      <div className="max-w-6xl mx-auto px-4 flex items-center h-16 relative">
        {/* Logo left */}
        <Link to="/" className="flex items-center mr-6 transition-transform hover:scale-105" aria-label="Home">
          <img src={logo} alt="Logo" className="h-32 w-auto -my-4 select-none" draggable="false" />
        </Link>
        {/* Desktop nav center */}
        <nav className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex gap-8 items-center">
            {primary.map(item => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.label} className="relative flex items-center">
                  {item.href.startsWith('/') ? (
                    <Link
                      to={item.href}
                      className={`text-sm font-medium px-1 py-2 transition relative after:content-[''] after:block after:h-[2px] after:bg-gradient-to-r after:from-green-500 after:to-green-600 after:rounded-full after:mt-1 after:w-full after:transition-transform after:duration-200 after:origin-left ${
                        isActive 
                          ? 'text-green-700 after:scale-x-100' 
                          : 'text-neutral-800 hover:text-black after:scale-x-0 hover:after:scale-x-100'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className={`text-sm font-medium px-1 py-2 transition relative after:content-[''] after:block after:h-[2px] after:bg-gradient-to-r after:from-green-500 after:to-green-600 after:rounded-full after:mt-1 after:w-full after:transition-transform after:duration-200 after:origin-left ${
                        isActive 
                          ? 'text-green-700 after:scale-x-100' 
                          : 'text-neutral-800 hover:text-black after:scale-x-0 hover:after:scale-x-100'
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
        {/* Hamburger for mobile */}
        <button
          className="md:hidden ml-auto flex items-center justify-center h-10 w-10 rounded border border-neutral-200"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-neutral-800 rounded" />
            <span className="block h-0.5 w-6 bg-neutral-800 rounded" />
            <span className="block h-0.5 w-6 bg-neutral-800 rounded" />
          </div>
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
