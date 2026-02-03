import React from 'react';

const HowWeWork = () => {
  return (
    <div>
      <div className='text-center mb-16 md:mb-32 px-4'>
        <p className='font-medium text-[16px] mb-4 uppercase text-[#D37302]'>how we works</p>
        <h2 className='font-semibold mb-8 md:mb-15 text-3xl md:text-5xl text-[#0D083A]'>
          Steps you need to take for a <br /> thriving business
        </h2>
      </div>

      <div className="relative bg-[#FEF5E4] pt-[120px] pb-20 px-4 md:px-0">

        {/* ====== UPDATED FIRST CARD START ====== */}
        <div
          className="bg-white shadow-md rounded-md w-full max-w-md md:w-[456px] h-auto md:h-[164px] mx-auto md:absolute md:top-[-80px] md:right-[500px] z-10 p-6 flex gap-6 items-center"
          style={{ minWidth: '280px' }}
        >
          <div className="w-[56px] h-[61px] flex items-center justify-center bg-[#EFECFF] text-[#D37302] font-bold text-3xl py-4 px-[14px] rounded">
            01
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Gathering Information</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Gathering information can be helpful for companies in marketing and promoting customer growth.
            </p>
          </div>
        </div>
        {/* ====== UPDATED FIRST CARD END ====== */}

        <div className="mt-4 md:mt-2 flex flex-col md:flex-row justify-center gap-6 rounded-md max-w-full md:max-w-[960px] mx-auto">
          {/* card two */}
          <div className="bg-white shadow-md rounded-md w-full max-w-md md:w-[456px] h-auto md:h-[164px] p-6 flex gap-6 items-center">
            <div className="w-[56px] h-[61px] flex items-center justify-center bg-[#EFECFF] text-[#D37302] font-bold text-3xl py-4 px-[14px] rounded">
              02
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Professional Advisor's</h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Collecting information is always helpful for companies looking to market and drive customer growth.
              </p>
            </div>
          </div>

          {/* card three */}
          <div className="bg-white shadow-md rounded-md w-full max-w-md md:w-[456px] h-auto md:h-[164px] p-6 flex gap-6 items-center">
            <div className="w-[56px] h-[61px] flex items-center justify-center bg-[#EFECFF] text-[#D37302] font-bold text-3xl py-4 px-[14px] rounded">
              03
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Analyze Your Business</h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Information gathering always aids companies in marketing and fostering customer growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
