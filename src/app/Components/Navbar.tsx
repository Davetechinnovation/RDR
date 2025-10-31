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
          <Link href="/contact">
            <button className="bg-[#B12D31] px-4 py-2 rounded-lg hover:scale-105 hover:bg-[#b12d31f3] duration-300 transition-all text-white cursor-pointer">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Overlay */}
        {(isMobileMenuOpen || isAnimating) && (
          <div
            className={`bg-[#B12D31] w-full fixed z-[9999] h-screen overflow-y-auto py-5 top-0 left-0 text-white ${animationClass}`}
          >
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
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_104_626)">
                    <path
                      d="M10.6105 13.2632C12.4418 13.2632 13.9263 11.7786 13.9263 9.94737C13.9263 8.11611 12.4418 6.63158 10.6105 6.63158C8.77927 6.63158 7.29474 8.11611 7.29474 9.94737C7.29474 11.7786 8.77927 13.2632 10.6105 13.2632Z"
                      stroke="white"
                      stroke-width="1.32632"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.9053 3.97895H3.31579C2.94954 3.97895 2.65263 4.27586 2.65263 4.64211V16.5789C2.65263 16.9452 2.94954 17.2421 3.31579 17.2421H17.9053C18.2715 17.2421 18.5684 16.9452 18.5684 16.5789V4.64211C18.5684 4.27586 18.2715 3.97895 17.9053 3.97895Z"
                      stroke="white"
                      stroke-width="1.32632"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.98198 17.2421C5.39278 16.0774 6.15476 15.0689 7.16286 14.3555C8.17096 13.6421 9.37554 13.259 10.6105 13.259C11.8455 13.259 13.0501 13.6421 14.0582 14.3555C15.0663 15.0689 15.8283 16.0774 16.2391 17.2421"
                      stroke="white"
                      stroke-width="1.32632"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_104_626">
                      <rect width="21.2211" height="21.2211" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <div className="font-medium flex flex-col font-[Poppins]">
                  <span className="text-white text-[15px]">Call us</span>
                  <a href="tel:718-277-0803" className="text-[18px] hover:underline">718-277-0803</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_104_615)">
                    <path
                      d="M18.5684 4.64211L10.6105 11.9368L2.65263 4.64211"
                      stroke="white"
                      stroke-width="1.32632"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.65263 4.64211H18.5684V15.9158C18.5684 16.0917 18.4986 16.2603 18.3742 16.3847C18.2498 16.5091 18.0811 16.5789 17.9053 16.5789H3.31579C3.13991 16.5789 2.97123 16.5091 2.84687 16.3847C2.7225 16.2603 2.65263 16.0917 2.65263 15.9158V4.64211Z"
                      stroke="white"
                      stroke-width="1.32632"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.16404 10.6105L2.85741 16.3916"
                      stroke="white"
                      stroke-width="1.32632"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.3637 16.3916L12.0571 10.6105"
                      stroke="white"
                      stroke-width="1.32632"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_104_615">
                      <rect width="21.2211" height="21.2211" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <div className="font-medium flex flex-col font-[Poppins]">
                  <span className="text-white text-[15px]">Mail us</span>
                  <a href="mailto:Info@rdrgeneralconstruction.com" className="text-[18px] hover:underline">
                    Info@rdrgeneralconstruction.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_104_605)">
                    <path
                      d="M10.6105 7.9579C11.343 7.9579 11.9368 7.36409 11.9368 6.63158C11.9368 5.89908 11.343 5.30527 10.6105 5.30527C9.87802 5.30527 9.28421 5.89908 9.28421 6.63158C9.28421 7.36409 9.87802 7.9579 10.6105 7.9579Z"
                      fill="white"
                    />
                    <path
                      d="M15.2526 6.63159C15.2526 11.2737 10.6105 13.9263 10.6105 13.9263C10.6105 13.9263 5.96841 11.2737 5.96841 6.63159C5.96841 5.40043 6.45749 4.21969 7.32806 3.34913C8.19862 2.47856 9.37936 1.98949 10.6105 1.98949C11.8417 1.98949 13.0224 2.47856 13.893 3.34913C14.7635 4.21969 15.2526 5.40043 15.2526 6.63159Z"
                      stroke="white"
                      stroke-width="1.32632"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.5789 12.8603C18.2136 13.4638 19.2316 14.3126 19.2316 15.2526C19.2316 17.0838 15.372 18.5684 10.6105 18.5684C5.84905 18.5684 1.98947 17.0838 1.98947 15.2526C1.98947 14.3126 3.00742 13.4638 4.6421 12.8603"
                      stroke="white"
                      stroke-width="1.32632"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_104_605">
                      <rect width="21.2211" height="21.2211" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
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
            <div className="font-medium flex flex-col font-[Poppins]">
              <span className="text-[#B12D31] text-[15px]">Call us</span>
              <a href="tel:718-277-0803" className="text-[18px] hover:underline">718-277-0803</a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="/Envelope.webp " alt="" />
            <div className="font-medium flex flex-col font-[Poppins]">
              <span className="text-[#B12D31] text-[15px]">Mail us</span>
              <a href="mailto:Info@rdrgeneralconstruction.com" className="text-[18px] hover:underline">
                Info@rdrgeneralconstruction.com
              </a>
            </div>
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
            <Link href="/contact">
              <button className="bg-[#B12D31] px-5 py-2 rounded-lg hover:scale-105 hover:bg-[#b12d31f3] duration-300 transition-all text-white cursor-pointer ">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
