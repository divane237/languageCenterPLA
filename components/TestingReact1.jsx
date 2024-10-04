"use client";

import React from "react";
import { create } from "zustand";
import { useBearStore } from "./TestingReact";

export const TestingReact1 = () => {
  const bears = useBearStore((state) => state.bears);

  return (
    <div>
      {bears} around here...
      <Controls1 />
    </div>
  );
};

function Controls1() {
  const decreasePopulation = useBearStore((state) => state.decreasePopulation);
  return (
    <>
      <button
        onClick={decreasePopulation}
        className="bg-red-300 border-2 px-2 py-1 rounded-md"
      >
        one down
      </button>
    </>
  );
}
