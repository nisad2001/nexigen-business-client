import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  return (
    <div className="max-w-[1170px] mx-auto py-16 px-4">

      <p className="text-[#D37302] font-medium mb-2
                    text-center md:text-left
                    text-[12px] sm:text-[14px] md:text-[16px]">
        FROM THE BLOG
      </p>

      <h2 className="font-semibold text-[#0D083A] mb-8
                     text-center md:text-left
                     text-[24px] sm:text-[30px] md:text-[48px]">
        What’s Happening
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Card 1 */}
        <div className="card bg-base-100 shadow-sm max-w-full md:max-w-[547px] mx-auto">
          <figure>
            <img
              src="/assets/images/blogimg1.png"
              alt="Blog Image"
              className="w-full"
            />
          </figure>
          <div className="card-body text-center md:text-left">

            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-center gap-2 md:gap-[10px] mb-4">
              <h4 className="w-[84px] h-[28px] py-[6px] px-3 rounded-[2px] bg-[#EFECFF] font-semibold flex items-center justify-center md:justify-start
                             text-[12px] sm:text-[14px] md:text-[16px]">
                Branding
              </h4>
              <div className='flex items-center gap-2 md:gap-1 text-[12px] sm:text-[14px] md:text-[16px]'>
                <img
                  src="/assets/images/timer.png"
                  alt="Timer Icon"
                  className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]"
                />
                <p>April 2, 2023</p>
              </div>
            </div>

            <h2 className='font-semibold text-[#0D083A]
                           text-[20px] sm:text-[24px] md:text-[30px]
                           mb-3'>
              How to collaborate with companies
            </h2>

            <p className='font-normal text-[#7A798B]
                          text-[14px] sm:text-[15px] md:text-[16px]
                          mb-6'>
              Are you struggling to take your business to the next level? Our business consultancy services can provide you with the guidance and support you need to achieve success.
            </p>

            <div className='flex justify-center md:justify-start items-center gap-[12px]
                            text-[14px] sm:text-[16px] md:text-[18px] cursor-pointer'>
              <span>Read More</span>
              <FaArrowRight className='bg-[#6140FF] w-[19.5px] h-[19.5px] rounded-full text-white' />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-sm max-w-full md:max-w-[547px] mx-auto">
          <figure>
            <img
              src="/assets/images/blogimg1.png"
              alt="Blog Image"
              className="w-full"
            />
          </figure>
          <div className="card-body text-center md:text-left">

            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-center gap-2 md:gap-[10px] mb-4">
              <h4 className="w-[84px] h-[28px] py-[6px] px-3 rounded-[2px] bg-[#EFECFF] font-semibold flex items-center justify-center md:justify-start
                             text-[12px] sm:text-[14px] md:text-[16px]">
                Branding
              </h4>
              <div className='flex items-center gap-2 md:gap-1 text-[12px] sm:text-[14px] md:text-[16px]'>
                <img
                  src="/assets/images/navtimer.png"
                  alt="Timer Icon"
                  className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]"
                />
                <p>April 2, 2023</p>
              </div>
            </div>

            <h2 className='font-semibold text-[#0D083A]
                           text-[20px] sm:text-[24px] md:text-[30px]
                           mb-3'>
              How to collaborate with companies
            </h2>

            <p className='font-normal text-[#7A798B]
                          text-[14px] sm:text-[15px] md:text-[16px]
                          mb-6'>
              Are you struggling to take your business to the next level? Our business consultancy services can provide you with the guidance and support you need to achieve success.
            </p>

            <div className='flex justify-center md:justify-start items-center gap-[12px]
                            text-[14px] sm:text-[16px] md:text-[18px] cursor-pointer'>
              <span>Read More</span>
              <FaArrowRight className='bg-[#6140FF] w-[19.5px] h-[19.5px] rounded-full text-white' />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
