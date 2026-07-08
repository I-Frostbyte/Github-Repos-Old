import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="fixed w-full left-0 px-5 flex">
      <div className="flex w-full justify-between sm:mx-14 py-5 items-center">
        <Link to="/" className="">
          <div className="font-bold text-3xl text-gray-300 hover:text-[#d4af37]">
            PeFi
          </div>
        </Link>
        <div className="hidden sm:flex justify-around text-md font-semibold text-gray-300">
          <Link to="/" className="px-3 hover:text-[#d4af37]">
            Home
          </Link>
          <Link to="/about-us" className="px-3 hover:text-[#d4af37]">
            About Us
          </Link>
          <Link to="/services" className="px-3 hover:text-[#d4af37]">
            Services of PeFi
          </Link>
          <Link to="/network" className="px-3 hover:text-[#d4af37]">
            Network
          </Link>
          <Link to="/recruitment" className="px-3 hover:text-[#d4af37]">
            Recruitment
          </Link>
          <Link to="/contact" className="px-3 hover:text-[#d4af37]">
            Contact
          </Link>
        </div>
        <div className="sm:hidden">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <GiHamburgerMenu className="sm:hidden hover:text-[#d4af37] text-3xl" />
            {/* <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span> */}
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <IoIosClose className="h-8 w-8 text-black" />
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/about-us" className="px-3 font-bold hover:text-[#d4af37]">
                  About Us
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/services" className="px-3 font-bold hover:text-[#d4af37]">
                  Services of PeFi
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/network" className="px-3 font-bold hover:text-[#d4af37]">
                  Network
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/recruitment" className="px-3 font-bold hover:text-[#d4af37]">
                  Recruitment
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/contact" className="px-3 font-bold hover:text-[#d4af37]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
