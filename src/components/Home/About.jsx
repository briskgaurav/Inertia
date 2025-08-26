"use client";
import React, { useEffect, useRef } from "react";
import ArrowSvg from "@/Utils/arrowSvg";
import ArrowHover from "../Animation/ArrowHover";
import gsap from "gsap";
import { SplitTextAnimation } from "../Animation/Animations";

export const WorkMarquee = () => {
  const marqueeRef = useRef(null);
  const marqueeContentRef = useRef(null);

  useEffect(() => {
    SplitTextAnimation();

    const marqueeContent = marqueeContentRef.current;
    const marqueeWidth = marqueeContent.offsetWidth;

    const clone1 = marqueeContent.cloneNode(true);
    const clone2 = marqueeContent.cloneNode(true);
    marqueeRef.current.appendChild(clone1);
    marqueeRef.current.appendChild(clone2);

    const tl = gsap.timeline({
      repeat: -1,
      defaults: {
        ease: "linear",
      },
    });

    tl.to(marqueeRef.current, {
      x: -marqueeWidth,
      duration: 15,
      onComplete: () => {
        gsap.set(marqueeRef.current, { x: 0 });
      },
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div className="w-[100%] border-t border-black/60 h-full flex flex-col justify-between">
      <div className="overflow-hidden w-full">
        <div ref={marqueeRef} className="flex gap-[5vw]">
          <div
            ref={marqueeContentRef}
            className="flex gap-[5vw] whitespace-nowrap"
          >
            {[
              "CASE STUDIES",
              "FEATURED PROJECTS",
              "CASE STUDIES",
              "FEATURED PROJECTS",
            ].map((text, i) => (
              <p
                key={i}
                className="text-[5vw] max-sm:text-[10vw] tracking-tight font-medium uppercase"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function About() {
 

  return (
    <>
      <div className="h-[50vh] w-full pt-[3vw] flex items-start justify-between px-[2.8vw]">
        <div className="w-[35%] h-full">
          <p className="text-[2.2vw] split-text w-full tracking-tight font-medium leading-none text-left uppercase">
            WHY leading brands
          </p>
          <p className="text-[2.2vw]  split-text  w-full leading-none tracking-tight font-medium text-right uppercase">
            partner with inertia.
          </p>
          <div className="h-[1.2vw] w-[1.2vw] mt-[1vw] rotate-90">
            <ArrowSvg />
          </div>
        </div>
        <div className="w-[25%] gap-[2vw] flex flex-col h-full">
          <p className="text-[1.2vw] w-full leading-[1.2] font-medium text-left">
            From CGI product films to viral 3D billboards, we are pioneering 3D
            Imagery & Motion Design that redefines visual storytelling. See how
            we help brands make a mark.
          </p>
          <ArrowHover />
        </div>
      </div>
      <WorkMarquee />
    </>
  );
}
