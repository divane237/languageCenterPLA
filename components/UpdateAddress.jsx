"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Edit2 } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalAddress } from "@/utils/utils";
import { Form } from "./ui/form";
import CustomInput from "./CustomInput";
import { updateAddress } from "@/lib/actions/user";
const UpdateAddress = ({ address = "Address Not loaded, reload." }) => {
  const [displayDialogueBox, setDisplayDialogueBox] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const form = useForm({
    resolver: zodResolver(personalAddress),
    defaultValues: {
      address: address,
      newAddress: "",
    },
  });

  async function onSubmit(data) {
    //
    console.log("Form submitted:", data);

    try {
      setIsLoading(true);
      const { error } = await updateAddress(data);

      if (error) throw new Error(error);

      setIsLoading(false);
      setDisplayDialogueBox(false);
      form.reset();
    } catch (error) {
      console.log(error.message, error);
      setError(error);
    }
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
          <div className="bg-purple-950/90 w-[450px] md:w-[50vw] aspect-video flex justify-center px-2 py-1 gap-x-2 place-items-center rounded-sm border-2 border-blue-600">
            <div>
              {
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-[350px] md:w-[40vw] aspect-square grid grid-rows-2 place-items-center"
                  >
                    <CustomInput
                      name="address"
                      label={"Address"}
                      control={form.control}
                      placeholder="..."
                      className={"bg-gray-400 text-base font-semibold"}
                      disabled
                    />
                    <CustomInput
                      name="newAddress"
                      label={"New address"}
                      control={form.control}
                      placeholder="..."
                      className={"text-base font-normal"}
                    />

                    {/* Buttons */}
                    <div className="flex justify-around w-full mt-2">
                      <Button
                        className="text-xs select-none md:text-sm lg:text-base bg-green-600/80 hover:bg-green-600 focus:bg-green-600 transition-none active:scale-110"
                        // onClick={handleUpdatePersonalAddress}
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

export default UpdateAddress;
