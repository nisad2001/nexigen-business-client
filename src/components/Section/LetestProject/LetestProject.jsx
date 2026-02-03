import React from 'react';

const LetestProject = () => {
    return (
        <div className="my-16 max-w-[1170px] mx-auto px-4">
            <div className="text-center">
                <p className="text-[#D37302] font-medium text-[16px] mb-4">LATEST PROJECTS</p>
                <h1 className="text-[#0D083A] mb-15 font-semibold text-5xl sm:text-3xl mt-4">
                    We have earned a reputation <br /> as the market leader
                </h1>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-[100px] mt-8">
                <img 
                  src="/assets/images/pcard1.png" 
                  alt="Project 1" 
                  className="w-[330px] h-[294px] rounded-lg shadow-md object-cover" 
                />
                <img 
                  src="/assets/images/pcard2.png" 
                  alt="Project 2" 
                  className="w-[330px] h-[294px] rounded-lg shadow-md object-cover" 
                />
                <img 
                  src="/assets/images/pcard3.png" 
                  alt="Project 3" 
                  className="w-[330px] h-[294px] rounded-lg shadow-md object-cover" 
                />
            </div>
        </div>
    );
};

export default LetestProject;
