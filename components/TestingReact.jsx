"use client";

import React from "react";
import { create } from "zustand";

export const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  decreasePopulation: () =>
    set((state) => ({
      bears: state.bears - 1,
    })),
}));

export const TestingReact = () => {
  const bears = useBearStore((state) => state.bears);

  return (
    <div>
      {bears} around here...
      <Controls />
    </div>
  );
};

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);

  const removeAllBears = useBearStore((state) => state.removeAllBears);
  return (
    <>
      <button
        onClick={increasePopulation}
        className="bg-green-300 border-2 px-2 py-1 rounded-md"
      >
        one up
      </button>
      <button
        onClick={removeAllBears}
        className="bg-blue-300 border-2 px-2 py-1 rounded-md"
      >
        clear
      </button>
    </>
  );
}
