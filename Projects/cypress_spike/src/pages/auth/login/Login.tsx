import React, { useState } from "react";
import loginBackground3 from "../../../assets/LoginBackground3.jpg";
import { Button, LoginHeader, TextInput } from "../../../components";
import { GoDotFill } from "react-icons/go";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string>("password");
  const handleViewPassword = () => {
    setViewPassword((prevState) => !prevState);
    setInputType(viewPassword ? "password" : "text");
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main/success");
  };

  const handleGg = () => {
    navigate("/main/google");
  };

  return (
    <div className="max-h-screen">
      <div>
        <img
          src={loginBackground3}
          alt=""
          className="w-full h-screen object-cover"
        />
      </div>
      <section className="border rounded-xl bg-gradient-to-t from-cyan-200/80 to-white/30 w-[90%] my-200 ml-24 absolute -top-1 mt-20 !bg-opacity-40 pb-[80px]">
        <LoginHeader />
        <div className="grid grid-cols-2 gap-10 mx-20 mt-14">
          <section className="block">
            <div className="flex gap-4 items-center">
              <GoDotFill />
              <p>MEET & TALK ALTERNATIVELY</p>
            </div>
            <p className="text-6xl font-bold my-2">Upgrade yourself everyday</p>
            <p className="my-5 font-medium text-lg text-slate-500 w-[50%]">
              Redesign your coffee break and discover a group of people who want
              to share and learn on a daily basis, through insolite meetings and
              debates. . . and coffee!
            </p>
            <p className="mt-44">
              New here? Don't miss your opportunity to{" "}
              <a
                href="/auth/sign-up"
                className="text-cyan-500 font-semibold hover:text-cyan-900"
              >
                Sign Up
              </a>
            </p>
          </section>

          <section className="rounded-xl bg-white bg-opacity-30 py-5 w-[70%] mx-auto">
            {/* <p className="text-center font-bold text-lg underline">Sign In</p> */}

            <form action="" className="flex flex-col gap-5 my-5">
              <TextInput
                label="Email"
                type="text"
                placeholderText="Email"
                setInputValue={setEmail}
              />
              <TextInput
                label="Password"
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
            </form>

            <Button
              btnText="Sign In"
              onClick={handleClick}
              customStyles="text-white bg-cyan-900 !w-[82%] ml-12 hover:bg-transparent hover:text-cyan-900 hover:border-2 hover:border-cyan-300"
              idValue="sign-in"
              // data-cy="sign-in"
            />

            {/* <button
              type="button"
              onClick={() => {
                navigate("/main/success");
              }}
              className={`py-2.5 text-center rounded-lg active:scale-[0.99] transition-all duration-300 text-white bg-cyan-900 !w-[82%] ml-12 hover:bg-transparent hover:text-cyan-900 hover:border-2 hover:border-cyan-300`}
            ></button> */}

            <div className="mt-20 text-slate-500">
              <div className="flex items-center ml-10">
                <hr className="border border-slate-500 w-[33%]" />
                <p className="mx-2">or connect with</p>
                <hr className="border border-slate-500 w-[33%]" />
              </div>
            </div>

            <form action="" className="flex justify-between gap-5 mx-10 mt-5">
              <Button
                btnText="Fb"
                onClick=""
                customStyles="border-2 border-cyan-300 hover:bg-cyan-900 hover:text-white hover:border-none"
                idValue=""
              />
              <Button
                btnText="Gg"
                onClick={handleGg}
                customStyles="border-2 border-cyan-300 hover:bg-cyan-900 hover:text-white hover:border-none"
                idValue="gg"
              />
            </form>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Login;
