"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

// A reusable component for the triangle to avoid repeating code.
const ActiveIndicator = () => (
  <div className="border-l-[7px] absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-transparent border-r-[7px] border-r-transparent border-b-[10px] border-b-[#0097DC] transition-opacity duration-300" />
);

function Navbar() {
  // 3. Get the current page's path (e.g., "/", "/about", "/services")
  const pathname = usePathname();

  // State to control mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      // Start closing animation
      setIsAnimating(true);
      setAnimationClass("navbar-slide-out");
      
      // After animation completes, hide the menu
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsAnimating(false);
        setAnimationClass("");
      }, 300); // Match the animation duration
    } else {
      // Open menu and start opening animation
      setIsMobileMenuOpen(true);
      setIsAnimating(true);
      setAnimationClass("navbar-slide-in");
      
      // Clear animation class after animation completes
      setTimeout(() => {
        setIsAnimating(false);
        setAnimationClass("");
      }, 300); // Match the animation duration
    }
  };

  // Normalize the pathname
  const normalizedPath = (() => {
    const p = (pathname || "").toLowerCase();
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
    <div className="w-full relative z-40 ">
      {/*Navbar on smaller screen */}

      <div className="flex justify-between items-center gap-3 p-4 md:hidden relative bg-white">
        <button onClick={toggleMobileMenu} className="cursor-pointer">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="flex items-center gap-3">
          <div>
            <img
              src="/MagnifyingGlass.webp"
              alt="Search"
              className="w-[25px] cursor-pointer "
            />
          </div>
          <button className="bg-[#B12D31] px-4 py-2 rounded-lg hover:scale-105 hover:bg-[#b12d31f3] duration-300 transition-all text-white cursor-pointer ">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {(isMobileMenuOpen || isAnimating) && (
          <div className={`bg-[#B12D31] w-full fixed z-50 h-screen overflow-y-auto py-5 top-0 left-0 text-white ${animationClass}`}>
            <div className="flex justify-between items-center p-4">
              <img
                src="/rdr logo.webp"
                alt=""
                className="w-[80px] h-[50px] rounded-full border-3 border-white bg-white "
              />
              <button onClick={toggleMobileMenu} className="cursor-pointer">
                <X size={30} />
              </button>
            </div>
            <div className="w-full px-4 py-3 relative ">
              <input
                type="search"
                name="search"
                id=""
                placeholder="Search"
                className="border-2 border-white rounded-full outline-none w-full py-2 px-3 pl-10 placeholder:text-white "
              />
              <div className="absolute top-1/2 left-7 transform -translate-y-1/2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.6782 1.57992C6.15779 1.58247 4.70038 2.18758 3.62529 3.26268C2.55019 4.33777 1.94508 5.79518 1.94254 7.31559C1.94381 8.83728 2.5482 10.2964 3.62329 11.3733C4.69839 12.4502 6.15651 13.0571 7.6782 13.0609C9.02777 13.0609 10.2713 12.5861 11.2546 11.8005L13.6428 14.1887C13.7638 14.3012 13.9237 14.3625 14.0889 14.3596C14.254 14.3567 14.4117 14.2899 14.5287 14.1732C14.6456 14.0566 14.7128 13.8991 14.7162 13.7339C14.7195 13.5688 14.6587 13.4087 14.5465 13.2874L12.1583 10.8968C12.974 9.88232 13.4186 8.61969 13.4187 7.318C13.4187 4.15615 10.84 1.57992 7.6782 1.57992ZM7.6782 2.85719C10.1508 2.85719 12.1414 4.8454 12.1414 7.31559C12.1414 9.78578 10.1508 11.786 7.6782 11.786C5.2056 11.786 3.2174 9.79301 3.2174 7.32041C3.2174 4.84781 5.2056 2.85719 7.6782 2.85719Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col p-4 space-y-4 text-[18px]">
              <Link
                href="/"
                onClick={toggleMobileMenu}
                className="text-lg hover:text-gray-300 border-b-2 border-b-[#E0E0E033] pb-3 "
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={toggleMobileMenu}
                className="text-lg hover:text-gray-300 border-b-2 border-b-[#E0E0E033] pb-3 "
              >
                About
              </Link>
              <Link
                href="/services"
                onClick={toggleMobileMenu}
                className="text-lg hover:text-gray-300 border-b-2 border-b-[#E0E0E033] pb-3 "
              >
                Services
              </Link>
              <Link
                href="/projects"
                onClick={toggleMobileMenu}
                className="text-lg hover:text-gray-300 border-b-2 border-b-[#E0E0E033] pb-3 "
              >
               Projects
              </Link>
              <Link
                href="/contact"
                onClick={toggleMobileMenu}
                className="text-lg hover:text-gray-300 border-b-2 border-b-[#E0E0E033] pb-3 "
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-5 px-4 ">
              <div className="flex items-center gap-2">
                <img src="/UserRectangle-white.png " alt="" />
                <p className="font-medium flex flex-col font-[Poppins]  ">
                  <span className="text-white text-[15px] ">Call us</span>
                  <span className="text-[18px]  "> 718-277-0803</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src="/Envelope-white.png " alt="" />
                <p className="font-medium flex flex-col font-[Poppins]  ">
                  <span className="text-white text-[15px] ">Mail us</span>
                  <span className="text-[18px]  ">
                    {" "}
                    Info@rdrgeneralconstruction.com
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src="/MapPinArea-white.png" alt="" />
                <p className="font-medium flex flex-col font-[Poppins]  ">
                  <span className="text-white text-[15px] ">Address</span>
                  <span className="text-[15px]  ">ST. ALBANS, NY. 11412</span>
                </p>
              </div>
            </div>
          </div>
        )}
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
              <span className="text-[18px]  "> 718-277-0803</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/Envelope.webp " alt="" />
            <p className="font-medium flex flex-col font-[Poppins]  ">
              <span className="text-[#B12D31] text-[15px] ">Mail us</span>
              <span className="text-[18px]  ">
                {" "}
                Info@rdrgeneralconstruction.com
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/MapPinArea.webp" alt="" />
            <p className="font-medium flex flex-col font-[Poppins]  ">
              <span className="text-[#B12D31] text-[15px] ">Address</span>
              <span className="text-[18px]  ">ST. ALBANS, NY. 11412</span>
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
                const isActive = normalizedPath === hrefNorm;
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
                src="/MagnifyingGlass.webp"
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
