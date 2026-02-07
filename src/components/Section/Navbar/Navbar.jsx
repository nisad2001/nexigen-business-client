import React from 'react';
import { NavLink } from 'react-router';
import Header from '../../../components/Section/Header/Header';
import Banner from '../../../components/Section/Banner/Banner';
import Brands from './Brands/Brands';

const Navbar = () => {

  const links = (
    <>
      <li><NavLink to="/" className="hover:text-[#D37302]">Home</NavLink></li>
      <li><NavLink to="/" className="hover:text-[#D37302]">Services</NavLink></li>
      <li><NavLink to="/" className="hover:text-[#D37302]">Pages</NavLink></li>
      <li><NavLink to="/" className="hover:text-[#D37302]">Products</NavLink></li>
      <li><NavLink to="/" className="hover:text-[#D37302]">Blog</NavLink></li>
      <li><NavLink to="/" className="hover:text-[#D37302]">Contact</NavLink></li>
    </>
  );

  return (
    <div className="bg-[#100D2C] overflow-x-hidden">

      <Header />

      {/* NAVBAR */}
      <div className="w-full max-w-[1169px] mx-auto px-4">

        <div className="flex items-center justify-between py-5">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-10">

            {/* Mobile Menu */}
            <div className="dropdown lg:hidden">
              <label tabIndex={0} className="btn btn-ghost text-[#A6A6A8]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow text-[#A6A6A8] rounded-box w-52 bg-[#100D2C] z-50"
              >
                {links}
              </ul>
            </div>

            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                className="w-[26px] h-[26px]"
                src="/assets/images/navlogo.png"
                alt="Logo"
              />
              <span className="text-[#EFECFF] font-semibold">
                Nexigen
              </span>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex menu menu-horizontal gap-[19px] text-[#A6A6A8]">
              {links}
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* Search Icon */}
            <img
              className="hidden md:block w-[24px] h-[24px]"
              src="/assets/images/nav-search-img.png"
              alt="Search"
            />

            {/* Button */}
            <a
              href="#"
              className="btn bg-[#D37302] text-white h-[56px] md:text-base px-4 md:px-7 py-2 md:py-5 whitespace-nowrap"
            >
              Make Appointment
            </a>
          </div>

        </div>
      </div>

      <Banner />
      <Brands />

    </div>
  );
};

export default Navbar;
