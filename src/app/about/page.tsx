import React from "react";

function page() {
  return (
    <div>
      <div className="relative">
        <img src="/bg.png" alt="" className="brightness-50 w-full h-auto " />
        <div className="absolute top-1/2 left-4  sm:left-24   text-white -translate-y-1/2">
          <p className="sm:border-l-10 border-l-8 border-l-[#4FE78B] font-bold md:text-[64px] sm:text-[40px] text-[25px] px-2 sm:px-6 max-w-[822px] sm:leading-[70px] ">
            About RDR General Construction Corp.
          </p>
        </div>
      </div>

      <div className="sm:py-20 py-10 sm:px-10 px-5 ">
        <div className="grid sm:grid-cols-2 grid-col2-1 ">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-bold text-[30px] sm:text-[45px]">
                Who We Are
              </h2>
              <p className="flex flex-col gap-5 text-[16px] sm:text-[20px] max-w-[509px] py-10 ">
                <span>
                  At RDR General Construction, we are more than contractors we
                  are builders of trust, safety, and long-term value.
                </span>
                <span className="py-3">
                  Our specialty lies in asbestos and lead abatement, mold
                  remediation, demolition services, and complete construction
                  solutions. Whether it’s residential, commercial, or industrial
                  projects, our mission is to provide reliable, cost-effective,
                  and sustainable outcomes for every client.
                </span>
              </p>
            </div>

            <div className="">
              <h2 className="font-semibold text-[24px] ">Why Choose RDR?</h2>
              <div className="flex flex-col gap-3 py-3 ">
                <div className="flex items-center gap-2 text-[#120F0F] ">
                  <img src="/tick.png" alt="" className="w-[29px]  " />
                  <p className="max-w-[469px]">
                    Years of hands-on experience in complex projects.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[#120F0F] ">
                  <img src="/tick.png" alt="" className="w-[29px]  " />
                  <p className="max-w-[469px]">
                    Compliance with regulations at every step.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[#120F0F] ">
                  <img src="/tick.png" alt="" className="w-[29px]  " />
                  <p className="max-w-[469px]">
                    On-time and on-budget delivery.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[#120F0F] ">
                  <img src="/tick.png" alt="" className="w-[29px]  " />
                  <p className="max-w-[469px]">
                    Custom solutions for residential, commercial, and government
                    contracts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5]">
            <img
              src="/below.png"
              alt=""
              className="absolute top-0 left-0 w-[80%] h-[85%] object-cover rounded-lg shadow-lg"
            />

            <img
              src="/above.png"
              alt=""
              className="absolute bottom-0 right-0 w-[75%] h-[85%] object-cover rounded-lg shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </div>

      <div className="relative min-h-[400px] md:min-h-[600px] flex items-center justify-center">
        <img
          src="/frame.png"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
        />

        <div className="relative z-10 text-center max-w-[820px] text-white px-2">
          <h1 className="font-bold text-[32px] sm:text-[64px] leading-tight sm:leading-[70px]">
            We’ve Been Building For Over 20 years
          </h1>
          <p className="text-[18px] sm:text-[22px] py-7 sm:py-10">
            Clients choose RDR General Construction because we deliver more than
            just construction we deliver peace of mind. From project planning to
            completion.
          </p>
          <button className="text-[16px] sm:text-[22px] bg-[#B12D31] cursor-pointer py-2 px-5 hover:scale-105 hover:bg-[#b12d31d3] transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>

      <div className="min-h-[400px] md:min-h-[500px]  ">
        <img src="/rectangle 33.png" alt="" className="w-full h-full" />
        <div className="flex ">
          <img src="/my dad.png" alt="" className="w-[30%]" />
          <div className="relative ">
            <p className="bg-[#5BCBFF] max-w-[382px] p-7 flex flex-col gap-5 relative ">
              <span className="font-bold text-[22px] "> Our Mission </span>
              <span>
                To deliver safe, strong, and sustainable construction solutions
                while upholding the highest standards of quality, compliance,
                and client satisfaction.
              </span>
            </p>
            <p className="bg-[green] max-w-[382px] p-7 flex flex-col gap-5 absolute right-0 bottom-0 ">
              <span className="font-bold text-[22px] "> Our Mission </span>
              <span>
                To deliver safe, strong, and sustainable construction solutions
                while upholding the highest standards of quality, compliance,
                and client satisfaction.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
