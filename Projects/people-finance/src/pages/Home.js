import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage1 from "../assets/HeroImage1.jpg";
import SecurityImage1 from "../assets/SecurityImage1.jpg";
import ValueImage1 from "../assets/ValueImage1.jpg";
import { IoIosPhonePortrait, IoMdMailOpen } from "react-icons/io";
import { TfiTarget } from "react-icons/tfi";
import { FiMonitor } from "react-icons/fi";
import {
  FaBrain,
  FaHandHoldingHeart,
  FaPiggyBank,
  FaCaretDown,
  FaCaretUp,
} from "react-icons/fa";
import { AiOutlineDollarCircle, AiOutlineHeart } from "react-icons/ai";

const Home = () => {
  const [firstCaret, setFirstCaret] = useState(false);
  const [secondCaret, setSecondCaret] = useState(false);
  const [thirdCaret, setThirdCaret] = useState(false);

  const handleFirstCaret = () => {
    setFirstCaret(!firstCaret);
    
  };

  const handleSecondCaret = () => {
    setSecondCaret(!secondCaret);
    
  };

  const handleThirdCaret = () => {
    setThirdCaret(!thirdCaret);
    
  };    

  return (
    <div className="px-5">
      <Navbar />
      <div className="grid grid-cols-1 gap-3 pt-32 pb-10 items-center md:grid-cols-2 md:gap-3 w-full">
        <img src={HeroImage1} alt="#" className="opacity-60 rounded-xl" />
        <div className="block mx-auto text-center md:text-left sm:w-3/4 w-full">
          <h1 className="py-3 text-5xl font-bold text-[#d4af37]">
            The Most Simplistic Banking For Your Future & Development
          </h1>
          <p className="font-semibold text-gray-300 py-3">
            PeFi prioritizes in simplicity and flexibility that makes each of
            your transactions simpler.
          </p>
          <div className="flex justify-between items-center my-5">
            <div className="block">
              <h1 className="text-3xl text-[#d4af37] font-bold">8K+</h1>
              <p className="w-full text-gray-300 font-semibold">
                Happy <br /> Customer
              </p>
            </div>
            <div className="block">
              <h1 className="text-3xl text-[#d4af37] font-bold">24+</h1>
              <p className="w-full text-gray-300 font-semibold">
                Awards <br /> Winning
              </p>
            </div>
            <div className="block">
              <h1 className="text-3xl text-[#d4af37] font-bold">28+</h1>
              <p className="w-full text-gray-300 font-semibold">
                Years Of <br /> Experience
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <h1 className="text-center text-5xl font-extrabold text-[#d4af37]">
          PeFi <span className="text-green-700">understands</span> all your
          needs
        </h1>
      </div>

      <div className="bg-[#296E01] blur-[50px] sm:blur-[125px] py-10 px-2 w-1/6 h-[300px] rounded-r-full -mb-[275px]"></div>

      <div id="items-list-container" className="py-20 mb-20">
        <div
          id="list-items"
          className="grid grid-cols-2 sm:grid-cols-4 gap-10 mx-5 rounded-3xl border border-[#023020]"
        >
          {/* "transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." */}

          <div className="block text-gray-300 text-center py-5 sm:py-10 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110  hover:border-2 hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-gradient-to-tl hover:from-[#023020] hover:to-[#296E01] rounded-3xl duration-300">
            <IoIosPhonePortrait className="mx-auto my-2 text-2xl sm:text-6xl" />
            <p className="text-md sm:text-2xl">Dedicated</p>
            <p className="text-md sm:text-2xl">Digital Wallet</p>
          </div>

          <div className="block text-gray-300 text-center py-5 sm:py-10 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110  hover:border-2 hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-gradient-to-tl hover:from-[#023020] hover:to-[#296E01] rounded-3xl duration-300">
            <TfiTarget className="mx-auto my-2 text-2xl sm:text-6xl" />
            <p className="text-md sm:text-2xl">Automatic</p>
            <p className="text-md sm:text-2xl">Bill Payments</p>
          </div>

          <div className="block text-gray-300 text-center py-5 sm:py-10 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110  hover:border-2 hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-gradient-to-tl hover:from-[#023020] hover:to-[#296E01] rounded-3xl duration-300">
            <FiMonitor className="mx-auto my-2 text-2xl sm:text-6xl" />
            <p className="text-md sm:text-2xl">Financial</p>
            <p className="text-md sm:text-2xl">Planning</p>
          </div>

          <div className="block text-gray-300 text-center py-5 sm:py-10 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110  hover:border-2 hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-gradient-to-tl hover:from-[#023020] hover:to-[#296E01] rounded-3xl duration-300">
            <FaBrain className="mx-auto my-2 text-2xl sm:text-6xl" />
            <p className="text-md sm:text-2xl">Dedicated</p>
            <p className="text-md sm:text-2xl">Remote Advisor</p>
          </div>

          <div className="block text-gray-300 text-center py-5 sm:py-10 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110  hover:border-2 hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-gradient-to-tl hover:from-[#023020] hover:to-[#296E01] rounded-3xl duration-300">
            <AiOutlineDollarCircle className="mx-auto my-2 text-2xl sm:text-6xl" />
            <p className="text-md sm:text-2xl">Unified Payment</p>
            <p className="text-md sm:text-2xl">System</p>
          </div>

          <div className="block text-gray-300 text-center py-5 sm:py-10 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110  hover:border-2 hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-gradient-to-tl hover:from-[#023020] hover:to-[#296E01] rounded-3xl duration-300">
            <FaHandHoldingHeart className="mx-auto my-2 text-2xl sm:text-6xl" />
            <p className="text-md sm:text-2xl">Loyalty</p>
            <p className="text-md sm:text-2xl">Programs</p>
          </div>

          <div className="block text-gray-300 text-center py-5 sm:py-10 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110  hover:border-2 hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-gradient-to-tl hover:from-[#023020] hover:to-[#296E01] rounded-3xl duration-300">
            <IoMdMailOpen className="mx-auto my-2 text-2xl sm:text-6xl" />
            <p className="text-md sm:text-2xl">Secure Message</p>
            <p className="text-md sm:text-2xl">Alerts</p>
          </div>

          <div className="block text-gray-300 text-center py-5 sm:py-10 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110  hover:border-2 hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-gradient-to-tl hover:from-[#023020] hover:to-[#296E01] rounded-3xl duration-300">
            <FaPiggyBank className="mx-auto my-2 text-2xl sm:text-6xl" />
            <p className="text-md sm:text-2xl">Secure Online</p>
            <p className="text-md sm:text-2xl">Banking</p>
          </div>
        </div>
      </div>

      <div className="bg-[#296E01] blur-[50px] sm:blur-[125px] py-10 px-2 w-1/6 h-[300px] rounded-r-full -mb-[450px]"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-20 mb-60 items-center">
        <div className="block text-center sm:text-left py-3 outline-0 mx-5">
          <h1 className="text-5xl font-bold py-3 text-gray-300">
            PeFi provides the{" "}
            <span className="text-[#d4af37]">best security</span>
          </h1>
          <p className="text-gray-300 font-semibold py-5">
            PeFi believes security is the fundmental trust of our customers,
            therefore PeFi always provides the best security
          </p>
          <div className="flex justify-between items-center py-5">
            <div className="rounded-2xl py-2 sm:py-5 px-5 sm:px-10 bg-[#0d2200] text-white opacity-80 border border-black text-center hover:border-2 hover:border-[#d4af37] hover:text-[#d4af37]">
              <TfiTarget className="mx-auto my-2 text-xl sm:text-6xl" />
              <p className="text-md sm:text-2xl">
                Finger <br /> Scan
              </p>
            </div>

            <div className="rounded-2xl py-2 sm:py-5 px-6 sm:px-12 bg-[#0d2200] text-white opacity-80 border border-black text-center hover:border-2 hover:border-[#d4af37] hover:text-[#d4af37]">
              <FaBrain className="mx-auto my-2 text-xl sm:text-6xl" />
              <p className="text-md sm:text-2xl">
                Face <br /> Scan
              </p>
            </div>

            <div className="rounded-2xl py-2 sm:py-5 px-5 sm:px-10 bg-[#0d2200] text-white opacity-80 border border-black text-center hover:border-2 hover:border-[#d4af37] hover:text-[#d4af37]">
              <FiMonitor className="mx-auto my-2 text-xl sm:text-6xl" />
              <p className="text-md sm:text-2xl">
                Digital <br /> Scan
              </p>
            </div>
          </div>
        </div>

        <img
          src={SecurityImage1}
          alt="#"
          className="opacity-60 rounded-3xl mx-auto mix-blend-lighten hidden sm:grid"
          width="85%"
        />
      </div>

      <div className="bg-[#296E01] blur-[50px] sm:blur-[100px] py-10 px-2 w-1/6 h-[300px] rounded-r-full -mb-[450px] right-0 absolute"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-20 -mt-72 mb-72">
        <img
          src={ValueImage1}
          alt="#"
          className="opacity-60 rounded-3xl mx-auto mix-blend-lighten"
          width="85%"
        />

        <div className="block mx-5 text-left">
          <h1 className="text-5xl font-bold text-gray-300 pb-2">
            PeFi provides the <span className="text-[#d4af37]">best value</span>{" "}
            for you
          </h1>
          <p className="font-semibold text-gray-400 py-2">
            PeFi is always ready to help by providing the best service in the
            field of finance for you, good finance provides a better life.
          </p>

          <div className="block py-3">
            <div
              className="bg-[#0d2200] text-white opacity-80 border-[#0d2200] hover:border-2 hover:border-[#d4af37] hover:text-[#d4af37] rounded-3xl p-3 my-5"
              onClick={handleFirstCaret}
            >
              {firstCaret ? (
                <>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center justify-between">
                      <AiOutlineHeart
                        size={20}
                        className="text-gray-400 mx-3"
                      />
                      <div className="block">
                        <p className="text-md sm:text-xl text-gray-300">
                          Make saving into a hobby
                        </p>
                      </div>
                    </div>
                    <FaCaretUp size={20} className="" />
                  </div>
                  <p className="text-gray-500 items-center text-left py-3 mx-10">
                    Achieve the financial goal you desire by saving regularly
                    and habitually turning a mundane habit into a life changing
                    routine.
                  </p>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center justify-between">
                      <AiOutlineHeart
                        size={20}
                        className="text-gray-400 mx-3"
                      />
                      <p className="text-md sm:text-xl text-gray-300">
                        Make saving into a hobby
                      </p>
                    </div>
                    <FaCaretDown size={20} className="" />
                  </div>
                </>
              )}
            </div>

            <div
              className="bg-[#0d2200] text-white opacity-80 border-[#0d2200] hover:border-2 hover:border-[#d4af37] hover:text-[#d4af37] rounded-3xl p-3 my-5"
              onClick={handleSecondCaret}
            >
              {secondCaret ? (
                <>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center justify-between">
                      <AiOutlineHeart
                        size={20}
                        className="text-gray-400 mx-3"
                      />
                      <div className="block">
                        <p className="text-md sm:text-xl text-gray-300">
                          Monitor finances more easily
                        </p>
                      </div>
                    </div>
                    <FaCaretUp size={20} className="" />
                  </div>
                  <p className="text-gray-500 items-center text-left py-3 mx-10">
                    Reach your goals with personalized insights, custom budgets, spend tracking, and subscription monitoring. 
                  </p>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center justify-between">
                      <AiOutlineHeart
                        size={20}
                        className="text-gray-400 mx-3"
                      />
                      <p className="text-md sm:text-xl text-gray-300">
                        Monitor finances more easily
                      </p>
                    </div>
                    <FaCaretDown size={20} className="" />
                  </div>
                </>
              )}
            </div>

            <div
              className="bg-[#0d2200] text-white opacity-80 border-[#0d2200] hover:border-2 hover:border-[#d4af37] hover:text-[#d4af37] rounded-3xl p-3 my-5"
              onClick={handleThirdCaret}
            >
              {thirdCaret ? (
                <>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center justify-between">
                      <AiOutlineHeart
                        size={20}
                        className="text-gray-400 mx-3"
                      />
                      <div className="block">
                        <p className="text-md sm:text-xl text-gray-300">
                          Achieve your financial goals
                        </p>
                      </div>
                    </div>
                    <FaCaretUp size={20} className="" />
                  </div>
                  <p className="text-gray-500 items-center text-left py-3 mx-10">
                    Achieve the financial goal you desire by saving regularly
                    and habitually turning a mundane habit into a life changing
                    routine.
                  </p>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center justify-between">
                      <AiOutlineHeart
                        size={20}
                        className="text-gray-400 mx-3"
                      />
                      <p className="text-md sm:text-xl text-gray-300">
                        Achieve your financial goals
                      </p>
                    </div>
                    <FaCaretDown size={20} className="" />
                  </div>
                </>
              )}
            </div>
            
          </div>


        </div>
      </div>     

      <Footer /> 

    </div>

    
  );
};

export default Home;
