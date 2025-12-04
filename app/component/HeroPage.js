'use client';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import GroupLine from "../svg/GroupLine";

// import Image from 'next/image';
// import pikaso_enhance from './image/pikaso_enhance.svg';

const HeroPage = () => {
  return (
    <section className="relative inset-0 z-10 w-full">
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(50%_56.08%_at_50%_43.92%,rgba(0,0,0,0)_0%,#113D3C_100%)]"></div>
      <GroupLine />
    </section>

  );
};

export default HeroPage;