import Image from "next/image";
import Link from "next/link";
import React from "react";
const MobileNavLink = ({ route, imageSource, subTitle }) => {
  return (
    <Link
      href={route}
      className="flex gap-x-3 justify-center items-center hover:bg-colorful-700/60"
    >
      <p className="text-xs">{subTitle}</p>
      <Image
        src={imageSource}
        height={40}
        width={40}
        alt={subTitle}
        className="h-[60px] w-[60px]"
      />
    </Link>
  );
};

export default MobileNavLink;
