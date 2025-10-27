"use client";

import { Plus, Minus } from "lucide-react";
import React, { useState } from "react";

function page() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };
  return (
    <div>
      <div className="relative">
        <img
          src="/bg.webp"
          alt=""
          className="brightness-50 w-full h-[200px] sm:h-[500px] md:h-[600px] object-cover"
        />
        <div className="absolute top-1/2 left-4  sm:left-24   text-white -translate-y-1/2">
          <p className="sm:border-l-10 border-l-8 border-l-[#4FE78B] font-bold md:text-[64px] sm:text-[40px] text-[25px] px-2 sm:px-4 max-w-[822px] sm:leading-[70px] ">
            Contact us
          </p>
        </div>
      </div>

      <div className="md:px-20 sm:px-10 px-5 py-10 ">
        <h1 className="text-[18px] sm:text-[30px] md:text-[40px] font-bold text-[#B12D31]  ">
          Call: 718-277-0803
        </h1>
        <p>We Can’t Wait to Make Your Ideas a Reality</p>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-2 ">
          <div className="sm:my-8 my-5 ">
            <div className="relative ">
              <h2 className="text-[25px] sm:text-[35px] md:text-[45px] font-bold py-3 ">
                Get In Touch
              </h2>
              <p className="border-3 border-[#B12D31] w-[50px] absolute bottom-0 left-0 "></p>
            </div>

            <form action="" className="flex flex-col gap-5 py-5 ">
              <div>
                <input
                  type="text"
                  name="text"
                  id=""
                  placeholder="Name"
                  className="outline-none py-2 bg-[#F8F8F8] px-2 w-full "
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Email"
                  required
                  className="outline-none py-2 bg-[#F8F8F8] px-2 w-full "
                />
              </div>
              <div>
                <input
                  type="text"
                  name="text"
                  id=""
                  placeholder="Message"
                  required
                  className="outline-none py-2 pb-20 bg-[#F8F8F8] px-2 w-full "
                />
              </div>
              <div className="flex flex-col justify-end items-end ">
                <button className="border-3 border-[#B12D31] px-7 py-[2px] font-semibold text-[14px] cursor-pointer hover:bg-gray-100 hover:scale-105 duration-300 transition-all ">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="bg-[#F8F8F8] w-full p-4 ">
            <div className="py-3 border-b ">
              <h2 className="flex justify-between gap-5 font-bold">
                Do you provide free estimates?{" "}
                <span
                  className="bg-[#B12D31] text-white w-[25px] h-[25px] rounded-full flex flex-col justify-center items-center cursor-pointer"
                  onClick={() => toggleItem(0)}
                >
                  {expandedItems.includes(0) ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>{" "}
              </h2>
              <p className={`text-[14px] text-[#120F0F] py-3 transition-all duration-300 ease-in-out ${
                expandedItems.includes(0) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                Yes, we offer free consultations and estimates to help clients
                plan their projects with confidence.
              </p>
            </div>

            <div className="py-3 border-b ">
              <h2 className="flex justify-between gap-5 font-bold">
                Are your services certified and compliant with regulations?
                <span
                  className="bg-[#B12D31] text-white w-[25px] h-[25px] rounded-full flex flex-col justify-center items-center cursor-pointer"
                  onClick={() => toggleItem(1)}
                >
                  {expandedItems.includes(1) ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>{" "}
              </h2>
              <p className={`text-[14px] text-[#120F0F] py-3 transition-all duration-300 ease-in-out ${
                expandedItems.includes(1) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                Absolutely. All our work is licensed, insured, and fully
                compliant with New York building regulations.
              </p>
            </div>

            <div className="py-3 border-b ">
              <h2 className="flex justify-between gap-5 font-bold">
                What types of projects do you handle?
                <span
                  className="bg-[#B12D31] text-white w-[25px] h-[25px] rounded-full flex flex-col justify-center items-center cursor-pointer"
                  onClick={() => toggleItem(2)}
                >
                  {expandedItems.includes(2) ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>{" "}
              </h2>
              <p className={`text-[14px] text-[#120F0F] py-3 transition-all duration-300 ease-in-out ${
                expandedItems.includes(2) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                We handle residential, commercial, and industrial construction
                projects of all sizes.
              </p>
            </div>

            <div className="py-3 border-b ">
              <h2 className="flex justify-between gap-5 font-bold">
                How long does a typical project take?
                <span
                  className="bg-[#B12D31] text-white w-[25px] h-[25px] rounded-full flex flex-col justify-center items-center cursor-pointer"
                  onClick={() => toggleItem(3)}
                >
                  {expandedItems.includes(3) ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>{" "}
              </h2>
              <p className={`text-[14px] text-[#120F0F] py-3 transition-all duration-300 ease-in-out ${
                expandedItems.includes(3) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                Timelines vary by project scope, but we always provide a clear
                schedule before starting and keep you updated throughout.
              </p>
            </div>

            <div className="py-3 border-b ">
              <h2 className="flex justify-between gap-5 font-bold">
                Do you handle violation removals?
                <span
                  className="bg-[#B12D31] text-white w-[25px] h-[25px] rounded-full flex flex-col justify-center items-center cursor-pointer"
                  onClick={() => toggleItem(4)}
                >
                  {expandedItems.includes(4) ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>{" "}
              </h2>
              <p className={`text-[14px] text-[#120F0F] py-3 transition-all duration-300 ease-in-out ${
                expandedItems.includes(4) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                Yes, we assist with resolving building violations and bringing
                properties up to code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
