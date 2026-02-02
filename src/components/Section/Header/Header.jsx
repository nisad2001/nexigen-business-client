import React from 'react';
import { CiLinkedin, CiTwitter } from 'react-icons/ci';
import { FaFacebook } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="bg-[#131415] text-white">
      <div className="max-w-[1169px] mx-auto h-[48px] flex flex-col md:flex-row md:items-center md:justify-between m-2 gap-2">

        {/* Left side */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <img className="h-[14px] w-[14px]" src="/assets/images/navlocation.png" alt="" />
            <p>3972 Westheimer Rd, Canada</p>
          </div>

          {/* Slash / divider (hide on mobile) */}
          <div className="hidden md:block w-[1px] h-6 bg-white rotate-[-38deg] mx-3"></div>

          <div className="flex items-center gap-2">
            <img className="h-[14px] w-[14px]" src="/assets/images/navtimer.png" alt="" />
            <p>Mon - Fri : 09:30 am - 06:30 pm</p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <img className="h-[14px] w-[14px]" src="/assets/images/navmessage.png" alt="" />
            <p className="break-all">nexigen@gmail.com</p>
          </div>

          <FaFacebook className="w-[14px] h-[14px]" />
          <CiTwitter className="w-[14px] h-[14px]" />
          <CiLinkedin className="w-[14px] h-[14px]" />
        </div>

      </div>
    </div>
  );
};

export default Header;
