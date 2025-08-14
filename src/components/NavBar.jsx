import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeLanguageNav } from "../redux/navSlice";
import { changeLanguage } from "../redux/menuSlice";
import { changeLanguageHome } from "../redux/homeSlice";
import { changeLanguageFindUs } from "../redux/findusSlice";
import { changeLanguageDelivery } from "../redux/deliverySlice";
import { changeLanguageFooter } from "../redux/footerSlice";
function NavBar() {
  const path = "/flags/";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const output = useSelector((state) => state.nav.value);
  const dispatch = useDispatch();

  const handleLanguageChange = (lang) => {
    dispatch(changeLanguageNav(lang));
    dispatch(changeLanguageHome(lang));
    dispatch(changeLanguage(lang));
    dispatch(changeLanguageFindUs(lang));
    dispatch(changeLanguageDelivery(lang));
    dispatch(changeLanguageFooter(lang));
    if (isOpen) toggleMenu();
  };

  return (
    <nav 
      className={`w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'fixed top-0 bg-black/80 shadow-lg border-b border-white/10' 
          : 'absolute top-0 bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8 py-4">
        {/* Mobile menu button - Left side */}
        <div className="lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span 
                className={`absolute left-0 top-1 w-6 h-0.5 bg-white transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span 
                className={`absolute left-0 top-3 w-6 h-0.5 bg-white transition-opacity duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`absolute left-0 top-5 w-6 h-0.5 bg-white transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Logo - Center */}
        <div className="lg:flex-1 lg:justify-start flex justify-center">
          <Link to="/" className="group">
            <div 
              className="flex items-center transition-transform duration-300 group-hover:scale-105" 
              style={{ fontFamily: "Dancing Script" }}
            >
              <span className="text-red-500 font-bold text-3xl drop-shadow-lg">
                La Felicità
              </span>
            </div>
          </Link>
        </div>

        {/* Empty space for mobile balance */}
        <div className="lg:hidden w-10"></div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center space-x-2">
          {/* Navigation links */}
          <li>
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="text-white px-4 py-2 rounded-lg hover:bg-white/10 hover:text-orange-400 transition-all duration-200 font-medium"
            >
              {output.home}
            </Link>
          </li>
          <li>
            <Link 
              to="/menu" 
              onClick={() => setIsOpen(false)}
              className="text-white px-4 py-2 rounded-lg hover:bg-white/10 hover:text-orange-400 transition-all duration-200 font-medium"
            >
              {output.menu}
            </Link>
          </li>
          <li>
            <Link 
              to="/delivery" 
              onClick={() => setIsOpen(false)}
              className="text-white px-4 py-2 rounded-lg hover:bg-white/10 hover:text-orange-400 transition-all duration-200 font-medium"
            >
              {output.delivery}
            </Link>
          </li>
          <li>
            <Link 
              to="/findus" 
              onClick={() => setIsOpen(false)}
              className="text-white px-4 py-2 rounded-lg hover:bg-white/10 hover:text-orange-400 transition-all duration-200 font-medium"
            >
              {output.findus}
            </Link>
          </li>

          {/* Language switcher */}
          <li className="ml-4 flex items-center space-x-2">
            <div className="flex items-center space-x-1 bg-white/5 rounded-lg p-1">
              <button 
                aria-label="Switch language to Italian" 
                onClick={() => handleLanguageChange('it')} 
                className="p-2 rounded-md hover:bg-white/10 transition-all duration-200 group"
              >
                <img 
                  src={`${path}it.svg`} 
                  alt="Italian" 
                  className="h-4 w-6 group-hover:scale-110 transition-transform duration-200" 
                />
              </button>
              <button 
                aria-label="Switch language to English" 
                onClick={() => handleLanguageChange('en')} 
                className="p-2 rounded-md hover:bg-white/10 transition-all duration-200 group"
              >
                <img 
                  src={`${path}uk.png`} 
                  alt="English" 
                  className="h-4 w-6 group-hover:scale-110 transition-transform duration-200" 
                />
              </button>
              <button 
                aria-label="Switch language to Chinese" 
                onClick={() => handleLanguageChange('cn')} 
                className="p-2 rounded-md hover:bg-white/10 transition-all duration-200 group"
              >
                <img 
                  src={`${path}cn.svg`} 
                  alt="Chinese" 
                  className="h-4 w-6 group-hover:scale-110 transition-transform duration-200" 
                />
              </button>
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={toggleMenu}
      />

      {/* Improved Mobile menu - Left side */}
      <div 
        className={`lg:hidden fixed inset-y-0 left-0 w-72 bg-gradient-to-b from-gray-900/98 to-gray-800/98 backdrop-blur-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } border-r border-white/20 shadow-2xl`}
      >
        <div className="flex flex-col h-full">
          {/* Improved Mobile menu header */}
          <div className="p-5 border-b border-white/10 bg-white/5">
            <div className="flex items-center justify-between">
              <h2 
                className="text-white text-lg font-semibold tracking-wide" 
                style={{ fontFamily: "Dancing Script" }}
              >
                La Felicità
              </h2>
              <div className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
            </div>
          </div>

          {/* Improved Mobile menu content */}
          <div className="flex-1 px-5 py-6 overflow-y-auto">
            <ul className="space-y-1">
              <li>
                <Link 
                  to="/" 
                  onClick={toggleMenu} 
                  className="group flex items-center text-white py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 hover:text-orange-300 transition-all duration-300 font-medium text-base border border-transparent hover:border-orange-400/30"
                >
                  <svg className="w-4 h-4 mr-3 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  {output.home}
                </Link>
              </li>
              <li>
                <Link 
                  to="/menu" 
                  onClick={toggleMenu} 
                  className="group flex items-center text-white py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 hover:text-orange-300 transition-all duration-300 font-medium text-base border border-transparent hover:border-orange-400/30"
                >
                  <svg className="w-4 h-4 mr-3 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {output.menu}
                </Link>
              </li>
              <li>
                <Link 
                  to="/delivery" 
                  onClick={toggleMenu} 
                  className="group flex items-center text-white py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 hover:text-orange-300 transition-all duration-300 font-medium text-base border border-transparent hover:border-orange-400/30"
                >
                  <svg className="w-4 h-4 mr-3 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  {output.delivery}
                </Link>
              </li>
              <li>
                <Link 
                  to="/findus" 
                  onClick={toggleMenu} 
                  className="group flex items-center text-white py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 hover:text-orange-300 transition-all duration-300 font-medium text-base border border-transparent hover:border-orange-400/30"
                >
                  <svg className="w-4 h-4 mr-3 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {output.findus}
                </Link>
              </li>
            </ul>

            {/* Improved Mobile language switcher */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="mb-4">
                <h3 className="text-white/80 text-sm font-medium mb-2 tracking-wide uppercase">
                  {output.changelanguage}
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <button 
                  aria-label="Switch language to Italian" 
                  onClick={() => handleLanguageChange('it')} 
                  className="group flex flex-col items-center p-3 rounded-xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20"
                >
                  <img 
                    src={`${path}it.svg`} 
                    alt="Italian" 
                    className="h-6 w-8 mb-1 group-hover:scale-110 transition-transform duration-200 rounded-sm shadow-sm" 
                  />
                  <span className="text-white/60 text-xs font-medium group-hover:text-white transition-colors">IT</span>
                </button>
                <button 
                  aria-label="Switch language to English" 
                  onClick={() => handleLanguageChange('en')} 
                  className="group flex flex-col items-center p-3 rounded-xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20"
                >
                  <img 
                    src={`${path}uk.png`} 
                    alt="English" 
                    className="h-6 w-8 mb-1 group-hover:scale-110 transition-transform duration-200 rounded-sm shadow-sm" 
                  />
                  <span className="text-white/60 text-xs font-medium group-hover:text-white transition-colors">EN</span>
                </button>
                <button 
                  aria-label="Switch language to Chinese" 
                  onClick={() => handleLanguageChange('cn')} 
                  className="group flex flex-col items-center p-3 rounded-xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20"
                >
                  <img 
                    src={`${path}cn.svg`} 
                    alt="Chinese" 
                    className="h-6 w-8 mb-1 group-hover:scale-110 transition-transform duration-200 rounded-sm shadow-sm" 
                  />
                  <span className="text-white/60 text-xs font-medium group-hover:text-white transition-colors">中文</span>
                </button>
              </div>
            </div>

            {/* Decorative element */}
            <div className="mt-8 pt-6">
              <div className="flex justify-center">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;