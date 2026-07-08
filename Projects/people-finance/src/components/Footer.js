import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="mx-10">
      <div className="bg-[#296E01] blur-[125px] py-10 px-2 w-1/6 h-[300px] rounded-r-full -mb-[375px]"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
        <div className="font-bold text-3xl text-gray-300">PeFi</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          <div className="block">
            <h1 className="text-2xl font-bold py-5 text-gray-300">About</h1>
            <p className="py-5 font-semibold text-gray-500">About Us</p>
            <p className="py-5 font-semibold text-gray-500">Contact Us</p>
          </div>

          <div className="block">
            <h1 className="text-2xl font-bold py-5 text-gray-300">Features</h1>
            <p className="py-5 font-semibold text-gray-500">Banking</p>
            <p className="py-5 font-semibold text-gray-500">Device</p>
            <p className="py-5 font-semibold text-gray-500">Platform</p>
          </div>

          <div className="block">
            <h1 className="text-2xl font-bold py-5 text-gray-300">Business</h1>
            <p className="py-5 font-semibold text-gray-500">Careers</p>
            <p className="py-5 font-semibold text-gray-500">Partners</p>
          </div>

          <div className="block">
            <h1 className="text-2xl font-bold py-5 text-gray-300">Support</h1>
            <p className="py-5 font-semibold text-gray-500">Press</p>
            <p className="py-5 font-semibold text-gray-500">Support Center</p>
            <p className="py-5 font-semibold text-gray-500">FAQs</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 text-center sm:flex sm:justify-between sm:items-center py-10">
        <p className="font-semibold text-xs py-1 sm:text-sm text-gray-500">
          @2023 PeFi. All rights reserved.
        </p>
        <div className="grid grid-cols-1 sm:flex sm:justify-between sm:items-center">
          <p className="font-semibold text-xs py-1 sm:text-sm text-gray-500 sm:px-10">
            Terms & Agreements
          </p>

          <p className="font-semibold text-xs py-1 sm:text-sm text-gray-500 sm:px-10">
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
