import { Loader2 } from "lucide-react";
import React from "react";
const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <Loader2 className="animate-spin text-sky-400" size={50} />
    </div>
  );
};

export default Loading;
