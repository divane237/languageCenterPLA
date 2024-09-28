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
import { useEnglishTest } from "@/store";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

const IeltsForm = ({ setAddSection, test = "IELTS" }) => {
  const [tutors, setTutors] = useState(
    languageExamOptions.english.ielts.tutors
  );

  const setEnglishExamGoals = useEnglishTest(
    (state) => state.setEnglishExamGoals
  );

  // console.log(test);
  const form = useForm({
    resolver: zodResolver(ieltsSchema),
    defaultValues: {
      name: test,
      category: "",
      currentLevel: "",
      requiredScore: "",
      examDate: "",
      tutor: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data) => {
    const {
      name: test_name,
      category: test_category,
      currentLevel: current_level,
      examDate: exam_date,
      requiredScore: required_score,
      tutor: tutor_name,
    } = data;

    try {
      const supabase = createSupabaseBrowserClient();

      const {
        data: {
          user: { id: user_id },
        },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.log(error);
        return;
      }

      const req = await supabase.from("english_test_languages").insert({
        test_name,
        test_category,
        current_level,
        exam_date,
        required_score,
        tutor_name,
        user_id,
      });

      if (req.error) throw req.error;

      setEnglishExamGoals(data);

      setAddSection(false);

      console.log("Data inserted successfully.", req.data);
    } catch (error) {
      console.error("Error inserting data: ", error);
    }
  };

  return (
    <div className="w-full aspect-square md:aspect-video">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
          <CustomInput
            name="name"
            label={"Test"}
            control={form.control}
            placeholder="..."
            disabled={true}
            className={"bg-blue-400 font-extrabold"}
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

          <CustomFormSelectInput
            control={form.control}
            name="tutor"
            label="Tutor Name"
            options={tutors}
            placeholder="Tutor Name"
          />
          <div className="flex-col flex md:flex-row w-full md:justify-between">
            <CustomInput
              control={form.control}
              name="requiredScore"
              label="Required Score"
              placeholder="Examples for IELTS 6.5"
              inputType={"number"}
            />
            <CustomInput
              name="examDate"
              label={"Exam Date"}
              control={form.control}
              inputType={"date"}
              placeholder="dasf"
            />
          </div>

          <div className="relative h-12">
            <Button
              type="submit"
              className="button-0 absolute left-1/2 -translate-x-1/2 text-xs sm:text-sm rounded-lg w-1/2 focus:outline-none focus:border-none focus:ring-2"
            >
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default IeltsForm;
