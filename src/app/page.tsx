import { Star } from "lucide-react";
import React from "react";

function page() {
  return (
    <div>
      <div className="relative h-full ">
        <img
          src="/rdr.webp"
          alt=""
          className="brightness-40 md:h-auto h-[375px] object-cover "
        />

        <div className="absolute top-1/2 -translate-y-1/2 lg:left-16 sm:left-8 px-4 text-white ">
          <h2 className="font-bold lg:text-[58px] md:text-[45px] sm:text-[32px] text-[28px] font-[Rubik] max-w-[830px] lg:leading-[68px] ">
            Your Trusted Partner in Construction & Remediation
          </h2>
          <p className="lg:text-[22px] md:text-[20px] sm:text-[17px] text-[15px] max-w-[722px] sm:py-5 py-2 ">
            At RDR General Construction, we combine expertise, precision, and
            integrity to deliver projects that stand the test of time from
            asbestos and lead abatement to demolition and full-scale
            construction.
          </p>
          <button className=" text-[13px] sm:text-[16px] mt-3 bg-[#B12D31] sm:px-5 px-3 sm:py-3 py-2 rounded-[2px] hover:scale-105 hover:bg-[#b12d31ea] duration-300 transition-all text-white cursor-pointer ">
            Start A Project
          </button>
        </div>
      </div>

      <div className="sm:flex  ">
        <div>
          <img
            src="/Rectangle.webp"
            alt=""
            className="object-cover max-w-[440px] h-full w-full  "
          />
        </div>
        <div className="flex flex-col justify-between  ">
          <div className="lg:px-20  px-4 ">
            <h2 className="md:text-[40px] sm:text-[32px] text-[23px]  font-bold max-w-[683px] sm:leading-[53px] py-5 ">
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

            <div className="sm:flex md:gap-5 sm:gap-2 md:py-3 text-[14px] md:text-[16px] ">
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

              <p className="text-[#666666] max-w-[350px] flex flex-col sm:gap-16 gap-5 items-start pt-5 sm:pt-0 ">
                <span>
                  From asbestos and lead abatement to mold remediation,
                  demolition, and full-scale construction projects, our team is
                  committed to completing every project with precision and care.
                </span>

                <button className="border-2 border-[#B12D31] mb-3 px-4 sm:py-[6px] py-[4px] text-black uppercase text-[14px] font-semibold ">
                  Learn more
                </button>
              </p>
            </div>
          </div>

          <div className="sm:flex sm:pt-8 ">
            <p className="bg-[#0097DC] p-5 flex flex-col text-white text-center w-full ">
              <span className="md:text-[40px] sm:text-[35px] text-[20px] font-bold  ">
                20+
              </span>{" "}
              <span className="text-[14px] md:text-[16px] sm:text-[15px] ">
                YEARS ESTABLISHED
              </span>
            </p>

            <p className="bg-black p-5 flex flex-col text-white text-center w-full">
              <span className="md:text-[40px] sm:text-[35px] text-[25px] font-bold  ">
                20+
              </span>{" "}
              <span className="text-[14px] md:text-[16px] sm:text-[15px] ">
                COMPLETED PROJECTS
              </span>
            </p>
          </div>
        </div>
      </div>

      <div
        className="relative py-10 "
        style={{
          backgroundImage: "url('/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 w-full flex justify-center items-center px-2 sm:px-10">
          <div className="w-full max-w-6x">
            <h2 className="md:text-[45px] sm:text-[35px] text-2xl max-w-[750px] py-5 text-white font-semibold text-center sm:text-left">
              Some of Our Projects That Will Amaze You
            </h2>
            {/* THIS IS THE CORRECTED CONTAINER FOR THE IMAGES */}
            <div className="flex sm:grid sm:grid-cols-3 overflow-x-auto flex-nowrap gap-4 py-4 snap-x snap-mandatory scroll-smooth">
              {[
                "/img1.webp",
                "/img2.webp",
                "/img3.webp",
                "/img4.webp",
                "/img5.webp",
                "/img6.webp",
              ].map((src, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-9/12  sm:w-full snap-center "
                >
                  <img
                    src={src}
                    alt={`Project image ${index + 1}`}
                    className="w-full h-full object-cover rounded-[10px] sm:rounded-[20px]"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center pt-5">
              <button className="text-white border-2 border-white cursor-pointer py-2 px-3 hover:bg-white hover:text-black transition-all duration-300">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="sm:text-[45px] text-[30px] font-bold flex flex-col  text-center justify-center items-center my-10 ">
          Clients Testimonial{" "}
          <span className="w-[53px] bg-[#B12D31] p-[2.5px]  "></span>{" "}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 justify-center items-center py-5 sm:gap-10 gap-5 md:px-25 sm:px-10 px-5">
          <div className="shadow-md shadow-gray-400 px-5 py-2 flex flex-col justify-center items-center ">
            <div className="flex gap-3 pt-7">
              <Star className="w-6 h-6" fill="#FFB400" stroke="#FFB400" />
              <Star className="w-6 h-6" fill="#FFB400" stroke="#FFB400" />
              <Star className="w-6 h-6" fill="#FFB400" stroke="#FFB400" />
              <Star className="w-6 h-6" fill="#FFB400" stroke="#FFB400" />
              <Star className="w-6 h-6" fill="#FFB400" stroke="#FFB400" />
            </div>

            <p className="flex justify-center items-center  py-12  ">
              RDR handled our asbestos removal with the utmost professionalism.
              The team was efficient, safe, and left the site spotless.
            </p>
            <p className="font-medium pb-7 ">— James R., Property Manager</p>
          </div>

          <div className="shadow-md shadow-gray-400 px-5 py-2 flex flex-col justify-center items-center ">
            <div className="flex gap-3 pt-7 ">
              <Star className="w-6 h-6" fill="#FFB400" stroke="#FFB400" />
              <Star className="w-6 h-6" fill="#FFB400" stroke="#FFB400" />
              <Star className="w-6 h-6" fill="#FFB400" stroke="#FFB400" />
              <Star className="w-6 h-6" fill="#FFB400" stroke="#FFB400" />
              <Star className="w-6 h-6" fill="#FFB400" stroke="#FFB400" />
            </div>

            <p className="flex justify-center items-center  py-12  ">
              From planning to execution, their demolition crew was exceptional.
              Everything was completed on time.
            </p>
            <p className="font-medium pb-7 ">
              — Angela M., Real Estate Developer
            </p>
          </div>

          <div className="shadow-md shadow-gray-400 px-5 py-2 flex flex-col justify-center items-center ">
            <div className="flex gap-3 pt-7 ">
              <Star className="w-6 h-6" fill="#FFB400" stroke="#FFB400" />
              <Star className="w-6 h-6" fill="#FFB400" stroke="#FFB400" />
              <Star className="w-6 h-6" fill="#FFB400" stroke="#FFB400" />
              <Star className="w-6 h-6" fill="#FFB400" stroke="#FFB400" />
              <Star className="w-6 h-6" fill="#FFB400" stroke="#FFB400" />
            </div>

            <p className="flex justify-center items-center  py-12 ">
              We hired RDR for mold remediation in our commercial property, and
              they exceeded expectations.
            </p>
            <p className="font-medium pb-7 ">— David K., Business Owner</p>
          </div>
        </div>
      </div>

      <div className="sm:py-25 py-10 ">
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center sm:gap-20 gap-10 sm:px-10 px-3">
          <img src="/joined.webp" alt="" />
          <div className="flex flex-col justify-between sm:gap-14 gap-5 ">
            <div className="flex flex-col sm:gap-8 gap-4">
              <h2 className="font-bold text-[25px] sm:text-[30px] md:text-[45px] relative ">
                Who we are{" "}
                <span className="w-[53px] bg-[#B12D31] p-[2.5px] absolute -bottom-2 left-0 "></span>{" "}
              </h2>
              <p className="text-[#120F0F] py-5 sm:text-[18px] max-w-[540px] ">
                At RDR General Construction, we are more than just builders we
                are problem solvers, innovators, and trusted partners in
                development, construction management, and general contracting.{" "}
                <br /> <br /> With years of proven experience, our team
                specializes in asbestos and lead abatement, mold remediation,
                demolition, and full-scale construction projects. Every project
                we take on is guided by three core values: safety, quality, and
                integrity.
              </p>
            </div>

            <div className="flex items-center ">
              <div className="relative cursor-pointer hover:scale-105 hover:bg-[#b12d31ea] duration-300 transition-all ">
                <button className="bg-[#0883BB] py-3 px-3 text-white relative cursor-pointer duration-300 transition-all ">
                  Learn More About us{" "}
                </button>
                <span className="bg-black absolute -right-6 top-0 h-full flex flex-col justify-center items-center px-2 skew-x-8 ">
                  <img src="/icon.webp" alt="" className="w-[12px]" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
