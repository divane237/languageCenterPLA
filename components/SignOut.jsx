"use client";

import React, { useEffect, useTransition } from "react";
import { Button } from "./ui/button";
import { Logout } from "@/lib/actions/auth";
import { Loader2, LogOut } from "lucide-react";
import { useStudentInfo } from "@/store";
import { useShallow } from "zustand/react/shallow";

const SignOut = () => {
  const [isPending, startTransition] = useTransition();
  const { student, error, getStudentInfo } = useStudentInfo(
    useShallow((state) => ({
      student: state.student,
      error: state.error,
      getStudentInfo: state.getStudentInfo,
    }))
  );

  useEffect(() => {
    getStudentInfo();
  }, [getStudentInfo]);

  function onSubmit() {
    startTransition(async () => {
      await Logout();
    });
  }

  return (
    // <div onClick={onSubmit} className="flex gap-2">
    <div
      onClick={(e) => {
        e.preventDefault();
        if (e.target) onSubmit();
      }}
      className="flex gap-2"
    >
      <Button className="border-white bg-red-700 hover:bg-red-700/80 active:scale-125 focus:bg-red-700/80">
        {isPending ? (
          <Loader2 className="animate-spin text-sky-400" />
        ) : (
          <div className="">
            <LogOut />
          </div>
        )}
      </Button>
      <div className="grid grid-cols-1 place-items-start gap-y-[0.2rem]">
        <p className="text-sm lg:text-base text-inherit font-semibold select-none">
          Logout
        </p>
        <span className="sm:text-[0.6rem] lg:text-xs font-medium font-serif">
          {student == null ? (
            <p className="h-2 w-20 rounded-full bg-sky-300 animate-pulse py-1.5 select-none"></p>
          ) : !error ? (
            <p className="text-xs">{student.email}</p>
          ) : (
            <p className="text-xs tracking-widest select-none">Refresh</p>
          )}
        </span>
      </div>
    </div>
  );
};

export default SignOut;
