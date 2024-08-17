"use client";
import React, { useEffect, useState } from "react";
import SignOut from "./SignOut";
import { Loader2 } from "lucide-react";
import { studentData } from "@/lib/actions/user";
import LoadingElement from "./LoadingElement";
import { usePathname } from "next/navigation";
import DashboardMenuLink from "./DashboardMenuLink";
import { dashboardMenuList } from "@/constants";
const SideBarDashboard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const pathName = usePathname();

  useEffect(() => {
    async function getEmail() {
      try {
        setIsLoading(true);
        const result = await studentData();
        const student = JSON.parse(result);

        setData(student);
        setIsLoading(false);
      } catch (fetchError) {
        // console.log(fetchError);
      }
    }

    getEmail();
  }, []);

  return (
    <div className="bg-black max-w-[275px] w-[30%] flex flex-col relative border-r-2 border-r-gray-400 text-white/80 max-md:hidden">
      <div className="bg-gray-400 h-[100px] relative mb-14">
        {" "}
        <div className="border-[3px] w-[80px] h-[80px]  bg-blue-500 text-black border-black text-center absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 text-2xl font-semibold font-mono rounded-lg hover:cursor-pointer hover:bg-blue-500 before:content-[''] before:w-[80px] before:h-[80px] before:border-[3px] before:rounded-lg before:bottom-1/2 before:absolute before:left-1/2 before:-translate-x-1/2 before:translate-y-1/2 before:z-[-1] before:hover:bg-sky-500/60 before:border-black flex justify-center items-center">
          {isLoading ? (
            <Loader2 className="animate-spin text-center " />
          ) : (
            <span className="">
              {data?.firstName[0]}
              {data?.lastName[0]}
            </span>
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

      <div className="fixed bottom-0 py-4 px-3 text-sm flex gap-2">
        {isLoading ? (
          <>
            <LoadingElement className="ml-2" circle="circle" circleSize={2.5} />{" "}
            <LoadingElement
              className="ml-2 mt-2"
              rectangle="rectangle"
              widthRectangle={1.5}
              lengthRectangle={6}
            />
          </>
        ) : (
          <SignOut label={data.email} />
        )}
      </div>
    </div>
  );
};

export default SideBarDashboard;
