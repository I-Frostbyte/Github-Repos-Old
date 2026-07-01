import React from 'react'
import { IoIosBasketball } from 'react-icons/io'
import { FaTwitter, FaFacebookSquare, FaInstagram, FaPinterest, FaRegCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <div id="footer-container" className='px-10 bg-slate-100'>
        <div id="info-container" className="grid xl:w-full lg:grid-cols-6 md:grid-cols-2 gap-5 m-auto py-10 sm:grid-cols-2 xs:grid-cols-2">
            <div id="first-column" className='block pr-5'>
                <a href="#" className='px-10 text-2xl text-pink-600 font-bold hover:text-pink-700 py-3' id="dribble-mark">dribbble</a>
                <p className='py-3 text-sm'>Dribbble is the world’s leading community for creatives to share, grow, and get hired.</p>
                <div className="md:flex md:justify-between py-3 sm:flex">
                    <a href="#"><IoIosBasketball size={18} /></a>
                    <a href="#"><FaTwitter size={18} /></a>
                    <a href="#"><FaFacebookSquare size={18} /></a>
                    <a href="#"><FaInstagram size={18} /></a>
                    <a href="#"><FaPinterest size={18} /></a>
                </div>
            </div>
            <div id="second-column" className="block">
                <p className='font-bold text-sm py-2'>For designers</p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Go Pro!</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Explore design work</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Design blog</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Overtime podcast</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Playoffs</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Weekly Warm-Up</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Code of conduct</a></p>
            </div>
            <div id="third-column" className="block">
                <p className='font-bold text-sm py-2'>Hire designers</p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Post a job opening</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Post a freelance project</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Search for designers</a></p>
                <p className='font-bold text-sm pb-3 pt-4'>Brands</p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Advertise with us</a></p>
            </div>
            <div id="fourth-column" className="block">
                <p className='font-bold text-sm py-2'>Company</p>
                <p className="text-sm text-slate-500 py-2"><a href="#">About</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Careers</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Support</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Media kit</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Testimonials</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">API</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Terms of service</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Privacy policy</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Cookie policy</a></p>
            </div>
            <div id="fifth-column" className="block">
                <p className='font-semibold text-sm py-2'>Directories</p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Design jobs</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Designers for hire</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Freelance designers for hire</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Tags</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Places</a></p>
                <p className='font-bold text-sm pb-3 pt-4'>Design assets</p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Creative market</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Fontspring</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Font Squirrel</a></p>
            </div>
            <div id="second-column" className="block">
                <p className='font-bold text-sm py-2'>Design Resources</p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Freelancing</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Design Hiring</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Design Portfolio</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Design Education</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Creative Process</a></p>
                <p className="text-sm text-slate-500 py-2"><a href="#">Design Industry Trends</a></p>
            </div>
        </div>
        <hr className='w-full justify-center pt-10'/>
        <div id="copyrigh-footer" className="flex justify-between pb-10">
            <div className="flex text-slate-800 font-semibold text-sm">
                <FaRegCopyright size={10} className="m-auto"/>
                <p className='pl-1'>2022 Dribble. All rights reserved.</p>
            </div>
            <div className="flex">
                <p className='font-bold text-black text-sm px-1'>19,574,332</p>
                <p className='pl-1 pr-1 text-slate-800 font-semibold text-sm'>shots dribbled</p>
                <IoIosBasketball size={20} className="text-pink-600 m-auto" />
            </div>
        </div>
    </div>
  )
}

export default Footer