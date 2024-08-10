import React from "react";
import { Button } from "./ui/button";
import { Logout } from "@/lib/actions";
const SignOut = () => {
  return (
    <form action={Logout}>
      <Button>logout</Button>
    </form>
  );
};

export default SignOut;
