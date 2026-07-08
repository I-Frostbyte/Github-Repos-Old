import React from 'react'
import Logo1 from "../../../assets/jmp.png"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-[80%] mx-auto my-5">
        <div className="flex items-center justify-between gap-10">
            <img src={Logo1} alt="" className='opacity-40 max-h-10 max-w-10'/>
            <div className="flex items-center gap-10">
                <a href="#gh" className='text-cyan-500 hover:text-cyan-700 text-md'>For Job Seekers</a>
                <a href="#gh" className='text-cyan-500 hover:text-cyan-700 text-md'>For Employers</a>
                <a href="#gh" className='text-cyan-500 hover:text-cyan-700 text-md'>Startup</a>
            </div>
        </div>
        <div className="flex items-center gap-5">
            <a href="/auth/login" className="text-cyan-500 hover:text-cyan-700">Login</a>
            <a href="/auth/sign-up" className="text-cyan-500 hover:text-cyan-700">Signup</a>
        </div>
    </div>
  )
}

export default Navbar