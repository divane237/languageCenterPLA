import { truncateStringAtFirstFullStop } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const LargeScreenNavLink = ({ subTitle, description, image, route }) => {
  return (
    <Link href={route} className="flex group/link hover:bg-colorful-600">
      <Image
        src={image}
        alt={`${subTitle}-image`}
        width={150}
        height={150}
        className=""
      />
      <div className="px-2">
        <h1 className="whitespace-nowrap group-hover/link:font-semibold font-normal">
          {subTitle}
        </h1>
        <p className="text-justify text-sm text-black group-hover/link:text-black/60">
          {truncateStringAtFirstFullStop(description)}
        </p>
      </div>
    </Link>
  );
};

export default LargeScreenNavLink;
