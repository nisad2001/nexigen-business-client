import React from 'react';
import pcard1 from '../../../assets/pcard1.png'
import pcard2 from '../../../assets/pcard2.png'
import pcard3 from '../../../assets/pcard3.png'

const LetestProject = () => {
    return (
        <div className="my-16 max-w-292 w-full mx-auto px-4">
            <div className="text-center">
                <p className="text-[#D37302] font-semibold">LATEST PROJECTS</p>
                <h1 className="text-[#0D083A] font-semibold text-2xl sm:text-3xl mt-4">
                    We have earned a reputation <br /> as the market leader
                </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-8">
                <img src={pcard1} alt="Project 1" className="w-full sm:w-1/3 rounded-lg shadow-md" />
                <img src={pcard2} alt="Project 2" className="w-full sm:w-1/3 rounded-lg shadow-md" />
                <img src={pcard3} alt="Project 3" className="w-full sm:w-1/3 rounded-lg shadow-md" />
            </div>
        </div>
    );
};

export default LetestProject;
