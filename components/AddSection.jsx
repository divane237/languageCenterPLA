"use client";
import React, { useEffect, useRef, useState } from "react";
import IeltsForm from "./IeltsForm";

const AddSection = ({ children, testName }) => {
  //
  //

  const [addSection, setAddSection] = useState(false);
  const modalRef = useRef(null);

  // Function to open the component and disable background scroll
  const handleOpen = () => {
    setAddSection(true);
    document.body.classList.add("overflow-hidden"); // Disable background scroll
  };

  // Function to close the component and re-enable background scroll
  const handleClose = () => {
    setAddSection(false);
    document.body.classList.remove("overflow-hidden"); // Re-enable background scroll
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
        if (e.key === "Escape") {
          handleClose();
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
  }, [addSection]);

  return (
    <>
      <button
        onClick={handleOpen}
        className="flex flex-col items-center cursor-pointer"
      >
        {children}
      </button>

      {/* To be deleted */}

      {addSection && (
        <div
          className="fixed top-0 left-0 w-full h-full backdrop-blur-sm z-[20]"
          ref={modalRef}
        >
          <div className="w-2/3 aspect-square md:aspect-video bg-black/50 left-1/2 absolute top-1/2 -translate-x-1/2 -translate-y-1/2 border-none rounded-md max-w-[450px]">
            <button
              className="text-red-600 select-none text-xl  -right-12 absolute bg-black/2 w-10 aspect-square rounded-full focus:outline-none focus:border-none focus:ring-2 "
              onClick={handleClose}
            >
              X
            </button>

            <IeltsForm setAddSection={setAddSection} test={testName} />
          </div>
        </div>
      )}
    </>
  );
};

export default AddSection;
