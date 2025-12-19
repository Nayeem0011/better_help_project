"use client";

import Image from 'next/image';
import nav_logo from './image/nav_logo.svg';
import { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react"; // Hamburger + Close icon

const menuItems = ["Home", "Business", "About", "Advice", "EAP", "FAQ", "Reviews"];

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // first item active
  const [active, setActive] = useState(0); // first item active
  const [open, setOpen] = useState(false);

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

  return (
    <div>
      <div className="relative inset-0 z-60 flex justify-center w-full">
        <div className={`fixed top-0 left-0 w-full flex justify-center z-50 transition-all duration-800
        ${showNav ? "translate-y-0" : "-translate-y-[120px]"}`}>
          <nav className="flex items-center justify-between w-full max-w-[90%] absolute top-8">

            {/* Logo */}
            <Image src={nav_logo} className='w-[130px] md:w-[150px] lg:w-[180px] xl:w-[214px]' alt="loading ..." />

            {/* Desktop Menu */}
            <ul className="text-[#B0ADBE] gap-0 lg:gap-2.5 xl:gap-3.5 hidden md:flex items-center transition-all duration-300">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`font-normal py-2 px-3 lg:py-2.5 lg:px-4 xl:py-2.5 xl:px-5 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[120%] cursor-pointer rounded-full transition-all duration-300
                     ${activeIndex === index
                      ? "bg-[#15081459] text-white opacity-100"
                      : "text-white opacity-60"}
                       hover:bg-[#15081459] hover:text-white hover:opacity-100`}>
                  {item}
                </li>
              ))}
            </ul>

            {/* Desktop Right Button */}
            <div className="hidden md:block">
              <div className='border border-white rounded-[182px] py-2 px-5 md:py-2 md:px-5 lg:py-3.5 lg:px-7 xl:py-4 xl:px-10 cursor-pointer'>
                <button className='text-white font-normal text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] leading-[120%] tracking-[0%] cursor-pointer'>
                  Log in
                </button>
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden block cursor-pointer"
              onClick={() => setOpen(true)}>
              <Menu size={22} className="text-white" />
            </button>
          </nav>
        </div>

        <div
          className={`fixed top-0 right-0 h-full w-[260px] bg-[#0F0F0F] shadow-xl z-50 transition-transform duration-300 
        ${open ? "translate-x-0" : "translate-x-full"}`}>

          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button onClick={() => setOpen(false)}>
              <X size={26} className="text-white cursor-pointer" />
            </button>
          </div>

          {/* Slide Menu Items */}
          <ul className="flex flex-col gap-4 px-6 mt-4 text-white text-[16px]">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setActive(index);
                  setOpen(false);
                }}
                className={`font-normal cursor-pointer py-2 rounded-lg transition-all duration-300 
                ${active === index ? "bg-[#15081459] px-3" : ""}
                hover:bg-[#15081459] px-3`}>
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile Bottom Button */}
          <div className="px-6 mt-10 cursor-pointer">
            <button className="w-full border border-white text-white py-3 rounded-full cursor-pointer">
              Log in
            </button>
          </div>
        </div>

        {/* Background Blur when menu open */}
        {open && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default NavBar;

