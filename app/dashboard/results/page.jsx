import React from "react";
const Results = () => {
  return (
    <div className="w-full h-[100dvh] md:w-[80%] lg:w-full bg-black/80 text-white/80">
      {/* Heading */}
      <section>
        <h1 className="text-center text-base lg:text-lg font-bold  py-3 px-2 border-b-[1px] mx-2">
          View Results For All Languages
        </h1>
      </section>

      {/* Section for available results from the center */}
      <section>
        <p className="animate-pulse text-center pt-4 text-sky-500 text-sm lg:text-lg font-semibold font-serif tracking-[0.3rem] px-8">
          {" "}
          NOTHING TO VIEW HERE FOR NOW, CHECK AGAIN LATER.
        </p>
      </section>
    </div>
  );
};

export default Results;
