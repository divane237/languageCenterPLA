"use client";
import React, { useEffect, useRef } from "react";
import { useState } from "react";

import { dashboardMenuList } from "@/constants";
import { usePathname } from "next/navigation";
import DashboardMenuLink from "./DashboardMenuLink";
import Logo from "./Logo";
import { cn } from "@/utils/utils";

const MobileDashboard = ({ children }) => {
  const [dashboardMenu, setDashboardMenu] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const pathName = usePathname();
  const modalRef = useRef(null);

  const previouslyFocusedElementRef = useRef(null);

  // Focus trapping logic
  useEffect(() => {
    if (dashboardMenu) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // Focus the first element when the component is opened
      firstElement.focus();

      const handleTabKey = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            // If Shift + Tab is pressed, and focus is on the first element, move focus to the last element
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            // If Tab is pressed, and focus is on the last element, move focus to the first element
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      // Add the tab key listener
      document.addEventListener("keydown", handleTabKey);

      // Cleanup listener when component is closed
      return () => document.removeEventListener("keydown", handleTabKey);
    }
  }, [dashboardMenu]);

  // Function to open the component and disable background scroll
  const handleOpenMenu = () => {
    // Store the currently focused element
    previouslyFocusedElementRef.current = document.activeElement;
    setAnimation(true);
    setDashboardMenu(true);
    document.body.classList.add("overflow-hidden"); // Disable background scroll
  };

  // Function to close the component and re-enable background scroll
  const handleCloseMenu = (e) => {
    setAnimation(false);

    // setMobileMenu(false);
    document.body.classList.remove("overflow-hidden"); // Re-enable background scroll

    //Restore focus to the previously focused element
    if (previouslyFocusedElementRef.current) {
      previouslyFocusedElementRef.current.focus();
    }
  };
  return (
    <div className="md:hidden flex items-center justify-end z-20 relative bg-black/20 h-[8dvh]">
      {/* LOGO */}
      <Logo className={cn("hover:bg-black/20 mx-2")} />
      {/* Menu Icon */}
      <button
        className="focus:ring-2 rounded-md px-3 py-2 focus:outline-none mr-2 w-10 h-10 ml-auto hover:opacity-80"
        id="dashboardIcon"
        onClick={handleOpenMenu}
      >
        <div className="relative w-3 h-0.5 bg-gray-800 right-1/2 translate-x-1/2 before:absolute before:content-[''] before:w-3 before:h-0.5 before:bg-gray-800 before:transition-transform before:duration-300 before:-translate-y-2 after:absolute after:content-[''] after:w-3 after:h-0.5 after:bg-gray-800 after:transition-transform after:duration-300 after:translate-y-2"></div>
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
          ref={modalRef}
        >
          {/* Cancel buttton */}
          <div
            className="w-[25vw] backdrop-blur-sm text-black"
            onClick={handleCloseMenu}
          >
            <button className="text-2xl text-red-500 focus:outline-none focus:border-none focus:ring-2 px-3 py-1 m-4 rounded-full backdrop-blur-3xl">
              X
            </button>
          </div>

          {/* Menu items */}
          <div className="bg-black w-[75vw] text-white/80 font-semibold text-sm px-[0.1rem]">
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
            <div className="absolute bottom-0 my-2 mx-4 text-center py-2 px-1">
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileDashboard;
