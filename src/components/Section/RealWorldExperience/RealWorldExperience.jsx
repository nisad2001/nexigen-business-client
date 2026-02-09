import React from 'react';

const RealWorldExperience = () => {
  return (
    <div className="bg-[#FEF5E4]">
      <div className="max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[62px] py-[40px] md:py-[85px] px-4">

        {/* Card 1 */}
        <div className="card w-[315px] h-[370px] py-[46px] px-[30px] bg-transparent hover:bg-white transition-all duration-300 cursor-pointer">
          <div className="card-body p-0">
            <img className="w-14 h-14 pb-6" src="/assets/images/rwimg1 - Copy.png" alt="" />
            <h3 className="font-bold text-[#0D083A] pb-4">Wealth Management</h3>
            <p className="text-[#7A798B]">
              The goal of wealth management is to help clients grow and protect their wealth over the long term.
            </p>
            <div className="pt-6">
              <button className="text-[#D37302] font-semibold">Read More</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card w-[315px] h-[370px] py-[46px] px-[30px] bg-transparent hover:bg-white transition-all duration-300 cursor-pointer">
          <div className="card-body p-0">
            <img className="w-14 h-14 pb-6" src="/assets/images/rwimg2.png" alt="" />
            <h3 className="font-bold text-[#0D083A] pb-4">Audit Marketing</h3>
            <p className="text-[#7A798B]">
              The goal of wealth management is to help clients grow and protect their wealth over the long term.
            </p>
            <div className="pt-6">
              <button className="text-[#D37302] font-semibold">Read More</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card w-[315px] h-[370px] py-[46px] px-[30px] bg-transparent hover:bg-white transition-all duration-300 cursor-pointer">
          <div className="card-body p-0">
            <img className="w-14 h-14 pb-6" src="/assets/images/rwimg3.png" alt="" />
            <h3 className="font-bold text-[#0D083A] pb-4">Finance Consulting</h3>
            <p className="text-[#7A798B]">
              The goal of wealth management is to help clients grow and protect their wealth over the long term.
            </p>
            <div className="pt-6">
              <button className="text-[#D37302] font-semibold">Read More</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RealWorldExperience;
