import React from "react";
import { logos } from "../assets/asset";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTripadvisor } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="border-b border-gray-300 py-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 min-h-24 gap-4">
        <div className="flex items-center gap-2">
          <img src={logos} alt="logo" className="h-16 w-18 md:h-23 md:w-24" />
          <h1 className="text-xl md:text-2xl font-bold">
            <span className="font-extrabold text-green-600">GREEN</span> Nepal
            Tourism
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto mt-4 md:mt-0">
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-700/70 text-md">2500 excellent reviews</p>
            <div className="flex items-center justify-center md:justify-end gap-1">
              <FaTripadvisor size={24} />
              <p className="font-bold">Tripadvisor</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <FaWhatsapp size={24} className="text-green-600" />
              <p className="text-gray-700/70">Talk to an expert</p>
            </div>
            <p className="font-bold text-lg">+977-972347865</p>
          </div>
          <div className="hidden md:block">
            <BsCart3 size={32} className="cursor-pointer hover:text-green-600 transition-colors" />
          </div>
          <div className="w-full md:w-auto">
            <button className="w-full md:w-auto px-6 py-2 bg-green-600 rounded-lg text-white text-lg font-semibold hover:bg-green-800 transition-colors shadow-md">
              Plan your trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
