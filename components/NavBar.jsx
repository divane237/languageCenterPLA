"use client";
import * as React from "react";
import Logo from "./Logo";

import { navMenu } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { cn } from "@/utils/utils";
import LargeScreenNavLink from "./LargeScreenNavLink";

const NavBar = () => {
  const pathname = usePathname();
  let isActive;

  return (
    <div className="flex items-center mb-4 px-2 py-1 text-base gap-x-2 border-b-2 border-colorful-600 shadow-md">
      <Logo />

      {/* Language Buttons */}
      <div className="text-xs md:text-sm">
        <button className="focus:ring-2 rounded-md focus:outline-none px-2 py-1 mx-1">
          EN
        </button>
        <button className="focus:ring-2 rounded-md border-none focus:outline-none px-2 py-1 mx-1">
          FR
        </button>
        <button className="focus:ring-2 rounded-md border-none focus:outline-none px-2 py-1 mx-1">
          DE
        </button>
      </div>

      {/* Start of MENU | CLASSES | ABOUT nav links  */}

      <ul className="max-md:hidden flex gap-x-1 items-center">
        {navMenu.map((menu, i) => {
          return (
            <li key={menu.title} className="rounded-md">
              {!menu.special ? (
                <Link
                  href={menu.route}
                  className={cn(
                    "rounded-md hover:border-b-2 hover:border-colorful-700 hover:text-black focus:border-colorful-700 focus:text-black focus:outline-none px-2 py-1 text-lg focus:border-b-2",
                    (isActive =
                      pathname === menu.route &&
                      "border-b-2 border-colorful-700")
                  )}
                >
                  {menu.title}
                </Link>
              ) : (
                <div
                  className={cn(
                    "relative rounded-md hover:border-b-2 hover:border-colorful-700 hover:text-black focus:border-colorful-700 focus:text-black focus:outline-none text-lg focus:border-b-2 group",
                    (isActive =
                      pathname === menu.route[0] ||
                      pathname === menu.route[1] ||
                      pathname === menu.route[2]) &&
                      "border-b-2 border-colorful-700"
                  )}
                >
                  {/* Name & Chevron  */}
                  <div
                    tabIndex={5}
                    className="flex hover:cursor-pointer w-full px-2 gap-x-4"
                  >
                    <p className="">{menu.title}</p>
                    <Image
                      src="/icons/chevron-up.svg"
                      height={24}
                      width={24}
                      alt="chevron-up"
                      className="group-hover:rotate-180 transition-all duration-100 delay-100 w-[24px] h-[24px]"
                    />
                  </div>

                  {/* Menu list for classes */}
                  <div className="rounded-md absolute mt-4 right-1/2 translate-x-1/2 flex flex-col h-0 w-0 overflow-hidden group-hover:w-[400px] group-hover:h-[324px] transition-all duration-300 shadow-xl delay-300">
                    <LargeScreenNavLink
                      subTitle={menu.english.subTitle}
                      description={menu.english.description}
                      route={menu.english.route}
                      image={menu.english.imageSource}
                    />
                    <LargeScreenNavLink
                      subTitle={menu.french.subTitle}
                      description={menu.french.description}
                      route={menu.french.route}
                      image={menu.french.imageSource}
                    />
                    <LargeScreenNavLink
                      subTitle={menu.german.subTitle}
                      description={menu.german.description}
                      route={menu.german.route}
                      image={menu.german.imageSource}
                    />
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* End of MENU | CLASSES | ABOUT nav links */}

      {/* Mobile Menu */}
      <MobileMenu />
    </div>
  );
};

export default NavBar;
