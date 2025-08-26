"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function VideoSection() {
  const logoArray = [
    "/assets/marquee-logo/1.svg",
    "/assets/marquee-logo/2.svg",
    "/assets/marquee-logo/3.svg",
    "/assets/marquee-logo/4.svg",
    "/assets/marquee-logo/5.svg",
    "/assets/marquee-logo/6.svg",
    "/assets/marquee-logo/7.svg",
    "/assets/marquee-logo/8.svg",
    "/assets/marquee-logo/9.svg",
    "/assets/marquee-logo/10.svg",
    "/assets/marquee-logo/11.svg",
    "/assets/marquee-logo/12.svg",
  ];

  const marqueeRef = useRef(null);
  const logoContainerRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const logoContainer = logoContainerRef.current;
    const totalWidth = logoContainer.offsetWidth;

    gsap.to(logoContainer, {
      x: -totalWidth / 2,
      duration: 10,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <>
      <div className="h-[15vh] overflow-hidden w-full" ref={marqueeRef}>
        <div className="flex items-center gap-[5vw]" ref={logoContainerRef}>
          {/* First set of logos */}
          {logoArray.map((logo, index) => (
            <Image 
              key={`logo1-${index}`}
              src={logo} 
              alt="logo" 
              width={100} 
              height={100}
              className="min-w-[6vw] max-sm:min-w-[20vw]"
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {logoArray.map((logo, index) => (
            <Image
              key={`logo2-${index}`}
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="min-w-[6vw] max-sm:min-w-[20vw]"
            />
          ))}
        </div>
      </div>
      <div className="h-screen max-sm:h-[65vh] w-full relative">
        <video
          src="/assets/video/second_video.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}
