"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import { dashboardMenuList } from "@/constants";
import { usePathname } from "next/navigation";
import DashboardMenuLink from "./DashboardMenuLink";
import Logo from "./Logo";
import { cn } from "@/utils/utils";
import { getStudentData } from "@/lib/actions/user";

const MobileDashboard = ({ children }) => {
  const [dashboardMenu, setDashboardMenu] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const pathName = usePathname();

  return (
    <div className="md:hidden flex items-center justify-end z-20 relative bg-black/20 h-[8dvh]">
      {/* LOGO */}
      <Logo className={cn("hover:bg-black/20 mx-2")} />
      {/* Menu Icon */}
      <button
        className="focus:ring-2 rounded-md px-3 py-2 focus:outline-none mr-2 w-10 h-10 ml-auto hover:opacity-80"
        id="dashboardIcon"
        onClick={(e) => {
          console.log("Menu icon clicked ", e.type === "click");
          if (e.type === "click") {
            setAnimation(true);
            setDashboardMenu(true);
          }
        }}
      >
        <div class="relative w-3 h-0.5 bg-gray-800 right-1/2 translate-x-1/2 before:absolute before:content-[''] before:w-3 before:h-0.5 before:bg-gray-800 before:transition-transform before:duration-300 before:-translate-y-2 after:absolute after:content-[''] after:w-3 after:h-0.5 after:bg-gray-800 after:transition-transform after:duration-300 after:translate-y-2"></div>
      </button>
      {/* Mobile Menu */}

      {dashboardMenu && (
        <div
          className={`${
            animation ? "animate-menuEntry" : "animate-menuExit"
          } fixed top-0 backdrop-blur-sm h-[100dvh] w-[100vw] left-full text-white flex flex-nowrap z-50`}
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
            <button className="text-2xl text-red-500 focus:outline-none focus:border-none focus:ring-2 px-3 py-1 m-4 rounded-full backdrop-blur-3xl">
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

            {/* SignOut */}
            <div className="absolute bottom-0 my-5 mx-4 text-center py-2 px-1">
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileDashboard;
