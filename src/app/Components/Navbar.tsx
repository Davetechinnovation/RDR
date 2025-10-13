import React from "react";

function Navbar() {
  return (
    <div className="w-full relative ">
      <div className="flex justify-between items-center md:p-8 ">
        <div>
          <img src="/rdr logo.webp" alt="" className="md:w-[139px] w-[120px] "/>
        </div>
        <div className="flex  justify-between md:gap-20 gap-5 ">
          <div className="flex items-center gap-1">
            <img src="/UserRectangle (1).png " alt="" />
            <p className="font-medium flex flex-col font-[Poppins]  ">
              <span className="text-[#B12D31] text-[15px] ">Call us</span>
              <span className="text-[13px]  "> 718-277-0803</span>
            </p>
          </div>

          <div className="flex items-center gap-1">
            <img src="/Envelope (1).png " alt="" />
            <p className="font-medium flex flex-col font-[Poppins]  ">
              <span className="text-[#B12D31] text-[15px] ">Mail us</span>
              <span className="text-[13px]  ">
                {" "}
                Info@rdrgeneralconstruction.com
              </span>
            </p>
          </div>

          <div className="flex items-center gap-1">
            <img src="/MapPinArea (1).png" alt="" />
            <p className="font-medium flex flex-col font-[Poppins]  ">
              <span className="text-[#B12D31] text-[15px] ">Address</span>
              <span className="text-[13px]  ">ST. ALBANS, NY. 11412</span>
            </p>
          </div>
        </div>
      </div>
      <div className="border-2 bg-white border-[#B12D31] p-5 rounded-lg absolute md:-bottom-12 left-1/2 z-50 w-[82%] -translate-x-1/2  ">
        <div className=" ">
            <div>
                <ul className="flex items-center gap-5">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Services</li>
                    <li className="cursor-pointer">Projects</li>
                    <li className="cursor-pointer">Contact Us</li> 
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
