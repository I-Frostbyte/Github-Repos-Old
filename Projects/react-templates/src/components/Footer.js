import React from "react";

const Footer = () => {
  return (
    <div className="md:flex sm:grid sm:grid-cols-2 grid grid-cols-1 gap-5 bg-original text-white text-sm py-10 justify-between px-10">
      <div className="block pr-20">
        <a href="#" className="text-xl font-bold text-white flex">
          {/* <GiVote size={30} className='mr-2' /> */}
          Unnamed
        </a>
        <p className="text-sm pt-2 pb-4">
          &copy; Copyright 2023 - Iknite Space
        </p>
        <p className="text-sm py-10">Limited | All Rights Reserved</p>
      </div>
      <div className="">
        <h1 className="font-bold py-2">Product</h1>
        <p className="py-2">Web App</p>
      </div>
      <div className="">
        <h1 className="font-bold py-2">Legal</h1>
        <p className="py-3">Terms and Conditions</p>
        <p className="py-3">Privacy Policy</p>
        <p className="py-3">FAQs</p>
      </div>
      <div className="">
        <h1 className="font-bold py-2">Connect</h1>
        <p className="py-3">
          First Trust, ground floor, Buea, Cameroon
        </p>
        <p className="py-3">
          Email: irefyre@gmail.com
        </p>
        <p className="py-3">Phone:(237)654131027</p>
      </div>
    </div>
  );
};

export default Footer;
