import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  return (
    <div className="max-w-[1170px] mx-auto py-25">
      <p className="text-[#D37302] font-medium text-[16px] mb-2">FROM THE BLOG</p>
      <h2 className="font-semibold text-[48px] text-[#0D083A] mb-8">What’s Happening</h2>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="card bg-base-100 w-[547px] shadow-sm">
          <figure>
            <img
              src="/assets/images/blogimg1.png"
              alt="Blog Image"
              className="w-full"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-start  items-center  gap-[10px]">
              <h4 className="w-[84px] h-[28px] py-[6px] px-3 rounded-[2px] bg-[#EFECFF]  font-semibold flex items-center ">
                Branding
              </h4>
              <div className='flex text-center items-center '>
                <img
                src="/assets/images/navtimer.png"
                alt="Timer Icon"
                className="w-[18px] h-[18px]"
                />
                <p >
                    April 2, 2023
                </p>
              </div>
            </div>
              <h2 className='font-semibold text-[30px] text-[#0D083A]'>How to collaborate with companies</h2>
              <p className='font-normal text-[#7A798B] text-[16px]'>Are you struggling to take your business to the next level? Our business consultancy services can provide you with the guidance and support you need to achieve success.</p>
              
              <div className='flex justify-start items-center gap-[12px]'>
                <span>Read More</span>
                <FaArrowRight className='bg-[#6140FF] w-[19.5px] h-[19.5px] rounded-full text-white' />
              </div>
          </div>
        </div>
        <div className="card bg-base-100 w-[547px] shadow-sm">
          <figure>
            <img
              src="/assets/images/blogimg1.png"
              alt="Blog Image"
              className="w-full"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-start  items-center  gap-[10px]">
              <h4 className="w-[84px] h-[28px] py-[6px] px-3 rounded-[2px] bg-[#EFECFF]  font-semibold flex items-center ">
                Branding
              </h4>
              <div className='flex text-center items-center '>
                <img
                src="/assets/images/navtimer.png"
                alt="Timer Icon"
                className="w-[18px] h-[18px]"
                />
                <p >
                    April 2, 2023
                </p>
              </div>
            </div>
              <h2 className='font-semibold text-[30px] text-[#0D083A]'>How to collaborate with companies</h2>
              <p className='font-normal text-[#7A798B] text-[16px]'>Are you struggling to take your business to the next level? Our business consultancy services can provide you with the guidance and support you need to achieve success.</p>
              
              <div className='flex justify-start items-center gap-[12px]'>
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
