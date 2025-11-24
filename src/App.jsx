import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import Diensten from './Diensten.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diensten" element={<Diensten />} />
      </Routes>
      <Footer />
    </Router>
  );
}
