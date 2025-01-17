import React, { useState } from 'react';

const navList = [
  { id: 2, data: 'Skills' },
  { id: 3, data: 'Training' },
  { id: 4, data: 'Projects' },
  { id: 5, data: 'Contact' },
];

const Header = ({ onLinkClick }) => {
  return (
    <header className='fixed w-[1080px] md:w-full flex justify-center items-center p-4 z-50 bg-transparent'>
      <nav className='hidden md:flex'>
        {navList.map(item => (
          <a 
            key={item.id} 
            href="#" 
            className="ml-8 text-lg font-extrabold border-1 border-blue-500 text-white rounded-full hover:bg-blue-500 hover:text-black transition hover:shadow-[0_0_15px_theme('colors.blue.500')]"
            onClick={(e) => {
              e.preventDefault();
              onLinkClick(item.data);
            }}
          >
            {item.data}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
