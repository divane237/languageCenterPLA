import Image from "next/image";
import React from "react";

const Link2DisplayLanguageTest = ({
  image = "/images/english-ielts-logo.png",
}) => {
  return (
    <Image
      priority={true}
      src={image}
      height={90}
      width={90}
      alt="asd"
      className="w-[60px] md:w-[80px] aspect-square rounded-2xl hover:scale-[1.2]"
    />
  );
};

export default Link2DisplayLanguageTest;
