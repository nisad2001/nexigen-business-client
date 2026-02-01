import React from 'react';
import heroImg from '../../../assets/hero-right-img.png'
import playbtn from '../../../assets/play-btn.png'
import navImg from '../../../assets/navImg.png'
import navSearchImg from '../../../assets/nav-search-img.png'
import navLocation from '../../../assets/navlocation.png';
import navTimer from '../../../assets/navTimer.png';
import navMessage from '../../../assets/navMessage.png';
import { NavLink } from 'react-router';
import Brands from './Brands/Brands';
import { FaFacebook, FaSlash } from 'react-icons/fa';
import { CiLinkedin, CiTwitter } from 'react-icons/ci';





const Navbar = () => {
   
  const links = <>
  <li><NavLink to='/' className="hover:text-[#D37302] hover:underline">Home</NavLink></li>
  <li><NavLink to='/' className="hover:text-[#D37302] hover:underline">Services</NavLink></li>
  <li><NavLink to='/' className="hover:text-[#D37302] hover:underline">Pages</NavLink></li>
  <li><NavLink to='/' className="hover:text-[#D37302] hover:underline">Products</NavLink></li>
  <li><NavLink to='/' className="hover:text-[#D37302] hover:underline">Blog</NavLink></li>
  <li><NavLink to='/' className="hover:text-[#D37302] hover:underline">Contact</NavLink></li>
</>



    return (
 
  <div className="bg-[#100D2C]">
    {/* top Navbar */}
     <div className='text-white py-4 px-34 flex justify-between  max-w-292 w-full mx-auto lg:px-0 shadow-sm'>
        <div className='flex items-center '>
           <img className='w-2.5 h-2.5 mr-1 ' src={navLocation} alt="" />
            <p className='font-normal mr-6 '>3972 Westheimer Rd, Canada</p>
            <span className='w-10 mr-1'><FaSlash /></span>
           <img className='w-2.5 h-2.5 text-center mr-1' src={navTimer} alt="" />
           <p>Mon- Fri : 09:30 am - 06:30 pm</p>
        </div>

         <div className='text-white flex items-center  lg:px-0 shadow-sm'>
           <img className='w-2.5 h-2.5 text-center mr-1' src={navMessage} alt="" />
           <p className='mr-18'>nexigen@gmail.com</p>
           <hr className="w-full h-[1px] bg-gray-300 border-0" />
           <span className='w-2.5 p-0.5 mr-5'><FaFacebook /></span>
           <span className='w-2.5 p-0.5 mr-5'><CiTwitter /></span>
           <span className='w-2.5 p-0.5'><CiLinkedin /></span>
         </div>
     </div>
  {/* NAVBAR */}
  <div className="navbar box-border max-w-292 w-full mx-auto lg:px-0 shadow-sm">
    <div className="navbar-start">
      <div className="dropdown text-[#A6A6A8]">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>

        <ul
          tabIndex="-1"
          className="menu menu-sm dropdown-content text-[#A6A6A8] rounded-box z-1 mt-3 w-52 p-2 shadow bg-[#100D2C]">
          {links}
        </ul>
      </div>
       
       
      <div className="flex items-center">
      
        <img className="mr-2 w-8" src={navImg} alt="" />
        <a className="text-[#EFECFF] text-lg lg:text-xl mr-16">Nexigen</a>
      </div>
       <div className="navbar-center text-[#A6A6A8] hidden lg:flex">
      <ul className="menu menu-horizontal mr-4">
        {links}
      </ul>
    </div>
    </div>

    

    <div className="navbar-end hidden md:flex">
      <img className="mr-4" src={navSearchImg} alt="" />
      <a className="btn py-3 px-6 bg-[#D37302] text-[#FFFFFF]">
        Make Appointment
      </a>
    </div>
  </div>

  {/* HERO */}
  <div className="hero pt-16  max-w-292 w-full mx-auto px-4 lg:px-0">
    <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10">
      
      <img
        src={heroImg}
         className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
      />

      <div>
        <p className="text-[#FFFFFF] w-fit font-normal py-2 px-5 mb-4 bg-[#3C345F]">
          Welcome to NexiGen
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#EFECFF] font-semibold mb-4 leading-tight">
          Solutions for <br /> every organization
        </h1>

        <p className="py-4 md:py-6 font-normal text-sm md:text-base text-[#FFFFFF] max-w-xl">
          If your company is facing financial challenges, struggling with operations,
          or looking to expand, we can help identify the root cause of the problem and
          develop a strategic plan to address it.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
          <button className="btn rounded-[8px] bg-[#6140FF]">
            Discover More
          </button>

          <div className="flex items-center gap-2">
            <img src={playbtn} alt="" />
            <button className="text-[#A6A6A8]">How we work</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Brands />
</div>

    );
};

export default Navbar;