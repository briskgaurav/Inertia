'use client'
import ArrowSvg from "@/Utils/arrowSvg";
import React from "react";
import ArrowHover from "../Animation/ArrowHover";
import TextAnimation from "../Animation/TextHover";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="h-screen pt-[4vw] px-[2.8vw] pb-[2vw] w-full">
      <div className="h-[40%] w-full pb-[3vw] border-b border-black flex flex-col justify-between">
        <p className="w-full font-medium text-[.9vw]">(CONTACT)</p>
        <div className="flex w-full items-center justify-between">
          <div className="w-[75%]">
            <p className="text-[5.2vw] font-medium leading-[1.2] uppercase">
              Ready to discuss
            </p>
            <p className="text-[5.2vw] text-right -mt-[.8vw] font-medium leading-none uppercase">
              your next project?
            </p>
          </div>
          <div className="group w-[25%] flex items-center justify-end relative h-full">
            <div className="h-[60%] scale-100 group-hover:scale-80 transition-all duration-500 w-[60%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Calque_1"
                data-name="Calque 1"
                viewBox="0 0 27 28"
                className="h-full w-full"
              >
                <defs>
                  <style>{`.cls-1{fill:none;stroke:${window.innerWidth <= 640 ? 'white' : 'black'};stroke-width:0.3;}`}</style>
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
            <div className="h-[20%] text-white w-[20%] absolute inset-1/2 translate-x-[50%] translate-y-[-50%] rotate-45 group-hover:rotate-0 transition-all duration-300 flex items-center justify-center">
              <ArrowSvg color="#ffffff" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[45%] py-[2vw] w-full flex justify-between">
        <div className="w-1/2 h-full">
          <ArrowHover color="#ffffff" text="work with us" />
        </div>
        <div className="w-1/2 h-full flex items-start justify-between">
          <div className="flex items-start gap-[6vw]">
            <div className="flex flex-col gap-[3vw]">
              <div className="flex flex-col gap-[.3vw]">
                <p className="text-[.9vw] font-semibold uppercase">Hello</p>
                <div className="relative w-full group">
                  <Link
                    href="mailto:hello@weareinertia.com"
                    className="text-[.9vw] relative font-medium"
                  >
                    hello@weareinertia.com
                  </Link>
                  <span className="h-[1px] w-0 group-hover:w-full transition-all duration-500 bg-black absolute bottom-0 left-0" />
                </div>
                <p className="text-[.9vw] font-medium">17 WILLOW STREET,</p>
                <p className="text-[.9vw] font-medium -mt-[.5vw]">
                  LONDON, EC2A 4BH
                </p>
              </div>
              <div className="flex flex-col gap-[.3vw]">
                <p className="text-[.9vw] font-semibold uppercase">
                  Opening Hours
                </p>
                <p className="text-[.9vw] font-medium">MONDAY TO FRIDAY</p>
                <p className="text-[.9vw] font-medium -mt-[.5vw]">9AM - 6PM</p>
              </div>
            </div>
            <div className="flex flex-col gap-[.3vw]">
              <p className="text-[.9vw] w-full font-semibold uppercase">
                Social
              </p>
              {["INSTAGRAM", "LINKEDIN", "BEHANCE"].map((item) => (
                <TextAnimation
                  key={item}
                  font="font-medium"
                  size="text-[.9vw]"
                  href="#"
                  text={item}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[.3vw]">
            <p className="text-[.9vw] font-semibold uppercase">Other</p>
            {["SUPPLIER T&C'S", "PRIVACY POLICY", "CAREERS"].map((item) => (
              <TextAnimation
                key={item}
                href="#"
                font="font-medium"
                size="text-[.9vw]"
                text={item}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="h-[15%] w-full flex items-end justify-between">
        <div className="w-1/2 h-fit">
          <div className="flex h-auto w-[12vw] items-center">
            <Image
              src="/assets/images/logo.svg"
              alt="Inertia Studio"
              width={120}
              className="h-full w-full" 
              height={24}
              priority
            />
          </div>
        </div>
        <div className="w-1/2 h-fit flex items-end justify-between">
          <div className="flex flex-col">
            <p className="font-medium text-[.9vw]">All content ©</p>
            <p className="font-medium text-[.9vw] -mt-[.5vw]">Inertia Studios Ltd 2025</p>
          </div>
          <div className="h-full flex items-end">
            <p className="font-medium text-[.9vw]">Website by Okey Studio</p>
          </div>
          <div onClick={handleScroll} className="h-full flex items-end">
            <TextAnimation text="BACK TO TOP ↑" size="text-[.9vw]" font="font-medium" />
          </div>
        </div>
      </div>
    </div>
  );
}
