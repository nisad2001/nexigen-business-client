import React from 'react';

const AboutUs = () => {
    return (
        <div className='max-w-[1170px] mx-auto flex flex-col lg:flex-row gap-10 my-24 px-4'>
            <div className='w-full lg:w-[591px] h-auto mr-0 lg:mr-21'>
                 <img src="/assets/images/aboutimg.png" alt="" className="w-full h-auto" />
            </div>
            <div className='w-full lg:w-[494px] h-auto'>
                <p className='text-[#D37302] mb-4'>ABOUT US</p>
                <h2 className='text-[#0D083A] text-4xl mb-4 font-semibold'>Our skilled team <br /> grow your business</h2>
                <p className='text-[#7A798B] font-normal text-[16px] mb-6'>We are specializes in helping companies accelerate their growth through expert guidance, strategic planning, and implementation support.</p>
                 <h1 className='flex gap-2 text-[#0D083A] mb-8 items-center'>
                    <span><img src="/assets/images/tickmard.png" alt="" className="w-5 h-5" /></span> Performing market research
                 </h1>
                 <h1 className='flex gap-2 text-[#0D083A] mb-8 items-center'>
                    <span><img src="/assets/images/tickmard.png" alt="" className="w-5 h-5" /></span> Providing information to a client
                 </h1>
                 <h1 className='flex gap-2 text-[#0D083A] mb-6 items-center'>
                    <span><img src="/assets/images/tickmard.png" alt="" className="w-5 h-5" /></span> Strategic planning
                 </h1>
                 <div className='flex items-center gap-4 mt-8'>
                    <img src="/assets/images/aboutexpert.png" className='w-30 h-[54px] object-contain' alt="" />
                     <div className='bg-white mb-6 rounded-xl px-4 py-4 mr-6 shadow-[20px_40px_80px_0px_#2D33511F]'>
                        <h1 className='text-2xl font-bold'>1.289</h1>
                        <h3 className='text-[#7A798B] text-[16px] font-medium'>Our Expert Team</h3>
                    </div>
                 </div>
                 <button className='bg-[#6140FF] btn rounded-xl mt-8 w-full sm:w-auto py-3 text-white'>Discover More</button>
            </div>
        </div>
    );
};

export default AboutUs;
