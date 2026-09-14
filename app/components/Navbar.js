"use client";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <nav className="h-20">
        <div className="flex justify-between items-center w-full h-full max-w-5xl mx-auto py-0 px-6">
          <a href="/" className="max-w-52">
            <img className="w-full h-full" src="/assets/logo.png" alt="logo" />
          </a>
          <ul className="flex gap-6">
            <button
              onClick={() => setLoginOpen(true)}
              className="cursor-pointer text-[#032b41] transition-colors duration-300 hover:text-[#2bd97c]"
            >
              Login
            </button>
            <li className="hidden cursor-not-allowed text-[#032b41] transition-colors duration-300 hover:text-[#2bd97c] sm:block">
              About
            </li>
            <li className="hidden cursor-not-allowed text-[#032b41] transition-colors duration-300 hover:text-[#2bd97c] sm:block">
              Contact
            </li>
            <li className="hidden cursor-not-allowed text-[#032b41] transition-colors duration-300 hover:text-[#2bd97c] sm:block">
              Help
            </li>
          </ul>
        </div>
      </nav>
      {loginOpen && (
        <div className="w-full z-10">
          <div className="relative max-w-98 bg-white rounded-lg shadow-md">
            <div className="px-12 py-8">
              <div className="text-center text-xl font-normal text-[#032b41] mb-6">
                Login to Summarist
              </div>
              <button className="relative flex bg-[#3a579d] text-white justify-center w-full">
                <FaUser />
                <div>Login as Guest</div>
              </button>
              <div className="text-center mb-2 mt-2">or</div>
              <button className="relative flex bg-[#3a579d] text-white justify-center w-full">
                <FcGoogle />
                <div>Login with Google</div>
              </button>
              <div className="text-center mb-2 mt-2">or</div>
              <form className="flex flex-col gap-4">
                <input
                  className="h-10 border-2 border-[#bac8ce] text-[#394547] py-3"
                  placeholder="Email Address"
                />
                <input
                  className="h-10 border-2 border-[#bac8ce] text-[#394547] py-3"
                  placeholder="Password"
                />
              </form>
            </div>
            <div className="text-center text-[#116be9] font-light text-sm w-fit mx-auto mb-4 cursor-not-allowed">
              Forgot your password?
            </div>
            <button className="h-10 text-center bg-[#f1f6f4] text-[#116be9] w-full ">
              Don't have an account?
            </button>
            <button className="absolute top-3 right-3 flex cursor-pointer transition duration-200 opacity-15">
              <IoCloseSharp />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
