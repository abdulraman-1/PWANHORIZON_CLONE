import { useState } from 'react';

const HamburgerMenu = ({isOpen, toggleMenu}) => {
  

  

  return (
    <button 
    onClick={toggleMenu}
    className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-50 relative"
    aria-label="Toggle menu"
    >
        <span 
        className={`block h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${
            isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
        ></span>
        <span 
        className={`block h-0.5 w-6 bg-gray-800 transition duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : 'opacity-100'
        }`}
        ></span>
        <span 
        className={`block h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
        ></span>
    </button>
  );
};

export default HamburgerMenu;