import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo/ninauth-logo.png';

const Navbar = () => {
  return (
    <>
      <div className='flex flex-col gap-0'>
        <div className='w-full bg-[#083C2F] m-auto py-[13.5px]'>
          <p className='text-white text-center font-montreal font-medium leading-[21px] text-[15px]'>Lorem ipsum dolor sit amet consectetur.
            Cras vestibulum elementum tincidunt orci platea sit ac dui nunc.
          </p>
        </div>
        <div className='flex justify-between px-[150px] py-[12px] items-center'>
          <div><img src={logo} alt="logo" className='w-[140px] h-[55px]' /></div>
          <div>
            <ul className='flex gap-8 text-base text-blackCustom leading-[22.4px] font-normal'>
            <li><NavLink to="/Individuals">Individuals</NavLink></li>
              <li>Businesses</li>
              <li>About NINAuth</li>
              <li>Safety Education</li>
              <li>Developers</li>
            </ul>
          </div>
          <button href="#" className='py-[11.5px] px-[25.5px] border border-primaryColor
           text-primaryColor font-medium text-[15px] leading-[21px] rounded-[4px]'>
            Explore online services
            </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
