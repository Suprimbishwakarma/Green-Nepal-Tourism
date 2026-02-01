import React from "react";
import { trekSamples } from "../assets/treksample/trektest";

const Gallery = () => {
  const firstRow = trekSamples.slice(0, 5);
  const secondRow = trekSamples.slice(5);

  return (
    <div className="w-full bg-gray-100 py-6 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-black text-center">
            Up in the mountains
          </h2>
          <p className=" border border-b-2 w-[80px] [border-image:linear-gradient(to_right,#43A047,#2E7D32)_1]"></p>
          <div className="flex flex-col items-center">
            <p className="text-gray-700 text-center">
              The best view comes after the hardest climb
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-4">
          {firstRow.map((sample) => (
            <figure
              key={sample.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-200 hover:-translate-y-2 cursor-pointer"
            >
              <img
                src={sample.image}
                alt={`Sample ${sample.id}`}
                className="block w-full h-56 sm:h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {secondRow.map((sample) => (
            <figure
              key={sample.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-200 hover:-translate-y-2 cursor-pointer"
            >
              <img
                src={sample.image}
                alt={`Sample ${sample.id}`}
                className="block w-full h-56 sm:h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
