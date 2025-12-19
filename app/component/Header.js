'use client';

import HeroPage from './HeroPage';
import NavBar from './NavBar';

const Header = () => {
  return (
    <div className="relative w-full overflow-hidden">

      {/* Background & Gradient (shared for both NavBar + Hero) */}
      <div className="absolute inset-0 bg-[#113D3C]"></div>

      {/* Foreground Content */}
      <div className="relative z-30 h-screen">
        <NavBar />
        <HeroPage />
      </div>

    </div>
  );
};

export default Header;
