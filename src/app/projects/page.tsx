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

            <div className="z-50 absolute top-1/2 -translate-y-1/2 sm:left-5 left-10 cursor-pointer">
              <svg
                width="45"
                height="45"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6_1591)">
                  <path
                    d="M29 5.4375C24.3398 5.4375 19.7842 6.81942 15.9094 9.4085C12.0346 11.9976 9.01449 15.6775 7.2311 19.983C5.44771 24.2885 4.98109 29.0261 5.89026 33.5968C6.79942 38.1675 9.04353 42.3659 12.3388 45.6612C15.6341 48.9565 19.8325 51.2006 24.4032 52.1098C28.9739 53.0189 33.7115 52.5523 38.017 50.7689C42.3225 48.9855 46.0024 45.9655 48.5915 42.0906C51.1806 38.2158 52.5625 33.6602 52.5625 29C52.5559 22.7529 50.0713 16.7635 45.6539 12.3461C41.2365 7.92869 35.2471 5.4441 29 5.4375ZM33.9074 36.7802C34.0758 36.9486 34.2093 37.1485 34.3005 37.3685C34.3916 37.5885 34.4385 37.8243 34.4385 38.0625C34.4385 38.3007 34.3916 38.5365 34.3005 38.7565C34.2093 38.9765 34.0758 39.1764 33.9074 39.3448C33.739 39.5132 33.539 39.6468 33.319 39.738C33.099 39.8291 32.8632 39.876 32.625 39.876C32.3869 39.876 32.151 39.8291 31.931 39.738C31.711 39.6468 31.5111 39.5132 31.3427 39.3448L22.2802 30.2823C22.1116 30.114 21.978 29.9141 21.8867 29.6941C21.7955 29.474 21.7486 29.2382 21.7486 29C21.7486 28.7618 21.7955 28.526 21.8867 28.3059C21.978 28.0859 22.1116 27.886 22.2802 27.7177L31.3427 18.6552C31.5111 18.4868 31.711 18.3532 31.931 18.262C32.151 18.1709 32.3869 18.124 32.625 18.124C32.8632 18.124 33.099 18.1709 33.319 18.262C33.539 18.3532 33.739 18.4868 33.9074 18.6552C34.0758 18.8236 34.2093 19.0235 34.3005 19.2435C34.3916 19.4635 34.4385 19.6993 34.4385 19.9375C34.4385 20.1757 34.3916 20.4115 34.3005 20.6315C34.2093 20.8515 34.0758 21.0514 33.9074 21.2198L26.1249 29L33.9074 36.7802Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_1591">
                    <rect width="58" height="58" fill="white" />
                  </clipPath>
                </defs>
              </svg>
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

            <div className="absolute top-1/2 -translate-y-1/2 sm:right-5 right-10 cursor-pointer z-50">
              <svg
                width="45"
                height="45"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6_1600)">
                  <path
                    d="M29 5.4375C33.6602 5.4375 38.2158 6.81942 42.0906 9.4085C45.9654 11.9976 48.9855 15.6775 50.7689 19.983C52.5523 24.2885 53.0189 29.0261 52.1097 33.5968C51.2006 38.1675 48.9565 42.3659 45.6612 45.6612C42.3659 48.9565 38.1675 51.2006 33.5968 52.1098C29.0261 53.0189 24.2885 52.5523 19.983 50.7689C15.6775 48.9855 11.9976 45.9655 9.40849 42.0906C6.8194 38.2158 5.43749 33.6602 5.43749 29C5.44409 22.7529 7.92868 16.7635 12.3461 12.3461C16.7635 7.92869 22.7529 5.4441 29 5.4375ZM24.0926 36.7802C23.9242 36.9486 23.7907 37.1485 23.6995 37.3685C23.6084 37.5885 23.5615 37.8243 23.5615 38.0625C23.5615 38.3007 23.6084 38.5365 23.6995 38.7565C23.7907 38.9765 23.9242 39.1764 24.0926 39.3448C24.261 39.5132 24.461 39.6468 24.681 39.738C24.901 39.8291 25.1368 39.876 25.375 39.876C25.6131 39.876 25.849 39.8291 26.069 39.738C26.289 39.6468 26.4889 39.5132 26.6573 39.3448L35.7198 30.2823C35.8884 30.114 36.022 29.9141 36.1133 29.6941C36.2045 29.474 36.2514 29.2382 36.2514 29C36.2514 28.7618 36.2045 28.526 36.1133 28.3059C36.022 28.0859 35.8884 27.886 35.7198 27.7177L26.6573 18.6552C26.4889 18.4868 26.289 18.3532 26.069 18.262C25.849 18.1709 25.6131 18.124 25.375 18.124C25.1368 18.124 24.901 18.1709 24.681 18.262C24.461 18.3532 24.261 18.4868 24.0926 18.6552C23.9242 18.8236 23.7907 19.0235 23.6995 19.2435C23.6084 19.4635 23.5615 19.6993 23.5615 19.9375C23.5615 20.1757 23.6084 20.4115 23.6995 20.6315C23.7907 20.8515 23.9242 21.0514 24.0926 21.2198L31.8751 29L24.0926 36.7802Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_1600">
                    <rect
                      width="58"
                      height="58"
                      fill="white"
                      transform="matrix(-1 0 0 1 58 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="px-2 flex flex-col justify-center items-center py-10 max-w-[644px] ">
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

        <div className="w-full">
          <div className="relative px-1">
            <div className="overflow-hidden" ref={emblaRef3}>
              <div className="flex py-5">
                <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 relative">
                  <img src="i1.webp" alt="" className="w-full" />
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm font-bold z-10 rounded">
                    i1.webp
                  </div>
                </div>
                <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 relative">
                  <img src="i2.webp" alt="" className="w-full" />
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm font-bold z-10 rounded">
                    i2.webp
                  </div>
                </div>
                <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 relative">
                  <img src="i3.webp" alt="" className="w-full" />
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm font-bold z-10 rounded">
                    i3.webp
                  </div>
                </div>
                <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 relative">
                  <img src="i4.webp" alt="" className="w-full" />
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm font-bold z-10 rounded">
                    i4.webp
                  </div>
                </div>
                <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250pxx] sm:mr-4 mr-3 relative">
                  <img src="i5.webp" alt="" className="w-full" />
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm font-bold z-10 rounded">
                    i5.webp
                  </div>
                </div>
                <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 relative">
                  <img src="i1.webp" alt="" className="w-full" />
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm font-bold z-10 rounded">
                    i1.webp (2)
                  </div>
                </div>
                <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 relative">
                  <img src="i2.webp" alt="" className="w-full" />
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm font-bold z-10 rounded">
                    i2.webp (2)
                  </div>
                </div>
                <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 relative">
                  <img src="i3.webp" alt="" className="w-full" />
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm font-bold z-10 rounded">
                    i3.webp (2)
                  </div>
                </div>
                <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 relative">
                  <img src="i4.webp" alt="" className="w-full" />
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm font-bold z-10 rounded">
                    i4.webp (2)
                  </div>
                </div>
                <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 relative">
                  <img src="i5.webp" alt="" className="w-full" />
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm font-bold z-10 rounded">
                    i5.webp (2)
                  </div>
                </div>
              </div>
            </div>

            <div className="z-50 absolute top-1/2 -translate-y-1/2 sm:left-5 left-10 cursor-pointer">
              <svg
                width="45"
                height="45"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6_1591)">
                  <path
                    d="M29 5.4375C24.3398 5.4375 19.7842 6.81942 15.9094 9.4085C12.0346 11.9976 9.01449 15.6775 7.2311 19.983C5.44771 24.2885 4.98109 29.0261 5.89026 33.5968C6.79942 38.1675 9.04353 42.3659 12.3388 45.6612C15.6341 48.9565 19.8325 51.2006 24.4032 52.1098C28.9739 53.0189 33.7115 52.5523 38.017 50.7689C42.3225 48.9855 46.0024 45.9655 48.5915 42.0906C51.1806 38.2158 52.5625 33.6602 52.5625 29C52.5559 22.7529 50.0713 16.7635 45.6539 12.3461C41.2365 7.92869 35.2471 5.4441 29 5.4375ZM33.9074 36.7802C34.0758 36.9486 34.2093 37.1485 34.3005 37.3685C34.3916 37.5885 34.4385 37.8243 34.4385 38.0625C34.4385 38.3007 34.3916 38.5365 34.3005 38.7565C34.2093 38.9765 34.0758 39.1764 33.9074 39.3448C33.739 39.5132 33.539 39.6468 33.319 39.738C33.099 39.8291 32.8632 39.876 32.625 39.876C32.3869 39.876 32.151 39.8291 31.931 39.738C31.711 39.6468 31.5111 39.5132 31.3427 39.3448L22.2802 30.2823C22.1116 30.114 21.978 29.9141 21.8867 29.6941C21.7955 29.474 21.7486 29.2382 21.7486 29C21.7486 28.7618 21.7955 28.526 21.8867 28.3059C21.978 28.0859 22.1116 27.886 22.2802 27.7177L31.3427 18.6552C31.5111 18.4868 31.711 18.3532 31.931 18.262C32.151 18.1709 32.3869 18.124 32.625 18.124C32.8632 18.124 33.099 18.1709 33.319 18.262C33.539 18.3532 33.739 18.4868 33.9074 18.6552C34.0758 18.8236 34.2093 19.0235 34.3005 19.2435C34.3916 19.4635 34.4385 19.6993 34.4385 19.9375C34.4385 20.1757 34.3916 20.4115 34.3005 20.6315C34.2093 20.8515 34.0758 21.0514 33.9074 21.2198L26.1249 29L33.9074 36.7802Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_1591">
                    <rect width="58" height="58" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className="relative px-1">
            <div className="overflow-hidden" ref={emblaRef4}>
              <div className="flex">
                <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 relative">
                  <img src="i6.webp" alt="" className="w-full" />
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 text-sm font-bold z-10 rounded">
                    i6.webp
                  </div>
                </div>
                <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 relative">
                  <img src="i7.webp" alt="" className="w-full" />
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 text-sm font-bold z-10 rounded">
                    i7.webp
                  </div>
                </div>
                <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 relative">
                  <img src="i8.webp" alt="" className="w-full" />
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 text-sm font-bold z-10 rounded">
                    i8.webp
                  </div>
                </div>
                <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 relative">
                  <img src="i9.webp" alt="" className="w-full" />
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 text-sm font-bold z-10 rounded">
                    i9.webp
                  </div>
                </div>
                <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250pxx] sm:mr-4 mr-3 relative">
                  <img src="i10.webp" alt="" className="w-full" />
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 text-sm font-bold z-10 rounded">
                    i10.webp
                  </div>
                </div>
                <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 relative">
                  <img src="i6.webp" alt="" className="w-full" />
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 text-sm font-bold z-10 rounded">
                    i6.webp (2)
                  </div>
                </div>
                <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 relative">
                  <img src="i7.webp" alt="" className="w-full" />
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 text-sm font-bold z-10 rounded">
                    i7.webp (2)
                  </div>
                </div>
                <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 relative">
                  <img src="i8.webp" alt="" className="w-full" />
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 text-sm font-bold z-10 rounded">
                    i8.webp (2)
                  </div>
                </div>
                <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 relative">
                  <img src="i9.webp" alt="" className="w-full" />
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 text-sm font-bold z-10 rounded">
                    i9.webp (2)
                  </div>
                </div>
                <div className="flex-[0_0_calc((100%-40px)/5)] min-w-[250px] sm:mr-4 mr-3 relative">
                  <img src="i10.webp" alt="" className="w-full" />
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 text-sm font-bold z-10 rounded">
                    i10.webp (2)
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 sm:right-5 right-10 cursor-pointer z-50">
              <svg
                width="45"
                height="45"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6_1600)">
                  <path
                    d="M29 5.4375C33.6602 5.4375 38.2158 6.81942 42.0906 9.4085C45.9654 11.9976 48.9855 15.6775 50.7689 19.983C52.5523 24.2885 53.0189 29.0261 52.1097 33.5968C51.2006 38.1675 48.9565 42.3659 45.6612 45.6612C42.3659 48.9565 38.1675 51.2006 33.5968 52.1098C29.0261 53.0189 24.2885 52.5523 19.983 50.7689C15.6775 48.9855 11.9976 45.9655 9.40849 42.0906C6.8194 38.2158 5.43749 33.6602 5.43749 29C5.44409 22.7529 7.92868 16.7635 12.3461 12.3461C16.7635 7.92869 22.7529 5.4441 29 5.4375ZM24.0926 36.7802C23.9242 36.9486 23.7907 37.1485 23.6995 37.3685C23.6084 37.5885 23.5615 37.8243 23.5615 38.0625C23.5615 38.3007 23.6084 38.5365 23.6995 38.7565C23.7907 38.9765 23.9242 39.1764 24.0926 39.3448C24.261 39.5132 24.461 39.6468 24.681 39.738C24.901 39.8291 25.1368 39.876 25.375 39.876C25.6131 39.876 25.849 39.8291 26.069 39.738C26.289 39.6468 26.4889 39.5132 26.6573 39.3448L35.7198 30.2823C35.8884 30.114 36.022 29.9141 36.1133 29.6941C36.2045 29.474 36.2514 29.2382 36.2514 29C36.2514 28.7618 36.2045 28.526 36.1133 28.3059C36.022 28.0859 35.8884 27.886 35.7198 27.7177L26.6573 18.6552C26.4889 18.4868 26.289 18.3532 26.069 18.262C25.849 18.1709 25.6131 18.124 25.375 18.124C25.1368 18.124 24.901 18.1709 24.681 18.262C24.461 18.3532 24.261 18.4868 24.0926 18.6552C23.9242 18.8236 23.7907 19.0235 23.6995 19.2435C23.6084 19.4635 23.5615 19.6993 23.5615 19.9375C23.5615 20.1757 23.6084 20.4115 23.6995 20.6315C23.7907 20.8515 23.9242 21.0514 24.0926 21.2198L31.8751 29L24.0926 36.7802Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_1600">
                    <rect
                      width="58"
                      height="58"
                      fill="white"
                      transform="matrix(-1 0 0 1 58 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
