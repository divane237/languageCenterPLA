"use client";
import { Logout } from "@/lib/actions/auth";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const DeleteAccountSection = () => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const modalRef = useRef(null);
  const router = useRouter();

  async function deleteUser() {
    try {
      setIsLoading(true);
      const supabase = createSupabaseBrowserClient();
      const { error: deleteUserError } = await supabase.rpc(
        "delete_user_and_data"
      );
      if (deleteUserError) throw deleteUserError;
      const { error: logoutError } = await Logout();
      if (logoutError) {
        router.push("/sign-in");
      }
    } catch (err) {
      setIsLoading(false);
      setError(true);
    }
  }

  // Function to open the component and disable background scroll
  const handleOpenDialog = () => {
    setConfirmDelete(true);
    document.body.classList.add("overflow-hidden"); // Disable background scroll
  };

  // Function to close the component and re-enable background scroll
  const handleCloseDialog = (e) => {
    setConfirmDelete(false);

    // setMobileMenu(false);
    document.body.classList.remove("overflow-hidden"); // Re-enable background scroll
  };

  useEffect(() => {
    if (confirmDelete) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // Focus the first element when the component is opened
      lastElement.focus();

      const handleTabKey = (e) => {
        if (e.key === "Escape") {
          handleCloseDialogue();
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
  }, [confirmDelete]);

  return (
    <>
      <section className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-8">
        <Button
          onClick={handleOpenDialog}
          className="bg-red-600 px-2 py-1 rounded-md hover:bg-red-600/80 focus:bg-red-600/80 active:bg-red-600/80 transition-none"
        >
          Delete Account
        </Button>
      </section>

      {confirmDelete && (
        <div
          className="w-full h-full fixed left-0 top-0 z-[55] md:w-screen md:h-screen backdrop-blur-lg  md:z-[10] md:top-0 md:left-0 flex justify-center items-center"
          onClick={(e) => {
            if (e.target.tagName === "DIV" && e.target.id !== "dialog-box")
              handleCloseDialog();
          }}
        >
          {/* Container to confirm account deletion */}
          <div
            className="bg-purple-950/90 w-[350px] md:w-[40vw] aspect-video grid grid-cols-2 px-2 py-1 gap-x-4 place-items-center rounded-sm"
            ref={modalRef}
            id="dialog-box"
          >
            {error && (
              <p className="fixed text-center top-0 text-xs text-red-500">
                Failed, try again
              </p>
            )}
            <p className="col-span-2 text-center text-base lg:text-xl select-none">
              Are you sure you want to delete your account ?{" "}
            </p>
            <Button
              className="text-xs select-none md:text-sm lg:text-base bg-red-600/80 hover:bg-red-600 focus:bg-red-600 transition-none  active:scale-110 "
              onClick={deleteUser}
            >
              {!isLoading ? (
                "Yes, Delete !"
              ) : (
                <Loader2 className="animate-spin" size={30}></Loader2>
              )}
            </Button>
            <Button
              className="text-xs select-none md:text-sm lg:text-base bg-green-600/80 hover:bg-green-600 focus:bg-green-600 transition-none active:scale-110"
              onClick={handleCloseDialog}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteAccountSection;
