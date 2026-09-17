"use client";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoCloseSharp } from "react-icons/io5";
import {
  signInAnonymously,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

export default function Navbar() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingAccount, setCreatingAccount] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleGuestLogin = async () => {
    try {
      await signInAnonymously(auth);
      setLoginOpen(false);
      console.log("Guest logged in!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      setLoginOpen(false);
      console.log("Google login successful!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter your email address first.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="h-20">
        <div className="flex justify-between items-center w-full h-full max-w-5xl mx-auto py-0 px-6">
          <a href="/" className="max-w-52">
            <img className="w-full h-full" src="/assets/logo.png" alt="logo" />
          </a>
          <ul className="flex gap-6">
            <button
              onClick={() => {
                if (user) {
                  signOut(auth);
                } else {
                  setLoginOpen(true);
                }
              }}
              className="cursor-pointer text-[#032b41] transition-colors duration-300 hover:text-[#2bd97c]"
            >
              {user ? "Logout" : "Login"}
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
        <div className="w-full z-10 fixed inset-0 flex items-center justify-center bg-gray-500/50">
          <div className="relative max-w-98 bg-white rounded-lg shadow-md">
            <div className="px-12 py-8">
              <div className="text-center text-xl font-normal text-[#032b41] mb-6">
                {creatingAccount ? "Create you account" : "Login to Summarist"}
              </div>
              <button
                onClick={handleGuestLogin}
                className="cursor-pointer relative flex items-center gap-3 bg-[#3a579d] text-white justify-center w-full"
              >
                <FaUser />
                <div>Login as Guest</div>
              </button>
              <div className="flex items-center gap-3 mb-2 mt-2">
                <div className="flex-1 h-px bg-gray-800" />
                <span>or</span>
                <div className="flex-1 h-px bg-gray-800" />
              </div>
              <button
                onClick={handleGoogleLogin}
                className="cursor-pointer flex items-center gap-3 relative bg-[#3a579d] text-white justify-center w-full"
              >
                <FcGoogle />
                <div>Login with Google</div>
              </button>
              <div className="flex items-center gap-3 mb-2 mt-2">
                <div className="flex-1 h-px bg-gray-800" />
                <span>or</span>
                <div className="flex-1 h-px bg-gray-800" />
              </div>
              <form
                className="flex flex-col gap-4"
                onSubmit={async (e) => {
                  e.preventDefault();

                  try {
                    if (creatingAccount) {
                      await createUserWithEmailAndPassword(
                        auth,
                        email,
                        password,
                      );
                      console.log("Account created!");
                    } else {
                      await signInWithEmailAndPassword(auth, email, password);
                      console.log("Email login successful!");
                    }

                    setLoginOpen(false);
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-10 border-2 border-[#bac8ce] text-[#394547] py-3"
                  placeholder="Email Address"
                />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-10 border-2 border-[#bac8ce] text-[#394547] py-3"
                  placeholder="Password"
                />

                <button
                  type="submit"
                  className="cursor-pointer bg-[#2bd97c] text-[#032b41] w-full h-7 rounded-sm text-base transition-colors duration-200 hover:bg-[#1ea15b] flex items-center justify-center min-w-44"
                >
                  {creatingAccount ? "Create Account" : "Login"}
                </button>
              </form>
            </div>
            {!creatingAccount && (
              <button
                onClick={handleForgotPassword}
                className="cursor-pointer h-10 text-center text-[#116be9] w-full mb-2"
              >
                Forgot your password?
              </button>
            )}
            <button
              onClick={() => setCreatingAccount(true)}
              className="cursor-pointer h-10 text-center bg-[#f1f6f4] text-[#116be9] w-full "
            >
              {creatingAccount
                ? "Already have an account"
                : "Don't have an account?"}
            </button>
            <button
              onClick={() => setLoginOpen(false)}
              className="text-3xl absolute top-3 right-3 flex cursor-pointer transition duration-200 opacity-15"
            >
              <IoCloseSharp />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
