import React from "react";

const OurServices = () => {
  return (
    <div className="max-w-[1170px] py-25 mx-auto px-4">
      {/* heading */}
      <div className="mb-12">
        <p className="font-medium text-[16px] text-[#D37302] uppercase">
          Our Services
        </p>
        <h2 className="font-semibold text-[#0D083A] text-[32px] md:text-[48px]">
          Consulting Services
        </h2>
      </div>

      {/* card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* card 1 */}
        <div className="card max-w-[370px] max-h-[401px] bg-white relative pb-35 mx-auto">
          {/* image */}
          <figure className="w-full h-[270px]">
            <img
              src="/public/assets/images/busimg1.png"
              alt="service"
              className="w-full h-full object-cover"
            />
          </figure>

          {/* content */}
          <div
            className="card-body w-[320px] h-[160px] absolute left-1/2 -translate-x-1/2 bottom-0.5 flex flex-col justify-center text-center bg-white z-10"
            style={{ boxShadow: "20px 40px 80px 0px #2D33511F" }}
          >
            <h2 className="font-semibold text-[20px] md:text-[28px] text-[#7A798B]">
              Business Consulting
            </h2>
            <p className="text-sm md:text-base">
              We provide the best services to ensure the high-level success of your business
            </p>
            <div className="w-full text-left">
              <button className="text-[#6140FF] underline">Know More</button>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="card max-w-[370px] max-h-[401px] bg-white relative pb-35 mx-auto">
          <figure className="w-full h-[270px]">
            <img
              src="/public/assets/images/busimg1.png"
              alt="service"
              className="w-full h-full object-cover"
            />
          </figure>

          <div
            className="card-body w-[320px] h-[160px] absolute left-1/2 -translate-x-1/2 bottom-0.5 flex flex-col justify-center text-center bg-white z-10"
            style={{ boxShadow: "20px 40px 80px 0px #2D33511F" }}
          >
            <h2 className="font-semibold text-[20px] md:text-[28px] text-[#7A798B]">
              Financial Planning
            </h2>
            <p className="text-sm md:text-base">
              Our services are tailored to guarantee your business of success
            </p>
            <div className="w-full text-left">
              <button className="text-[#6140FF] underline">Know More</button>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className="card max-w-[370px] max-h-[401px] bg-white relative pb-35 mx-auto">
          <figure className="w-full h-[270px]">
            <img
              src="/public/assets/images/busimg1.png"
              alt="service"
              className="w-full h-full object-cover"
            />
          </figure>

          <div
            className="card-body w-[320px] h-[160px] absolute left-1/2 -translate-x-1/2 bottom-0.5 flex flex-col justify-center text-center bg-white z-10"
            style={{ boxShadow: "20px 40px 80px 0px #2D33511F" }}
          >
            <h2 className="font-semibold text-[20px] md:text-[28px] text-[#7A798B]">
              Marketing Research
            </h2>
            <p className="text-sm md:text-base">
              With our exceptional services, your business can reach success
            </p>
            <div className="w-full text-left">
              <button className="text-[#6140FF] underline">Know More</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurServices;
