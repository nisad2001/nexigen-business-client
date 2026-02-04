import React from 'react';

const Consultent = () => {
    return (
        <div className="hero min-h-screen">
          
          <div className="hero-content relative flex-col lg:flex-row-reverse">

            <div className="text-center lg:text-left">
              <img
                src="/assets/images/consultentimg.jpg"
                className="rounded-[30px] w-[1170px] h-[605px] "
                alt=""
              />
            </div>

            

            <div className="card absolute top-[-90px] left-[40px] bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
              <div className="card-body w-full rounded-[20px]">
                <fieldset className="fieldset">
                  <label className="label">First Name</label>
                  <input type="email" className="input" placeholder="First Name" />

                  <label className="label">Last Name</label>
                  <input type="email" className="input" placeholder="Last Name" />

                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="Email" />

                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="w-full h-[165px] resize-none border px-4 py-3 text-sm"
                  ></textarea>

                  <div className="flex items-center gap-1">
                    <input type="checkbox" id="terms" className="mt-1 accent-[#D37302]" />
                    <p>
                      by clicking here you agree to our{" "}
                      <span className="text-[#6140FF]">terms and policy</span>.
                    </p>
                  </div>

                  <button className="btn bg-[#6140FF] w-[155px] h-[50px] text-[#FFFFFF]">
                    Send Message
                  </button>
                </fieldset>
              </div>
            </div>

          </div>
        </div>
    );
};

export default Consultent;
