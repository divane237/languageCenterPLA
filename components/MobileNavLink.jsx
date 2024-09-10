import Image from "next/image";
import Link from "next/link";
import React from "react";
const MobileNavLink = ({ route, imageSource, subTitle }) => {
  return (
    <Link
      href={route}
      className="flex gap-x-3 justify-center items-center hover:bg-colorful-700/60 rounded-sm"
    >
      <p className="text-xs">{subTitle}</p>
      <Image
        src={imageSource}
        height={0}
        width={0}
        className="w-14 h-14"
        alt={subTitle}
      />
    </Link>
  );
};

export default MobileNavLink;
