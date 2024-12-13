import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Hamburger and close icons


const ApiDocMobileSideNav = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling menu
  const items = ['Introduction', 'App Integrations', 'Environment', 'Resources', 'Testing'];

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
          {items.map((item) => (
            <div
              key={item}
              className={`w-full px-3 py-[6px] rounded-[8px] cursor-pointer ${
                activeSection === item ? 'bg-[#F9F5EB] text-[#111111]' : 'text-blackCustom'
              }`}
              onClick={() => {
                setActiveSection(item);
                toggleMenu(); // Close menu after selecting
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApiDocMobileSideNav;