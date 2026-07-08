import React from 'react'
import Logo1 from "../../../assets/jmp.png"

const LoginHeader = () => {
  return (
    <div className='flex justify-between items-center w-[90%] mx-10 my-10'>
        <img src={Logo1} alt="" className='opacity-40 max-h-10 max-w-10'/>
        <div className="flex justify-between items-center gap-x-10">
            <a href="" className='hover:text-cyan-500'>Community</a>
            <a href="" className='hover:text-cyan-500'>About</a>
            <a href="" className='hover:text-cyan-500'>Blog</a>
        </div>
    </div>
  )
}

export default LoginHeader