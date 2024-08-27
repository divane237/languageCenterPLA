"use client";

import React, { useTransition } from "react";
import { Button } from "./ui/button";
import { Logout } from "@/lib/actions/auth";
import { Loader2, LogOut } from "lucide-react";

const SignOut = ({ label = "123example@email.com" }) => {
  const [isPending, startTransition] = useTransition();

  function onSubmit() {
    startTransition(async () => {
      await Logout();
    });
  }

  return (
    <form action={onSubmit} className="flex gap-2">
      <Button className="bg-black/5 border-2 border-white">
        {isPending ? (
          <Loader2 className="animate-spin" />
        ) : (
          <div className="">
            <LogOut />
          </div>
        )}
      </Button>
      <div>
        <p>Logout</p>
        <span className="text-[0.6rem] font-medium font-serif">{label}</span>
      </div>
    </form>
  );
};

export default SignOut;
