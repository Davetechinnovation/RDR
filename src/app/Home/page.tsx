import React from "react";

function page() {
  return (
    <div>
      <div className="relative">
        <img src="/rdr.webp" alt="" className="brightness-40" />

        <div className="absolute top-1/2 -translate-y-1/2 left-16 text-white ">
          <h2 className="font-bold text-[58px] font-[Rubik] max-w-[830px] leading-[68px] ">
            Your Trusted Partner in Construction & Remediation
          </h2>
          <p className="text-[22px] max-w-[722px] py-5">
            At RDR General Construction, we combine expertise, precision, and
            integrity to deliver projects that stand the test of time from
            asbestos and lead abatement to demolition and full-scale
            construction.
          </p>
          <button className=" mt-3 bg-[#B12D31] px-5 py-3 rounded-[2px] hover:scale-105 hover:bg-[#b12d31ea] duration-300 transition-all text-white cursor-pointer ">
            Start A Project
          </button>
        </div>
      </div>

      <div className="flex h-[100vh] ">
        <div>
          <img
            src="/Rectangle.png"
            alt=""
            className="object-cover max-w-[440px] h-full w-full  "
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="px-20">
            <h2 className="text-[40px] font-bold max-w-[683px] leading-[53px] py-5 ">
              Building with Excellence, Integrity{" "}
              <span
                className="border-b-4
               border-b-[#B12D31] "
              >
                {" "}
                &
              </span>
              Experience
            </h2>

            <div className="flex gap-5 py-3 ">
              <p className="text-[#666666] flex flex-col gap-5 max-w-[350px] ">
                <span>
                  RDR General Construction is a trusted name in development,
                  construction management, and general contracting.
                </span>
                <span>
                  With years of proven expertise, we specialize in delivering
                  safe, reliable, and high-quality services across residential,
                  commercial, and industrial projects.
                </span>
              </p>

              <p className="text-[#666666] max-w-[350px] flex flex-col gap-16 items-start  ">
                <span>
                  From asbestos and lead abatement to mold remediation,
                  demolition, and full-scale construction projects, our team is
                  committed to completing every project with precision and care.
                </span>
                
                  <button className="border-2 border-[#B12D31] px-4 py-[6px] text-black uppercase text-[14px] font-semibold ">
                    Learn more
                  </button>
               
              </p>
            </div>
          </div>

          <div className="flex w-full ">
            <p className="bg-[#0097DC] p-5 flex flex-col text-white text-center w-full ">
              <span className="text-[40px] font-bold  ">20+</span>{" "}
              <span>YEARS ESTABLISHED</span>
            </p>

            <p className="bg-black p-5 flex flex-col text-white text-center w-full">
              <span className="text-[40px] font-bold  ">20+</span>{" "}
              <span>COMPLETED PROJECTRS</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default page;
