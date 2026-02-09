import React from 'react';
import { CiLinkedin, CiTwitter } from 'react-icons/ci';
import { FaFacebook } from 'react-icons/fa';

const HeaderTop = () => {
  return (
    <div className="bg-[#0a0a1e] w-full">
      <div className="max-w-[1169px] mx-auto min-h-[60px] flex flex-col gap-4 py-4 px-4
                      md:flex-row md:items-center md:justify-between md:gap-0
                      text-center md:text-left">

        {/* Left side */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-2 justify-center md:justify-start
                        text-gray-400 md:text-gray-300">
          <div className="flex items-center gap-2 justify-center">
            <img className="h-[14px] w-[14px]" src="/assets/images/navlocation.png" alt="" />
            <p>3972 Westheimer Rd, Canada</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] h-6 bg-white rotate-[-38deg] mx-3"></div>

          <div className="flex items-center gap-2 justify-center">
            <img className="h-[14px] w-[14px]" src="/assets/images/timer.png" alt="" />
            <p>Mon - Fri : 09:30 am - 06:30 pm</p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-row flex-wrap md:flex-row md:items-center gap-4 justify-center md:justify-start text-gray-400 md:text-gray-300">
          <div className="flex items-center   min-w-[155px]">
            <img className="h-[14px] w-[14px] mr-2" src="/assets/images/navmessage.png" alt="" />
            <p className="text-[14px] font-normal mr-[37px]">nexigen@gmail.com</p>
          </div>
            <div className="h-8 gap-[35px] border-l-2 border-gray-400"></div>


          {/* Social Icons in row */}
          <div className="flex items-center gap-3 justify-center">
            <FaFacebook className="w-[18px] h-[18px]" />
            <CiTwitter className="w-[18px] h-[18px]" />
            <CiLinkedin className="w-[18px] h-[18px]" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeaderTop;
