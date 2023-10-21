"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-centerb">
      <Image src="https://links.papareact.com/2i6" height={400} width={400} alt="logo" />
      <button
        onClick={() => signIn("google")}
        className="p-4 rounded-xl bg-[#11937F] text-white font-bold text-3xl animate-pulse"
      >
        Sign in to use Geppetto
      </button>
    </div>
  );
}

export default Login;
