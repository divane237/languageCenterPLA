"use client";
import React, { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";
import DashboardMenuLink from "./DashboardMenuLink";
import { dashboardMenuList } from "@/constants";
import { useStudentInfo } from "@/store";
import { useShallow } from "zustand/react/shallow";

const SideBarDashboard = ({ children }) => {
  const pathName = usePathname();
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

  return (
    <div className="bg-black h-[100%] max-w-[275px] w-[30%] flex flex-col relative border-r-2 border-r-gray-400 text-white/80 max-md:hidden">
      <div className="bg-gray-400 h-[100px] relative mb-14">
        {" "}
        <div className="border-[3px] w-[80px] h-[80px]  bg-blue-500 text-black border-black text-center absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 text-2xl font-semibold font-mono rounded-lg hover:cursor-pointer hover:bg-blue-500 before:content-[''] before:w-[80px] before:h-[80px] before:border-[3px] before:rounded-lg before:bottom-1/2 before:absolute before:left-1/2 before:-translate-x-1/2 before:translate-y-1/2 before:z-[-1] before:hover:bg-sky-500/60 before:border-black flex justify-center items-center">
          {!student ? (
            <Loader2
              className="animate-spin text-center text-sky-400 font-bold"
              size={30}
            />
          ) : !error ? (
            <p className="tracking-widest">
              {student.firstName[0]}
              {student.lastName[0]}
            </p>
          ) : (
            <p className="text-xs text-black/90 tracking-widest whitespace-nowrap">
              Reload
            </p>
          )}
        </div>
      </div>

      {/* Dashboard Links */}

      <ul className="mb-4">
        {dashboardMenuList.map((menu) => {
          const isActive = pathName === menu.route;

          return (
            <li key={menu.title}>
              <DashboardMenuLink
                isActive={isActive}
                href={`${menu.route}`}
                title={menu.title}
                key={menu.title}
                className={isActive ? "bg-gray-700" : ""}
              >
                {menu.logo}
              </DashboardMenuLink>
            </li>
          );
        })}
      </ul>

      <div className="absolute bottom-0 py-4 px-3 text-sm flex gap-2">
        {children}
      </div>
    </div>
  );
};

export default SideBarDashboard;
