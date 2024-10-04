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
import { Loader2 } from "lucide-react";

const IeltsForm = ({ setAddSection, test = "IELTS" }) => {
  const [tutors, setTutors] = useState(
    languageExamOptions.english.ielts.tutors
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const setEnglishExamGoals = useEnglishTest(
    (state) => state.setEnglishExamGoals
  );

  const examCategoryOptions =
    test === "IELTS"
      ? languageExamOptions.english.ielts.category
      : test === "TOEFL"
      ? languageExamOptions.english.toefl.category
      : test === "CAMBRIDGE"
      ? languageExamOptions.english.cambridge.category
      : test === "CELPIP"
      ? languageExamOptions.english.celpip.category
      : "";

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
      setError(false);
      setIsLoading(true);
      //
      const supabase = createSupabaseBrowserClient();

      const {
        data: {
          user: { id: user_id },
        },
        error,
      } = await supabase.auth.getUser();

      if (error) throw error;

      const { error: insertError } = await supabase
        .from("english_test_goals")
        .insert({
          test_name,
          test_category,
          current_level,
          exam_date,
          required_score,
          tutor_name,
          user_id,
        });

      if (insertError) throw insertError;

      setIsLoading(false);

      setEnglishExamGoals(data);

      setAddSection(false);
    } catch (error) {
      console.error("Error inserting data: ", error);
      setError(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full aspect-square md:aspect-video">
      {error && (
        <p className="text-red-600 w-full text-center font-semibold text-xs lg:text-sm">
          Failed to add
        </p>
      )}
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
            options={examCategoryOptions}
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
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="animate-spin text-sky-400" />
              ) : (
                "Save"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default IeltsForm;
