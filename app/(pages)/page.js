"use client";

import { useState } from "react";
import Features from "../components/Features";
import Landing from "../components/Landing";
import LoginModal from "../components/LoginModal";
import Numbers from "../components/Numbers";
import Reviews from "../components/Reviews";
import {
  signInAnonymously,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingAccount, setCreatingAccount] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const handleGuestLogin = async () => {
    try {
      await signInAnonymously(auth);
      setLoginOpen(false);
      console.log("Guest logged in!");
      router.push("/for-you");
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
    <div>
      <Landing />
      <Features />
      <Reviews />
      <Numbers />
    </div>
  );
}
