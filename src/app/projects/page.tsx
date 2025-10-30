"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function page() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: false }, [
    Autoplay({ delay: 2500, stopOnInteraction: false }),
  ]);

  const [emblaRef2] = useEmblaCarousel({ loop: true, dragFree: false }, [
    Autoplay({ delay: 2500, stopOnInteraction: false, playOnInit: true }),
  ]);

  const [emblaRef3] = useEmblaCarousel({ loop: true, dragFree: false }, [
    Autoplay({ delay: 2500, stopOnInteraction: false }),
  ]);

  const [emblaRef4] = useEmblaCarousel({ loop: true, dragFree: false }, [
    Autoplay({ delay: 2500, stopOnInteraction: false, playOnInit: true }),
  ]);

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

        <div className="w-full">
          <div className="relative px-1">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex py-5">
                <div className="flex-[0_0_calc((100%-40px)/3)] min-w-[300px] sm:mr-4 mr-3">
                  <img src="pr1.webp" alt="" className="w-full" />
                </div>
                <div className="flex-[0_0_calc((100%-40px)/3)] min-w-[300px] sm:mr-4 mr-3">
                  <img src="pr2.webp" alt="" className="w-full" />
                </div>
                <div className="flex-[0_0_calc((100%-40px)/3)] min-w-[300px] sm:mr-4 mr-3">
                  <img src="pr3.webp" alt="" className="w-full" />
                </div>
                <div className="flex-[0_0_calc((100%-40px)/3)] min-w-[300px] sm:mr-4 mr-3">
                  <img src="pr1.webp" alt="" className="w-full" />
                </div>
                <div className="flex-[0_0_calc((100%-40px)/3)] min-w-[300px] sm:mr-4 mr-3">
                  <img src="pr2.webp" alt="" className="w-full" />
                </div>
                <div className="flex-[0_0_calc((100%-40px)/3)] min-w-[300px] sm:mr-4 mr-3">
                  <img src="pr3.webp" alt="" className="w-full" />
                </div>
                <div className="flex-[0_0_calc((100%-40px)/3)] min-w-[300px] sm:mr-4 mr-3">
                  <img src="pr1.webp" alt="" className="w-full" />
                </div>
                <div className="flex-[0_0_calc((100%-40px)/3)] min-w-[300px] sm:mr-4 mr-3">
                  <img src="pr2.webp" alt="" className="w-full" />
                </div>
                <div className="flex-[0_0_calc((100%-40px)/3)] min-w-[300px] sm:mr-4 mr-3">
                  <img src="pr3.webp" alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative px-1">
            <div className="overflow-hidden" ref={emblaRef2}>
              <div className="flex ">
                <div className="flex-[0_0_calc((100%-40px)/3)] min-w-[300px] sm:ml-5 ml-3">
                  <img src="pr6.webp" alt="" className="w-full" />
                </div>
                <div className="flex-[0_0_calc((100%-40px)/3)] min-w-[300px] sm:ml-5 ml-3">
                  <img src="pr5.webp" alt="" className="w-full" />
                </div>
                <div className="flex-[0_0_calc((100%-40px)/3)] min-w-[300px] sm:ml-5 ml-3">
                  <img src="pr4.webp" alt="" className="w-full" />
                </div>
                <div className="flex-[0_0_calc((100%-40px)/3)] min-w-[300px] sm:ml-5 ml-3">
                  <img src="pr6.webp" alt="" className="w-full" />
                </div>
                <div className="flex-[0_0_calc((100%-40px)/3)] min-w-[300px] sm:ml-5 ml-3">
                  <img src="pr5.webp" alt="" className="w-full" />
                </div>
                <div className="flex-[0_0_calc((100%-40px)/3)] min-w-[300px] sm:ml-5 ml-3">
                  <img src="pr4.webp" alt="" className="w-full" />
                </div>
                <div className="flex-[0_0_calc((100%-40px)/3)] min-w-[300px] sm:ml-5 ml-3">
                  <img src="pr6.webp" alt="" className="w-full" />
                </div>
                <div className="flex-[0_0_calc((100%-40px)/3)] min-w-[300px] sm:ml-5 ml-3">
                  <img src="pr5.webp" alt="" className="w-full" />
                </div>
                <div className="flex-[0_0_calc((100%-40px)/3)] min-w-[300px] sm:ml-5 ml-3">
                  <img src="pr4.webp" alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-2 flex flex-col justify-center items-center pt-10 max-w-[644px] ">
          <h2 className="font-bold sm:text-[36px] text-[20px]">
            Lead Abatement
          </h2>
          <p className="text-center">
            We have successfully managed lead hazard projects for residential,
            commercial, and institutional clients, including:
          </p>
          <ul className="list-disc pl-2">
            <li>Lead Tests & Inspections</li>
            <li>Lead Paint Removal</li>
            <li>Lead Dust Wipe Services</li>
            <li>HPD Lead Violation Clearance</li>
            <li>NYCDOH Violation Clearance</li>
          </ul>
        </div>
      </div>{" "}
      <div className="w-full">
        <div className="relative px-1">
          <div className="overflow-hidden" ref={emblaRef3}>
            <div className="flex pb-5">
              <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 ">
                <img src="i1.webp" alt="" className="w-full" />
               
              </div>
              <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 ">
                <img src="i2.webp" alt="" className="w-full" />
                
              </div>
              <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 ">
                <img src="i3.webp" alt="" className="w-full" />
               
              </div>
              <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 ">
                <img src="i4.webp" alt="" className="w-full" />
                
              </div>
              <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 ">
                <img src="i5.webp" alt="" className="w-full" />
               
              </div>
              <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 ">
                <img src="i1.webp" alt="" className="w-full" />
                
              </div>
              <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 ">
                <img src="i2.webp" alt="" className="w-full" />
               
              </div>
              <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 ">
                <img src="i3.webp" alt="" className="w-full" />
               
              </div>
              <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 ">
                <img src="i4.webp" alt="" className="w-full" />
               
              </div>
              <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 ">
                <img src="i5.webp" alt="" className="w-full" />
                
              </div>
            </div>
          </div>
        </div>

        <div className="relative px-1">
          <div className="overflow-hidden" ref={emblaRef4}>
            <div className="flex">
              <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 ">
                <img src="i6.webp" alt="" className="w-full" />
                
              </div>
              <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 ">
                <img src="i7.webp" alt="" className="w-full" />
                
              </div>
              <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 ">
                <img src="i8.webp" alt="" className="w-full" />
               
              </div>
              <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 ">
                <img src="i9.webp" alt="" className="w-full" />
               
              </div>
              <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 ">
                <img src="i10.webp" alt="" className="w-full" />
                
              </div>
              <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 ">
                <img src="i6.webp" alt="" className="w-full" />
                
              </div>
              <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 ">
                <img src="i7.webp" alt="" className="w-full" />
                
              </div>
              <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 ">
                <img src="i8.webp" alt="" className="w-full" />
               
              </div>
              <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 ">
                <img src="i9.webp" alt="" className="w-full" />
               
              </div>
              <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 ">
                <img src="i10.webp" alt="" className="w-full" />
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
