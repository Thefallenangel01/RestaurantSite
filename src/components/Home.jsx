import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { useSelector } from 'react-redux';

function Home() {
 
  const images = [
    'src/assets/restaurantPhoto/1.jpg',
    'src/assets/restaurantPhoto/2.jpg',
    'src/assets/restaurantPhoto/3.jpg',
    'src/assets/restaurantPhoto/4.jpg',
    'src/assets/restaurantPhoto/5.jpg',
    'src/assets/restaurantPhoto/6.jpg',
    'src/assets/restaurantPhoto/7.jpg',
    'src/assets/restaurantPhoto/8.jpg'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % images.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  const out=useSelector((state)=>state.home.value);
  return (
    <>
      <NavBar />
      <div className="h-screen flex justify-center items-center relative">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Slide ${index}`}
            className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white" style={{fontFamily:"Dancing Script"}}>
          <div className="py-16 px-8 rounded-lg text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4" >
              {out.welcome} <br /><br /><span className="text-red-500 text-6xl">{out.resName}</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl ">
              <br />
              {out.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
