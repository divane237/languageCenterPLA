import { cn } from "@/utils/utils";
import React from "react";
const LoadingElement = ({
  circle,
  rectangle,
  className,
  circleSize = 1,
  lengthRectangle = 6,
  widthRectangle = 1,
}) => {
  if (circle) {
    return (
      <span
        style={{ width: `${circleSize}rem`, height: `${circleSize}rem` }}
        className={cn(
          "animate-pulse w-[6rem] h-[0.5rem] bg-gray-400 rounded-full",
          className
        )}
      ></span>
    );
  }

  if (rectangle === "rectangle") {
    return (
      <span
        style={{
          width: `${lengthRectangle}rem`,
          height: `${widthRectangle}rem`,
        }}
        className={cn(
          "animate-pulse w-[6rem] h-[0.5rem] bg-gray-400 rounded-full",
          className
        )}
      ></span>
    );
  }
};

export default LoadingElement;

/*
 <span
        className={`animate-pulse rounded-full w-[${1.25 * size + "rem"}] h-[${
          1.25 * size + "rem"
        }] bg-gray-400`}
      ></span>
*/
