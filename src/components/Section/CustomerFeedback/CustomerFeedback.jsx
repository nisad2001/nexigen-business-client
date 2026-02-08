import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CustomerFeedback = () => {
  return (
    <div className="max-w-[1170px] mx-auto py-20 px-4">

      {/* Heading */}
      <h2 className="font-semibold
                     text-[24px] sm:text-[32px] lg:text-[48px]
                     text-[#212024]
                     text-center mb-10">
        Customer Feedback
      </h2>

      {/* Feedback Row */}
      <div className="flex flex-col lg:flex-row
                      items-center justify-between
                      mb-12 gap-6 lg:gap-[96px]">

        {/* LEFT ARROW */}
        <div className="border border-[#6140FF]
                        p-3 sm:p-4 lg:p-5
                        rounded-full cursor-pointer">
          <FaArrowLeft className="text-[16px] sm:text-[20px] lg:text-[28px]" />
        </div>

        {/* Feedback Text */}
        <p className="font-normal text-[#4D4C50]
                      text-[14px] sm:text-[16px] lg:text-[22px]
                      w-full lg:w-[839px]
                      text-center lg:text-left">
          Your team was highly professional and knowledgeable, and was able
          to provide valuable insights and recommendations that helped us
          address some of our biggest challenges. Your ability to understand
          our business needs and tailor your solutions accordingly was
          greatly appreciated.
        </p>

        {/* RIGHT ARROW */}
        <div className="border bg-[#6140FF] border-[#6140FF]
                        p-3 sm:p-4 lg:p-5
                        rounded-full cursor-pointer">
          <FaArrowRight className="text-[16px] sm:text-[20px] lg:text-[28px] text-white" />
        </div>

      </div>

      {/* User Info */}
      <div className="flex flex-col sm:flex-row
                      items-center justify-center
                      gap-4 sm:gap-6 mx-auto">

        <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18">
          <img
            src="/assets/images/feedbackimg.png"
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="text-center sm:text-left">
          <p className="font-normal
                        text-[14px] sm:text-[16px]
                        text-[#212024]">
            Jason L. Guidry
          </p>
          <p className="font-normal
                        text-[13px] sm:text-[15px] lg:text-[19px]
                        text-[#212024]">
            CEO at designernews
          </p>
        </div>

      </div>

    </div>
  );
};

export default CustomerFeedback;
