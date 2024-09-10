import AuthForm from "@/components/AuthForm";

import React from "react";
const SignUp = () => {
  return (
    <div className="min-h-[100dvh] border-2 border-red-500">
      <h1 className="text-center text-lg lg:text-5xl font-extrabold text-[#5C5470] font-mono">
        Sign Up
      </h1>
      <div className="grid grid-rows-[50px_80vh] border-2 border-blue-600">
        <p className="text-center py-2 font-mono text-xs md:text-sm lg:text-base">
          Please enter your details.
        </p>
        <AuthForm type="sign-up" />
      </div>
    </div>
  );
};

export default SignUp;
