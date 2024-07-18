import React, { useState } from "react";
import Image from "next/image";

import Logo from "./Logo";
import Link from "next/link";
import { navMenu } from "@/constants";
import { usePathname } from "next/navigation";
import LargeScreenNavLink from "./LargeScreenNavLink";
import { cn } from "@/lib/utils";
import MobileNavLink from "./MobileNavLink";

const MobileMenu = () => {
  const [showClasses, setShowClasses] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [toggleLinks, setToggleLinks] = useState(false);
  const pathname = usePathname();
  let isActive;

  return (
    <div className="md:hidden flex items-center">
      {/* Menu Icon */}
      <button
        className="focus:ring-2 rounded-md border-none focus:outline-none"
        id="menuIcon"
        onClick={(e) => {
          console.log("Menu icon clicked ", e.type === "click");
          if (e.type === "click") {
            setAnimation(true);
            setMobileMenu(true);
          }
        }}
      >
        <Image
          src="icons/menu.svg"
          alt="menu-icon"
          height={30}
          width={30}
          className="border-red-400"
        />
      </button>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div
          className={`${
            animation ? "animate-menuEntry" : "animate-menuExit"
          } absolute top-0 backdrop-blur-sm h-[100dvh] w-[100vw] left-full text-white flex`}
          onAnimationEnd={() => {
            if (!animation) setMobileMenu(false);
          }}
        >
          <div
            className="w-[25vw] backdrop-blur-sm text-black"
            onClick={(e) => {
              if (e.type === "click") {
                setAnimation(false);
              }
            }}
          >
            <button className="text-2xl text-red-500 focus:outline-none focus:border-none focus:ring-2 px-3 py-1 m-2 rounded-full backdrop-blur-3xl">
              X
            </button>
          </div>

          <div className="bg-colorful-600 w-[75vw] text-black font-semibold text-sm">
            <ul className="flex flex-col items-center w-full">
              {navMenu.map((menu) => {
                return (
                  <li key={menu.title} className="w-full text-center">
                    {!menu.special ? (
                      <Link
                        href={menu.route}
                        className={cn(
                          "py-3 block",
                          (isActive =
                            pathname === menu.route &&
                            "bg-colorful-700 text-white")
                        )}
                        onClick={() => {
                          setMobileMenu(false);
                        }}
                      >
                        <p>
                          {menu.title}
                          {` ${menu?.title2}`}
                        </p>
                      </Link>
                    ) : (
                      <div className="relative">
                        {/* Title */}
                        <div
                          className={cn(
                            "flex gap-x-3 justify-center py-3 hover:cursor-pointer",
                            (isActive =
                              pathname === menu.route[0] ||
                              pathname === menu.route[1] ||
                              pathname === menu.route[2]) &&
                              "bg-colorful-700 text-white"
                          )}
                          onClick={() => {
                            console.log("Toggle");
                            setToggleLinks(!toggleLinks);
                          }}
                        >
                          <p className="text-sm">Classes</p>
                          <Image
                            src="/icons/chevron-up.svg"
                            height={20}
                            width={20}
                            alt="chevron-up"
                            className=""
                          />
                        </div>

                        {/* Links */}
                        <div
                          className={`${
                            !toggleLinks ? "h-0" : ""
                          } overflow-hidden transition-all duration-200`}
                          onClick={(e) => {
                            setMobileMenu(false);
                          }}
                        >
                          <MobileNavLink
                            route={menu.english.route}
                            imageSource={menu.english.imageSource}
                            subTitle={menu.english.subTitle}
                          />
                          <MobileNavLink
                            route={menu.french.route}
                            imageSource={menu.french.imageSource}
                            subTitle={menu.french.subTitle}
                          />
                          <MobileNavLink
                            route={menu.german.route}
                            imageSource={menu.german.imageSource}
                            subTitle={menu.german.subTitle}
                          />
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="absolute bottom-0 mb-4 text-center">
              <p>Footer</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
