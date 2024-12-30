"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import CustomInput from "./CustomInput";
import { Edit2 } from "lucide-react";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { changeEmail } from "@/utils/utils";

const UpdateEmail = () => {
  const [displayDialogueBox, setDisplayDialogueBox] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const form = useForm({
    resolver: zodResolver(changeEmail),
    defaultValues: {
      newEmail: "",
    },
  });

  async function onSubmit(data) {
    //
    console.log("Form submitted:", data);

    //
  }

  return (
    <>
      <section className="px-2 flex gap-x-4 py-2 justify-center lg:justify-start">
        <p className="text-sm lg:text-base"> Change E-mail: </p>
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
          <div className="bg-purple-950/90 w-[450px] md:w-[50vw] aspect-video flex justify-center px-2 py-1 gap-x-2 place-items-center rounded-sm border-2 border-blue-600">
            <div>
              {
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-[350px] md:w-[40vw] aspect-square grid grid-rows-2 place-items-center"
                  >
                    <CustomInput
                      name="newEmail"
                      label={"New address"}
                      control={form.control}
                      placeholder="..."
                      className={"text-base font-normal"}
                    />
                    {/* Buttons */}

                    <div className="flex justify-around w-full mt-2">
                      {/*  */}

                      <Button
                        className="text-xs select-none md:text-sm lg:text-base bg-green-600/80 hover:bg-green-600 focus:bg-green-600 transition-none active:scale-110"
                        type="submit"
                        disabled={isLoading}
                      >
                        {isLoading ? "Saving..." : "Save"}
                      </Button>
                      {/*  */}

                      <Button
                        type="button"
                        className="text-xs select-none md:text-sm lg:text-base bg-red-600/80 hover:bg-red-600 focus:bg-red-600 transition-none  active:scale-110"
                        onClick={() => {
                          setDisplayDialogueBox(false);
                        }}
                        disabled={isLoading}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </Form>
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateEmail;
