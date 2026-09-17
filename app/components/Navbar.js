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

export default function Navbar({ user, setLoginOpen, auth }) {
  // const [loginOpen, setLoginOpen] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [creatingAccount, setCreatingAccount] = useState(false);
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });

  //   return () => unsubscribe();
  // }, []);

  // const handleGuestLogin = async () => {
  //   try {
  //     await signInAnonymously(auth);
  //     setLoginOpen(false);
  //     console.log("Guest logged in!");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleGoogleLogin = async () => {
  //   const provider = new GoogleAuthProvider();

  //   try {
  //     await signInWithPopup(auth, provider);
  //     setLoginOpen(false);
  //     console.log("Google login successful!");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleForgotPassword = async () => {
  //   if (!email) {
  //     alert("Please enter your email address first.");
  //     return;
  //   }

  //   try {
  //     await sendPasswordResetEmail(auth, email);
  //     alert("Password reset email sent!");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
    </>
  );
}
