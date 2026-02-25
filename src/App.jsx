import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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
import SaaSDemo from './pages/SaaSDemo.jsx';
import WebAppDemo from './pages/WebAppDemo.jsx';
import MobileAppDemo from './pages/MobileAppDemo.jsx';
import Privacybeleid from './pages/Privacybeleid.jsx';
import AlgemeneVoorwaarden from './pages/AlgemeneVoorwaarden.jsx';
import CookieBeleid from './pages/CookieBeleid.jsx';
import NotFound from './pages/NotFound.jsx';

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ClearBuildIT",
  "description": "Maatwerk SaaS-platformen, websites, webapps en mobile apps",
  "url": "https://clearbuildIT.nl",
  "areaServed": {
    "@type": "Country",
    "name": "Netherlands"
  },
  "serviceType": ["Software Development", "Web Development", "Mobile App Development"],
  "priceRange": "$$"
};

function App() {
  const location = useLocation();
  const isDemoPage = location.pathname.startsWith('/demo/');
  
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo/saas" element={<SaaSDemo />} />
        <Route path="/demo/webapp" element={<WebAppDemo />} />
        <Route path="/demo/mobile" element={<MobileAppDemo />} />
        <Route path="/privacybeleid" element={<Privacybeleid />} />
        <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
        <Route path="/cookie-beleid" element={<CookieBeleid />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isDemoPage && <Footer />}
    </>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
