import React from "react";
import SignOut from "./SignOut";
import Link from "next/link";
import { UserRound, BookOpenCheck } from "lucide-react";
import GermanFlag from "./GermanFlag";
import EnglandFlag from "./EnglandFlag";
import FranceFlag from "./FranceFlag";
import { userData } from "@/constants";
const SideBarDashboard = () => {
  const data = userData;

  return (
    <div className="bg-black max-w-[275px] w-[30%] flex flex-col relative border-r-2 border-r-gray-400 text-white/80 max-md:hidden">
      <div className="bg-gray-400 h-[100px] relative mb-14">
        {" "}
        <p className="border-[3px] w-[80px] h-[80px] bg-green-500 text-black border-black text-center absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 text-2xl font-semibold font-mono pt-5 hover:bg-green-500/90  rounded-lg hover:cursor-pointer">{`${data.firstName[0]}${data.lastName[0]}`}</p>
      </div>

      {/* Dashboard Links */}

      <div className="mb-4">
        <Link className="py-4 px-5 flex hover:bg-sky-600" href="/dashboard">
          <UserRound size={28} strokeWidth={1.5} />
          <span className="text-lg mx-2 font-medium">Profile</span>
        </Link>
        <Link
          className="py-4 px-5 flex hover:bg-sky-600"
          href="/dashboard/english"
        >
          <EnglandFlag />
          <span className="text-lg mx-2 font-medium">English</span>
        </Link>
        <Link
          className="py-4 px-5 flex hover:bg-sky-600"
          href="/dashboard/french"
        >
          <FranceFlag />
          <span className="text-lg mx-2 font-medium">French</span>
        </Link>
        <Link
          className="py-4 px-5 flex hover:bg-sky-600"
          href="/dashboard/german"
        >
          <GermanFlag />
          <span className="text-lg mx-2 font-medium">German</span>
        </Link>
        <Link
          className="py-4 px-5 flex hover:bg-sky-600"
          href="/dashboard/results"
        >
          <BookOpenCheck size={28} strokeWidth={1.5} />
          <span className="text-lg mx-2 font-medium">Exam Results</span>
        </Link>
      </div>

      <div className="absolute bottom-0 py-4 px-3 text-sm flex gap-2">
        <SignOut label={data.email} />
      </div>
    </div>
  );
};

export default SideBarDashboard;
