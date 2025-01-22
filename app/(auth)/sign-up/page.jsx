import AuthForm from "@/components/AuthForm";

import React from "react";
const SignUp = () => {
  return (
    <div className="">
      <h1 className="text-center text-xl lg:text-3xl font-extrabold text-[#5C5470] font-mono pt-4">
        Sign Up
      </h1>
      <div className="grid grid-rows-[50px_80vh]">
        <p className="text-center py-2 font-mono text-base md:text-lg">
          Please enter your details.
        </p>
        <AuthForm type="sign-up" />
      </div>
    </div>
  );
};

export default SignUp;
