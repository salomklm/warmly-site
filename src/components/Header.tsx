import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handlePreorder = () => {
    // Redirection vers la page produit même si en rupture
    navigate('/culotte-chauffante-menstruelle');
  };

  const navigation = [
    { name: 'Culotte chauffante', path: '/culotte-chauffante-menstruelle' },
    { name: 'À propos de nous', path: '/a-propos-de-warmly' },
    { name: 'FAQ', path: '/questions-frequentes' }
  ];

  // Check if we're on the product page
  const isProductPage = location.pathname === '/culotte-chauffante-menstruelle';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b shadow-md py-3">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/"
            className="logo text-2xl font-bold text-[#642315]"
          >
            Warmly
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm font-medium transition-colors hover:text-[#642315] text-gray-800"
                >
                  {item.name}
                </Link>
              ))}
              {/* Hide preorder button on product page */}
              {!isProductPage && (
                <button 
                  onClick={handlePreorder}
                  className="bg-[#642315] text-white font-medium py-2.5 px-5 rounded-sm hover:bg-[#4e1a0e] transition-colors"
                >
                  Précommander
                </button>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#642315]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Fixed height to prevent CLS */}
      <div className={`md:hidden bg-white shadow-lg absolute top-full left-0 right-0 mobile-menu-container ${mobileMenuOpen ? 'open' : ''}`}>
        <div 
          className={`container mx-auto px-4 transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'py-4 opacity-100' : 'py-0 opacity-0'
          }`}
          style={{ height: mobileMenuOpen ? 'auto' : '0' }}
        >
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-800 hover:text-[#642315] font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Hide preorder button on product page in mobile menu too */}
            {!isProductPage && (
              <button 
                onClick={() => {
                  handlePreorder();
                  setMobileMenuOpen(false);
                }}
                className="bg-[#642315] text-white font-medium py-2.5 px-5 rounded-sm hover:bg-[#4e1a0e] transition-colors w-full"
              >
                Commander
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;