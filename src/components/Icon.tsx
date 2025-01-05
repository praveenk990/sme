import React from "react";

const Icon = () => {
  return (
    <div className="w-full">
      <h2 className="mb-2 text-center text-3xl font-extrabold sm:text-4xl lg:text-5xl">
        Our Clients
      </h2>
      <div className="overflow-x-hidden">
        <div className="flex  space-x-3 sm:space-x-5 animate-scroll-horizontal m-4 sm:m-8 lg:m-16">
          <img
            className="sm:w-16 md:w-24 lg:w-32 w-24"
            src="/abb-logo.svg"
            width={150}
            height={20}
            alt="image1"
          />
          <img
            className="bg-black sm:w-24 md:w-32 lg:w-40 w-32"
            src="/cefem.png"
            width={250}
            height={20}
            alt="image2"
          />
          <img
            className="sm:w-24 md:w-32 lg:w-40 w-32"
            src="/fimer.svg"
            width={150}
            height={20}
            alt="image3"
          />
          <img
            className="sm:w-24 md:w-32 lg:w-40 w-40"
            src="/hitachi-energy-mark-red.svg"
            width={250}
            height={20}
            alt="image4"
          />
          <img
            className="sm:w-24 md:w-32 lg:w-40 w-32"
            src="/infosys-foundation.svg"
            alt="image5"
          />
          <img
            className="sm:w-24 md:w-32 lg:w-40 w-32"
            src="/pes.png"
            width={250}
            height={20}
            alt="image6"
          />
          <img
            className="sm:w-24 md:w-32 lg:w-40 w-32"
            src="/power.png"
            width={250}
            height={20}
            alt="image7"
          />
          <img
            className="bg-black sm:w-16 md:w-24 lg:w-32 w-24"
            src="/sineng.png"
            width={150}
            height={50}
            alt="image8"
          />
          <img
            className="mb-4 sm:w-16 md:w-24 lg:w-32 w-24"
            src="/yaskawa.svg"
            width={150}
            height={50}
            alt="image9"
          />

<img
            className="mb-4 sm:w-16 md:w-24 lg:w-32 w-24"
            src="/kk.png"
            width={150}
            height={50}
            alt="image10"
          />

<img
            className="mb-4 sm:w-16 md:w-24 lg:w-32 w-24"
            src="/weir.webp"
            width={150}
            height={50}
            alt="image11"
          />

<img
            className="mb-4 sm:w-16 md:w-24 lg:w-32 w-24"
            src="/OIP.jpg"
            width={150}
            height={50}
            alt="image12"
          />

        </div>
      </div>
    </div>
  );
};

export default Icon;
