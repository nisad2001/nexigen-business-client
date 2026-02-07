import React from 'react';
import { NavLink } from 'react-router';
import Brands from './Brands/Brands';
import Header from '../../../components/Section/Header/Header';
import Banner from '../../../components/Section/Banner/Banner';

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
      <div className="navbar w-full max-w-[1169px] mx-auto px-4 flex flex-wrap items-center justify-between">

        {/* Wrapper for toggle menu icon + logo + button on small devices */}
        <div className="flex items-center justify-between w-full lg:w-auto gap-4">

          {/* START - toggle menu + logo */}
          <div className="navbar-start flex items-center gap-2 justify-start text-base sm:text-lg">
            {/* Mobile menu */}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden text-[#A6A6A8] w-10 flex justify-center">
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

              {/* Toggle menu list */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 mb-6 shadow text-[#A6A6A8] rounded-box w-52 max-w-[90vw] z-50 bg-transparent"
              >
                {links}
              </ul>
            </div>

            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                className="w-[26px] h-[26px] max-w-full"
                src="/assets/images/navlogo.png"
                alt="Logo"
              />
              <span className="text-[#EFECFF] font-semibold">
                Nexigen
              </span>
            </div>
          </div>

          {/* END - Make Appointment Button (and search icon if needed) */}
          <div className="navbar-end flex items-center gap-4 justify-end flex-1 lg:flex-none">
            {/* Search Icon */}
            <img
              className="hidden md:block w-[24px] h-[24px] max-w-full"
              src="/assets/images/nav-search-img.png"
              alt="Search"
            />

            {/* Button */}
            <a
              href="#"
              className="btn bg-[#D37302] text-white text-sm md:text-base px-4 md:px-7 py-2 md:py-5 whitespace-nowrap"
            >
              Make Appointment
            </a>
          </div>

        </div>

        {/* CENTER (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex w-full">
          <ul className="menu menu-horizontal gap-[19px] text-[#A6A6A8] justify-center w-full">
            {links}
          </ul>
        </div>

      </div>

      <Banner />
      <Brands />
    </div>
  );
};

export default Navbar;
