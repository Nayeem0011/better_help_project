"use client";

import Image from 'next/image';
import nav_logo from './image/nav_logo.svg';
// import { useState } from 'react';

const NavBar = () => {
  // const [active, setActive] = useState("trading");

  const menuItems = ["Home", "Business", "About", "Advice", "EAP", "FAQ", "Reviews"];

  return (
    <div className="relative inset-0 z-10 pt-6 px-4 md:px-8">
      <nav className="h-[54px] gap-6 md:gap-[84px] flex flex-col md:flex-row items-center justify-between md:justify-center">
      
        {/* Logo */}
        <div>
          <Image
            src={nav_logo}
            alt="logo"
            width={214}
            height={30}
          />
        </div>

        {/* Menu Items */}
        <div>
          <ul className="text-[#878584] w-full md:w-[697px] h-11 flex items-center justify-between rounded-[100px] px-6 md:px-10 py-1.5 gap-x-4 md:gap-x-0 transition-all duration-300">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="font-medium text-sm md:text-[16px] leading-[140%] tracking-[0%] cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Auth Buttons */}

      </nav>
    </div>
  );
};

export default NavBar;

