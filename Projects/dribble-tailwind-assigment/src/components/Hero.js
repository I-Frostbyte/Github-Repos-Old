import React from 'react';
import videoBg from '../assets/dribble-background-video.mp4'
import {IoIosSearch} from 'react-icons/io'


const Hero = () => {
  return (
    <div className='hero-container w-full h-screen'>
        <div className="lg:flex pt-10 px-12 absolute z-30 xl:m-auto md:grid md:grid-cols-3 sm:grid sm:grid-cols-2" id="content">
            <button className="rounded-full bg-black bg-opacity-60 text-white font-medium hover:bg-white hover:text-black active:bg-white p-3.5 lg:mx-3 lg:my-0 md:my-2 md:mx-3 sm:my-2 sm:mx-3">Discover</button>
            <button className="rounded-full bg-black bg-opacity-60 text-white font-medium hover:bg-white hover:text-black p-3.5 lg:mx-3 lg:my-0 md:my-2 md:mx-3 sm:my-2 sm:mx-3">Animation</button>
            <button className="rounded-full bg-black bg-opacity-60 text-white font-medium hover:bg-white hover:text-black p-3.5 lg:mx-3 lg:my-0 md:my-2 md:mx-3 sm:my-2 sm:mx-3">Branding</button>
            <button className="rounded-full bg-black bg-opacity-60 text-white font-medium hover:bg-white hover:text-black p-3.5 lg:mx-3 lg:my-0 md:my-2 md:mx-3 sm:my-2 sm:mx-3">Illustration</button>
            <button className="rounded-full bg-black bg-opacity-60 text-white font-medium hover:bg-white hover:text-black p-3.5 lg:mx-3 lg:my-0 md:my-2 md:mx-3 sm:my-2 sm:mx-3">Mobile</button>
            <button className="rounded-full bg-black bg-opacity-60 text-white font-medium hover:bg-white hover:text-black p-3.5 lg:mx-3 lg:my-0 md:my-2 md:mx-3 sm:my-2 sm:mx-3">Print</button>
            <button className="rounded-full bg-black bg-opacity-60 text-white font-medium hover:bg-white hover:text-black p-3.5 lg:mx-3 lg:my-0 md:my-2 md:mx-3 sm:my-2 sm:mx-3">Product Design</button>
            <button className="rounded-full bg-black bg-opacity-60 text-white font-medium hover:bg-white hover:text-black p-3.5 lg:mx-3 lg:my-0 md:my-2 md:mx-3 sm:my-2 sm:mx-3">Typography</button>
            <button className="rounded-full bg-black bg-opacity-60 text-white font-medium hover:bg-white hover:text-black p-3.5 lg:mx-3 lg:my-0 md:my-2 md:mx-3 sm:my-2 sm:mx-3">Web Design</button>
        </div>
        <div id="text-content" className="flex w-full h-full flex-col justify-center align-center absolute text-white text-center z-20 lg:m-auto md:mt-10 md:z-30 sm:mt-10">
            <h2 className='py-5 text-4xl font-bold w-1/3 mx-auto'>Explore the world's leading design portfolios</h2>
            <p className="py-1 font-semibold">Millions of designers and agencies around the world showcase their portfolio work on</p>
            <p className=' font-semibold mb-10'>Dribbble - the home to the world's best design and creative professionals</p>
            <div className='relative'>
            <IoIosSearch className="mx-auto absolute top-15 left-96" size={25} />
            {/* MAKE SURE TO COME BACK HERE */}
            <input type="text" className="rounded-full w-6/12 h-14 text-black px-5 mx-auto border-red-100" placeholder="Search..." />
            </div>
            <div id="trending-buttons" className="lg:flex mx-auto mt-10 md:grid md:grid-cols-3 sm:grid sm:grid-cols-2">
              <p className='mr-2 m-auto text-sm'>Trending Searches</p>
              <button className="rounded-full bg-transparent border border-white px-3 py-1 lg:mx-2 lg:my-0 md:my-2 md:mx-2 sm:my-2 sm:mx-2 text-white font-medium">landing page</button>
              <button className="rounded-full bg-transparent border border-white px-4 py-1 lg:mx-2 lg:my-0 md:my-2 md:mx-2 sm:my-2 sm:mx-2 text-white font-medium">ios</button>
              <button className="rounded-full bg-transparent border border-white px-3 py-1 lg:mx-2 lg:my-0 md:my-2 md:mx-2 sm:my-2 sm:mx-2 text-white font-medium">food</button>
              <button className="rounded-full bg-transparent border border-white px-3 py-1 lg:mx-2 lg:my-0 md:my-2 md:mx-2 sm:my-2 sm:mx-2 text-white font-medium">landing page</button>
              <button className="rounded-full bg-transparent border border-white px-3 py-1 lg:mx-2 lg:my-0 md:my-2 md:mx-2 sm:my-2 sm:mx-2 text-white font-medium">ux design</button>
              <button className="rounded-full bg-transparent border border-white px-3 py-1 lg:mx-2 lg:my-0 md:my-2 md:mx-2 sm:my-2 sm:mx-2 text-white font-medium">app design</button>
            </div>
            
        </div>
        <div className="overlay absolute left-0 w-full h-full bg-black opacity-60 z-10">
        <p className="justify-end right-3 pr-2 text-right text-slate-300 hover:text-white absolute z-0 bottom-7 text-sm"><a href='#'>@Frostbyte</a></p>
        </div>
        <video className='w-full h-full object-cover z-50' src={videoBg} autoPlay loop muted />
    </div>
  )
}

export default Hero