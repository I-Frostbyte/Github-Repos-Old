import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='pt-3 pb-5'>
        <div className="flex justify-between items-center md:visible invisible">
        <div className="">
          <Link
            to="/"
            className="ml-24 text-xl font-bold text-original"
          >
            {/* <GiVote size={40} className="mr-2" /> */}
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/" className="px-10 font-bold text-original hover:text-complement">
            <h1>Home</h1>
          </Link>
          <Link to="/about" className="px-10 font-bold text-original hover:text-complement">
            <h1>About</h1>
          </Link>
          <Link
            to="/contact-us"
            className="px-10 font-bold text-original hover:text-complement"
          >
            <h1>Contact Us</h1>
          </Link>
          <Link to="/faqs" className="px-10 font-bold text-original hover:text-complement">
            <h1>FAQs</h1>
          </Link>          
        </div>
      </div>
    </div>
  )
}

export default Navbar