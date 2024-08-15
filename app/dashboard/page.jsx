import { userData } from "@/constants";
import Image from "next/image";
import React from "react";

const Dashboard = () => {
  const data = userData;
  return (
    <div className="w-screen h-screen md:w-[80%] lg:w-full bg-black text-white/80">
      {/* First section is profile picture */}

      <div className="h-[200px] flex border-b-[1.55px] border-b-gray-400">
        <div className="basis-1/3 relative">
          <div className="h-[150px] w-[150px] bg-sky-400 rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hover:bg-sky-400/70 hover:cursor-pointer">
            {/* <Image src={} alt="profile-picture" /> */}
          </div>
        </div>
        <div className="basis-2/3 mt-8 text-center leading-normal">
          <p className="md:text-2xl font-mono mt-4 font-semibold text-lg lg:text-4xl">
            Welcome {`${data.firstName} ${data.lastName}`}
          </p>
          <span className="italic text-xs md:text-sm lg:text-base">
            Please contact Administration for any modification request on
            personal info.
          </span>
        </div>
      </div>

      {/* Second section student information */}

      <div className="text-sm md:text-base bg-red-400 h-full">
        <p>First Name: {data.firstName}</p>
        <p>Last Name: {data.lastName}</p>
        <p>Address: {data.address}</p>
        <p>Country: {data.country}</p>
        <p>Identification Document: {data.document}</p>
        <p>ID No: {data.idNumber}</p>
      </div>
    </div>
  );
};

export default Dashboard;
