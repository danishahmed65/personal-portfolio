import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  
  return (
    <header className='fixed top-0 left-0 right-0 z-50 py-4 bg-transparent backdrop-blur-sm'>
      <div className="container mx-auto">
        {/* There was Link with Img But i unable to make my svg so used h1 as Logo */}
        <div className='flex justify-between items-center'>
          <h1 className='text-white text-xl font-bold'>
            <span className='text-blue-500'>#D</span>ANISH~
          </h1>
          <motion.button 
            href="https://danish-old-portfolio.netlify.app/#header" 
            target='blank' 
            className='hidden sm:block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-full transition-all duration-300 hover:shadow-xl shadow-md text-sm'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open('https://danish-old-portfolio.netlify.app/#header', '_blank');
            }}
          >
            See My First Portfolio!
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;

