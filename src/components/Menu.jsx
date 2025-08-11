import React, { useState, useRef, useEffect } from 'react';
import OtherPageNavBar from './OtherPageNavBar';
import { useSelector } from 'react-redux';


function Menu() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showGoToTop, setShowGoToTop] = useState(false);
  const modalRef = useRef(null);
  const categoryListRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);


  const plates=useSelector((state)=>state.menu.value);
  const openModal = (photoUrl) => {
    setSelectedPhoto(photoUrl);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
  
  // Filter plates by category
  const filteredPlates = selectedCategory === plates.all||!(new Set(plates.menu.map(plate => plate.category))).has(selectedCategory) ? plates.menu : plates.menu.filter(plate => plate.category === selectedCategory);

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
        <h2 className="text-4xl font-semibold mb-8 mt-0 text-center" style={{ writingMode: 'horizontal-tb', textOrientation: 'mixed' }}>
          {plates.name}
        </h2>
        <nav className="relative mb-6">
          <button
            type="button"
            aria-label="Scroll categories left"
            className={`hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow border border-gray-200 hover:bg-yellow-100 transition ${canScrollLeft ? '' : 'opacity-40 cursor-not-allowed'}`}
            onClick={() => scrollCategories('left')}
            disabled={!canScrollLeft}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-700">
              <path fillRule="evenodd" d="M15.78 4.22a.75.75 0 010 1.06L9.06 12l6.72 6.72a.75.75 0 11-1.06 1.06l-7.25-7.25a.75.75 0 010-1.06l7.25-7.25a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="mx-12 overflow-x-auto">
            <ul
              ref={categoryListRef}
              className="flex space-x-0 scrollbar-hide"
              style={{ flexWrap: 'nowrap', overflowX: 'auto' }}
            >
              {categories.map((category, index) => (
                <li key={index} className="mr-4 w-fill">
                  <a
                    href="#"
                    className={`px-6 py-2 font-bold inline-block max-w-fit whitespace-nowrap ${selectedCategory === category ||(!(new Set(plates.menu.map(plate => plate.category))).has(selectedCategory)&&category===plates.all) ? 'bg-yellow-500 text-white' : 'bg-grey text-gray-800 hover:bg-yellow-300'}`}
                    style={{ writingMode: 'horizontal-tb', textOrientation: 'mixed' }}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            aria-label="Scroll categories right"
            className={`hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow border border-gray-200 hover:bg-yellow-100 transition ${canScrollRight ? '' : 'opacity-40 cursor-not-allowed'}`}
            onClick={() => scrollCategories('right')}
            disabled={!canScrollRight}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-700">
              <path fillRule="evenodd" d="M8.22 19.78a.75.75 0 010-1.06L14.94 12 8.22 5.28a.75.75 0 111.06-1.06l7.25 7.25a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0z" clipRule="evenodd" />
            </svg>
          </button>
        </nav>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredPlates.map((plate) => (
            <div key={plate.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-110">
              <img
                src={plate.imageLink}
                alt={plate.name}
                loading="lazy"
                decoding="async"
                className="w-full h-40 object-cover rounded-t-lg cursor-pointer lg:2-full lg:h-64"
                onClick={() => openModal(plate.imageLink)}
              />
              <div className="p-4">
                <h3 
                  className="text-base font-semibold mb-2 h-20 lg:text-lg" 
                  style={{ writingMode: 'horizontal-tb', textOrientation: 'mixed' }}
                >
                  {plate.name}
                </h3>
                <p 
                  className="text-gray-600" 
                  style={{ writingMode: 'horizontal-tb', textOrientation: 'mixed' }}
                >
                  {plate.description}
                </p>
                <p className="text-gray-800 font-base mt-4">€{plate.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        {showGoToTop && (
          <button
            className="fixed bottom-10 right-10 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300"
            onClick={scrollToTop}
            style={{ writingMode: 'horizontal-tb', textOrientation: 'mixed' }}
          >
            Go to Top
          </button>
        )}
        {selectedPhoto && (
          <div
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50"
            onClick={handleOutsideClick}
          >
            <div className="relative w-[500px] h-[500px] lg:w-[600px] lg:h-[600px]" ref={modalRef}>
              <img src={selectedPhoto} alt="Selected" className="w-full h-full object-contain" />
              <button
                className="absolute top-4 right-4 text-white text-xl bg-black rounded-full p-2 hover:bg-gray-800 transition duration-300"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Menu;