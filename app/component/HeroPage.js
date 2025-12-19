'use client';

// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import GroupLine from "../svg/GroupLine";

import Image from 'next/image';
import heroimage01 from './image/heroimage01.png';
import videoicon from './image/videoicon.png';

const HeroPage = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background SVG */}
      <div className="absolute inset-0 z-0">
        <GroupLine />
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(50%_56.08%_at_50%_43.92%,rgba(0,0,0,0)_0%,#113D3C_100%)]"></div>

      {/* Content */}
      <div className="relative z-20 pt-[194px] w-full max-w-[90%] mx-auto">
        <div className="flex ">
          <div className="flex flex-col gap-10">
            <h1 className="text-[#FFFFFF] font-bold text-[96px] leading-[120%] tracking-normal">
              You <span className="bg-[#35b13c] px-2 pb-1 rounded-2xl inline-block">deserve</span> <br /> to be happy
            </h1>
            <p className="text-[#FFFFFF] opacity-70 font-excon font-normal text-[32px] leading-[150%] tracking-normal">
              What type of therapy are you <br /> looking for?
            </p>

            <button className="flex items-center">
              {/* LEFT WHITE PILL */}
              <div className="flex items-center justify-center h-[62px] w-[202px] bg-white rounded-full">
                <span className="text-[#113D3C] text-lg font-medium">
                  Find Specialist
                </span>
              </div>

              {/* RIGHT CIRCLE */}
              <div
                className="-ml-7 flex items-center justify-center w-[62px] h-[62px] rounded-full border-[6px] border-[#113D3C] bg-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 19L19 5M19 5H9M19 5V15"
                    stroke="#113D3C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>

            <div className="flex gap-8">
              <Image src={heroimage01} className='w-[199px] h-[198px] rounded-2xl' alt="loading ..." />
              <div className='flex flex-col items-start gap-6'>
                <p className="text-white font-normal text-[24px] leading-[150%] tracking-normal">
                  You can message your therapist <br className='hidden lg:block' /> at anytime, from anywhere. You <br className='hidden lg:block' /> also get to schedule live sessions.
                </p>
                <button className="flex items-center gap-4 text-white font-normal text-[18px] leading-[150%] tracking-normal">
                  <Image src={videoicon} className="w-[50px] h-[50px] rounded-2xl" alt="loading ..." />
                  <span>Play this episode</span>
                </button>
              </div>
            </div>
          </div>

          <div>
            ghsfh
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroPage;