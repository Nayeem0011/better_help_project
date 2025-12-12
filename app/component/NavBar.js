"use client";

import Image from 'next/image';
import nav_logo from './image/nav_logo.svg';
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // first item active
  // Scroll state
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll Detect Function
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // scrolling down → navbar hide
      setShowNav(false);
    } else {
      // scrolling up → navbar show
      setShowNav(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const menuItems = ["Home", "Business", "About", "Advice", "EAP", "FAQ", "Reviews"];

  return (
    <div className="relative inset-0 z-10 pt-7 px-28">
      <div className={`top-0 left-0 transition-all duration-800
        ${showNav ? "translate-y-0" : "-translate-y-[150px]"}`}>
        <nav className="h-[62px] gap-6 md:gap-[100px] flex items-center justify-between">

          {/* Logo */}
          <Image src={nav_logo} alt="logo" className='w-[214px] h-[30px]' />

          {/* Desktop Menu */}
          <div>

            <ul className="w-full md:w-[697px] h-11 flex items-center justify-between transition-all duration-300">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`font-normal py-2.5 px-5 text-[20px] leading-[120%] tracking-[0] cursor-pointer rounded-full  transition-all duration-300
        ${activeIndex === index
                      ? "bg-[#15081459] text-white opacity-100"
                      : "text-white opacity-60"
                    }
        hover:bg-[#15081459] hover:text-white hover:opacity-100
      `}>
                  {item}
                </li>
              ))}
            </ul>

          </div>

          {/* Auth Buttons */}
          <div className='border border-white gap-2 rounded-[182px] px-10 py-4 cursor-pointer'>
            <button className='text-white font-normal text-[18px] leading-[120%] tracking-[0%] cursor-pointer'>
              Log in
            </button>
          </div>

        </nav>
      </div>
    </div>
  );
};

export default NavBar;

