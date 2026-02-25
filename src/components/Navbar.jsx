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
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
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
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center hover:opacity-80 transition" aria-label="Home">
          <img src={logo} alt="ClearBuildIT" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 items-center">
            {primary.map(item => {
              const isActive = activeSection === item.href.replace('#', '');
              const isAnchor = !item.href.startsWith('/');
              
              return (
                <li key={item.label}>
                  {isAnchor ? (
                    <a
                      href={item.href}
                      className={`text-sm font-medium transition ${
                        isActive 
                          ? 'text-green-700' 
                          : 'text-neutral-700 hover:text-neutral-900'
                      }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition"
                    >
                      {item.label}
                    </Link>
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
          <div className="fixed inset-0 z-40 bg-black/20" onClick={() => setOpen(false)}>
            <div
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-4 border-b border-neutral-200">
                <img src={logo} alt="ClearBuildIT" className="h-8 w-auto" />
                <button
                  className="p-1 hover:bg-neutral-100 rounded transition"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Drawer nav */}
              <nav className="flex-1 overflow-y-auto">
                <ul className="divide-y divide-neutral-100">
                  {primary.map(item => (
                    <li key={item.label}>
                      {!item.href.startsWith('/') ? (
                        <a
                          href={item.href}
                          className="block px-4 py-3 text-neutral-700 hover:bg-green-50 hover:text-green-700 transition"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className="block px-4 py-3 text-neutral-700 hover:bg-green-50 hover:text-green-700 transition"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Drawer footer */}
              <div className="border-t border-neutral-200 p-4 bg-neutral-50">
                <div className="text-xs font-semibold text-neutral-700 uppercase tracking-wide mb-3">Contact</div>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-neutral-500 text-xs">Email</p>
                    <a href="mailto:info@clearbuildit.nl" className="text-green-600 hover:text-green-700 font-medium">
                      info@clearbuildit.nl
                    </a>
                  </div>
                  <div>
                    <p className="text-neutral-500 text-xs">Telefoon</p>
                    <a href="tel:+31647894521" className="text-green-600 hover:text-green-700 font-medium">
                      +31 6 47 89 45 21
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
