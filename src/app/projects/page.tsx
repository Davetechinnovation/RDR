import React from "react";

function page() {
  return (
    <div>
      <div className="relative">
        <img
          src="/bg.webp"
          alt=""
          className="brightness-50 w-full h-[200px] sm:h-[500px] md:h-[600px] object-cover"
        />
        <div className="absolute top-1/2 left-4  sm:left-24   text-white -translate-y-1/2">
          <p className="sm:border-l-10 border-l-8 border-l-[#4FE78B] font-bold md:text-[64px] sm:text-[40px] text-[25px] px-2 sm:px-6 max-w-[822px] sm:leading-[70px] ">
            Our Construction Projects
          </p>
        </div>
      </div>

      <div className="py-15 flex flex-col justify-center items-center ">
        <div className="px-2 flex flex-col justify-center items-center ">
          <h2 className="font-bold sm:text-[36px] text-[20px]">
            Abestos Abatement
          </h2>
          <p className="text-center">
            Our asbestos projects focus on creating safe, healthy environments
            through:
          </p>
          <ul className="list-disc pl-2">
            <li>Asbestos Tests & Inspections</li>
            <li>Certified Asbestos Removal</li>
            <li>Project Monitoring</li>
            <li>Air Quality Monitoring</li>
          </ul>
        </div>

        <div>
          <div className="flex overflow-x-auto gap-5 py-5 scrollbar-none snap-x snap-mandatory w-full max-w-full scroll-smooth px-1 ">
            <img src="pr1.png" alt="" className="min-w-[250px]" />
            <img src="pr2.png" alt="" className="min-w-[250px]" />
            <img src="pr3.png" alt="" className="min-w-[250px]" />
          </div>

          <div className="flex overflow-x-auto gap-5 py-5 scrollbar-none snap-x snap-mandatory w-full max-w-full scroll-smooth px-1 ">
            <img src="pr4.png" alt="" className="min-w-[250px]" />
            <img src="pr5.png" alt="" className="min-w-[250px]" />
            <img src="pr6.png" alt="" className="min-w-[250px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
