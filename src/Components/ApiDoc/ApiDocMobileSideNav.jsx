import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
import { HiMenuAlt3, HiX } from 'react-icons/hi'; 
import ApiDocBody from './ApiDocBody';// Hamburger and close icons

const ApiDocMobileSideNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling menu

  // Menu items and corresponding routes
  const items = [
    { name: 'Introduction', route: '/introduction' },
    { name: 'App Integrations', route: '/app-integrations' },
    { name: 'Environment', route: '/environment' },
    { name: 'Resources', route: '/resources' },
    { name: 'Testing', route: '/testing' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="lg:hidden"> {/* Ensure the entire sidebar logic is hidden on larger screens */}
      {/* Hamburger Icon */}
      <div className="z-50">
        {!isMenuOpen ? (
          <HiMenuAlt3 className="text-3xl cursor-pointer" onClick={toggleMenu} />
        ) : (
          <HiX className="text-3xl cursor-pointer" onClick={toggleMenu} />
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed left-0 h-full bg-white z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } w-[300px] border-r border-[#E1E1D8]`}
      >
        <div className="w-full flex flex-col gap-[20px] p-[16px] pb-[112px]">
          {items.map(({ name, route }) => (
            <NavLink
              key={name}
              to={route} // Use NavLink's `to` prop for navigation
              className={({ isActive }) =>
                `w-full px-3 py-[6px] rounded-[8px] cursor-pointer ${
                  isActive ? 'bg-[#F9F5EB] text-[#111111]' : 'text-blackCustom'
                }`
              }
              onClick={toggleMenu} // Close menu after selecting
            >
              {name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApiDocMobileSideNav;