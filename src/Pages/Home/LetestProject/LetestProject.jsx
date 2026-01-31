import React from 'react';
import pcard1 from '../../../assets/pcard1.png'
import pcard2 from '../../../assets/pcard2.png'
import pcard3 from '../../../assets/pcard3.png'

const LetestProject = () => {
    return (
        <div className='my-25'>
            <div className='text-center'>
                <p className='text-[#D37302]'>LATESTS PROJECTS</p>
                <h1 className='text-[#0D083A] font-semibold text-3xl mt-4'>We have earned a reputation <br /> as the market leader</h1>
            </div>
            <div className='flex gap-8 mt-15'>
                <img src={pcard1} alt="" />
                <img src={pcard2} alt="" />
                <img src={pcard3} alt="" />
            </div>
        </div>
    );
};

export default LetestProject;