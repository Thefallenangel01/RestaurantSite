import React, { useState, useRef, useEffect } from 'react';
import OtherPageNavBar from './OtherPageNavBar';
import { useSelector } from 'react-redux';


function Menu() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showGoToTop, setShowGoToTop] = useState(false);
  const modalRef = useRef(null);


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

  return (
    <>
      <OtherPageNavBar />
      <div className="container mx-auto mt-40 bg-gray-100 px-4 py-8 rounded-lg shadow-lg ">
        <h2 className="text-4xl font-semibold mb-8 mt-0 text-center">{plates.name}</h2>
        <nav className="flex justify-center mb-6 overflow-x-auto" >
          <ul className="flex space-x-0 scrollbar-hide" style={{ flexWrap: "nowrap", overflowX: "auto" }}>
            {categories.map((category, index) => (
              <li key={index} className="mr-4 w-fill">
                <a
                  href="#"
                  className={`px-6 py-2 inline-block max-w-fit ${selectedCategory === category ||(!(new Set(plates.menu.map(plate => plate.category))).has(selectedCategory)&&category===plates.all) ? 'bg-yellow-500 text-white' : 'bg-grey text-gray-800 hover:bg-yellow-300'}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredPlates.map((plate) => (
            <div key={plate.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-110">
              <img
                src={plate.imageLink}
                alt={plate.name}
                className="w-full h-40 object-cover rounded-t-lg cursor-pointer lg:2-full lg:h-64"
                onClick={() => openModal(plate.imageLink)}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 h-20">{plate.name}</h3>
                <p className="text-gray-600">{plate.description}</p>
                <p className="text-gray-800 font-semibold mt-4">€{plate.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        {showGoToTop && (
          <button
            className="fixed bottom-10 right-10 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300"
            onClick={scrollToTop}
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
