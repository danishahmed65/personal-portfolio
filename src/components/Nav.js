import React from 'react';
//Icons
import {BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase,BsChatSquareText} from 'react-icons/bs';

//Link
import { Link } from 'react-scroll'

const Nav = () => { 
  return (
  <nav className='fixed bottom-4 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto px-4'>
      {/* nav inner */}
      <div className='w-full bg-black/10 backdrop-blur-xl rounded-2xl max-w-[460px] mx-auto 
        px-4 py-2 flex justify-between items-center text-xl text-white/80 border border-white/10 shadow-2xl'>
        <Link 
          to='home' 
          activeClass='active' 
          smooth={true} 
          spy={true} 
          className='cursor-pointer w-[52px] h-[52px] flex items-center 
          justify-center rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-110 group'
        >
          <BiHomeAlt className='group-hover:scale-110 transition-transform duration-300' />
        </Link>
        <Link 
          to='about' 
          activeClass='active' 
          smooth={true} 
          spy={true} 
          className='cursor-pointer w-[52px] h-[52px] flex items-center 
          justify-center rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-110 group'
        >
          <BiUser className='group-hover:scale-110 transition-transform duration-300' />
        </Link>
        <Link 
          to='services' 
          activeClass='active' 
          smooth={true} 
          spy={true} 
          className='cursor-pointer w-[52px] h-[52px] flex items-center 
          justify-center rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-110 group'
        >
          <BsClipboardData className='group-hover:scale-110 transition-transform duration-300' />
        </Link>
        <Link 
          to='work' 
          activeClass='active' 
          smooth={true} 
          spy={true} 
          className='cursor-pointer w-[52px] h-[52px] flex items-center 
          justify-center rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-110 group'
        >
          <BsBriefcase className='group-hover:scale-110 transition-transform duration-300' />
        </Link>
        <Link 
          to='contact' 
          activeClass='active' 
          smooth={true} 
          spy={true} 
          className='cursor-pointer w-[52px] h-[52px] flex items-center 
          justify-center rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-110 group'
        >
          <BsChatSquareText className='group-hover:scale-110 transition-transform duration-300' />
        </Link>
      </div>
    </div>
  </nav>
  )
};

export default Nav;
