"use server";
import EnglishExamsListInfo from "@/components/EnglishExamsListInfo";
import IndividualEnglishTest from "@/components/IndividualEnglishTest";
import { englishLanguageTests } from "@/constants";
import React from "react";
const English = () => {
  return (
    <section className="w-full h-[100dvh] md:w-[80%] lg:w-full bg-black text-white/90 p-2 divide-y">
      {/* Section showing the various language tests */}

      <ul className="flex justify-start gap-x-5 sm:justify-around px-2 mb-2 md:mb-3 py-1">
        {englishLanguageTests.map((test, i) => {
          return <IndividualEnglishTest key={test.title} test={test} />;
        })}
        <li className="place-self-center ml-auto">
          <button className="border-2 w-10 aspect-square text-2xl rounded-full hover:text-white/60 hover:border-white/60 hover:cursor-pointer">
            +
          </button>
          <p className="text-sm max-sm:hidden text-center">Add</p>
        </li>
      </ul>

      <EnglishExamsListInfo />
    </section>
  );
};

export default English;
