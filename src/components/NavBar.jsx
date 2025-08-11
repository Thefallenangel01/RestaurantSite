import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeLanguageNav } from "../redux/navSlice";
import { changeLanguage } from "../redux/menuSlice";
import { changeLanguageHome } from "../redux/homeSlice";
import { changeLanguageFindUs } from "../redux/findusSlice";
import { changeLanguageDelivery } from "../redux/deliverySlice";

function NavBar() {
  const path = "/flags/";
  const [isOpen, setIsOpen] = useState(false);

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
    if (isOpen) toggleMenu();
  };

  return (
    <nav className="bg-transparent absolute top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8 py-4">
        {/* Logo */}
        <div>
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

        {/* Mobile menu button */}
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

        {/* Mobile overlay */}
        <div 
          className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`} 
          onClick={toggleMenu}
        />

        {/* Mobile menu */}
        <div 
          className={`lg:hidden fixed inset-y-0 right-0 w-64 bg-gray-900/95 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } border-l border-white/10`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile menu header */}
            <div className="p-6 border-b border-white/10">
              <h2 className="text-white text-xl font-semibold" style={{ fontFamily: "Dancing Script" }}>
                Menu
              </h2>
            </div>

            {/* Mobile menu content */}
            <div className="flex-1 px-6 py-8">
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/" 
                    onClick={() => setIsOpen(false)} 
                    className="block text-white py-3 px-4 rounded-lg hover:bg-white/10 hover:text-orange-400 transition-all duration-200 font-medium text-lg"
                  >
                    {output.home}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/menu" 
                    onClick={() => setIsOpen(false)} 
                    className="block text-white py-3 px-4 rounded-lg hover:bg-white/10 hover:text-orange-400 transition-all duration-200 font-medium text-lg"
                  >
                    {output.menu}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/delivery" 
                    onClick={() => setIsOpen(false)} 
                    className="block text-white py-3 px-4 rounded-lg hover:bg-white/10 hover:text-orange-400 transition-all duration-200 font-medium text-lg"
                  >
                    {output.delivery}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/findus" 
                    onClick={() => setIsOpen(false)} 
                    className="block text-white py-3 px-4 rounded-lg hover:bg-white/10 hover:text-orange-400 transition-all duration-200 font-medium text-lg"
                  >
                    {output.findus}
                  </Link>
                </li>
              </ul>

              {/* Mobile language switcher */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="text-white text-sm font-medium mb-4 opacity-70">{output.changelanguage}</h3>
                <div className="flex justify-center space-x-4">
                  <button 
                    aria-label="Switch language to Italian" 
                    onClick={() => handleLanguageChange('it')} 
                    className="p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                  >
                    <img 
                      src={`${path}it.svg`} 
                      alt="Italian" 
                      className="h-6 w-8 group-hover:scale-110 transition-transform duration-200" 
                    />
                  </button>
                  <button 
                    aria-label="Switch language to English" 
                    onClick={() => handleLanguageChange('en')} 
                    className="p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                  >
                    <img 
                      src={`${path}uk.png`} 
                      alt="English" 
                      className="h-6 w-8 group-hover:scale-110 transition-transform duration-200" 
                    />
                  </button>
                  <button 
                    aria-label="Switch language to Chinese" 
                    onClick={() => handleLanguageChange('cn')} 
                    className="p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                  >
                    <img 
                      src={`${path}cn.svg`} 
                      alt="Chinese" 
                      className="h-6 w-8 group-hover:scale-110 transition-transform duration-200" 
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;