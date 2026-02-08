import React from 'react';

const Faq = () => {
  return (
    <div className="bg-[#100D2C] py-20 px-4
                    flex flex-col lg:flex-row
                    items-center lg:items-start
                    justify-center">

      {/* LEFT */}
      <div className="w-full max-w-[568px]
                      mb-12 lg:mb-0 lg:mr-[103px]
                      text-center lg:text-left">

        <p className="text-[#D37302] font-medium mb-3
                      text-[12px] sm:text-[14px] lg:text-[16px]
                      uppercase">
          OUR FAQS
        </p>

        <h2 className="font-semibold mb-6
                       text-[24px] sm:text-[32px] lg:text-[48px]
                       text-[#F4F4F4]">
          What are they Asked?
        </h2>

        <div className="font-medium mb-4
                        text-[13px] sm:text-[15px] lg:text-[18px]
                        text-[#0D083A]
                        bg-[#FBF1E6]
                        rounded
                        py-4 px-4 sm:px-6">
          What is a business consultancy company?
        </div>

        <div className="bg-white rounded mb-4
                        py-4 px-4 sm:px-6">
          <p className="font-medium mb-2
                        text-[13px] sm:text-[15px] lg:text-[18px]
                        text-[#0D083A]">
            Why would a business need to hire a consultancy company?
          </p>

          <p className="font-normal
                        text-[12px] sm:text-[13px] lg:text-[14px]
                        text-[#7A798B] leading-relaxed">
            Businesses hire consultancy companies for a variety of reasons,
            such as improving their operations, increasing efficiency,
            developing new strategies, expanding into new markets, and
            solving specific business problems.
          </p>
        </div>

        <div className="font-medium mb-4
                        text-[13px] sm:text-[15px] lg:text-[18px]
                        text-[#0D083A]
                        bg-[#FBF1E6]
                        rounded
                        py-4 px-4 sm:px-6">
          How do I know if my business needs consultancy services?
        </div>

        <div className="font-medium
                        text-[13px] sm:text-[15px] lg:text-[18px]
                        text-[#0D083A]
                        bg-[#FBF1E6]
                        rounded
                        py-4 px-4 sm:px-6">
          What is a business consultancy company?
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full max-w-[547px] mt-16 lg:mt-0">

        {/* Main image */}
        <img
          src="/assets/images/faqimg.png"
          className="w-full max-w-[447px] h-auto mx-auto"
          alt=""
        />

        {/* SMALL DEVICE: images bigger & column */}
        <div className="flex flex-col sm:flex-row gap-6 mt-8
                        justify-center lg:hidden">
          <img
            src="/assets/images/faqleftimg.png"
            alt=""
            className="w-[180px] sm:w-[200px] mx-auto"
          />
          <img
            src="/assets/images/faqrightimg.png"
            alt=""
            className="w-[180px] sm:w-[200px] mx-auto"
          />
        </div>

        {/* LARGE DEVICE: positioned images */}
        <div className="hidden lg:block relative">
          <img
            src="/assets/images/faqleftimg.png"
            alt=""
            className="absolute left-[-20px] bottom-6"
          />
          <img
            src="/assets/images/faqrightimg.png"
            alt=""
            className="absolute right-[-100px] top-[-457px]"
          />
        </div>

      </div>
    </div>
  );
};

export default Faq;
