"use client";
import { ParallaxScrollSecond } from "./ui/parallax-scroll-2";
import { useEffect, useState } from "react";

const ImagesPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-[50rem] w-full bg-gray-500 bg-grid-white/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {isMobile ? (
        <div className="overflow-y-auto flex flex-col py-8 space-y-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="h-[200px] w-[auto] object-cover rounded-2xl"
            />
          ))}
        </div>
      ) : (
        <ParallaxScrollSecond images={images} />
      )}
    </div>
  );
};

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

export default ImagesPage;
