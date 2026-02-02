import React from 'react';

const Banner = () => {
    return (
         <div className="hero pt-16  max-w-292 w-full mx-auto px-4 lg:px-0">
    <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-60">
      
      <img
        src="/public/assets/images/hero-right-img.png"
         className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
      />

      <div>
        <p className="text-[#FFFFFF] w-fit font-normal py-2 px-5 mb-4 bg-[#3C345F]">
          Welcome to NexiGen
        </p>

        <h1 className="font-semibold md:text-4xl  text-[#EFECFF]  mb-4 leading-tight">
          Solutions for <br /> every organization
        </h1>

        <p className="pt-4 md:py-6 font-normal text-sm md:text-base text-[#FFFFFF] max-w-xl">
          If your company is facing financial challenges, struggling with operations,
          or looking to expand, we can help identify the root cause of the problem and
          develop a strategic plan to address it.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
          <button className="btn py-4 px-9 font-semibold text-[#FFFFFF] w-[198px] h-[54px] bg-[#6140FF]">
            Discover More
          </button>

          <div className="flex items-center w-[159px] h-12 gap-2">
            <img src="/public/assets/images/play-btn.png" alt="" />
            <button className="text-[#A6A6A8] font-medium">How we work</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Banner;