import React from 'react';
import { NavLink } from 'react-router';
import Brands from './Brands/Brands';
import Header from '../../../components/Section/Header/Header';
import Banner from '../../../components/Section/Banner/Banner';





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
        <Header></Header>
        {/* NAVBAR */}
        <div className="navbar box-border max-w-[1169px] w-full mx-auto lg:px-0 shadow-sm">
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
            
              <img className="mr-2 w-[26px] h-[26px]" src="/public/assets/images/navImg.png" alt="" />
              <a className="text-[#EFECFF] text- lg:text-xl mr-16">Nexigen</a>
            </div>
            <div className="navbar-center text-[#A6A6A8] hidden lg:flex">
            <ul className="menu font-medium gap-[19px] menu-horizontal mr-4">
              {links}
            </ul>
          </div>
          </div>

          

          <div className="navbar-end hidden md:flex">
            <img className="w-[24px] h-[24px] mr-4" src="/public/assets/images/nav-search-img.png" alt="" />
            <a className="btn py-5 px-7 w-[203px] h-[56px]  bg-[#D37302] text-[#FFFFFF]">
              Make Appointment
            </a>
          </div>
        </div>
        <Banner></Banner>
        <Brands />
      </div>

    );
};

export default Navbar;