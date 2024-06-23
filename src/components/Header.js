import React from 'react';

const Header = () => {
  
  return (
    <header className='py-8'>
      <div className="container mx-auto">
        {/* There was Link with Img But i unable to make my svg so used h1 as Logo */}
        <div className='flex justify-between'>
          <h1 className='text-white text-2xl font-bold'>
            <span className='text-blue-500'>#D</span>ANISH~
          </h1>
          <a href="https://danish-old-portfolio.netlify.app/#header" target='blank' className='hidden sm:block btn btn-sm text-lg font-bold text-white border-2 border-transparent bg-transparent hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out'>
          See My First Portfolio!
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

