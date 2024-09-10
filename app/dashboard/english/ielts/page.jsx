import IeltsForm from "@/components/IeltsForm";
import React from "react";
const IELTS = () => {
  return (
    <div className="border-2 border-red-500 h-full bg-black/80 text-xs text-white/70 w-full">
      {/* First section to show  */}
      <div className="w-full border-2 border-green-500">
        Show Form Table here
        <IeltsForm />
      </div>

      {/* Second section to show results from the center */}
      <div>
        Results :<p>A1</p>
      </div>
    </div>
  );
};

export default IELTS;
