import React from "react";

function page() {
  return (
    <div>
      <div className="relative">
        <img
          src="/rdr.webp"
          alt=""
          className="brightness-40 sm:h-auto h-[375px] object-cover "
        />

        <div className="absolute top-1/2 -translate-y-1/2 sm:left-16 left-4 text-white ">
          <h2 className="font-bold sm:text-[58px] text-[24px] font-[Rubik] max-w-[287px] sm:max-w-[830px] sm:leading-[68px] ">
            Your Trusted Partner in Construction & Remediation
          </h2>
          <p className="sm:text-[22px] text-[13px] max-w-[287px] sm:max-w-[722px] sm:py-5 py-2 ">
            At RDR General Construction, we combine expertise, precision, and
            integrity to deliver projects that stand the test of time from
            asbestos and lead abatement to demolition and full-scale
            construction.
          </p>
          <button className=" mt-3 bg-[#B12D31] sm:px-5 px-3 sm:py-3 py-2 rounded-[2px] hover:scale-105 hover:bg-[#b12d31ea] duration-300 transition-all text-white cursor-pointer ">
            Start A Project
          </button>
        </div>
      </div>

      <div className="sm:flex md:h-[100vh] ">
        <div>
          <img
            src="/Rectangle.png"
            alt=""
            className="object-cover max-w-[440px] h-full w-full  "
          />
        </div>
        <div className="flex flex-col justify-between  ">
          <div className="sm:px-20 px-3 ">
            <h2 className="sm:text-[40px] text-[23px]  font-bold max-w-[683px] sm:leading-[53px] py-5 ">
              Building with Excellence, Integrity{" "}
              <span
                className="border-b-4
               border-b-[#B12D31] "
              >
                {" "}
                &
              </span>{" "}
              Experience
            </h2>

            <div className="sm:flex gap-5 py-3 ">
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

              <p className="text-[#666666] max-w-[350px] flex flex-col sm:gap-16 gap-5 items-start pt-5 ">
                <span>
                  From asbestos and lead abatement to mold remediation,
                  demolition, and full-scale construction projects, our team is
                  committed to completing every project with precision and care.
                </span>

                <button className="border-2 border-[#B12D31] my-3 px-4 py-[6px] text-black uppercase text-[14px] font-semibold ">
                  Learn more
                </button>
              </p>
            </div>
          </div>

          <div className="sm:flex ">
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

      <div
        className="relative py-10"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* The dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* The content, which sits on top of the overlay */}
        <div className="relative z-10 w-full flex justify-center items-center px-4">
          <div className="w-full max-w-6xl">
            {" "}
            {/* Added a max-width container for better control on large screens */}
            <h2 className="sm:text-[45px] text-3xl max-w-[750px] py-5 text-white font-semibold text-center sm:text-left">
              Some of Our Projects That Will Amaze You
            </h2>
            {/* THIS IS THE CORRECTED CONTAINER FOR THE IMAGES */}
            <div
              className="flex sm:grid sm:grid-cols-3 overflow-x-auto flex-nowrap gap-4 py-4  
        snap-x snap-mandatory 
        scroll-smooth
      "
            >
              {/*
          Now we map over an array, which is cleaner.
          Each child item needs to be told NOT to shrink and have a specific width on mobile.
        */}
              {[
                "/img1.jpg",
                "/img2.jpg",
                "/img3.jpg",
                "/img4.jpg",
                "/img5.jpg",
                "/img6.jpg",
              ].map((src, index) => (
                <div
                  key={index}
                  className="
              flex-shrink-0  /* CRITICAL: Prevents items from shrinking */
              w-10/12       /* Mobile: Each item is 10/12 of the screen width */
              sm:w-full     /* Desktop: Item width is controlled by the grid */
              snap-center   /* Bonus: Center the item when scrolling stops */
            "
                >
                  <img
                    src={src}
                    alt={`Project image ${index + 1}`}
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center pt-14">
              <button className="text-white border-2 border-white cursor-pointer py-2 px-3 hover:bg-white hover:text-black transition-all duration-300">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
