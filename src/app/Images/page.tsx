"use client";
import React, { useEffect, useState } from "react";

const ImagesPage: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/images")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load images");
        return res.json();
      })
      .then((data) => setImages(data))
      .catch((err) => {
        console.error("Error fetching images:", err);
        setError("Error loading images.");
      });
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;

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

export default ImagesPage;
