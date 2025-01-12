import Image from "next/image";
import React from "react";

const Link2DisplayLanguageTest = ({
  image = "english-ielts-logo.png",
  width = 90,
  height = 90,
  alt = "test_image",
}) => {
  return (
    <Image
      priority={true}
      src={`/images/${image}`}
      height={height}
      width={width}
      alt={alt}
      className="rounded-xl hover:scale-[1.1]"
    />
  );
};

export default Link2DisplayLanguageTest;
