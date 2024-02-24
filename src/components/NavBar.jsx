import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeLanguageNav } from "../redux/navSlice";
import { changeLanguage } from "../redux/menuSlice";
import { changeLanguageHome } from "../redux/homeSlice";
import { changeLanguageFindUs } from "../redux/findusSlice";
import { changeLanguageDelivery } from "../redux/deliverySlice";

function NavBar() {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const output=useSelector((state)=>state.nav.value);
  const dispatch=useDispatch();
  return (
    <nav className="bg-transparent absolute top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8 py-4">
        <div className="flex items-center" style={{fontFamily:"Dancing Script"}}>
          <span className="text-red-500 font-bold text-3xl" >La Felicità</span>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        <ul className={`lg:flex space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <li className="hover:bg-orange-700 rounded px-2 py-1">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-white">{output.home}</Link>
          </li>
          <li className="hover:bg-orange-700 rounded px-2 py-1">
            <Link to="/menu" onClick={() => setIsOpen(false)} className="text-white">{output.menu}</Link>
          </li>
          <li className="hover:bg-orange-700 rounded px-2 py-1">
            <Link to="/delivery" onClick={() => setIsOpen(false)} className="text-white">{output.delivery}</Link>
          </li>
          <li className="hover:bg-orange-700 rounded px-2 py-1">
            <Link to="/findus" onClick={() => setIsOpen(false)} className="text-white">{output.findus}</Link>
          </li>
          <li className="hover:bg-orange-700 rounded px-2 py-1">
              <button onClick={() => {dispatch(changeLanguageNav('it'));dispatch(changeLanguageHome('it'));dispatch(changeLanguage('it'));dispatch(changeLanguageFindUs('it'));dispatch(changeLanguageDelivery('it'))}} className="focus:outline-none">
                <img src="src/assets/flags/it.svg" alt="Italian" className="h-4 w-6" />
              </button>
            </li>
            <li className="hover:bg-orange-700 rounded px-2 py-1">
              <button onClick={() => {dispatch(changeLanguageNav('en'));dispatch(changeLanguageHome('en'));dispatch(changeLanguage('en'));dispatch(changeLanguageFindUs('en'));dispatch(changeLanguageDelivery('en'))}} className="focus:outline-none">
                <img src="src/assets/flags/uk.png" alt="English" className="h-4 w-6" />
              </button>
            </li>
            <li className="hover:bg-orange-700 rounded px-2 py-1">
              <button onClick={() => {dispatch(changeLanguageNav('cn'));dispatch(changeLanguageHome('cn'));dispatch(changeLanguage('cn'));dispatch(changeLanguageFindUs('cn'));dispatch(changeLanguageDelivery('cn'))}} className="focus:outline-none">
                <img src="src/assets/flags/cn.svg" alt="Chinese" className="h-4 w-6" />
              </button>
            </li>
        </ul>
        <div className={`lg:hidden fixed inset-0 bg-black opacity-50 z-40 ${isOpen ? 'block' : 'hidden'}`} onClick={toggleMenu}></div>
        <div className={`lg:hidden fixed inset-y-0 right-0 flex flex-col justify-center bg-gray-800 w-64 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition duration-300 ease-in-out`}>
          <ul className="text-white text-center">
            <li className="hover:bg-orange-700 rounded py-2">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-white">{output.home}</Link>
            </li>
            <li className="hover:bg-orange-700 rounded py-2">
              <Link to="/menu" onClick={() => setIsOpen(false)} className="text-white">{output.menu}</Link>
            </li>
            <li className="hover:bg-orange-700 rounded py-2">
              <Link to="/delivery" onClick={() => setIsOpen(false)} className="text-white">{output.delivery}</Link>
            </li>
            <li className="hover:bg-orange-700 rounded py-2">
              <Link to="/findus" onClick={() => setIsOpen(false)} className="text-white">{output.findus}</Link>
            </li>
            <li className="hover:bg-orange-700 rounded px-2 py-1">
              <button onClick={() => {dispatch(changeLanguageNav('it'));dispatch(changeLanguageHome('it'));dispatch(changeLanguage('it'));dispatch(changeLanguageFindUs('it'));dispatch(changeLanguageDelivery('it'));toggleMenu()}} className="focus:outline-none">
                <img src="src/assets/flags/it.svg" alt="Italian" className="h-4 w-6" />
              </button>
            </li>
            <li className="hover:bg-orange-700 rounded px-2 py-1">
              <button onClick={() => {dispatch(changeLanguageNav('en'));dispatch(changeLanguageHome('en'));dispatch(changeLanguage('en'));dispatch(changeLanguageFindUs('en'));dispatch(changeLanguageDelivery('en'));toggleMenu()}} className="focus:outline-none">
                <img src="src/assets/flags/uk.png" alt="English" className="h-4 w-6" />
              </button>
            </li>
            <li className="hover:bg-orange-700 rounded px-2 py-1">
              <button onClick={() =>{dispatch(changeLanguageNav('cn'));dispatch(changeLanguageHome('cn'));dispatch(changeLanguage('cn'));dispatch(changeLanguageFindUs('cn'));dispatch(changeLanguage('cn'));toggleMenu()}} className="focus:outline-none">
                <img src="src/assets/flags/cn.svg" alt="Chinese" className="h-4 w-6" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
