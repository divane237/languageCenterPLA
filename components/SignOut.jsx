"use client";

import React, { useTransition } from "react";
import { Button } from "./ui/button";
import { Logout } from "@/lib/actions/auth";
import { Loader2 } from "lucide-react";
const SignOut = () => {
  const [isPending, startTransition] = useTransition();

  function onSubmit() {
    startTransition(async () => {
      await Logout();
    });
  }

  return (
    <form action={onSubmit}>
      <Button>
        {isPending ? (
          <Loader2 className="animate-spin" />
        ) : (
          <p className="m-1">Logout</p>
        )}
      </Button>
    </form>
  );
};

export default SignOut;
