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

      <div className="py-20">
        <div className="grid grid-cols-2 px-5">
          <div>
            <h2 className="font-bold text-[45px]">Who We Are</h2>
            <p className="flex flex-col gap-5 text-[16px] sm:text-[20px] max-w-[509px] ">
              <span>
                At RDR General Construction, we are more than contractors we are
                builders of trust, safety, and long-term value.
              </span>
              <span className="py-5">
                Our specialty lies in asbestos and lead abatement, mold
                remediation, demolition services, and complete construction
                solutions. Whether it’s residential, commercial, or industrial
                projects, our mission is to provide reliable, cost-effective,
                and sustainable outcomes for every client.
              </span>
            </p>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default page;
