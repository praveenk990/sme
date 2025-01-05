"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";

export function Pagea() {
  return (
    <div className="p-10 h-[40rem] relative w-full overflow-hidden bg-black flex flex-col ">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("m-3 md:text-4xl lg:text-5xl  text-white font-bold text-center relative z-20")}>
       About Us
      </h1>
      <div className="p-10 ">
      <p className=" text-3xl text-justify mt-2 text-neutral-300 relative z-20">
      With over 26 years of industry experience, 
<span className="font-bold  ">SREE MANJUNATHA ELECTRICALS </span>is a premier Class I Electrical Contractor, sanctioned by the Chief Electrical Inspectorate of Karnataka. We are renowned for our expertise in electrical licensing, contract works, comprehensive testing, and both pre-commissioning and commissioning services. Our commitment to excellence is reflected in every project we undertake

      </p>
      </div>
    </div>
  );
}
export default Pagea;