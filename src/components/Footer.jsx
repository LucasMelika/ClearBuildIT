import React from 'react';
import logo from '../assets/logoTrans.png';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="ClearBuildIT" className="h-8 mb-4" />
            <p className="text-sm text-neutral-600 line-clamp-3">
              Premium maatwerk software en webapplicaties voor bedrijven die groeien.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wide mb-4">Diensten</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#diensten" className="text-neutral-600 hover:text-green-600 transition">SaaS Platforms</a></li>
              <li><a href="#diensten" className="text-neutral-600 hover:text-green-600 transition">Web Applicaties</a></li>
              <li><a href="#diensten" className="text-neutral-600 hover:text-green-600 transition">Mobiele Apps</a></li>
              <li><a href="#diensten" className="text-neutral-600 hover:text-green-600 transition">API Development</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wide mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-neutral-500 font-medium mb-1">Email</p>
                <a href="mailto:info@clearbuildit.nl" className="text-neutral-700 hover:text-green-600 transition">
                  info@clearbuildit.nl
                </a>
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-medium mb-1">Telefoon</p>
                <a href="tel:+31647894521" className="text-neutral-700 hover:text-green-600 transition">
                  +31 6 47 89 45 21
                </a>
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-medium mb-1">Locatie</p>
                <p className="text-neutral-700">Zoetermeer, Nederland</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wide mb-4">Info</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacybeleid" className="text-neutral-600 hover:text-green-600 transition">Privacybeleid</a></li>
              <li><a href="/algemene-voorwaarden" className="text-neutral-600 hover:text-green-600 transition">Voorwaarden</a></li>
              <li><a href="/cookie-beleid" className="text-neutral-600 hover:text-green-600 transition">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-200 pt-6">
          <p className="text-xs text-neutral-500 text-center">
            © {new Date().getFullYear()} ClearBuildIT. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
