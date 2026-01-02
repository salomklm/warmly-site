import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import FAQPage from './pages/FAQ';
import ProductPage from './pages/ProductPage';
import { MentionsLegales, CGV, ReturnPolicy, PrivacyPolicy } from './pages/LegalPages';
import Footer from './components/Footer';
import './styles/critical.css';

function App() {
  useEffect(() => {
    document.title = "Warmly | Soulagement des Douleurs Menstruelles";
    
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.setAttribute("href", "/favicon.ico");
    }
  }, []);

  return (
    <Router>
      <div className="relative overflow-hidden">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Navigate to="/fonctionnement" replace />} />
            <Route path="/fonctionnement" element={<Navigate to="/a-propos-de-warmly" replace />} />
            <Route path="/a-propos-de-warmly" element={<About />} />
            <Route path="/faq" element={<Navigate to="/questions-frequentes" replace />} />
            <Route path="/questions-frequentes" element={<FAQPage />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/politique-de-retour" element={<ReturnPolicy />} />
            <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
            <Route path="/culotte-chauffante-menstruelle" element={<ProductPage />} />
            <Route path="/short-chauffant-menstruel" element={<Navigate to="/culotte-chauffante-menstruelle" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;