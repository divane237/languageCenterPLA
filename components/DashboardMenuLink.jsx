"use client";
import { cn } from "@/utils/utils";
import Link from "next/link";
import React from "react";
const DashboardMenuLink = ({
  children,
  title = "Example",
  href = "/",
  className,
  isActive = false,
}) => {
  return (
    <Link
      className={cn(
        "py-4 px-5 flex text-sm lg:text-lg focus:outline-none focus:border-none focus:ring-2 my-[0.1rem]",
        !isActive && "hover:bg-sky-400",
        className
      )}
      href={href}
    >
      {children}
      <span className="text-lg mx-2 font-medium whitespace-nowrap">
        {title}
      </span>
    </Link>
  );
};

export default DashboardMenuLink;
