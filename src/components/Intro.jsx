import React from "react";
import { herobackground } from "../assets/asset";

const Intro = () => {
  return (
    <div
      className="bg-cover bg-center w-full min-h-[calc(80vh)] flex items-center justify-center py-16 md:py-24"
      style={{ backgroundImage: `url(${herobackground})` }}
    >
      <div className="p-6 md:p-10 max-w-2xl w-full mx-4 text-center bg-black/50 rounded-lg">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
          Sustainable Himalayan Adventures
        </h1>
        <p className="text-white text-base sm:text-lg mt-4 font-medium">
          We're crafting an extraordinary eco-tourism experience that connects
          you with Nepal's majestic mountains, lush forests, and rich cultural
          heritage.
        </p>

        <form
          className="mt-8 flex justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="search" className="sr-only">
            Search destinations
          </label>
          <div className="flex flex-col sm:flex-row rounded-md overflow-hidden shadow-lg w-full sm:w-auto">
            <input
              id="search"
              type="text"
              placeholder="Search destinations..."
              className="px-4 py-3 w-full sm:w-64 md:w-80 bg-white bg-opacity-95 text-gray-800 outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 hover:bg-green-700 focus:outline-none transition-colors font-bold"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Intro;
