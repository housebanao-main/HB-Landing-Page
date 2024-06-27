import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import logo from '../assets/logo.svg'; 

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white text-black rounded-lg h-20 w-full sticky top-0 z-50 opacity-90 shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="House Banao" height={57} width={150} className="w-[150px] lg:ml-16 ml-1" />
      </div>
      <button className="flex items-center bg-[#A46254] text-white px-4 py-2 rounded mr-4 lg:mr-24">
        Get Quote <FaArrowRight className="ml-2" />
      </button>
    </header>
  );
};

export default Header;
