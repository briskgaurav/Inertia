"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import UseMobile from "../Responsive/UseMobile";
import UseTablet from "../Responsive/UseTablet";

export default function Loader() {
  const isTablet = UseTablet()
  useEffect(() => {
    const handleLoad = () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".loader-container",
        {
          backgroundColor: "#000000",
        },
        { backgroundColor: "#000000" }
      );
      if(!isTablet){
        tl.to(
          ".loader-text",
          {
            x: "0%",
            opacity: 1,
            duration: 1,
            stagger:isTablet ? 0 : .2,
          },
          "<"
        );
      }

      tl.to(
        ".loader-text",
        {
          x: "20%",
          delay: 2,
          duration: 1,
          stagger:isTablet ? 0 : .2,
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
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className="h-screen loader-container bg-black w-full px-[3vw] fixed inset-0 flex items-center z-[999]">
      <div className="text-white max-sm:flex-col max-md:flex-col mb-[5%] font-medium text-[1.5vw] max-sm:w-full max-md:w-full max-sm:text-[5vw] max-md:text-[5vw] max-sm:gap-[5vw] max-md:gap-[5vw] uppercase flex items-center max-sm:items-start max-md:items-start justify-between w-[70%]">
        <p className="loader-text max-md:font-semibold opacity-80 max-sm:translate-x-0 max-md:translate-x-0 translate-x-[-20%] ">
          INERTIA STUDIO
        </p>
        <p className="w-[25%] opacity-80 max-sm:text-[5vw] max-md:text-[5vw] max-sm:w-[70%] max-md:w-[70%] translate-x-[-20%] max-sm:translate-x-0 max-md:translate-x-0 loader-text leading-none text-[1.3vw]">
          Moving People, Brands and Visual Culture
        </p>
      </div>
    </div>
  );
}
