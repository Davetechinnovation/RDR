import React from "react";

function Footer() {
  return (
    <div className="bg-[#232323] p-5 text-white ">
      <img src="/rdr logo.webp" alt="" />
      <div>
        <div>
          <p>
            At RDR General Construction, Building Safe, Strong, and Sustainable
            Spaces is more than a tagline—it’s the foundation of everything we
            do. We believe every project should stand the test of time
          </p>
          <div className="bg-[#DF383D] w-[48px] h-[48px] rounded-full flex justify-center items-center ">
            <img src="/facebook.png" alt="" className="w-[19px]" />
          </div>
          <div>
            <img src="/x.png" alt="" className="w-[17px]" />
          </div>

          <img src="/linkedin.png" alt="" className="w-[17px]" />
          <img src="/instagram.png" alt="" className="w-[17px]" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
