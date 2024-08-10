"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import CustomFormSelectInput from "./CustomFormSelectInput";
import { authSchema } from "@/utils/utils";
import { options } from "@/constants";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { signIn, signUp } from "@/lib/actions";

const AuthForm = ({ type }) => {
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authSchema(type);

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "welfloriclaude@gmail.com",
      password: "divane",
      ...(type === "sign-up" && {
        firstName: "Divane",
        lastName: "Jeugo",
        address: "Mabanda",
        dateOfBirth: "1999-06-10",
        identificationDocument: "passport",
        idNumber: "123434",
      }),
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data) => {
    setIsLoading(true);
    // ✅ This will be type-safe and validated.
    console.log(data);

    // Sign Up
    if (type === "sign-up") {
      // signUp()
      await signUp(data);
      console.log("signUp function executed");
    }
    // Sign In

    if (type === "sign-in") {
      // SignIn()
      await signIn(data);
      console.log("signIn function executed");
    }

    setIsLoading(false);
  };

  return (
    <div className="px-1">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
          {/* Sign Up Fields */}

          {/* type === signup */}
          {type === "sign-up" && (
            <>
              <div className="sm:grid sm:grid-cols-2">
                <CustomInput
                  control={form.control}
                  name="firstName"
                  label="First Name"
                  placeholder="Peter"
                />
                <CustomInput
                  control={form.control}
                  name="lastName"
                  label="Last Name"
                  placeholder="Johnson"
                />
              </div>

              <div className="sm:grid sm:grid-cols-2">
                <CustomInput
                  control={form.control}
                  name="address"
                  label="Address"
                  placeholder="Carrefour Wamba Mabanda, Bonaberi"
                />

                <CustomInput
                  control={form.control}
                  name="dateOfBirth"
                  label="Date of Birth"
                  placeholder="YYYY-MM-DD"
                />
              </div>

              <div className="sm:grid sm:grid-cols-2">
                <CustomFormSelectInput
                  control={form.control}
                  name="identificationDocument"
                  label="Identification"
                  options={options}
                />
                <CustomInput
                  control={form.control}
                  name="idNumber"
                  label="ID No"
                  placeholder="AA4343..."
                />
              </div>
            </>
          )}

          <div className={`${type === "sign-up" && "grid grid-cols-2"} pb-4`}>
            <CustomInput
              control={form.control}
              name="email"
              label="Email"
              placeholder="abc123@gmail.com"
            />
            <CustomInput
              control={form.control}
              name="password"
              label="Password"
              placeholder=""
            />
          </div>

          <div className="mx-4">
            <Button
              type="submit"
              className="w-full text-xs sm:text-sm rounded-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : type === "sign-up" ? (
                "Sign Up"
              ) : (
                "Sign In"
              )}
            </Button>
          </div>
        </form>
      </Form>

      <div className="text-center my-2 text-xs sm:text-sm">
        <p className="my-2">
          {type === "sign-in"
            ? "Don't have an account ? "
            : "Already have an account ? "}
          {type === "sign-in" ? (
            <Link href="/sign-up" className="hover:text-blue-400">
              Sign Up
            </Link>
          ) : (
            <Link
              href="/sign-in"
              className="hover:text-sky-400 active:text-sky-600"
            >
              Sign In
            </Link>
          )}{" "}
        </p>

        {type === "sign-in" && (
          <Link
            href="/sign-in"
            className="hover:text-sky-400 active:text-sky-600"
          >
            Forgot your password ?{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
