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
    </div>
  );
}

export default page;
