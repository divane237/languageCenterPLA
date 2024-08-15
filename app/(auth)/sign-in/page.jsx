import AuthForm from "@/components/AuthForm";

import React from "react";

const SignIn = () => {
  return (
    <div className="flex flex-col justify-center h-full relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-[15%] text-3xl whitespace-nowrap">
        <h1 className="font-serif">Welcome to P.L.A !!!</h1>
      </div>
      <AuthForm type="sign-in" />
    </div>
  );
};

export default SignIn;
