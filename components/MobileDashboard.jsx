"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { dashboardMenuList } from "@/constants";
import { usePathname } from "next/navigation";
import SignOut from "./SignOut";
import DashboardMenuLink from "./DashboardMenuLink";
import Logo from "./Logo";
import { cn } from "@/utils/utils";
const MobileDashboard = () => {
  const [dashboardMenu, setDashboardMenu] = useState(false);
  const [animation, setAnimation] = useState(false);
  const pathName = usePathname();

  return (
    <div className="md:hidden flex items-center justify-end z-20 relative bg-black/20">
      {/* LOGO */}
      <Logo className={cn("hover:bg-black/20")} />

      {/* Menu Icon */}
      <button
        className="focus:ring-2 rounded-md border-none focus:outline-none mx-4 my-1"
        id="menuIcon"
        onClick={(e) => {
          console.log("Menu icon clicked ", e.type === "click");
          if (e.type === "click") {
            setAnimation(true);
            setDashboardMenu(true);
          }
        }}
      >
        <Image
          src="icons/menu.svg"
          alt="dashboardmenu-icon"
          height={30}
          width={30}
        />
      </button>

      {/* Mobile Menu */}
      {dashboardMenu && (
        <div
          className={`${
            animation ? "animate-menuEntry" : "animate-menuExit"
          } absolute top-0 backdrop-blur-sm h-[100dvh] w-[100vw] left-full text-white flex flex-nowrap`}
          onAnimationEnd={() => {
            if (!animation) setDashboardMenu(false);
          }}
        >
          {/* Cancel buttton */}
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

          {/* Menu items */}
          <div className="bg-black w-[75vw] text-white/80 font-semibold text-sm">
            <ul
              className="flex flex-col w-full"
              onClick={() => {
                setDashboardMenu(false);
              }}
            >
              {dashboardMenuList.map((menu) => {
                const isActive = pathName === menu.route;
                return (
                  <li key={menu.title}>
                    <DashboardMenuLink
                      isActive={isActive}
                      href={`${menu.route}`}
                      title={menu.title}
                      className={isActive ? "bg-gray-700" : ""}
                    >
                      {menu.logo}
                    </DashboardMenuLink>
                  </li>
                );
              })}
            </ul>

            <div className="absolute bottom-0 my-2 mx-3 text-center">
              <SignOut />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileDashboard;
