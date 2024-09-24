"use client";
import { ieltsSchema } from "@/utils/utils";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import CustomInput from "./CustomInput";
import { languageExamOptions } from "@/constants";
import CustomFormSelectInput from "./CustomFormSelectInput";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

const FormTest = () => {
  const [tutors, setTutors] = useState(
    languageExamOptions.english.ielts.tutors
  );

  const form = useForm({
    resolver: zodResolver(ieltsSchema),
    defaultValues: {
      method: "",
      category: "",
      currentLevel: "",
      requiredScore: "",
      examDate: "",
      tutors: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = (data) => {
    //
    console.log("This is the data: ", data);
  };

  return (
    <div className="border-2 w-full border-red-900">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
          <CustomFormSelectInput
            control={form.control}
            name="method"
            label="Where are you taking lectures"
            options={languageExamOptions.english.ielts.method}
            placeholder="Choose one"
          />
          <CustomFormSelectInput
            control={form.control}
            name="category"
            label="Exam Type"
            options={languageExamOptions.english.ielts.category}
            placeholder="Select the exam type"
          />
          <CustomFormSelectInput
            control={form.control}
            name="currentLevel"
            label="Current level"
            options={languageExamOptions.english.ielts.level}
            placeholder="Choose your present level"
          />
          <CustomInput
            control={form.control}
            name="requiredScore"
            label="Required Score"
            placeholder="Examples for IELTS 6.5"
            inputType={"number"}
          />
          <CustomInput
            name="examDate"
            label={"Date"}
            control={form.control}
            inputType={"date"}
            placeholder="dd-mm-yyyy"
          />
          <CustomFormSelectInput
            control={form.control}
            name="tutors"
            label="Tutor Name"
            options={tutors}
            placeholder="Tutor Name"
          />

          {/* {tutorInputLoading ? (
            <div>
              <Loader2 className="animate-spin w-full my-4" size={"2rem"} />
            </div>
          ) : (
            <CustomFormSelectInput
              control={form.control}
              name="tutors"
              label="Tutor Name"
              options={tutors}
              placeholder="Tutor Name"
            />
          )} */}
          <div className="relative h-12">
            <Button
              type="submit"
              className="button-0 absolute left-1/2 -translate-x-1/2 text-xs sm:text-sm rounded-lg w-1/2"
            >
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormTest;
