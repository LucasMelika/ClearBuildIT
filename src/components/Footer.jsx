import React from 'react';
import logo from '../assets/logoTrans.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-16">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <img src={logo} alt="ClearBuildIT" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Premium maatwerk development voor bedrijven die groeien.
            </p>
            <div className="flex gap-2">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-slate-700 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 bg-slate-700 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="w-10 h-10 bg-slate-700 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Diensten</h4>
            <ul className="space-y-2">
              <li><a href="#diensten" className="text-slate-400 hover:text-green-400 transition-colors text-sm">SaaS Platforms</a></li>
              <li><a href="#diensten" className="text-slate-400 hover:text-green-400 transition-colors text-sm">Web Applicaties</a></li>
              <li><a href="#diensten" className="text-slate-400 hover:text-green-400 transition-colors text-sm">Mobiele Apps</a></li>
              <li><a href="#diensten" className="text-slate-400 hover:text-green-400 transition-colors text-sm">API Development</a></li>
              <li><a href="#diensten" className="text-slate-400 hover:text-green-400 transition-colors text-sm">Code Audit</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-green-400 transition-colors text-sm">Documentatie</a></li>
              <li><a href="#" className="text-slate-400 hover:text-green-400 transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-green-400 transition-colors text-sm">Case Studies</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-green-400 transition-colors text-sm">Gratis demo</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Bedrijf</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-green-400 transition-colors text-sm">Over ons</a></li>
              <li><a href="#diensten" className="text-slate-400 hover:text-green-400 transition-colors text-sm">Diensten</a></li>
              <li><a href="#team" className="text-slate-400 hover:text-green-400 transition-colors text-sm">Ons team</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-green-400 transition-colors text-sm">Vacatures</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Contact</h4>
            <div className="space-y-3">
              <div>
                <p className="text-slate-500 text-xs mb-1">Email</p>
                <a href="mailto:info@clearbuildit.nl" className="text-slate-300 hover:text-green-400 transition-colors text-sm">info@clearbuildit.nl</a>
              </div>
              <div>
                <p className="text-slate-500 text-xs mb-1">Telefoon</p>
                <a href="tel:+31612345678" className="text-slate-300 hover:text-green-400 transition-colors text-sm">+31 6 1234 5678</a>
              </div>
              <div>
                <p className="text-slate-500 text-xs mb-1">Locatie</p>
                <p className="text-slate-300 text-sm">Nederland</p>
              </div>
            </div>
          </div>
        </div>

        {/* Top CTA */}
        <div className="border-t border-slate-700 py-12 mb-0">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Klaar om te starten?</h3>
              <p className="text-slate-400 text-sm">Laat ons weten wat je nodig hebt - we helpen je graag.</p>
            </div>
            <a href="#contact" className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors whitespace-nowrap">
              Neem contact op
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} <span className="font-semibold text-slate-300">ClearBuildIT</span>. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <a href="/privacybeleid" className="text-sm text-slate-400 hover:text-green-400 transition-colors">
                Privacybeleid
              </a>
              <span className="text-slate-700">•</span>
              <a href="/algemene-voorwaarden" className="text-sm text-slate-400 hover:text-green-400 transition-colors">
                Algemene voorwaarden
              </a>
              <span className="text-slate-700">•</span>
              <a href="/cookie-beleid" className="text-sm text-slate-400 hover:text-green-400 transition-colors">
                Cookie beleid
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
