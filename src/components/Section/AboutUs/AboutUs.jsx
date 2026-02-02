import React from 'react';


const AboutUs = () => {
    return (
        <div className='grid px-34 grid-cols-1 lg:grid-cols-2 gap-10 my-24 items-center '>
            <div>
                 <img src="/assets/images/aboutUsImg.png" alt="" />
            </div>
            <div>
                <p className='text-[#D37302] mb-4'>ABOUT US</p>
                <h1 className='text-[#0D083A] text-4xl font-semibold '>Our skilled team <br /> grow your business</h1>
                <p className='text-[#7A798B] mt-4'>We are specializes in helping companies accelerate their growth through expert guidance, strategic planning, and implementation support.</p>
                 <h1 className='flex gap-2 text-[#0D083A] mt-4'><span><img src="/public/assets/images/aboutTickMark.png" alt="" /></span> Performing market research</h1>
                 <div className='flex gap-4 mt-8'>
                    <img src="/assets/images/aboutExpertImg.png" alt="" />
                     <div className='bg-white rounded-xl px-4 py-4 
                        shadow-[20px_40px_80px_0px_#2D33511F]'>
                        <h1 className='text-2xl font-semibold'>1.289</h1>
                        <h3 className='text-[#7A798B]'>Our Expert Team</h3>
                    </div>

                 </div>
                 <button className='bg-[#6140FF] btn rounded-xl mt-8'>Discover More</button>
            </div>
        </div>
    );
};

export default AboutUs;