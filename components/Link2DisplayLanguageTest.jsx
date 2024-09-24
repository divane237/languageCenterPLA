import React from "react";

const Link2DisplayLanguageTest = ({
  title = "Title",
  image = "/images/english-ielts-logo.png",
  description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas molestias blanditiis sit ea quisquam quia ut, in quod sunt odit fugiat ratione soluta, placeat aspernatur eveniet sapiente totam vero? Iusto!",
  route = "/",
}) => {
  return (
    <section className="">
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
    </section>
  );
};

export default Link2DisplayLanguageTest;
