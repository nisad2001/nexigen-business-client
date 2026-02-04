import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CustomerFeedback = () => {
    return (
        <div className='max-w-[1170px] mx-auto py-25'>
            <h2 className='font-semibold text-[48px] text-[#212024] text-center'>
                Customer Feedback
            </h2>

            <div className='flex items-center justify-between mb-12 gap-[96px]'>

                {/* LEFT ARROW */}
                <div className='border border-[#6140FF] p-5 rounded-full cursor-pointer'>
                    <FaArrowLeft className='text-[28px]' />
                </div>

                <p className='font-normal text-[#4D4C50] text-[22px] w-[839px]'>
                    Your team was highly professional and knowledgeable, and was able
                    to provide valuable insights and recommendations that helped us
                    address some of our biggest challenges. Your ability to understand
                    our business needs and tailor your solutions accordingly was
                    greatly appreciated.
                </p>

                {/* RIGHT ARROW */}
                <div className='border bg-[#6140FF] border-[#6140FF] p-5 rounded-full cursor-pointer'>
                    <FaArrowRight className='text-[28px] text-[#FFFFFF]' />
                </div>

            </div>
             <div className='flex justify-center gap-6 mx-auto'>
                <div className='w-18 h-18'>
                    <img src="/assets/images/feedbackimg.png" alt="" />
                </div>
                 <div>
                    <p className='font-normal text-6 text-[#212024]'>Jason L. Guidry</p>
                    <p className='font-normal text-[19px] text-[#212024]'>CEO at designernews</p>
                 </div>
             </div>
        </div>
    );
};

export default CustomerFeedback;
