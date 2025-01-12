"use server";

import Link2DisplayLanguageTest from "@/components/Link2DisplayLanguageTest";
import MovingCaroussel from "@/components/MovingCaroussel";
import {
  englishLanguageTests,
  frenchLanguageTests,
  germanLanguageTests,
} from "@/constants";
import Image from "next/image";
import React from "react";

const LANGUAGE_TESTS = [
  ...englishLanguageTests,
  ...frenchLanguageTests,
  ...germanLanguageTests,
];

const HomepageBg = "/images/home-image1.jpg";
const HomePage = async () => {
  return (
    <>
      <section className="relative">
        <div
          className="w-full aspect-video lg:h-[550px]"
          style={{
            backgroundImage: `url(${HomepageBg})`,
            backgroundColor: "gray",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "left -10px",
            filter: "blur(0.5px)",
          }}
        ></div>

        <div className="absolute top-[5%] flex flex-col items-end gap-y-1 lg:gap-y-4 right-0 pr-2">
          <h1 className="text-right py-2 font-extrabold text-black text-xl w-[65%] lg:text-6xl lg:w-[70%] tracking-wide">
            Bring your language goals{" "}
            <span className="text-orange-600 whitespace-nowrap">
              into focus
            </span>
          </h1>
          <p className="text-right p-2 text-black font-bold w-[60%] lg:font-extrabold tracking-wide text-xs sm:text-sm lg:text-4xl ">
            P.L.A offers both online and offline classes that prepare you for
            your language exam
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section className="my-1 py-2 border-2 border-red-600">
        <h2 className="text-center">Our Services</h2>
      </section>

      {/* Content */}
      <section className="my-1 py-2 border-2 border-red-500">
        <h2 className="text-center">OUR STAFF</h2>
      </section>

      {/* Exams  */}

      <MovingCaroussel />

      <div className=""></div>
    </>
  );
};

export default HomePage;
