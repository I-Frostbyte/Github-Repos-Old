import React, { useState } from "react";
import loginBackground3 from "../../../assets/LoginBackground3.jpg";
import { Button, LoginHeader, TextInput } from "../../../components";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import SignUp1 from "../../../assets/SignUp1.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checked, setChecked] =  useState<boolean>(false)
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string>("password");
  const handleViewPassword = () => {
    setViewPassword((prevState) => !prevState);
    setInputType(viewPassword ? "password" : "text");
  };

  const handleCheckBox = () => {
    setChecked((prevState) => !prevState);
  }

  return (
    <div className="max-h-screen">
      <div>
        <img
          src={loginBackground3}
          alt=""
          className="w-full h-[1040px] object-cover"
        />
      </div>
      <section className="border rounded-xl bg-gradient-to-t from-cyan-200/80 to-white/30 w-[90%] my-200 ml-24 absolute -top-1 mt-20 !bg-opacity-40 pb-[80px]">
        {/* <LoginHeader /> */}
        <div className="grid grid-cols-2 gap-10 mx-20 mt-14">
          <img src={SignUp1} alt="" className="w-[100%] h-[100%] object-cover" />

          <section className="rounded-xl bg-white bg-opacity-30 py-5 w-[80%] mx-auto">
            <form action="" className="flex flex-col gap-1 my-5">
              <TextInput
                label=""
                type="text"
                placeholderText="Full Name"
                setInputValue="1"
              />

              <TextInput
                label=""
                type="email"
                placeholderText="Email"
                setInputValue="1"
              />

              <TextInput
                label=""
                type={inputType}
                placeholderText="Password"
                setInputValue={setPassword}
                showIcon
                inputIcon={
                  <div onClick={handleViewPassword} className="cursor-pointer">
                    {viewPassword ? (
                      <AiOutlineEyeInvisible size={30} />
                    ) : (
                      <AiOutlineEye size={30} />
                    )}
                  </div>
                }
              />
              <TextInput
                label=""
                type="text"
                placeholderText="Phone Number"
                setInputValue="1"
              />

              <TextInput
                label=""
                type="text"
                placeholderText="Address"
                setInputValue="1"
              />
            </form>

            <div className="block ml-12 mb-3">
              <div className="flex gap-2">
                <input type="checkbox" onChange={handleCheckBox}/>
                <p className="text-sm">I've read and agree with the <a href="#hg" className="font-semibold text-cyan-500 hover:text-cyan-700">Terms and Conditions </a> </p>
              </div>
            </div>

            <Button
              btnText="Sign Up"
              onClick=""
              customStyles="text-white bg-cyan-900 !w-[82%] ml-12 hover:bg-transparent hover:text-cyan-900 hover:border-2 hover:border-cyan-300"
              idValue=""
            />

            <div className="mt-10 text-slate-500">
              <div className="flex items-center ml-10">
                <hr className="border border-slate-500 w-[33%]" />
                <p className="mx-2">OR Sign Up With</p>
                <hr className="border border-slate-500 w-[33%]" />
              </div>
            </div>

            <form action="" className="mx-10 mt-5">
              <Button
                btnText="Gg"
                onClick=""
                customStyles="border-2 border-cyan-300 hover:bg-cyan-900 hover:text-white hover:border-none"
                idValue=""
              />

              <p className="text-sm mt-5">Already have an account? <Link to="/auth/login" className="font-semibold text-cyan-500 hover:text-cyan-700">Sign In</Link></p>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
};

export default SignUp;