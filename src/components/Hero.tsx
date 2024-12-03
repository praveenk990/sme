import React from "react";

const Hero = () => {
  return (
    <div className="hero flex min-h-screen items-center justify-center p-12">
      <div className="flex max-w-4xl flex-col items-center gap-6 pd-10">
        <div className="space-y-4">
          <h1 className="m-3 text-center font-bold text-6xl text-white md:text-6xl lg:text-8xl">
            Sree Manjunatha Electricals
          </h1>
          <h3 className="m-4 text-center text-slate-200 ">
            Govt. Class I Electrical Contractor, Consultant Engineer & Erectors.
          </h3>
          <p className="p-4 text-center text-2xl text-slate-300 md:text-2xl lg:text-2xl">
            We take pride in introducing ourselves as a {""}
            <span className="font-bold text-white">
              Class 1 Electrical Contractor
            </span>{" "}
            with{" "}
            <span className="font-bold  text-white">
              eleven years of experience
            </span>
            . Authorized by the{" "}
            <span className="font-bold text-white">
              Chief Electrical Inspectorate of the Government of Karnataka
            </span>
            , we specialize in a wide range of electrical services, including
            licensing, contract works, testing, calibration, and
            pre-commissioning and commissioning activities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
