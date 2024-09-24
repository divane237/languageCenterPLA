"use client";

import React, { useState, useTransition } from "react";
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
import { LoginWithEmail, signUpNewUser } from "@/lib/actions/auth";
import { useRouter } from "next/navigation";

const AuthForm = ({ type }) => {
  const [isPending, startTransition] = useTransition();
  const [authError, setAuthError] = useState("");
  const authRoute = useRouter();

  //
  const formSchema = authSchema(type);

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      ...(type === "sign-up" && {
        firstName: "",
        lastName: "",
        address: "",
        dateOfBirth: "",
        identificationDocument: "",
        idNumber: "",
      }),
    },
  });

  // 2. Define a submit handler.
  const onSubmit = (data) => {
    // ✅ This will be type-safe and validated.
    console.log(data);

    setAuthError((prevError) => (prevError = ""));

    startTransition(async () => {
      // Sign Up

      if (type === "sign-up") {
        const result = await signUpNewUser(data);
        console.log(result);

        const { error } = JSON.parse(result);

        if (error) {
          console.log(error.message);
          setAuthError(error);
        } else {
          authRoute.push("/dashboard");
        }
      }

      // Sign In

      if (type === "sign-in") {
        const result = await LoginWithEmail(data);
        console.log(result);

        setAuthError((prevError) => (prevError = result));
        result === "Email or password is incorrect" && form.reset();
      }
    });
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
                  disabled={isPending}
                />
                <CustomInput
                  control={form.control}
                  name="lastName"
                  label="Last Name"
                  placeholder="Johnson"
                  disabled={isPending}
                />
              </div>

              <div className="sm:grid sm:grid-cols-2">
                <CustomInput
                  control={form.control}
                  name="address"
                  label="Address"
                  placeholder="Carrefour Wamba Mabanda, Bonaberi"
                  disabled={isPending}
                />

                <CustomInput
                  control={form.control}
                  name="dateOfBirth"
                  label="Date of Birth"
                  placeholder="YYYY-MM-DD"
                  disabled={isPending}
                />
              </div>

              <div className="sm:grid sm:grid-cols-2 text-black">
                <CustomFormSelectInput
                  control={form.control}
                  name="identificationDocument"
                  label="Identification"
                  options={options}
                  placeholder="Select a document"
                />
                <CustomInput
                  control={form.control}
                  name="idNumber"
                  label="ID No"
                  placeholder="AA4343..."
                  disabled={isPending}
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
              disabled={isPending}
            />
            <CustomInput
              control={form.control}
              name="password"
              label="Password"
              placeholder=""
              disabled={isPending}
            />
          </div>
          <p className="text-red-600 text-xs text-center py-1.5">{authError}</p>

          {/* SignIn & SignUp error display */}

          <div className="mx-4">
            <Button
              type="submit"
              className="w-full text-xs sm:text-sm rounded-lg"
              disabled={isPending}
            >
              {isPending ? (
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
            href="/reset-password"
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
