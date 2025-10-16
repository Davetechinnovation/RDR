"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {Menu } from "lucide-react";

// A reusable component for the triangle to avoid repeating code.
const ActiveIndicator = () => (
  <div className="border-l-[7px] absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-transparent border-r-[7px] border-r-transparent border-b-[10px] border-b-[#0097DC] transition-opacity duration-300" />
);

function Navbar() {
  // 3. Get the current page's path (e.g., "/", "/about", "/services")
  const pathname = usePathname();

  // Normalize the pathname so `/home` and `/` are considered the same route
  const normalizedPath = (() => {
    const p = (pathname || "").toLowerCase();
    if (p === "/home") return "/"; // treat /home as /
    if (p === "") return "/";
    // remove trailing slash for consistency (but keep root)
    return p.endsWith("/") && p !== "/" ? p.slice(0, -1) : p;
  })();

  // 4. Create a state to track which item is being hovered.
  // We'll store the `href` of the hovered item, or `null` if none.
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  //array of nav
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="w-full relative z-50 ">
      {/*Navbar on smaller screen */}

      <div className="flex justify-between items-center gap-3 p-4 md:hidden ">
        <Menu />
        <div className="flex items-center gap-3">
          <div>
            <img
              src="/MagnifyingGlass.png"
              alt="Search"
              className="w-[25px] cursor-pointer "
            />
          </div>
          <button className="bg-[#B12D31] px-4 py-2 rounded-lg hover:scale-105 hover:bg-[#b12d31f3] duration-300 transition-all text-white cursor-pointer ">
            Contact Us
          </button>
        </div>
      </div>

      <div className=" justify-between items-center lg:p-8 md:py-8 md:px-4  hidden md:flex ">
        <div>
          <img
            src="/rdr logo.webp"
            alt="RDR General Construction Logo" // Added alt text for accessibility
            className="md:w-[139px] w-[120px] "
          />
        </div>
        <div className="flex  justify-between lg:gap-20 md:gap-7 gap-5 ">
          <div className="flex items-center gap-2">
            <img src="/UserRectangle.webp " alt="" />
            <p className="font-medium flex flex-col font-[Poppins]  ">
              <span className="text-[#B12D31] text-[15px] ">Call us</span>
              <span className="text-[13px]  "> 718-277-0803</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/Envelope.webp " alt="" />
            <p className="font-medium flex flex-col font-[Poppins]  ">
              <span className="text-[#B12D31] text-[15px] ">Mail us</span>
              <span className="text-[13px]  ">
                {" "}
                Info@rdrgeneralconstruction.com
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/MapPinArea.webp" alt="" />
            <p className="font-medium flex flex-col font-[Poppins]  ">
              <span className="text-[#B12D31] text-[15px] ">Address</span>
              <span className="text-[13px]  ">ST. ALBANS, NY. 11412</span>
            </p>
          </div>
        </div>
      </div>
      <div className="border-2  hidden md:block bg-white border-[#B12D31] px-5 py-3 rounded-lg absolute md:-bottom-12 left-1/2 z-50 w-[82%] -translate-x-1/2  ">
        <div className=" flex justify-between items-center ">
          <div>
            {/* 6. Map over the navItems array to render the list dynamically */}
            <ul className="flex items-center gap-5">
              {navItems.map((item) => {
                // Determine if this item is the active page (compare normalized values)
                const hrefNorm = item.href.toLowerCase();
                const isActive =
                  normalizedPath === (hrefNorm === "/home" ? "/" : hrefNorm);
                // Determine if this item is currently being hovered
                const isHovered = hoveredPath === item.href;

                return (
                  <li
                    key={item.href}
                    className="cursor-pointer relative" // `relative` is crucial for positioning the indicator
                    // 7. Add event handlers for hover
                    onMouseEnter={() => setHoveredPath(item.href)}
                    onMouseLeave={() => setHoveredPath(null)}
                  >
                    <Link href={item.href} className="block p-2">
                      {item.label}
                    </Link>
                    {/* 8. Conditionally render the indicator */}
                    {/* Show it if the item is active OR if it's being hovered */}
                    {(isActive || isHovered) && <ActiveIndicator />}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <img
                src="/MagnifyingGlass.png"
                alt="Search"
                className="w-[32px] cursor-pointer "
              />
            </div>
            <button className="bg-[#B12D31] px-5 py-2 rounded-lg hover:scale-105 hover:bg-[#b12d31f3] duration-300 transition-all text-white cursor-pointer ">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
