import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo/ninauth-logo.png';
import { HiMenuAlt3, HiX } from 'react-icons/hi';  // For the hamburger icon and close icon

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <>
      <div className='flex flex-col gap-0'>
        <div className='w-full bg-[#083C2F] m-auto py-[13.5px]'>
          <p className='text-white text-center font-montreal font-medium leading-[21px] text-[15px]'>
            Lorem ipsum dolor sit amet consectetur. Cras vestibulum elementum tincidunt orci platea sit ac dui nunc.
          </p>
        </div>
        <div className='flex justify-between px-[20px] py-[12px] items-center bg-[#FBFCF5]'>
          {/* Logo */}
          <NavLink to="/Homepage">
            <div><img src={logo} alt="logo" className='w-[140px] h-[55px]' /></div>
          </NavLink>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden" onClick={handleMenuToggle}>
            <HiMenuAlt3 className="text-3xl text-blackCustom" />
          </div>

          {/* Navbar Links (Desktop and Tablet) */}
          <div className={`lg:flex flex-grow items-center gap-8 text-base text-blackCustom leading-[22.4px] font-normal ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <ul className={`flex flex-col lg:flex-row gap-6 transition-all duration-500 ease-in-out transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
              <li><NavLink to="/Individuals">Individuals</NavLink></li>
              <li><NavLink to="/Businesses">Businesses</NavLink></li>
              <li>About NINAuth</li>
              <li><NavLink to="/SafetyEducation">Safety Education</NavLink></li>
              <li><NavLink to="/Developers">Developers</NavLink></li>
            </ul>
          </div>

          {/* Explore Button (Desktop and Tablet) */}
          <NavLink to="/OnlineService">
            <button className='py-[11.5px] px-[25.5px] border border-primaryColor text-primaryColor font-medium text-[15px] leading-[21px] rounded-[4px]'>
              Explore online services
            </button>
          </NavLink>

          {/* Close Menu for Mobile */}
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`} onClick={handleMenuToggle}>
            <HiX className="text-3xl text-blackCustom" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;