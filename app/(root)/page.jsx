import AddSection from "@/components/AddSection";
import { TestingReact } from "@/components/TestingReact";
import { TestingReact1 } from "@/components/TestingReact1";
import React from "react";
const HomePage = async () => {
  return (
    <div>
      Home
      {/* <AddSection>
        <span className="text-lg px-2 py-1">+</span>
      </AddSection> */}
      <TestingReact />
      <TestingReact1 />
    </div>
  );
};

export default HomePage;
