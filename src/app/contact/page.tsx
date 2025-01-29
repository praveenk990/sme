import React from "react";

const Page = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100 p-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-10">
        <h2 className="text-center lg:text-4xl leading-8 font-extrabold sm:text-5xl">
          Contact Us
        </h2>
        <h1 className="md:text-3xl text-3xl lg:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-purple-500 relative z-20">
          SREE MANJUNATHA ELECTRICALS
        </h1>
        <p className="text-center text-gray-500">
          Govt.Class I Electrical Contractor, Consultant Engineer & Electors.
        </p>
        <p className="text-center font-bold">
          No. 313, 5th Main Road, 2rd Block, 3rd Stage, Basaveshwar Nagar,
          Bangalore- 560079.
        </p>
        <p className="text-center">
          UDYAM Reg NO.:{" "}
          <span className="font-bold">UDYAM-KR-03-0111275(Micro)</span>
        </p>
        <p className="text-center font-bold">GSTIN/UIN: 29AEKPC8386D1Z8</p>
        <p className="text-center">State Name: Karnataka, Code: 29</p>

        <div className="text-center flex flex-col items-center font-bold space-y-4 mt-6">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path d="M11.625 16.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z" />
              <path
                fillRule="evenodd"
                d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 0 0 1.06-1.06l-1.047-1.048A3.375 3.375 0 1 0 11.625 18Z"
                clipRule="evenodd"
              />
              <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
            </svg>
            <a
              href="mailto:sreemanjunathaelectricals@smeglobal.in"
              className="hover:text-blue-700 transition-colors duration-300"
            >
              sreemanjunathaelectricals@smeglobal.in
            </a>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path d="M11.625 16.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z" />
              <path
                fillRule="evenodd"
                d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 0 0 1.06-1.06l-1.047-1.048A3.375 3.375 0 1 0 11.625 18Z"
                clipRule="evenodd"
              />
              <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
            </svg>
            <a
              href="mailto:sales@smeglobal.in"
              className="hover:text-blue-700 transition-colors duration-300"
            >
              sales@smeglobal.in
            </a>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="flex items-center justify-center gap-2 font-bold">
            <span>Mob.: 9886894462, 9341973677</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
