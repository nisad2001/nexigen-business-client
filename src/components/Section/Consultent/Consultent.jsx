import React from 'react';

const Consultent = () => {
  return (
    <div className="hero min-h-screen px-4">

      <div className="hero-content relative flex-col lg:flex-row-reverse">

        {/* IMAGE */}
        <div className="w-full flex justify-center">
          <img
            src="/assets/images/consultentimg.jpg"
            className="rounded-[30px]
                       w-full max-w-[1170px]
                       h-auto lg:h-[605px]
                       object-cover"
            alt=""
          />
        </div>

        {/* FORM CARD */}
        <div
          className="
            card bg-base-100
            w-full max-w-md
            shadow-2xl
            mt-8
            lg:absolute lg:top-[-90px] lg:left-[40px]
          "
        >
          <div className="card-body w-full rounded-[20px]">

            <fieldset className="fieldset space-y-3">

              <div>
                <label className="label">First Name</label>
                <input type="text" className="input w-full" placeholder="First Name" />
              </div>

              <div>
                <label className="label">Last Name</label>
                <input type="text" className="input w-full" placeholder="Last Name" />
              </div>

              <div>
                <label className="label">Email</label>
                <input type="email" className="input w-full" placeholder="Email" />
              </div>

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full resize-none border px-4 py-3 text-sm rounded-md"
              ></textarea>

              <div className="flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 accent-[#D37302]"
                />
                <p>
                  by clicking here you agree to our{" "}
                  <span className="text-[#6140FF] cursor-pointer">
                    terms and policy
                  </span>.
                </p>
              </div>

              <button className="btn bg-[#6140FF] w-full sm:w-[155px] h-[50px] text-white">
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
