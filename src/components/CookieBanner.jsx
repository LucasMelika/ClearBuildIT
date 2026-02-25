import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

export default function CookieBanner() {
  const [hasConsented, setHasConsented] = useState(true);
  const [showDetailed, setShowDetailed] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [preferences, setPreferences] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent');
    if (!stored) {
      setHasConsented(false);
    }
  }, []);

  if (hasConsented) return null;

  const handleCustom = () => {
    const consent = { analytics, marketing, preferences, timestamp: Date.now() };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setHasConsented(true);
    setShowDetailed(false);
  };

  const handleRejectAll = () => {
    const consent = { analytics: false, marketing: false, preferences: false, timestamp: Date.now() };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setHasConsented(true);
  };

  const handleAcceptAll = () => {
    const consent = { analytics: true, marketing: true, preferences: true, timestamp: Date.now() };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setHasConsented(true);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-neutral-200 shadow-2xl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {!showDetailed ? (
          <>
            {/* Simple Banner */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-neutral-900 mb-1">
                  👋 We respecteren uw privacy
                </h3>
                <p className="text-sm text-neutral-600">
                  We gebruiken cookies voor analytics en verbetering van je ervaring. Je kunt je voorkeur aanpassen.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                <button
                  onClick={handleRejectAll}
                  className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  Alle weigeren
                </button>
                <button
                  onClick={() => setShowDetailed(true)}
                  className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  Aanpassen
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  Alles accepteren
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Detailed Settings */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-neutral-900">
                  Cookie Voorkeuren
                </h3>
                <button
                  onClick={() => setShowDetailed(false)}
                  className="text-neutral-500 hover:text-neutral-700"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Cookie Categories */}
              <div className="space-y-3">
                {/* Essential - Always enabled */}
                <div className="flex items-start gap-4 p-3 bg-neutral-50 rounded-lg">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="mt-1 cursor-not-allowed"
                  />
                  <div className="flex-1">
                    <label className="font-medium text-neutral-900">
                      Essentiële Cookies
                    </label>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Nodig voor basisfunctionaliteit van de website.
                    </p>
                  </div>
                  <span className="text-xs font-medium text-neutral-500">
                    Altijd ingeschakeld
                  </span>
                </div>

                {/* Analytics */}
                <div className="flex items-start gap-4 p-3 border border-neutral-200 rounded-lg">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label className="font-medium text-neutral-900">
                      Analytics & Prestaties
                    </label>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Helpt ons te begrijpen hoe je onze site gebruikt.
                    </p>
                  </div>
                </div>

                {/* Marketing */}
                <div className="flex items-start gap-4 p-3 border border-neutral-200 rounded-lg">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label className="font-medium text-neutral-900">
                      Marketing & Tracking
                    </label>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Voor gerichte advertenties en retargeting.
                    </p>
                  </div>
                </div>

                {/* Preferences */}
                <div className="flex items-start gap-4 p-3 border border-neutral-200 rounded-lg">
                  <input
                    type="checkbox"
                    checked={preferences}
                    onChange={(e) => setPreferences(e.target.checked)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label className="font-medium text-neutral-900">
                      Voorkeur Cookies
                    </label>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Voor persoonlijke website-instellingen.
                    </p>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-2 text-xs text-neutral-600">
                <a href="/privacybeleid" className="hover:text-neutral-900 underline">
                  Privacybeleid
                </a>
                <span>•</span>
                <a href="/cookie-beleid" className="hover:text-neutral-900 underline">
                  Cookie Beleid
                </a>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-medium border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  Alles weigeren
                </button>
                <button
                  onClick={handleCustom}
                  className="px-4 py-2 text-sm font-medium border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  Voorkeur opslaan
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 text-sm font-medium bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors ml-auto"
                >
                  Alles accepteren
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
