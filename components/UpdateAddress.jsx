"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Edit2 } from "lucide-react";
import { useStudentInfo } from "@/store";
import { useShallow } from "zustand/react/shallow";
const UpdateAddress = () => {
  const [displayDialogueBox, setDisplayDialogueBox] = useState(false);

  const { student, error } = useStudentInfo(
    useShallow((state) => ({
      error: state.error,
      student: state.student,
    }))
  );
  function handleUpdatePersonalAddress() {
    console.log("Update address button clicked, UpdateAddress.jsx");
    setDisplayDialogueBox(false);
  }

  return (
    <>
      <section className="px-2 flex gap-x-4 py-2 justify-center lg:justify-start">
        <p className="text-sm lg:text-base"> Update personal address: </p>
        <Button
          onClick={() => {
            setDisplayDialogueBox(true);
          }}
          className="px-2 py-1.5 h-6 w-8"
        >
          <Edit2 size={20} className="2" />
        </Button>
      </section>

      {/* Open edit address section */}
      {displayDialogueBox && (
        <div className="w-full h-full fixed left-0 top-0 z-[55] md:w-screen md:h-screen backdrop-blur-lg  md:z-[10] md:top-0 md:left-0 flex justify-center items-center">
          <div className="bg-purple-950/90 w-[350px] md:w-[40vw] aspect-video grid grid-cols-2 px-2 py-1 gap-x-2 place-items-center rounded-sm">
            <input
              type="text"
              className="col-span-2 text-black"
              defaultValue={student.address}
            />

            <Button
              className="text-xs select-none md:text-sm lg:text-base bg-red-600/80 hover:bg-red-600 focus:bg-red-600 transition-none  active:scale-110 "
              onClick={() => {
                setDisplayDialogueBox(false);
              }}
            >
              Cancel
            </Button>
            <Button
              className="text-xs select-none md:text-sm lg:text-base bg-green-600/80 hover:bg-green-600 focus:bg-green-600 transition-none active:scale-110"
              onClick={handleUpdatePersonalAddress}
            >
              Save
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateAddress;
