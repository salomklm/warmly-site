import React from 'react';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#642315] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Warmly</h3>
            <p className="text-white/80 mb-6 max-w-md">
              Technologie chauffante conçue pour apporter soulagement aux personnes souffrant de douleurs menstruelles.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/warmly.paris" target="_blank" rel="noopener noreferrer" aria-label="Warmly on Instagram" className="text-white hover:text-[#dbbeb8] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@warmlyparis" target="_blank" rel="noopener noreferrer" aria-label="Warmly on TikTok" className="text-white hover:text-[#dbbeb8] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.87 2.87 2.89 2.89 0 0 1-2.88-2.87 2.89 2.89 0 0 1 2.88-2.87c.28 0 .53.05.78.13v-3.61c-2.84.48-5 2.94-5 5.91a5.73 5.73 0 0 0 5.74 5.74 5.73 5.73 0 0 0 5.74-5.74V9.24a8.75 8.75 0 0 0 5.47 1.93v-3.37a4.85 4.85 0 0 1-2.64-1.11Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li>contact@warmly.fr</li>
              <li>75015 Paris</li>
              <li>France</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 mb-4 md:mb-0 text-center md:text-left">
            <p>&copy; 2025 Warmly® — Modèle déposé à l'INPI.</p>
            <p>Tous droits réservés. Design protégé.</p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            <Link to="/mentions-legales" className="text-white/60 hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link to="/cgv" className="text-white/60 hover:text-white transition-colors">
              CGV
            </Link>
            <Link to="/politique-de-retour" className="text-white/60 hover:text-white transition-colors">
              Politique de retour
            </Link>
            <Link to="/politique-de-confidentialite" className="text-white/60 hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;