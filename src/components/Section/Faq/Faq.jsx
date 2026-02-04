import React from 'react';

const Faq = () => {
    return (
        <div className='bg-[#100D2C]  py-[97px] mx-auto
                        flex flex-col lg:flex-row
                        items-center lg:items-start
                        justify-center'>

            {/* LEFT */}
            <div className='w-[568px] h-[572px]
                            mr-0 lg:mr-[103px]
                            mb-12 lg:mb-0'>
                <p className='text-[#D37302] font-medium mb-4
                              text-[14px] sm:text-[15px] lg:text-[16px]
                              uppercase'>
                    oUR FaqS
                </p>

                <h2 className='font-semibold mb-8
                               text-[32px] sm:text-[40px] lg:text-[48px]
                               text-[#F4F4F4]'>
                    What are they Asked?
                </h2>

                <div className='font-medium mb-4
                                text-[14px] sm:text-[16px] lg:text-[18px]
                                text-[#0D083A]
                                bg-[#FBF1E6] w-[562px] h-[62px]
                                rounded-[4px] py-5 pl-6 pr-[54px]'>
                    What is a business consultancy company?
                </div>

                <div className='bg-[#FFFFFF] rounded-[4px] mb-4
                                w-[566px] h-[190px]
                                py-5 pl-6 pr-[59px]'>
                    <p className='font-medium
                                  text-[14px] sm:text-[16px] lg:text-[18px]
                                  text-[#0D083A]'>
                        Why would a business need to hire a consultancy company?
                    </p>

                    <p className='font-normal
                                  text-[12px] sm:text-[13px] lg:text-[14px]
                                  text-[#7A798B]'>
                        Businesses hire consultancy companies for a variety of reasons,
                        such as improving their operations, increasing efficiency,
                        developing new strategies, expanding into new markets, and
                        solving specific business problems.
                    </p>
                </div>

                <div className='font-medium mb-4
                                text-[14px] sm:text-[16px] lg:text-[18px]
                                text-[#0D083A]
                                bg-[#FBF1E6] w-[562px] h-[86px]
                                rounded-[4px] py-5 px-6'>
                    How do I know if my business needs consultancy services?
                </div>

                <div className='font-medium
                                text-[14px] sm:text-[16px] lg:text-[18px]
                                text-[#0D083A]
                                bg-[#FBF1E6] w-[568px] h-[62px]
                                rounded-[4px] py-5 px-6'>
                    What is a business consultancy company?
                </div>
            </div>

            {/* RIGHT */}
            <div className='relative w-[547px] h-[572]
                            mt-16 lg:mt-0'>
                {/* main image */}
                <img
                    src="/assets/images/faqimg.png"
                    className='w-[447px] h-[572px]'
                    alt=""
                />

                {/* left image */}
                <img
                    src="/assets/images/faqleftimg.png"
                    alt=""
                    className='absolute
                               left-[-20px] sm:left-[-50px]
                               top-[411px]'
                />

                {/* right image */}
                <img
                    src="/assets/images/faqrightimg.png"
                    alt=""
                    className='absolute
                               left-[200px] sm:left-[260px]
                               top-[213px]'
                />
            </div>

        </div>
    );
};

export default Faq;
