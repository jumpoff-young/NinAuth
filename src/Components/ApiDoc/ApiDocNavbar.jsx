import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo/ninauth-logo.png';
import SearchIcon from '../../assets/images/ApiDoc/SearchIcon.png';
import ApiDocMobileSideNav from './ApiDocMobileSideNav'; // Import the mobile sidebar component

const ApiDocNavbar = () => {
    return (
        <div className="w-full bg-[#FBFCF5]">
            <div className="flex flex-col gap-0">
                {/* Top Bar */}
                <div className="w-full bg-[#083C2F] m-auto py-[13.5px]">
                    <p className="text-white text-center font-montreal font-medium leading-[21px] text-[15px]">
                        Lorem ipsum dolor sit amet consectetur. Cras vestibulum elementum tincidunt orci platea sit ac
                        dui nunc.
                    </p>
                </div>

                {/* Navbar */}
                <div className="flex bg-[#FBFCF5] justify-between w-[90%] lg:w-[1212px] m-auto py-[12px] items-center">
                    {/* Logo or Mobile SideNav */}
                    <div className="relative flex items-center">
                        <div className="lg:block hidden">
                            {/* Logo visible on larger screens */}
                            <NavLink to="/Homepage">
                                <img src={logo} alt="logo" className="w-[140px] h-auto" />
                            </NavLink>
                        </div>
                        <div className="lg:hidden absolute">
                            {/* Mobile Sidebar visible only on smaller screens */}
                            <ApiDocMobileSideNav />
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search documentation"
                            className="w-[250px] sm:w-[412px] px-12 py-[10px] text-blackCustom bg-[#F9F5EB] rounded-[4px] placeholder:text-blackCustom focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="absolute left-3 top-2.5 text-gray-400">
                            <img src={SearchIcon} className="w-5 h-5" alt="Search Icon" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApiDocNavbar;