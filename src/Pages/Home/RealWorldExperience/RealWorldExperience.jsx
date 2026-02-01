import React from 'react';
import rwimg1 from '../../../assets/rwimg1 - Copy.png'
import rwimg2 from '../../../assets/rwimg2.png'
import rwimg3 from '../../../assets/rwimg3.png'

const RealWorldExperience = () => {
    return (
       <div className="bg-[#FEF5E4] py-21 px-46 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
            <div className='w-full'>
                <img className="pb-6" src={rwimg1} alt="Wealth Management" />
                <h1 className="font-bold text-[#0D083A] pb-4">Wealth Management</h1>
                <p className="text-[#7A798B] font-normal">
                The goal of wealth management is to help clients grow and protect their wealth over the long term, while also providing them with financial peace of mind.
                </p>
                <button className="text-[#D37302] pt-6">Read More</button>
            </div>

            <div className='w-full'>
                <img className="pb-6" src={rwimg2} alt="Investment Planning" />
                <h1 className="font-bold text-[#0D083A] pb-4">Investment Planning</h1>
                <p className="text-[#7A798B] font-normal">
                We provide expert investment planning to maximize your returns and minimize risks.
                </p>
                <button className="text-[#D37302] pt-6">Read More</button>
            </div>

            <div className='w-full'>
                <img className="pb-6" src={rwimg3} alt="Retirement Solutions" />
                <h1 className="font-bold text-[#0D083A] pb-4">Retirement Solutions</h1>
                <p className="text-[#7A798B] font-normal">
                Helping you prepare financially for a comfortable and secure retirement.
                </p>
                <button className="text-[#D37302] pt-6">Read More</button>
            </div>
        </div>

    );
};

export default RealWorldExperience;
