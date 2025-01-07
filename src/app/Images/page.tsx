"use client";
import { ParallaxScrollSecond } from "./ui/parallax-scroll-2";
import { useEffect, useState } from "react";

export function Image() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen width is less than 768px (mobile view)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-[40rem] w-full bg-gray-500 bg-grid-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center "></div>

      {/* Render all images with a smaller size and scrollable vertically on mobile, else use parallax scroll */}
      {isMobile ? (
        <div className="overflow-y-auto flex flex-col pt-20 pb-8 space-y-4 h-full w-full px-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="h-[200px] w-auto object-cover rounded-2xl"
            />
          ))}
        </div>
      ) : (
        <ParallaxScrollSecond images={images} />
      )}
    </div>
  );
}

const images = [
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

export default Image;
