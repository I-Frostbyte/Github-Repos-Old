import React from 'react'
import Login1 from '../assets/Login1.jpg'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Signup = () => {
  return (
    <div className="container pt-5">
        <Navbar />
        <div className='grid grid-cols-2'>
            <div className="mx-2 pt-2">
                <img src={Login1} alt="" className='ml-20'/>
            </div>
            <div className="mr-0 ml-20 text-black">
                <div className="py-3">
                    <h1 className="text-center justify-center text-5xl font-bold">Welcome !</h1>
                    <p className="text-center justify-center text-slate-500 font-semibold px-24 pt-5">Register as a voter on the Voteroo voting platform to vote on your preferred candidate.</p>
                </div>
                <div className="py-3 text-center">
                    <input type="number" className='rounded-3xl pr-72 pl-5 py-3' placeholder='Student Id No:'/>
                </div>
                <div className="py-3 text-center">
                    <input type="password" className='rounded-3xl pr-72 pl-5 py-3' placeholder='Password'/>
                </div>
                <div className="text-center px-32 pt-5 pb-5">
                    <p className="text-slate-500 font-semibold">By Clicking the sign up button, you agree with our</p>
                    <p className="text-purple-700 font-bold">Terms and Conditions</p> 
                </div> 

                <div className="text-center pb-10">
                    <button className="text-white bg-purple-500 hover:bg-white hover:border hover:border-purple-500 hover:text-purple-500 rounded-3xl px-56 py-4 my-3 font-bold text-xs">Sign up</button>
                    {/* <br /> */}
                    <Link to="/admin">
                    <button className="text-purple-500 hover:bg-purple-600 hover:text-white border border-0 rounded-3xl px-48 py-4 my-3 font-bold text-xs" id="admin-button">Sign In as an Admin </button>
                    </Link>
                </div>                
            </div>            
        </div>
    </div>
  )
}

export default Signup