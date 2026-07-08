"use client";

import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

function GoogleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.44a5.5 5.5 0 0 1-2.39 3.62v3h3.86c2.26-2.09 3.61-5.17 3.61-8.86z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A12 12 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28V6.63H1.29A12 12 0 0 0 0 12c0 1.94.46 3.77 1.29 5.37l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.29 6.63l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

function LoginCard() {
  return (
    <div className="bg-[#1a1a24] rounded-3xl shadow-xl p-12 w-full max-w-2xl mx-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <div className="space-y-8">
        <div>
          <h3 className="text-[42px] font-bold text-white">Welcome back!</h3>
          <p className="mt-4 text-[20px] text-gray-300">
          Sign in to continue to Acra
          </p>
        </div>
        <Button
          variant={"outline"}
          className={`h-auto w-full flex items-center justify-center gap-4 py-6 text-[18px] font-bold text-white border-gray-500 rounded-full bg-transparent
            hover:border-white hover:bg-white/5 transition-all duration-300 group transform hover:scale-[1.01] active:scale-[0.99]
            `}
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <GoogleIcon />
          <span>Continue with Google</span>
        </Button>
        <p className="text-center text-[15px] text-gray-400">
          By continuing, you agree to Acra&apos;s{" "}
          <a href="#" className="text-[#5caef6] underline hover:text-[#a78bfa]">
            Terms of Use
          </a>
          . Read our{" "}
          <a href="#" className="text-[#5caef6] underline hover:text-[#a78bfa]">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default LoginCard;
