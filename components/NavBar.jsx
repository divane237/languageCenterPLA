"use client";
import React, { useEffect } from "react";
import Logo from "./Logo";

import { navMenu } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { cn } from "@/utils/utils";
import LargeScreenNavLink from "./LargeScreenNavLink";
import { User } from "lucide-react";
import { useSession } from "@/store";
import { useShallow } from "zustand/react/shallow";

const NavBar = () => {
  const { session, getCurrentSession } = useSession(
    useShallow((state) => ({
      session: state.session,
      getCurrentSession: state.getCurrentSession,
    }))
  );

  useEffect(() => {
    getCurrentSession();
  }, [getCurrentSession]);

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

      <ul className="max-md:hidden flex gap-x-3 items-center">
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
                  <section className="flex hover:cursor-pointer w-full px-2 gap-x-4">
                    <p className="">{menu.title}</p>
                    <Image
                      src="/icons/chevron-up.svg"
                      height={0}
                      width={0}
                      alt="chevron-up"
                      className="group-hover:rotate-180 delay-100 w-5 h-auto"
                    />
                  </section>

                  {/* Menu list for classes */}
                  <section
                    className="rounded-md absolute mt-4 right-1/2 translate-x-1/2  flex-col h-0 group-hover:w-[400px] group-hover:h-auto shadow-xl  hidden group-hover:flex group-hover:border-2 before:h-[50px] before:w-[8rem] before:top-0 before:-translate-y-1/2 before:absolute before:left-1/2 before:-translate-x-1/2 z-10 before:content-[''] hover:before:z-[-5] before:bg-transparent bg-white"
                    // tabIndex="0"
                  >
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
                  </section>
                </div>
              )}
            </li>
          );
        })}

        {/* Sign In logo */}

        <li className="mx-1 text-base">
          {session ? (
            <Link
              href={"/dashboard"}
              className="hover:border-b-2 hover:border-colorful-700 hover:text-black focus:border-colorful-700 focus:text-black focus:outline-none focus:border-b-2 block rounded-md"
            >
              <User className="mx-2 my-1" />
            </Link>
          ) : (
            <Link
              href={"/sign-in"}
              className="hover:border-b-2 hover:border-colorful-700 hover:text-black focus:border-colorful-700 focus:text-black focus:outline-none focus:border-b-2 block rounded-md px-3 py-1"
            >
              Login
            </Link>
          )}
        </li>
      </ul>

      {/* End of MENU | CLASSES | ABOUT nav links */}

      {/* Mobile Menu */}
      <MobileMenu />
    </div>
  );
};

export default NavBar;
