import React from 'react';

const Banner = () => {
  return (
    <div className="hero pt-16 max-w-[1169px] w-full mx-auto px-4 lg:px-0">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse gap-10 lg:gap-[104px]">

        {/* Image */}
        <img
          src="/assets/images/hero.png"
          alt="Hero"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl object-contain"
          style={{ height: 'auto' }}
        />

        {/* Text content */}
        <div className="flex flex-col">
          <p className="text-[#FFFFFF] w-fit font-normal py-2 px-5 mb-4 bg-[#3C345F] rounded mt-4 sm:mt-0">
            Welcome to NexiGen
          </p>

          <h1 className="font-semibold text-3xl md:text-4xl lg:text-[64px] text-[#EFECFF] mb-4 leading-tight max-w-full lg:max-w-[579px]">
            Solutions for every organization
          </h1>

          <p className="pt-4 md:py-6 font-normal text-sm md:text-base text-[#FFFFFF] max-w-full lg:max-w-[564px]">
            If your company is facing financial challenges, struggling with operations,
            or looking to expand, we can help identify the root cause of the problem and
            develop a strategic plan to address it.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6 max-w-full lg:max-w-[357px]">
            <button className="btn py-4 px-9 font-semibold text-[#FFFFFF] bg-[#6140FF] w-full sm:w-auto h-[54px]">
              Discover More
            </button>

            <div className="flex items-center w-full sm:w-[159px] h-12 gap-2 justify-center sm:justify-start">
              <img src="/assets/images/play-btn.png" alt="Play Button" className="w-6 h-6" />
              <button className="text-[#A6A6A8] font-medium whitespace-nowrap">How we work</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
