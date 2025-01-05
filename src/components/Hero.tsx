import React from "react";

const Hero = () => {
  return (
    <div className="hero flex min-h-screen items-center justify-center p-12">
      <div className="flex max-w-5xl flex-col items-center gap-6 pd-10">
        <div className="space-y-4">
          <h1 className="m-3 text-center font-bold text-6xl text-teal-800 md:text-6xl lg:text-6xl">
            SREE MANJUNATHA ELECTRICALS
          </h1>
          <h3 className="m-4 text-center text-slate-200 ">
            Govt. Class I Electrical Contractor, Consultant Engineer & Erectors.
          </h3>
          <p className="p-4 text-center text-2xl text-slate-300 md:text-2xl lg:text-2xl">
          <span className="font-bold"> With over 26 years of industry experience, {" "}</span>
          <span className="font-bold text-white text-2xl">
            SREE MANJUNATHA ELECTRICALS 
            </span>{" "}
            with{" "}
            {/* <span className="font-bold  text-white">
              eleven years of experience
            </span>
            . Authorized by the{" "}
            <span className="font-bold text-white">
              Chief Electrical Inspectorate of the Government of Karnataka
            </span> */}
            , is a premier Class I Electrical Contractor, sanctioned by the Chief Electrical Inspectorate of Karnataka. We are renowned for our expertise in electrical licensing, contract works, comprehensive testing, and both pre-commissioning and commissioning services. Our commitment to excellence is reflected in every project we undertake
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
