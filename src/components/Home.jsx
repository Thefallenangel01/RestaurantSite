import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { useSelector } from 'react-redux';
import { NormalFooter } from './Footer';

function Home() {
  const path = "/restaurantPhoto/";
  const images = [
    `${path}1.jpg`,
    `${path}2.jpg`,
    `${path}3.jpg`,
    `${path}4.jpg`,
    `${path}5.jpg`,
    `${path}6.jpg`,
    `${path}7.jpg`,
    `${path}8.jpg`
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());
  
  const dishesScrollRef = useRef(null);
  const out = useSelector((state) => state.home.value);
  const plates = useSelector((state) => state.menu.value);

  // Array of dish IDs to exclude from featured dishes
  // Using useMemo to prevent array recreation on every render
  const excludedDishIds = useMemo(() => ["0","0A","1","1A","2","3","5","7","8","9","10","11","12","12A","12B","12C","14A","15","16","17","17A","19A","20","21","25E","26A","26B","27","28B","29","29A","31","31A","34","35","36","36A","37","39","42","42B","42F","43","47","48A","49C","53A","53C","53D","53E","53F","56","58","60","63","71","73","74","74A","74B","75","75A","78","78A","79","85","85B","87","90","91","93","96","97A","97B","97C","99","105","107","109","111","112","113","114","114A","116","121","125B","128","128A","132","133","133B","139"], []); // Replace with your actual dish IDs
  // SE VUOI METTERE ID ESCLUSI ALLORA METTI ! NELLA FUNZIONE FILTER ALTRIMENTI LASCIA COSI E METTI SOLO QUELLI PRESENTI QUI DENTRO
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update arrow button visibility (Mobile only)
  useEffect(() => {
    const updateScrollButtons = () => {
      const el = dishesScrollRef.current;
      if (!el) return;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    };
    
    updateScrollButtons();
    const el = dishesScrollRef.current;
    if (el) el.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
    return () => {
      if (el) el.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePhoneCall = () => {
    window.open('tel:0587290816', '_self');
  };

  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => new Set(prev).add(imageId));
  };

  const hideScrollHint = () => {
    setShowScrollHint(false);
  };

  // Enhanced memoized featured dishes - excluding drinks category AND specific dish IDs
  const featuredDishes = useMemo(() => {
    if (!plates?.menu) return [];
    
    // Filter out drinks categories and excluded dish IDs
    const filteredMenu = plates.menu.filter(dish => {
      if (!dish.category) return false;
      
      const category = dish.category.trim();
      
      // Exclude drinks categories in all three languages
      const drinkCategories = ['Bevande', '酒水', 'DRINKS'];
      const isDrinkCategory = drinkCategories.includes(category);
      
      // Check if dish ID is in the excluded list
      const isExcludedId = excludedDishIds.includes(dish.id);
      
      // Return true only if it's NOT a drink category AND NOT in excluded IDs
      return !isDrinkCategory && isExcludedId;// ! SUL EXCLUDED SE SI VIUOLE LEVARE I ID DENTRO ALTRIMENTI LASCIA COSI CHE METTE SOLO QUELLI
    });
    
    const categories = [...new Set(filteredMenu.map(dish => dish.category))];
    const randomDishes = [];
    
    categories.forEach(category => {
      const categoryDishes = filteredMenu.filter(dish => dish.category === category);
      const shuffled = [...categoryDishes].sort(() => Math.random() - 0.5);
      randomDishes.push(...shuffled.slice(0, Math.min(3, categoryDishes.length)));
    });
    
    return randomDishes.sort(() => Math.random() - 0.5).slice(0, 16);
  }, [plates?.menu, excludedDishIds]); // Added excludedDishIds to dependency array

  const DishCard = ({ dish, isMobile = false }) => {
    const imageId = `home-image-${dish.id}`;
    const isImageLoaded = loadedImages.has(imageId);

    return (
      <div className={`group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:z-10 relative ${isMobile ? 'flex-shrink-0 w-64 sm:w-80' : ''}`}>
        <div className="relative overflow-hidden">
          {/* Loading skeleton */}
          {!isImageLoaded && (
            <div 
              className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"
              style={{
                backgroundImage: 'linear-gradient(90deg, #e5e7eb 0px, #f3f4f6 50px, #e5e7eb 100px)',
                backgroundSize: '200px 100%',
                animation: 'shimmer 1.5s infinite linear'
              }}
            >
              {/* Skeleton content */}
              <div className="flex items-center justify-center h-40 lg:h-48">
                <div className="text-gray-400">
                  <svg className="w-12 h-12 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          <img
            src={dish.imageLink}
            alt={dish.name}
            loading="lazy"
            decoding="async"
            className={`w-full h-40 lg:h-48 object-cover transition-all duration-300 ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => handleImageLoad(imageId)}
            onError={() => handleImageLoad(imageId)}
          />
          
          {isImageLoaded && (
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          )}
          
          {isImageLoaded && (
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-red-500/90 backdrop-blur-sm text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
              {dish.category}
            </div>
          )}
          
          {isImageLoaded && (
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-white/95 backdrop-blur-sm text-red-600 px-2 py-1 sm:px-3 sm:py-1 rounded-full font-bold text-sm sm:text-lg shadow-lg">
              €{dish.price?.toFixed(2)}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-base font-semibold mb-2 h-12 lg:h-14 lg:text-lg text-gray-800 line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
            {dish.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {dish.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <div className="h-screen flex justify-center items-center relative">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Restaurant ambiance ${index + 1}`}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchpriority={index === 0 ? 'high' : 'auto'}
            decoding="async"
            className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 flex flex-col justify-center items-center text-white">
          <div className="py-16 px-8 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ fontFamily: "Dancing Script" }}>
              {out.welcome}
              <br />
              <span className="text-red-500 text-5xl md:text-7xl lg:text-8xl drop-shadow-2xl">
                {out.resName}
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed" style={{ fontFamily: "Dancing Script" }}>
              {out.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <Link
                to="/menu"
                className="flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 sm:px-12 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-h-[52px] w-full"
              >
                <span>{out.ourmenu}</span>
              </Link>
              <Link
                to="/findus"
                className="flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-3 sm:px-12 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white/20 min-h-[52px] w-full"
              >
                <span>{out.contattaci}</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Featured Dishes Section */}
      <section id="featured-section" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-left mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4" style={{ fontFamily: "Dancing Script" }}>
              {out.ourdishes}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500"></div>
          </div>

          {/* Add shimmer animation styles */}
          <style dangerouslySetInnerHTML={{
            __html: `
              @keyframes shimmer {
                0% {
                  background-position: -200px 0;
                }
                100% {
                  background-position: calc(200px + 100%) 0;
                }
              }
              
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

          {/* Desktop Grid Layout (hidden on mobile) */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12" style={{ perspective: '1000px' }}>
              {featuredDishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </div>
            
            {/* View Complete Menu Button for Desktop */}
            <div className="text-center">
              <Link
                to="/menu"
                className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                {out.completemenu}
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile/Tablet Horizontal Scroll (hidden on desktop) */}
          <div className="lg:hidden relative">
            {/* Scroll Hint Animation */}
            {showScrollHint && (
              <div className="absolute top-0 left-0 right-0 h-full z-20 pointer-events-none flex items-center justify-center">
                <div 
                  className="relative w-4 h-4 rounded-full shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #EF4444, #DC2626)',
                    animation: 'slide-hint-dot 2s linear infinite',
                    boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4), 0 0 0 3px rgba(239, 68, 68, 0.1)'
                  }}
                >
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), transparent 50%)',
                      animation: 'pulse-glow 1.5s ease-in-out infinite alternate'
                    }}
                  ></div>
                  <div 
                    className="absolute top-1/2 left-1/2 transform -translate-y-1/2 w-8 h-0.5 rounded-full opacity-40"
                    style={{
                      background: 'linear-gradient(90deg, transparent, #EF4444, transparent)',
                      animation: 'trail-effect 2s linear infinite',
                      transform: 'translateY(-50%) translateX(-20px)'
                    }}
                  ></div>
                </div>
                <div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-0.5 rounded-full opacity-20"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #EF4444, transparent)',
                    animation: 'background-pulse 2s ease-in-out infinite'
                  }}
                ></div>
              </div>
            )}

            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

            <div 
              ref={dishesScrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onTouchStart={hideScrollHint}
              onScroll={hideScrollHint}
            >
              {featuredDishes.slice(0, 12).map((dish) => (
                <DishCard key={dish.id} dish={dish} isMobile={true} />
              ))}
            </div>

            {/* Mobile View All Button */}
            <div className="text-center mt-8">
              <Link
                to="/menu"
                className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                {out.ourmenu}
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fixed Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Desktop Layout */}
        {showGoToTop && (
          <div className="hidden md:block">
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 group"
              aria-label="Go to top"
            >
              <svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        )}

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center gap-3">
          <button
            onClick={handlePhoneCall}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 group"
            aria-label="Call restaurant"
          >
            <svg className="w-5 h-5 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </button>
          
          {showGoToTop && (
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 group"
              aria-label="Go to top"
            >
              <svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          )}
        </div>
      </div>
      
      <NormalFooter/>
    </>
  );
}

export default Home;