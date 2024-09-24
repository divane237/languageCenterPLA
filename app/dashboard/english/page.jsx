import Link2DisplayLanguageTest from "@/components/Link2DisplayLanguageTest";
import React from "react";
const English = () => {
  return (
    // <div className="w-full h-full md:w-[80%] lg:w-full bg-black text-white/80  px-2 flex flex-col justify-around">
    //   {englishLanguageTests.map((test) => (
    //     <Link2DisplayLanguageTest
    //       key={test.title}
    //       description={test.description}
    //       title={test.title}
    //       image={test.image}
    //       route={test.route}
    //     />
    //   ))}
    // </div>
    <div className="w-full h-full bg-black text-white/80  px-2 flex border-2 border-red-600">
      <Link2DisplayLanguageTest />
    </div>
  );
};

export default English;
