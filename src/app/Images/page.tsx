"use client";
import React from "react";

const ImagesPage: React.FC = () => {
  return (
    <div className="h-auto w-full bg-white pt-24 p-4 md:p-15 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px]">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-md flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={image}
              alt={`Image ${index}`}
              className="w-full h-full object-cover rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const images: string[] = [
  "/img1.jpeg",
  "/img2.jpeg",
  "/img3.jpeg",
  "/img4.jpeg",
  "/img5.jpeg",
  "/img6.jpeg",
  "/prj1.png",
  "/prj2.png",
  "/prj4.png",
];

export default ImagesPage;
