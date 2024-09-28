import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navMenu } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/utils";
import MobileNavLink from "./MobileNavLink";
import { LogIn, User } from "lucide-react";
import Footer from "./Footer";

const MobileMenu = ({ session }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [toggleLinks, setToggleLinks] = useState(true);
  const modalRef = useRef(null);

  const previouslyFocusedElementRef = useRef(null);

  const pathname = usePathname();
  let isActive;

  // Function to open the component and disable background scroll
  const handleOpenMenu = () => {
    // Store the currently focused element
    previouslyFocusedElementRef.current = document.activeElement;
    setAnimation(true);
    setMobileMenu(true);
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

  // Focus trapping logic
  useEffect(() => {
    if (mobileMenu) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // Focus the first element when the component is opened
      firstElement.focus();

      const handleTabKey = (e) => {
        if (e.key === "Escape") {
          handleCloseMenu();
        }
        if (e.key === "Tab") {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };
      // Add the tab key listener
      document.addEventListener("keydown", handleTabKey);

      // Cleanup listener when component is closed
      return () => document.removeEventListener("keydown", handleTabKey);
    }
  }, [mobileMenu]);

  return (
    <div className="md:hidden flex items-center z-[5]">
      {/* Menu Icon */}
      <button
        className="focus:ring-2 rounded-md px-3 py-2 focus:outline-none mr-2 w-10 h-10 ml-auto hover:opacity-80 border-none"
        id="menuIcon"
        onClick={handleOpenMenu}
      >
        <div className="relative w-3 h-0.5 bg-gray-800 right-1/2 translate-x-1/2 before:absolute before:content-[''] before:w-3 before:h-0.5 before:bg-gray-800 before:transition-transform before:duration-300 before:-translate-y-2 after:absolute after:content-[''] after:w-3 after:h-0.5 after:bg-gray-800 after:transition-transform after:duration-300 after:translate-y-2"></div>
      </button>

      {/* Mobile Menu */}

      {mobileMenu && (
        <div
          className={`${
            animation ? "animate-menuEntry" : "animate-menuExit"
          } fixed top-0 backdrop-blur-sm w-screen left-full text-white flex h-screen`}
          onAnimationEnd={() => {
            if (!animation) setMobileMenu(false);
          }}
          ref={modalRef}
        >
          {/* Left side cancel button */}
          <div
            className="w-[25vw] backdrop-blur-sm text-black"
            onClick={handleCloseMenu}
          >
            <button className="text-2xl text-red-500 focus:outline-none focus:border-none focus:ring-2 px-3 py-1 m-2 rounded-full backdrop-blur-3xl">
              X
            </button>
          </div>

          {/* Right side menu links */}
          <div className="bg-colorful-600 w-[75vw] text-black font-semibold text-sm rounded-sm relative h-[100dvh] px-[0.1rem]">
            <ul className="flex flex-col items-center w-full">
              {navMenu.map((menu) => {
                return (
                  <li key={menu.title} className="w-full text-center">
                    {!menu.special ? (
                      <Link
                        href={menu.route}
                        className={cn(
                          "py-3 hover:bg-colorful-700/60 flex justify-center gap-x-2  items-center rounded-sm focus:outline-none focus:border-none focus:ring-2 my-1",
                          (isActive =
                            pathname === menu.route &&
                            "bg-colorful-700 text-white hover:bg-colorful-700")
                        )}
                        onClick={() => {
                          setMobileMenu(false);
                        }}
                      >
                        <span>{menu.logo}</span>
                        <p>{menu.title}</p>
                      </Link>
                    ) : (
                      //Title
                      <div className="relative h-auto">
                        <div
                          className={cn(
                            "flex gap-x-3 justify-center py-3 hover:cursor-pointer rounded-sm",
                            (isActive =
                              pathname === menu.route[0] ||
                              pathname === menu.route[1] ||
                              pathname === menu.route[2]) &&
                              "bg-colorful-700 text-white"
                          )}
                          onClick={() => {
                            setToggleLinks(!toggleLinks);
                          }}
                        >
                          <span>{menu.logo}</span>
                          <p className="text-sm">Classes</p>
                          <Image
                            src="/icons/chevron-up.svg"
                            height={0}
                            width={0}
                            alt="chevron-up"
                            className={`${
                              toggleLinks ? "rotate-180" : ""
                            } w-5 h-auto`}
                          />
                        </div>
                        {/* Links */}
                        <div
                          className={`${
                            !toggleLinks ? "h-0 overflow-hidden" : ""
                          } py-1`}
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

              {/* Sign In / dashboard link */}
              <li className="mx-1 w-full flex justify-center">
                {session ? (
                  <Link
                    href={"/dashboard"}
                    className="py-3 hover:bg-colorful-700/60 flex justify-center gap-x-2  items-center rounded-sm w-full focus:outline-none focus:border-none focus:ring-2"
                  >
                    <User />
                    <p>Dashboard</p>
                  </Link>
                ) : (
                  <Link
                    href={"/sign-in"}
                    className="py-3 hover:bg-colorful-700/60 flex justify-center gap-x-2  items-center rounded-sm w-full focus:outline-none focus:border-none focus:ring-2"
                  >
                    <LogIn />
                    <p>Login</p>
                  </Link>
                )}
              </li>
            </ul>

            <div className="absolute bottom-0 w-full">
              <Footer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
