"use client";

import { useEnglishTest } from "@/store";
import { Edit, Loader2, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";

const EnglishExamsListInfo = () => {
  // const [buttonLoading, setButtonLoading] = useState(false);

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

  console.log("isLoading state is: ", isLoading, "Loading state is: ", loading);

  // fetch();
  useEffect(() => {
    getEnglishExamGoals();
  }, [getEnglishExamGoals]);

  function handleDeleteButton(e, goalId) {
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
              key={`${goal.name} ${i}`}
              className={`border-2 px-2 py-1 m-1 grid grid-cols-2`}
            >
              <h2 className="font-semibold text-sm">
                {goal.name || goal.test_name}
              </h2>
              <p className=" font-mono text-green-500 font-light justify-self-end">
                {goal.requiredScore || goal.required_score}
              </p>

              <h2 className="text-sm">{goal.category || goal.test_category}</h2>
              <p className="font-mono font-light justify-self-end">
                {goal.examDate || goal.exam_date}
              </p>

              <h2 className="text-sm">{goal.tutor || goal.tutor_name}</h2>
              <p className="font-mono font-light text-sky-500 justify-self-end">
                {goal.currentLevel || goal.current_level}
              </p>

              {/* Edit button */}
              <button
                className="text-sky-600 text-sm justify-self-center px-2 py-1 rounded-full hover:text-sky-600/90"
                onClick={(e) => {
                  //
                }}
                id={goal.id}
              >
                {loading ? (
                  <Loader2
                    className="animate-spin text-sky-400"
                    size={30}
                  ></Loader2>
                ) : (
                  <Edit size={30} />
                )}
              </button>

              {/* Delete button */}
              <button
                className="text-red-600 text-sm justify-self-center px-2 py-1 rounded-full hover:text-red-600/90"
                onClick={(e) => {
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
