"use client";

import { useEnglishTest } from "@/store";
import { Loader2, Trash2 } from "lucide-react";
import React, { useEffect } from "react";
const EnglishExamsListInfo = () => {
  const englishExamGoals = useEnglishTest((state) => state.englishExamGoals);

  const fetch = useEnglishTest((state) => state.fetch);

  const deleteEnglishExamGoals = useEnglishTest(
    (state) => state.deleteEnglishExamGoals
  );

  // fetch();
  useEffect(() => {
    fetch();

    // console.log(englishExamGoals);
  }, [fetch]);

  return (
    <section className="flex flex-col sm:flex-row sm:justify-start sm:flex-wrap top-10 mt-2">
      {englishExamGoals.length === 0 ? (
        <div className="flex justify-center items-center mt-10">
          <Loader2 className="animate-spin text-sky-400" size={50}></Loader2>
        </div>
      ) : (
        englishExamGoals.map((client, i) => (
          <div
            key={`${client.test_name} ${i}`}
            className={`border-2 px-2 py-1 m-1 grid grid-cols-2`}
          >
            <h2 className="font-semibold text-sm">
              {client.test_name || client.name}
            </h2>
            <p className=" font-mono text-green-500 font-light justify-self-end">
              {client.required_score || client.requiredScore}
            </p>

            <h2 className="text-sm">
              {client.test_category || client.category}
            </h2>
            <p className="font-mono font-light justify-self-end">
              {client.exam_date || client.examDate}
            </p>

            <h2 className="text-sm">{client.tutor_name || client.tutor}</h2>
            <p className="font-mono font-light text-sky-500 justify-self-end">
              {client.current_level || client.currentLevel}
            </p>

            <button
              className="text-red-600 text-sm col-span-2 justify-self-center px-2 py-1 rounded-full hover:text-red-600/90"
              onClick={() => {
                const testing = deleteEnglishExamGoals(i);
                console.log("Testing: ", testing);

                console.log("Delete button clicked", i);
              }}
            >
              <Trash2 size={30} />
            </button>
          </div>
        ))
      )}
    </section>
  );
};

export default EnglishExamsListInfo;
