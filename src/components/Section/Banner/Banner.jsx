import React from 'react';

const Banner = () => {
  return (
    <div className="hero  max-w-[1169px] w-full mx-auto  lg:px-0">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse gap-10 lg:gap-[104px]">

        {/* Image */}
        <img
          src="/assets/images/hero.png"
          alt="Hero"
          className="w-full sm:max-w-sm md:max-w-md lg:max-w-[472px] shadow-2xl object-contain"
        />

        {/* Text content */}
        <div className="flex flex-col lg:w-[579px] lg:h-[401px]">
          
          {/* Badge / Small text */}
          <p className="text-[#FFFFFF] font-normal w-[218px] py-2 px-5 mb-4 bg-[#3C345F] rounded sm:mt-0 text-center sm:text-left mx-auto sm:mx-0">
          Welcome to Nexigen
        </p>


          {/* Heading */}
          <h1 className="font-semibold text-[28px] md:text-4xl lg:text-[64px] text-[#EFECFF] leading-tight mb-6 md:mb-0 max-w-full lg:w-[579px] text-center sm:text-left">
          Solutions for <br /> every organization
        </h1>


          {/* Description */}
          <p className="  md:py-6 font-normal text-sm md:text-base text-[#FFFFFF] max-w-full lg:w-[564px] mb-6 text-center sm:text-left">
            If your company is facing financial challenges, struggling with operations,
            or looking to expand, we can help identify the root cause of the problem and
            develop a strategic plan to address it.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4  max-w-full lg:w-[357px]">
            
            <button className="btn py-4 px-9 font-semibold text-[#FFFFFF] bg-[#6140FF] w-full sm:w-auto h-[54px]">
              Discover More
            </button>

            <div className="flex items-center w-full sm:w-[159px] h-12 gap-2 justify-center sm:justify-start">
              <img
                src="/assets/images/play-btn.png"
                alt="Play Button"
                className="w-6 h-6"
              />
              <button className="text-[#A6A6A8] font-medium whitespace-nowrap">
                How we work
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
