import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-[#232323] p-5 sm:px-10 px-4 text-white ">
      <img src="/rdr logo.webp" alt="" />
      <div className="flex flex-wrap justify-between gap-7 ">
        <div>
          <p className="max-w-[412px] py-5 text-[14px] sm:text-[16px] ">
            At RDR General Construction, Building Safe, Strong, and Sustainable
            Spaces is more than a tagline it’s the foundation of everything we
            do. We believe every project should stand the test of time
          </p>
          <div className="flex gap-2 items-center">
            <div className="bg-[#DF383D] sm:w-[48px] sm:h-[48px] w-[38px] h-[38px] rounded-full flex justify-center items-center ">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 0C13.3125 0 14 0.6875 14 1.5V12.5C14 13.3438 13.3125 14 12.5 14H8.1875V9.25H10L10.3438 7H8.1875V5.5625C8.1875 4.9375 8.5 4.34375 9.46875 4.34375H10.4375V2.4375C10.4375 2.4375 9.5625 2.28125 8.6875 2.28125C6.9375 2.28125 5.78125 3.375 5.78125 5.3125V7H3.8125V9.25H5.78125V14H1.5C0.65625 14 0 13.3438 0 12.5V1.5C0 0.6875 0.65625 0 1.5 0H12.5Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="bg-[#DF383D] sm:w-[48px] sm:h-[48px] w-[38px] h-[38px] rounded-full flex justify-center items-center ">
              <svg
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3438 3.21875C14.3438 3.375 14.3438 3.5 14.3438 3.65625C14.3438 8 11.0625 12.9688 5.03125 12.9688C3.15625 12.9688 1.4375 12.4375 0 11.5C0.25 11.5312 0.5 11.5625 0.78125 11.5625C2.3125 11.5625 3.71875 11.0312 4.84375 10.1562C3.40625 10.125 2.1875 9.1875 1.78125 7.875C2 7.90625 2.1875 7.9375 2.40625 7.9375C2.6875 7.9375 3 7.875 3.25 7.8125C1.75 7.5 0.625 6.1875 0.625 4.59375V4.5625C1.0625 4.8125 1.59375 4.9375 2.125 4.96875C1.21875 4.375 0.65625 3.375 0.65625 2.25C0.65625 1.625 0.8125 1.0625 1.09375 0.59375C2.71875 2.5625 5.15625 3.875 7.875 4.03125C7.8125 3.78125 7.78125 3.53125 7.78125 3.28125C7.78125 1.46875 9.25 0 11.0625 0C12 0 12.8438 0.375 13.4688 1.03125C14.1875 0.875 14.9062 0.59375 15.5312 0.21875C15.2812 1 14.7812 1.625 14.0938 2.03125C14.75 1.96875 15.4062 1.78125 15.9688 1.53125C15.5312 2.1875 14.9688 2.75 14.3438 3.21875Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="bg-[#DF383D] sm:w-[48px] sm:h-[48px] w-[38px] h-[38px] rounded-full flex justify-center items-center ">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.125 13.9688H0.21875V4.625H3.125V13.9688ZM1.65625 3.375C0.75 3.375 0 2.59375 0 1.65625C0 0.75 0.75 0 1.65625 0C2.59375 0 3.34375 0.75 3.34375 1.65625C3.34375 2.59375 2.59375 3.375 1.65625 3.375ZM13.9688 13.9688H11.0938V9.4375C11.0938 8.34375 11.0625 6.96875 9.5625 6.96875C8.0625 6.96875 7.84375 8.125 7.84375 9.34375V13.9688H4.9375V4.625H7.71875V5.90625H7.75C8.15625 5.1875 9.09375 4.40625 10.5 4.40625C13.4375 4.40625 14 6.34375 14 8.84375V13.9688H13.9688Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="bg-[#DF383D] sm:w-[48px] sm:h-[48px] w-[38px] h-[38px] rounded-full flex justify-center items-center ">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.03125 3.40625C9 3.40625 10.625 5.03125 10.625 7C10.625 9 9 10.5938 7.03125 10.5938C5.03125 10.5938 3.4375 9 3.4375 7C3.4375 5.03125 5.03125 3.40625 7.03125 3.40625ZM7.03125 9.34375C8.3125 9.34375 9.34375 8.3125 9.34375 7C9.34375 5.71875 8.3125 4.6875 7.03125 4.6875C5.71875 4.6875 4.6875 5.71875 4.6875 7C4.6875 8.3125 5.75 9.34375 7.03125 9.34375ZM11.5938 3.28125C11.5938 3.75 11.2188 4.125 10.75 4.125C10.2812 4.125 9.90625 3.75 9.90625 3.28125C9.90625 2.8125 10.2812 2.4375 10.75 2.4375C11.2188 2.4375 11.5938 2.8125 11.5938 3.28125ZM13.9688 4.125C14.0312 5.28125 14.0312 8.75 13.9688 9.90625C13.9062 11.0312 13.6562 12 12.8438 12.8438C12.0312 13.6562 11.0312 13.9062 9.90625 13.9688C8.75 14.0312 5.28125 14.0312 4.125 13.9688C3 13.9062 2.03125 13.6562 1.1875 12.8438C0.375 12 0.125 11.0312 0.0625 9.90625C0 8.75 0 5.28125 0.0625 4.125C0.125 3 0.375 2 1.1875 1.1875C2.03125 0.375 3 0.125 4.125 0.0625C5.28125 0 8.75 0 9.90625 0.0625C11.0312 0.125 12.0312 0.375 12.8438 1.1875C13.6562 2 13.9062 3 13.9688 4.125ZM12.4688 11.125C12.8438 10.2188 12.75 8.03125 12.75 7C12.75 6 12.8438 3.8125 12.4688 2.875C12.2188 2.28125 11.75 1.78125 11.1562 1.5625C10.2188 1.1875 8.03125 1.28125 7.03125 1.28125C6 1.28125 3.8125 1.1875 2.90625 1.5625C2.28125 1.8125 1.8125 2.28125 1.5625 2.875C1.1875 3.8125 1.28125 6 1.28125 7C1.28125 8.03125 1.1875 10.2188 1.5625 11.125C1.8125 11.75 2.28125 12.2188 2.90625 12.4688C3.8125 12.8438 6 12.75 7.03125 12.75C8.03125 12.75 10.2188 12.8438 11.1562 12.4688C11.75 12.2188 12.25 11.75 12.4688 11.125Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <h2 className="sm:text-[22px] text-[19px] font-extrabold underline font-[exo] ">
            Quick Link
          </h2>
          <div className="flex flex-col gap-2  py-2">
            <Link href="/">
              {" "}
              <p>Home</p>
            </Link>
            <Link href="/about">
              {" "}
              <p>About</p>
            </Link>
            <Link href="/services">
              {" "}
              <p>Services</p>
            </Link>
            <Link href="/projects">
              {" "}
              <p>Projects</p>
            </Link>
            <Link href="/contact">
              {" "}
              <p>Contact Us</p>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="sm:text-[22px] text-[19px] font-extrabold underline font-[exo] ">
            Contact Info
          </h2>
          <div className="flex flex-col gap-3 py-2 ">
            <p className="text-[14px] sm:text-[16px] ">
              <span className="text-[#FFCED0] font-bold  ">Address:</span>{" "}
              <span>199-02 LINDEN BLVD, UNIT #3 ST. ALBANS, NY. 11412</span>{" "}
            </p>
            <p className="text-[14px] sm:text-[16px] ">
              <span className="text-[#FFCED0] font-bold ">Email:</span>{" "}
              <span>info@rdr.com</span>{" "}
            </p>
            <p className="text-[14px] sm:text-[16px] ">
              <span className="text-[#FFCED0] font-bold ">Cell Phone:</span>{" "}
              <span>917-795-6392, 6785580685, 347-684-6974</span>{" "}
            </p>
            <p className="text-[14px] sm:text-[16px] ">
              <span className="text-[#FFCED0] font-bold ">Work Time:</span>{" "}
              <span>Mon-Fri: 08.00 - 16.00</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="py-5 flex gap-2 justify-between items-center ">
        <div>
          <p className="text-[14px] sm:text-[16px] ">
            © 2025 RDR CONTRACTING GROUP INC. www.maragroup18.com. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
