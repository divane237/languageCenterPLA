"use client";

import { ieltsSchema } from "@/utils/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import CustomInput from "./CustomInput";
import { languageExamOptions } from "@/constants";
import CustomFormSelectInput from "./CustomFormSelectInput";
import { Button } from "./ui/button";

const IeltsForm = () => {
  const form = useForm({
    resolver: zodResolver(ieltsSchema),
    defaultValues: {
      type: "",
      requiredScore: "",
      tutor: "",
      initialLevel: "",

      //   currentLevel: "",
      //   online: false,
      //   bookedExam: false,
      examDate: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = (data) => {
    //
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
        <CustomFormSelectInput
          control={form.control}
          name="Exam type"
          label="Exam Type"
          options={languageExamOptions.english.ielts.type}
          placeholder="Select the exam type"
        />
        <CustomFormSelectInput
          control={form.control}
          name="Initial Level"
          label="Initial Level"
          options={languageExamOptions.english.ielts.level}
          placeholder="Choose your present level."
        />
        <CustomInput
          control={form.control}
          name="required score"
          label="Required Score"
          placeholder="Examples for IELTS 6.5"
        />
        <CustomInput
          control={form.control}
          name="tutor"
          label="Tutor Name"
          placeholder="Mr Djoumetio D."
        />
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
  );
};

export default IeltsForm;
