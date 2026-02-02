import React from 'react';

const RealWorldExperience = () => {
  return (
    <div className="bg-[#FEF5E4]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        
        {/* Card 1 */}
        <div className="card mt-[40px] mb-[40px] md:my-[85px] ml-0 lg:ml-[185px] w-full sm:w-[315px] h-[370px] py-[46px] px-[30px]">
          <div className="card-body">
            <img
              className="w-14 h-14 pb-6"
              src="/assets/images/rwimg1 - Copy.png"
              alt="Wealth Management"
            />
            <h3 className="card-title font-bold text-[#0D083A] pb-4">
              Wealth Management
            </h3>
            <p className="font-normal text-[#7A798B]">
              The goal of wealth management is to help clients grow and protect their wealth over the long term, while also providing them with financial peace of mind.
            </p>
            <div className="card-actions pt-6">
              <button className="text-[#D37302] font-semibold">Read More</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card mt-[40px] mb-[40px] md:my-[85px] w-full sm:w-[315px] h-[370px] py-[46px] px-[30px]">
          <div className="card-body">
            <img
              className="w-14 h-14 pb-6"
              src="/assets/images/rwimg2.png"
              alt="Investment Planning"
            />
            <h3 className="card-title font-bold text-[#0D083A] pb-4">
              Audit Marketing
            </h3>
            <p className="font-normal text-[#7A798B]">
              The goal of wealth management is to help clients grow and protect their wealth over the long term, while also providing them with financial peace of mind.
            </p>
            <div className="card-actions pt-6">
              <button className="text-[#D37302] font-semibold">Read More</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card mt-[40px] mb-[40px] md:my-[85px] mr-0 lg:mr-[185px] w-full sm:w-[315px] h-[370px] py-[46px] px-[30px]">
          <div className="card-body">
            <img
              className="w-14 h-14 pb-6"
              src="/assets/images/rwimg3.png"
              alt="Retirement Solutions"
            />
            <h3 className="card-title font-bold text-[#0D083A] pb-4">
              Finance Consulting
            </h3>
            <p className="font-normal text-[#7A798B]">
              The goal of wealth management is to help clients grow and protect their wealth over the long term, while also providing them with financial peace of mind.
            </p>
            <div className="card-actions pt-6">
              <button className="text-[#D37302] font-semibold">Read More</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RealWorldExperience;
