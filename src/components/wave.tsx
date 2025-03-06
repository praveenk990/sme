"use client";
import React, { useState, useEffect } from "react";
import { WavyBackground } from "./ui/wavy-background";
import { motion } from "framer-motion"; // Import animation library

export function WavyBackgroundDemo() {
  const slides = [
    {
      title: "SREE MANJUNATHA ELECTRICALS",
      description:
        "Our commitment to excellence is reflected in every project we undertake.",
      image: null, // No image for the first slide
    },
    {
      title: "Elevate Your Project",
      description:
        "Reliable and professional electrical solutions for all needs.",
      image: "/img2.jpeg",
    },
    {
      title: "Powering the Future",
      description: "Innovation and quality in every installation.",
      image: "/img3.jpeg",
    },
    {
      title: "Powering the Future",
      description: "Innovation and quality in every installation.",
      image: "/img3.jpeg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <WavyBackground className="max-w-5xl mx-auto pb-50">
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 p-6">
        {/* If an image exists, alternate layout */}
        {slides[currentSlide].image ? (
          currentSlide % 2 === 0 ? (
            <>
              {/* Text Section */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <p className="text-2xl md:text-4xl lg:text-6xl text-white font-bold">
                  {slides[currentSlide].title}
                </p>
                <p className="text-base md:text-lg mt-4 text-white font-normal">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Image Section with Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 flex justify-center"
              >
                <img
                  src={slides[currentSlide].image!}
                  alt="Slide Image"
                  className="min-w-full h-96 rounded-xl shadow-lg object-cover"
                />
              </motion.div>
            </>
          ) : (
            <>
              {/* Image Section with Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 flex justify-center"
              >
                <img
                  src={slides[currentSlide].image!}
                  alt="Slide Image"
                  className="min-w-full h-96 rounded-xl shadow-lg object-cover"
                />
              </motion.div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <p className="text-2xl md:text-4xl lg:text-6xl text-white font-bold">
                  {slides[currentSlide].title}
                </p>
                <p className="text-base md:text-lg mt-4 text-white font-normal">
                  {slides[currentSlide].description}
                </p>
              </div>
            </>
          )
        ) : (
          // If no image (First slide)
          <div className="text-center w-full">
            <p className="text-2xl md:text-4xl lg:text-6xl text-white font-bold">
              {slides[currentSlide].title}
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal">
              {slides[currentSlide].description}
            </p>
          </div>
        )}
      </div>

      {/* Manual Navigation Dots */}
      <div className="flex justify-center mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-2 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </WavyBackground>
  );
}
