import React from "react";

function Footer() {
  return (
    <div className="bg-[#232323] p-5 sm:px-10 px-4 text-white ">
      <img src="/rdr logo.webp" alt="" />
      <div className="flex flex-wrap justify-between gap-7 ">
        <div>
          <p className="max-w-[412px] py-5 ">
            At RDR General Construction, Building Safe, Strong, and Sustainable
            Spaces is more than a tagline it’s the foundation of everything we
            do. We believe every project should stand the test of time
          </p>
          <div className="flex gap-2 items-center">
            <div className="bg-[#DF383D] w-[48px] h-[48px] rounded-full flex justify-center items-center ">
              <img src="/facebook.png" alt="" className="w-[19px]" />
            </div>
            <div className="bg-[#DF383D] w-[48px] h-[48px] rounded-full flex justify-center items-center ">
              <img src="/x.png" alt="" className="w-[17px]" />
            </div>
            <div className="bg-[#DF383D] w-[48px] h-[48px] rounded-full flex justify-center items-center ">
              <img src="/linkedin.png" alt="" className="w-[17px]" />
            </div>
            <div className="bg-[#DF383D] w-[48px] h-[48px] rounded-full flex justify-center items-center ">
              <img src="/instagram.png" alt="" className="w-[17px]" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-[22px] font-extrabold underline font-[exo] ">
            Quick Link
          </h2>
          <div className="flex flex-col gap-5  py-2">
            <p>About</p>
            <p>Services</p>
            <p>Projects</p>
            <p>Contact Us</p>
          </div>
        </div>

        <div>
          <h2 className="text-[22px] font-extrabold underline font-[exo] ">
            Contact Info
          </h2>
          <div className="flex flex-col gap-3 py-2 ">
            <p>
              <span className="text-[#FFCED0] font-bold ">Address:</span>{" "}
              <span>199-02 LINDEN BLVD, UNIT #3 ST. ALBANS, NY. 11412</span>{" "}
            </p>
            <p>
              <span className="text-[#FFCED0] font-bold ">Email:</span>{" "}
              <span>info@rdr.COM</span>{" "}
            </p>
            <p>
              <span className="text-[#FFCED0] font-bold ">Cell Phone:</span>{" "}
              <span>917-795-6392, 6785580685, 347-684-6974</span>{" "}
            </p>
            <p>
              <span className="text-[#FFCED0] font-bold ">Work Time:</span>{" "}
              <span>Mon-Fri: 08.00 - 16.00</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="py-5 flex gap-2 justify-between items-center ">
        <div>
          <p>
            © 2025 RDR CONTRACTING GROUP INC. www.maragroup18.com. All Rights
            Reserved.
          </p>
        </div>
        <div>
          <p className="bg-white ">hi</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
