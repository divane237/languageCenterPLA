import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Logo = ({ className }) => {
  return (
    <Link
      className={cn(
        "flex items-center justify-center gap-x-1 mr-auto px-2 hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none rounded-lg font-bold text-2xl text-[#44699ad7] hover:text-[#44699ad7] select-none",
        className
      )}
      href="/home"
    >
      <Image
        src="/icons/graduation-cap.svg"
        alt="Logo"
        height={40}
        width={40}
        priority
      />{" "}
      <p className={cn("text-[#44699ad7] hover:text-[#44699ad7]")}>PLA</p>
    </Link>
  );
};

export default Logo;
