import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo/ninauth-logo.png';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // For the hamburger icon and close icon

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <div className="w-screen flex flex-col gap-0 items-center m-auto bg-[#FBFCF5]">
      {/* Announcement Bar */}
      <div className="w-full bg-[#083C2F] py-[13.5px]">
        <p className="text-white text-center font-montreal font-medium leading-[21px] text-[15px]">
          Lorem ipsum dolor sit amet consectetur. Cras vestibulum elementum tincidunt orci platea sit ac dui nunc.
        </p>
      </div>

      {/* Navbar */}
      <div className="flex w-full max-w-[84.17%]  justify-between  py-[12px] items-start lg:items-center md:items-center bg-[#FBFCF5]">
        {/* Logo */}
        <NavLink to="/Homepage">
          <img src={logo} alt="logo" className="w-[140px] h-auto" />
        </NavLink>
        <div className="flex flex-col gap-8 items-end">
          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden" onClick={handleMenuToggle}>
            {!isMenuOpen ? (
              <HiMenuAlt3 className="text-3xl text-blackCustom" />
            ) : (
              <HiX className="text-3xl text-blackCustom" />
            )}
          </div>

          {/* Navbar Links */}
          <ul
            className={`flex flex-col lg:flex lg:flex-row gap-6 lg:gap-8 items-end lg:items-center md:items-center text-base text-blackCustom font-normal transition-all duration-500 ease-in-out ${isMenuOpen ? 'block' : 'hidden'
              } lg:block`}
          >

            <li><NavLink to="/Individuals">Individuals</NavLink></li>
            <li><NavLink to="/Businesses">Businesses</NavLink></li>
            <li><NavLink to="/About">About NINAuth</NavLink></li>
            <li> <NavLink to="/SafetyEducation">Safety Education</NavLink></li>
            <li><NavLink to="/Developers">Developers</NavLink></li>
            <li><NavLink to="/OnlineService">
              <button className="py-[11.5px] px-[25.5px] border border-primaryColor text-primaryColor font-medium text-[15px] leading-[21px] rounded-[4px]">
                Explore online services
              </button>
            </NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;