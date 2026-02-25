import React, { useState, useEffect } from 'react';

export default function ScrollCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 500px
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <a
          href="#contact"
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Start je project"
        >
          <div className="relative">
            {/* Pulsing ring */}
            <div className="absolute inset-0 rounded-full bg-green-600 opacity-75 animate-ping"></div>
            
            {/* Main button */}
            <div className="relative flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold shadow-2xl hover:shadow-green-500/50 hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-110 group-hover:-translate-y-1">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="hidden sm:inline whitespace-nowrap">Start je project</span>
              
              {/* Tooltip on mobile */}
              <div className="sm:hidden absolute right-full mr-3 px-3 py-2 bg-neutral-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Start je project
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-neutral-900 rotate-45"></div>
              </div>
            </div>
          </div>
        </a>
      )}
    </>
  );
}
