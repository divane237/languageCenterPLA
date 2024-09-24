"use client";
import React, { useEffect, useRef, useState } from "react";
import IeltsForm from "./IeltsForm";
const AddSection = () => {
  const [clientsDetail, setClientsDetail] = useState([]);
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [addSection, setAddSection] = useState(false);
  const modalRef = useRef(null);

  const previouslyFocusedElementRef = useRef(null); // Ref to store the previously focused element

  // Function to open the component and disable background scroll
  const handleOpen = () => {
    // Store the currently focused element
    previouslyFocusedElementRef.current = document.activeElement;

    setAddSection(true);
    document.body.classList.add("overflow-hidden"); // Disable background scroll
  };

  // Function to close the component and re-enable background scroll
  const handleClose = () => {
    setAddSection(false);
    document.body.classList.remove("overflow-hidden"); // Re-enable background scroll

    //Restore focus to the previously focused element
    if (previouslyFocusedElementRef.current) {
      previouslyFocusedElementRef.current.focus();
    }
  };

  // Focus trapping logic
  useEffect(() => {
    if (addSection) {
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
  }, [addSection]);

  return (
    <>
      <section className="border-2 border-red-700 px-2 py-1 flex justify-center">
        <div
          className="w-10 flex flex-col items-center ml-6 cursor-pointer"
          onClick={handleOpen}
          // onClick={() => {
          //   setAddSection((prevSection) => !prevSection);
          // }}
        >
          <button className="text-2xl bg-black/30 w-10 aspect-square rounded-full select-none">
            +
          </button>
          <p className="text-sm hidden md:block select-none">Add</p>
        </div>
      </section>

      <section className="flex flex-col sm:flex-row sm:justify-start sm:flex-wrap top-10 ">
        {/* Add different things here */}
        {clientsDetail?.map((client, i) => (
          <div
            key={`${client.method} ${i}`}
            className={`border-2 px-2 py-1 m-1 cursor-default group min-w-[100px] basis-1/3 flex-grow sm:basis-1/5`}
          >
            {/* <h1 className="group-hover:block hidden text-sm text-semibold fixed -top-9">
                {client.method}
              </h1> */}
            <h2 className="font-bold text-sm relative">
              IELTS{" "}
              <span className="absolute right-0 font-mono text-green-500 font-light">
                {client.requiredScore}
              </span>
            </h2>
            <p className=" text-sm relative">
              {client.category}{" "}
              <span className="font-mono absolute right-0 font-light">
                {client.examDate}
              </span>
            </p>
            <p className="font-mono text-sm relative">
              {client.tutors}
              <span className="absolute right-0 font-mono text-sky-500 font-light">
                {client.currentLevel}
              </span>
            </p>
          </div>
        ))}
      </section>

      {addSection && (
        <div
          className="fixed top-0 left-0 w-full h-full backdrop-blur-sm z-[6] border-2 border-green-400"
          ref={modalRef}
        >
          <div className="w-2/3 aspect-square md:aspect-video bg-black/50 left-1/2 absolute top-1/2 -translate-x-1/2 -translate-y-1/2 border-none rounded-md border-2 border-blue-500 max-w-[450px]">
            <button
              className="text-red-600 select-none text-2xl  -top-12 right-0 absolute bg-black/2 w-10 aspect-square rounded-full"
              // onClick={() => setAddSection(false)}
              onClick={handleClose}
            >
              X
            </button>

            <IeltsForm
              setClientsDetail={setClientsDetail}
              setAddSection={setAddSection}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AddSection;
