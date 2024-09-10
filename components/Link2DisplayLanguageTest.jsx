import Link from "next/link";
import React from "react";
const Link2DisplayLanguageTest = ({
  title = "Title",
  image = "/images/english-ielts-logo.png",
  description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas molestias blanditiis sit ea quisquam quia ut, in quod sunt odit fugiat ratione soluta, placeat aspernatur eveniet sapiente totam vero? Iusto!",
  route = "/",
}) => {
  return (
    <Link
      href={route}
      className="basis-1/5 py-2 px-1 flex flex-nowrap gap-2 border-[0.5px41
        ] bg-white/50 border-[0.5px] hover:bg-white/30 rounded-md"
    >
      <div
        className={`w-[40%]`}
        style={{
          background: `url(${image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      ></div>

      <div className="w-full text-justify flex flex-col justify-center ">
        {" "}
        <h1 className="font-semibold py-1 text-sm">{title}</h1>
        <p className="text-xs">{description}</p>
      </div>
    </Link>
  );
};

export default Link2DisplayLanguageTest;
