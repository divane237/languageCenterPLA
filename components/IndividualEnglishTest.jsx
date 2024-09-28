"use client";
import React from "react";
import Link2DisplayLanguageTest from "./Link2DisplayLanguageTest";
import AddSection from "./AddSection";
const IndividualEnglishTest = ({ test }) => {
  return (
    <li className="">
      <AddSection testName={test.title}>
        <Link2DisplayLanguageTest image={test.image} />
      </AddSection>
    </li>
  );
};

export default IndividualEnglishTest;
