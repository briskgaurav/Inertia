"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

export default function Loader() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".loader-container",
      {
        backgroundColor: "grey",
      },
      { backgroundColor: "#000000" }
    );
    tl.to(
      ".loader-text",
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        stagger:.2,
      },
      "<"
    );
    tl.to(
      ".loader-text",
      {
        x: "20%",
        delay: 2,
        duration: 1,
        stagger:.2,
      },
      "<"
    );
    tl.to(
      ".loader-container",
      {
        yPercent: 100,
        delay: 1.5,
        duration: 1.5,
        ease: "expo.inOut",
        onComplete: () => {
          gsap.to(".loader-container", {
            visibility: "hidden",
          });
        },
      },
      "<"
    );
  }, []);

  return (
    <div className="h-screen loader-container w-full px-[3vw] fixed inset-0 flex items-center z-[999]">
      <div className="text-white mb-[5%] font-medium text-[1.5vw] uppercase flex items-center justify-between w-[70%]">
        <p className="loader-text opacity-80 translate-x-[-20%] ">
          INERTIA STUDIO
        </p>
        <p className="w-[25%] opacity-80 translate-x-[-20%] loader-text leading-none text-[1.3vw]">
          Moving People, Brands and Visual Culture
        </p>
      </div>
    </div>
  );
}
