import React from 'react'
import { IoIosSearch } from 'react-icons/io'

const Navbar = () => {
  return (
    <div className="flex py-6 justify-between w-full m-auto">
        <div className='flex'>
          <a href="#" className='px-10 text-2xl font-bold hover:text-slate-500' id="dribble-mark">dribbble</a>
          <a href="#" className='pr-5 text-sm font-semibold text-base text-slate-500 hover:text-black'>Inspiration</a>
          <a href="#" className='pr-5 text-sm font-semibold text-base text-slate-500 hover:text-black'>Find Work</a>
          <a href="#" className='pr-5 text-sm font-semibold text-base text-slate-500 hover:text-black'>Learn Design</a>
          <a href="#" className='pr-5 text-sm font-semibold text-base text-slate-500 hover:text-black'>Go Pro</a>
          <a href="#" className='pr-5 text-sm font-semibold text-base text-slate-500 hover:text-black'>Design Files</a>
          <a href="#" className='pr-5 text-sm font-semibold text-base text-slate-500 hover:text-black'>Hire Designers</a>
        </div>
        <div className="flex pr-8">
        <a href="#" className='px-2 text-slate-500 m-auto'><IoIosSearch size={25} /></a>
        <a href="#" className='px-2 text-slate-500 font-semibold text-base m-auto'>Sign In</a>
        <button className="text-white bg-pink-500 rounded-lg p-2 m-auto font-semibold text-base">Share my work</button>
        </div>
    </div>
  )
}

export default Navbar