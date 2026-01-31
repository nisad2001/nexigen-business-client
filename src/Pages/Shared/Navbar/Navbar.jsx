import React from 'react';
import heroImg from '../../../assets/hero-right-img.png'
import playbtn from '../../../assets/play-btn.png'
import navImg from '../../../assets/navImg.png'
import navSearchImg from '../../../assets/nav-search-img.png'
import { NavLink } from 'react-router';




const Navbar = () => {
   
    const links = <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/'>Services</NavLink></li>
      
    </>

    return (

        <div className="bg-[#100D2C]">
               <div className="navbar  shadow-sm">
              <div className="navbar-start">
                <div className="dropdown text-[#A6A6A8]">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content text-[#A6A6A8] rounded-box z-1 mt-3 w-52 p-2 shadow">
                    { links}
                  </ul>
                </div>

                <div className='flex'>
                  <img className='mr-2' src={navImg} alt="" />
                  <a className=" text-[#EFECFF] text-xl">Nexigen</a>
                </div>

              </div>
              <div className="navbar-center text-[#A6A6A8] hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {links}
                </ul>
              </div>
              <div className="navbar-end">
                 <img className='mr-4' src={navSearchImg} alt="" />
                <a className="btn bg-[#D37302] text-[#FFFFFF]">Make Appointment</a>
              </div>
            </div>
              
            <div className=" hero pt-20">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src={heroImg}
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <p className='text-[#FFFFFF] inline-block p-2 my-4 bg-[#3C345F]'>Welcome to NexiGen </p>
                  <h1 className="text-5xl text-[#EFECFF] Line height 120% font-semibold">Solutions for <br /> every organization</h1>
                  <p className="py-6 font-Regular text-[#FFFFFF]">
                   If your company is facing financial challenges, struggling with operations, or looking to expand, we can help identify the root cause of the problem and develop a strategic plan to address it.
                  </p>
                   <div className='flex'>
                     <button className="btn rounded-2xl mr-3 bg-[#6140FF]">Discover More</button>
                      <div className='flex'>
                        <img src={playbtn} alt="" />
                      <button className='text-[#A6A6A8] '>How we work</button>
                      </div>
                   </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Navbar;