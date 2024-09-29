"use client";

import { useEnglishTest } from "@/store";
import { Loader2, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";

const EnglishExamsListInfo = () => {
  // const englishExamGoals = useEnglishTest((state) => state.englishExamGoals);
  const [buttonLoading, setButtonLoading] = useState(false);

  const {
    isLoading,
    loading,
    deleteEnglishExamGoals,
    error,
    englishExamGoals,
    getEnglishExamGoals,
  } = useEnglishTest(
    useShallow((state) => ({
      englishExamGoals: state.englishExamGoals,
      deleteEnglishExamGoals: state.deleteEnglishExamGoals,
      isLoading: state.isLoading,
      loading: state.loading,
      error: state.error,
      getEnglishExamGoals: state.getEnglishExamGoals,
    }))
  );

  // fetch();
  useEffect(() => {
    getEnglishExamGoals();
  }, [getEnglishExamGoals]);

  function handleDeleteButton(e, goalId) {
    console.log(e.currentTarget);
    //
    deleteEnglishExamGoals(goalId);
  }

  return (
    <>
      {error && <p className="text-xs text-red-500 text-center pt-2">Failed</p>}
      <section className="flex flex-col mt-3 z-[500]">
        {isLoading ? (
          <div className="flex justify-center items-center mt-10 w-full">
            <Loader2 className="animate-spin text-sky-400" size={50}></Loader2>
          </div>
        ) : englishExamGoals.length === 0 ? (
          <p className="animate-bounce font-bold pt-16 text-center text-base lg:text-lg">
            Add Your Exam Goals
          </p>
        ) : (
          englishExamGoals.map((goal, i) => (
            <div
              key={`${goal.test_name} ${i}`}
              className={`border-2 px-2 py-1 m-1 grid grid-cols-2`}
            >
              <h2 className="font-semibold text-sm">
                {goal.test_name || goal.name}
              </h2>
              <p className=" font-mono text-green-500 font-light justify-self-end">
                {goal.required_score || goal.requiredScore}
              </p>

              <h2 className="text-sm">{goal.test_category || goal.category}</h2>
              <p className="font-mono font-light justify-self-end">
                {goal.exam_date || goal.examDate}
              </p>

              <h2 className="text-sm">{goal.tutor_name || goal.tutor}</h2>
              <p className="font-mono font-light text-sky-500 justify-self-end">
                {goal.current_level || goal.currentLevel}
              </p>

              <button
                className="text-red-600 text-sm col-span-2 justify-self-center px-2 py-1 rounded-full hover:text-red-600/90"
                onClick={(e) => {
                  // console.log(goal.id)
                  handleDeleteButton(e, goal.id);
                }}
                id={goal.id}
              >
                {loading ? (
                  <Loader2
                    className="animate-spin text-sky-400"
                    size={30}
                  ></Loader2>
                ) : (
                  <Trash2 size={30} />
                )}
              </button>
            </div>
          ))
        )}
      </section>
    </>
  );
};

export default EnglishExamsListInfo;

/*

*/
