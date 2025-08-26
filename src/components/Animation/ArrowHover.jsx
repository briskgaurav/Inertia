import ArrowSvg from "@/Utils/arrowSvg";
import React from "react";

export default function ArrowHover({
  text = "Discover more work",
  color = "#000000",
}) {
  return (
    <div className="group cursor-pointer flex items-center max-sm:gap-[2.5vw] gap-[1vw]">
      <div className="h-[1.5vw] max-sm:h-[8vw] max-sm:w-[8vw] overflow-hidden w-[1.5vw] relative">
        <div className="h-1/2 w-1/2  duration-500 transition-all group-hover:-translate-x-1/2 absolute top-1/2 left-1/2 -translate-x-[210%] -translate-y-1/2">
          <ArrowSvg color={color} />
        </div>
        <div className="h-1/2 group-hover:translate-x-[210%] duration-500 transition-all w-1/2 group- absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ArrowSvg color={color} />
        </div>
        <div className="absolute group-hover:scale-90  scale-100 transition-all duration-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full z-[10]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Calque_1"
            data-name="Calque 1"
            viewBox="0 0 27 28"
            className="h-full w-full"
          >
            <defs>
              <style>{`.cls-1{fill:none;stroke:${color} ;}`}</style>
            </defs>
            <path
              xmlns="http://www.w3.org/2000/svg"
              className="cls-1"
              d="M1,7V1H7"
              transform="translate(-0.5 -0.5)"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              className="cls-1"
              d="M27,22v6H21"
              transform="translate(-0.5 -0.5)"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              className="cls-1"
              d="M7,28H1V22"
              transform="translate(-0.5 -0.5)"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              className="cls-1"
              d="M21,1h6V7"
              transform="translate(-0.5 -0.5)"
            />
          </svg>
        </div>
      </div>
      <p
        style={{
          color: color,
        }}
        className="uppercase text-[.9vw] max-sm:text-[4vw] group-hover:translate-x-[.2vw] transition-all duration-500 translate-x-[-.2vw] font-semibold"
      >
        {text}
      </p>
    </div>
  );
}
