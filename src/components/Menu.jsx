import React, { useState, useRef, useEffect } from 'react';
import OtherPageNavBar from './OtherPageNavBar';
import { useSelector } from 'react-redux';
import { NormalFooter } from './Footer';
function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [showMobileHint, setShowMobileHint] = useState(true);
  const categoryListRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const plates = useSelector((state) => state.menu.value);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Hide mobile hint after user interacts with categories or touches screen
  const hideMobileHint = () => {
    setShowMobileHint(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Hide mobile hint on any touch interaction
  useEffect(() => {
    const handleTouchStart = () => {
      setShowMobileHint(false);
    };

    // Add touch listener to the entire document
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  // Filter plates by category
  const filteredPlates = selectedCategory === plates.all || !(new Set(plates.menu.map(plate => plate.category))).has(selectedCategory) 
    ? plates.menu 
    : plates.menu.filter(plate => plate.category === selectedCategory);

  // Extract unique categories
  const categories = [plates.all, ...new Set(plates.menu.map(plate => plate.category))];

  // Arrow button visibility and scrolling logic (desktop)
  useEffect(() => {
    const updateScrollButtons = () => {
      const el = categoryListRef.current;
      if (!el) return;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    };
    updateScrollButtons();
    const el = categoryListRef.current;
    if (el) el.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
    return () => {
      if (el) el.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  const scrollCategories = (direction) => {
    const el = categoryListRef.current;
    if (!el) return;
    const step = Math.round((el.clientWidth || 300) * 0.8);
    el.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <>
      <OtherPageNavBar />
      <div className="container mx-auto mt-40 bg-gray-100 px-4 py-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold mb-8 mt-0 text-center text-gray-800 " style={{ fontFamily: "Dancing Script" }}>
          {plates.name}
        </h2>
        
        {/* Categories Section */}
        <div className="relative mb-8">
          {/* Desktop Arrow Buttons */}
          <button
            type="button"
            aria-label="Scroll categories left"
            className={`hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-yellow-50 hover:shadow-xl transition-all duration-200 ${canScrollLeft ? '' : 'opacity-30 cursor-not-allowed'}`}
            onClick={() => scrollCategories('left')}
            disabled={!canScrollLeft}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-600">
              <path fillRule="evenodd" d="M15.78 4.22a.75.75 0 010 1.06L9.06 12l6.72 6.72a.75.75 0 11-1.06 1.06l-7.25-7.25a.75.75 0 010-1.06l7.25-7.25a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Categories Container */}
          <div className="md:mx-12 overflow-hidden relative">
            {/* Professional sliding dot hint with modern design */}
            {showMobileHint && (
              <div className="md:hidden absolute top-0 left-0 right-0 h-full z-20 pointer-events-none flex items-center justify-center">
                {/* Main sliding indicator */}
                <div 
                  className="relative w-4 h-4 rounded-full shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
                    animation: 'slide-hint-dot 2s linear infinite',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4), 0 0 0 3px rgba(59, 130, 246, 0.1)'
                  }}
                >
                  {/* Inner glow effect */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), transparent 50%)',
                      animation: 'pulse-glow 1.5s ease-in-out infinite alternate'
                    }}
                  ></div>
                  
                  {/* Trail effect */}
                  <div 
                    className="absolute top-1/2 left-1/2 transform -translate-y-1/2 w-8 h-0.5 rounded-full opacity-40"
                    style={{
                      background: 'linear-gradient(90deg, transparent, #3B82F6, transparent)',
                      animation: 'trail-effect 2s linear infinite',
                      transform: 'translateY(-50%) translateX(-20px)'
                    }}
                  ></div>
                </div>

                {/* Subtle background indicator bar */}
                <div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-0.5 rounded-full opacity-20"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #3B82F6, transparent)',
                    animation: 'background-pulse 2s ease-in-out infinite'
                  }}
                ></div>
              </div>
            )}
            
            {/* Smooth continuous sliding animation */}
            <style dangerouslySetInnerHTML={{
              __html: `
                @keyframes slide-hint-dot {
                  0% { 
                    transform: translateX(60px);
                    opacity: 0;
                  }
                  10% {
                    opacity: 1;
                  }
                  90% {
                    opacity: 1;
                  }
                  100% { 
                    transform: translateX(-60px);
                    opacity: 0;
                  }
                }
                
                @keyframes pulse-glow {
                  0% { opacity: 0.4; }
                  100% { opacity: 0.8; }
                }
                
                @keyframes trail-effect {
                  0% { 
                    opacity: 0;
                    transform: translateY(-50%) translateX(30px) scaleX(0.5);
                  }
                  15% {
                    opacity: 0.8;
                    transform: translateY(-50%) translateX(20px) scaleX(1);
                  }
                  85% {
                    opacity: 0.8;
                    transform: translateY(-50%) translateX(-50px) scaleX(1);
                  }
                  100% { 
                    opacity: 0;
                    transform: translateY(-50%) translateX(-70px) scaleX(0.5);
                  }
                }
                
                @keyframes background-pulse {
                  0%, 100% { 
                    opacity: 0.15;
                  }
                  50% { 
                    opacity: 0.25;
                  }
                }
              `
            }} />

            {/* Gradient overlays for visual hint */}
            <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none md:hidden"></div>
            <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none md:hidden"></div>
            
            <div
              ref={categoryListRef}
              className="flex gap-3 overflow-x-auto scrollbar-hide py-2 px-2 md:px-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onTouchStart={hideMobileHint}
              onScroll={hideMobileHint}
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`flex-shrink-0 px-6 py-3 font-semibold text-sm rounded-full transition-all duration-200 transform hover:scale-105 shadow-sm whitespace-nowrap ${
                    selectedCategory === category || (!(new Set(plates.menu.map(plate => plate.category))).has(selectedCategory) && category === plates.all)
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md hover:shadow-lg' 
                      : 'bg-white text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 border border-gray-200 hover:border-yellow-200'
                  }`}
                  onClick={() => {
                    setSelectedCategory(category);
                    hideMobileHint();
                  }}
                >
                  {category}
                  {/* Active indicator dot */}
                  {(selectedCategory === category || (!(new Set(plates.menu.map(plate => plate.category))).has(selectedCategory) && category === plates.all)) && (
                    <span className="inline-block w-1.5 h-1.5 bg-white rounded-full ml-2 opacity-80"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Scroll categories right"
            className={`hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-yellow-50 hover:shadow-xl transition-all duration-200 ${canScrollRight ? '' : 'opacity-30 cursor-not-allowed'}`}
            onClick={() => scrollCategories('right')}
            disabled={!canScrollRight}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-600">
              <path fillRule="evenodd" d="M8.22 19.78a.75.75 0 010-1.06L14.94 12 8.22 5.28a.75.75 0 111.06-1.06l7.25 7.25a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPlates.map((plate) => (
            <div key={plate.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out transform md:hover:scale-110 hover:shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src={plate.imageLink}
                  alt={plate.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-40 lg:h-48 object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 md:hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold mb-2 h-12 lg:h-14 lg:text-lg text-gray-800 line-clamp-2">
                  {plate.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {plate.description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-yellow-600 font-bold text-lg">€{plate.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Go to Top Button */}
        {showGoToTop && (
          <button
            className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 z-40"
            onClick={scrollToTop}
            aria-label="Go to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>
      <NormalFooter/>
    </>
  );
}

export default Menu;