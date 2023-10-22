"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="bg-gradient-to-tr from-neutral to-base-100 h-screen flex flex-col items-center justify-center text-centerb">
      <Image src="/logo6.png" height={400} width={400} alt="logo" />
      <button
        onClick={() => signIn("google")}
        className="p-4 rounded-xl bg-neutral text-white font-bold text-3xl animate-pulse"
      >
        Sign in to use Geppetto
      </button>
    </div>
  );
}

export default Login;
