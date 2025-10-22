import React from "react";

function page() {
  return (
    <div>
      <div className="relative">
        <img src="/bg.webp" alt="" className="brightness-50 w-full h-[200px] sm:h-[400px] sm:h-[500px] md:h-[600px] object-cover" />
        <div className="absolute top-1/2 left-4  sm:left-24   text-white -translate-y-1/2">
          <p className="sm:border-l-10 border-l-8 border-l-[#4FE78B] font-bold md:text-[64px] sm:text-[40px] text-[25px] px-2 sm:px-6 max-w-[822px] sm:leading-[70px] ">
            About RDR General Construction Corp.
          </p>
        </div>
      </div>

      <div className="sm:py-20 py-10 sm:px-10 px-5 ">
        <div className="grid gap-5 md:grid-cols-2 grid-col2-1 ">
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
                  <img src="/tick.webp" alt="" className="w-[29px]  " />
                  <p className="max-w-[469px]">
                    Years of hands-on experience in complex projects.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[#120F0F] ">
                  <img src="/tick.webp" alt="" className="w-[29px]  " />
                  <p className="max-w-[469px]">
                    Compliance with regulations at every step.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[#120F0F] ">
                  <img src="/tick.webp" alt="" className="w-[29px]  " />
                  <p className="max-w-[469px]">
                    On-time and on-budget delivery.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[#120F0F] ">
                  <img src="/tick.webp" alt="" className="w-[29px]  " />
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
              src="/below.webp"
              alt=""
              className="absolute top-0 left-0 w-[80%] h-[85%] object-cover rounded-lg shadow-lg"
            />

            <img
              src="/above.webp"
              alt=""
              className="absolute bottom-0 right-0 w-[75%] h-[85%] object-cover rounded-lg shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </div>

      <div className="relative min-h-[400px] md:min-h-[600px] flex items-center justify-center">
        <img
          src="/frame.webp"
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

      <div className="relative w-full min-h-[600px] lg:overflow-hidden py-12 lg:py-0">
        {/* --- Background Image (No changes needed) --- */}
        <img
          src="/Rectangle 33.webp"
          alt="Background of a bridge"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        {/* 
    MOBILE (default): A standard block, centered with margin auto.
    DESKTOP (lg): Becomes the absolutely positioned centered box.
  */}
        <div
          className="relative w-full max-w-7xl mx-auto px-4 
               lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
        >
          {/* 
      MOBILE (default): Stacks vertically.
      DESKTOP (lg): Side-by-side with a large gap.
    */}
          <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-8 lg:gap-16">
            {/* --- LEFT COLUMN (Image and Caption) --- */}
            <div className="flex flex-col items-center gap-3">
              {/* 
          MOBILE (default): Smaller image width.
          DESKTOP (lg): Your original fixed width.
        */}
              <img
                src="/my dad.webp"
                alt="Engr. (Dr.) R.U. ODOH"
                className="w-[280px] lg:w-[350px] h-auto rounded-lg shadow-xl"
              />
              <p className="text-center font-semibold text-gray-700 max-w-[280px] lg:max-w-none">
                Engr. (Dr.) R.U. ODOH (Vice President/CEO)
              </p>
            </div>
            <div className="relative w-full h-[420px] lg:w-[732px] lg:h-[350px]">
              <p
                className="bg-[#5BCBFF] p-6 flex flex-col gap-4 rounded-md shadow-lg
                     absolute top-0 left-0 w-4/5
                     lg:p-7 lg:gap-5 lg:w-[382px]"
              >
                <span className="font-bold text-xl lg:text-[22px]">
                  Our Mission
                </span>
                <span className="text-sm lg:text-base">
                  To deliver safe, strong, and sustainable construction
                  solutions while upholding the highest standards of quality,
                  compliance, and client satisfaction.
                </span>
              </p>
              <p
                className="bg-[#3CD679] p-6 flex flex-col gap-4 rounded-md shadow-lg absolute top-[200px] right-0 w-4/5 lg:p-7 lg:gap-5 lg:w-[382px] lg:top-16 lg:left-[350px]"
              >
                <span className="font-bold text-xl lg:text-[22px]">
                  Our Vision
                </span>
                <span className="text-sm lg:text-base">
                  To be a leading construction and remediation company
                  recognized for our commitment to safety, excellence, and
                  community well-being, creating environments that support
                  future generations.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
