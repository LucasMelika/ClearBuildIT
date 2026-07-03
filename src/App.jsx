import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { organizationSchema, servicesSchema, websiteSchema } from './utils/seoSchemas.js';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
import Navbar from './components/Navbar.jsx';
import Home from './Home';
import Footer from './components/Footer.jsx';
import CookieBanner from './components/CookieBanner.jsx';
import Privacybeleid from './pages/Privacybeleid.jsx';
import AlgemeneVoorwaarden from './pages/AlgemeneVoorwaarden.jsx';
import CookieBeleid from './pages/CookieBeleid.jsx';
import NotFound from './pages/NotFound.jsx';
import { I18nProvider } from './i18n.jsx';

function App() {
  
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="nl" />
        <meta name="keywords" content="SaaS, webapp, mobile app, software development, Netherlands" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacybeleid" element={<Privacybeleid />} />
        <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
        <Route path="/cookie-beleid" element={<CookieBeleid />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </>
  );
}

export default function AppWithRouter() {
  return (
    <I18nProvider>
      <Router>
        <App />
      </Router>
    </I18nProvider>
  );
}
