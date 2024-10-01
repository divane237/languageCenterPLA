import AddSection from "@/components/AddSection";
import SignOut from "@/components/SignOut";
import { TestingReact } from "@/components/TestingReact";
import { TestingReact1 } from "@/components/TestingReact1";
import React from "react";
const HomePage = async () => {
  return (
    <div>
      Home
      <TestingReact />
      <TestingReact1 />
    </div>
  );
};

export default HomePage;
