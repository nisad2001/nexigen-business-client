import React from 'react';

const AboutUs = () => {
  return (
    <div className='max-w-[1170px] mx-auto flex flex-col lg:flex-row gap-x-[85px] my-24 px-4'>
      <div className='relative w-full'>
        <div className='flex flex-col sm:flex-col md:flex-row gap-x-[21px] gap-y-4 w-full'>
          <img src='/assets/images/aboutimage1.png' alt='' className='w-full md:w-auto' />
          <img
            src='/assets/images/aboutimage2.png'
            alt=''
            className='h-[300px] sm:h-[350px] md:h-[482px] w-full md:w-auto object-cover'
          />
        </div>

        {/* small device এ margin mt-8 দিয়েছি, বড় ডিভাইসে আগের মতো absolute */}
        <div className='bg-[#D37302] text-center items-center flex flex-col gap-2 py-6 px-4 mt-8 sm:mt-6 sm:mx-0 sm:absolute sm:left-[263px] sm:top-[378px] sm:w-[210px] sm:h-[210px] w-full max-w-[210px] mx-auto rounded-lg'>
          <span className='font-bold text-[40px] sm:text-[58px] text-white'>25+</span>
          <span className='font-bold text-[14px] sm:text-4 text-white text-center'>
            Years Experience <br /> our company
          </span>
        </div>
      </div>

      <div className='w-full max-w-[1170px] lg:w-[494px] h-auto mt-8 lg:mt-0'>
        <p className='text-[#D37302] mb-4'>ABOUT US</p>
        <h2 className='text-[#0D083A] text-[48px] mb-4 font-semibold'>Our skilled team grow your business</h2>
        <p className='text-[#7A798B] font-normal text-[16px] mb-6'>
          We are specializes in helping companies accelerate their growth through expert guidance, strategic
          planning, and implementation support.
        </p>

        <div className='mt-6'>
          <div className='flex gap-x-2 mt-6'>
            <img src='/assets/images/tickmard.png' className='w-6 h-6' alt='' />
            <p className='font-normal text-[16px] text-[#0D083A]'>Performing market research</p>
          </div>
          <div className='flex gap-x-2 mt-6'>
            <img src='/assets/images/tickmard.png' className='w-6 h-6' alt='' />
            <p className='font-normal text-[16px] text-[#0D083A]'>Providing information to a client</p>
          </div>
          <div className='flex gap-x-2 mt-6'>
            <img src='/assets/images/tickmard.png' className='w-6 h-6' alt='' />
            <p className='font-normal text-[16px] text-[#0D083A]'>Strategic planning</p>
          </div>
        </div>

        <div className='flex justify-start items-center w-[329px] bg-white mt-6 rounded-xl px-4 py-4 shadow-[20px_40px_80px_0px_#2D33511F]'>
          <div className='relative w-[108px] h-[54px]'>
            <img
              src='/assets/images/skillimage1.png'
              alt='Skill 1'
              className='absolute top-0 left-0 w-[54px] h-[54px]'
            />
            <img
              src='/assets/images/skillimage2.png'
              alt='Skill 2'
              className='absolute top-0 left-[27px] w-[54px] h-[54px] z-10'
            />
            <img
              src='/assets/images/skillimage3.png'
              alt='Skill 3'
              className='absolute top-0 left-[54px] w-[54px] h-[54px] z-20'
            />
          </div>
          <div className='ml-6'>
            <h1 className='text-2xl font-bold'>1.289</h1>
            <h3 className='text-[#7A798B] text-[16px] font-medium'>Our Expert Team</h3>
          </div>
        </div>

        <button className='bg-[#6140FF] btn rounded-xl mt-8 w-full sm:w-auto py-3 text-white'>
          Discover More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
