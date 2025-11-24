import React from 'react';
import logo from '../assets/logoTrans.png';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-100 pt-10 pb-4 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Company call-to-action */}
        <div
          className="rounded-2xl text-white px-8 py-4 flex flex-col md:flex-row items-center justify-between mb-12 w-full"
          style={{ background: '#279C69' }}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-0 text-center md:text-left">
            Klaar voor digitale groei? <br className="hidden md:block" />Neem contact op om te bespreken wat we voor jouw project kunnen betekenen!
          </h2>
          <a href="#contact" className="inline-block bg-white text-green-900 font-semibold px-6 py-2 rounded-lg shadow hover:bg-green-100 transition text-base">
            Contact opnemen
          </a>
        </div>
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8 items-start">
          {/* Logo & tagline */}
          <div className="flex flex-col items-start md:col-span-1">
            <img src={logo} alt="ClearBuildIT logo" className="h-32 mb-2" />
            <span className="text-neutral-700 text-sm">Premium maatwerk software & apps</span>
          </div>
          {/* Producten */}
          <div>
            <h3 className="font-semibold text-neutral-900 mb-2">Producten</h3>
            <ul className="space-y-1 text-sm">
              <li><span className="inline-block w-1 h-1 bg-green-600 rounded-full mr-2 align-middle" />SaaS-platformen</li>
              <li><span className="inline-block w-1 h-1 bg-green-600 rounded-full mr-2 align-middle" />Webapps</li>
              <li><span className="inline-block w-1 h-1 bg-green-600 rounded-full mr-2 align-middle" />Mobiele apps</li>
            </ul>
          </div>
          {/* Locaties */}
          <div>
            <h3 className="font-semibold text-neutral-900 mb-2">Locaties</h3>
            <ul className="space-y-1 text-sm">
              <li><span className="inline-block w-1 h-1 bg-green-600 rounded-full mr-2 align-middle" />Zoetermeer</li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-neutral-900 mb-2">Contact</h3>
            <ul className="space-y-1 text-sm">
              <li>+31 20 123 4567</li>
              <li>info@clearbuildit.nl</li>
            </ul>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 border-t border-neutral-100 pt-4">
          <span>© {new Date().getFullYear()} ClearBuildIT</span>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-green-700">Algemene voorwaarden</a>
            <a href="#" className="hover:text-green-700">Privacybeleid</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
