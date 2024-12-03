import React from "react";

const Icon = () => {
  return (
    <div>
      <h2 className="mb-2 text-center text-3xl font-extrabold sm:text-4xl lg:text-5xl">
        Our Clients
      </h2>
      <div className="flex space-x-5 animate-scroll hover:paused m-20 sm:m-5  lg:m-20 ">
        <img
          className="sm:w-10"
          src="/abb-logo.svg"
          width={150}
          height={20}
          alt="image1"
        />
        <img
          className="bg-black sm:w-20"
          src="/cefem.png"
          width={250}
          height={20}
          alt="image2"
        />
        <img
          className="sm:w-20"
          src="/fimer.svg"
          width={150}
          height={20}
          alt="image3"
        />
        <img
          className="shrink:1"
          src="/hitachi-energy-mark-red.svg"
          width={250}
          height={20}
          alt="image4"
        />
        <img src="/infosys-foundation.svg" alt="image5" />
        <img src="/pes.png" width={250} height={20} alt="image6" />
        <img src="/power.png" width={250} height={20} alt="image7" />
        <img
          className="bg-black"
          src="/sineng.png"
          width={150}
          height={50}
          alt="image8"
        />
        <img
          className="mb-4 "
          src="/yaskawa.svg"
          width={150}
          height={50}
          alt="image9"
        />
      </div>
    </div>
  );
};

export default Icon;
