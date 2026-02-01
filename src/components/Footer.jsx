import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import Sustainability from "./Sustainability";
import {
  keep,
  nepalGovernment,
  nepalMountaineering,
  nepalTourism,
  rescueAssosciation,
  taan,
} from "../assets/affiliation/affiliation";
import { card1, mastercard, qr, visa } from "../assets/payments/payment";

const Footer = () => {
  return (
    <>
      <div className="w-full mx-auto px-6 md:px-20 pt-16 md:pt-20 pb-8 md:pb-6 bg-green-600">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 justify-between pb-6">
          <div className="space-y-4 border-r-2 border-white">
            <div className="font-bold text-2xl text-white">🏔️ Green Nepal</div>
            <p className="italic text-white/90 leading-relaxed">
              Pioneering sustainable tourism in the Himalayas since 2010. We're
              committed to preserving Nepal's natural beauty while creating
              unforgettable adventures.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook">
                <FaFacebookF
                  size={22}
                  className="text-white hover:scale-125 transition-all duration-300 hover:text-blue-200"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram
                  size={22}
                  className="text-white hover:scale-125 transition-all duration-300 hover:text-blue-200"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter
                  size={22}
                  className="text-white hover:scale-125 transition-all duration-300 hover:text-blue-200"
                />
              </a>
              <a href="#" aria-label="Linkedin">
                <FaLinkedin
                  size={22}
                  className="text-white hover:scale-125 transition-all duration-300 hover:text-blue-200"
                />
              </a>
            </div>
          </div>

          <div className="space-y-4 border-r-2 border-white">
            <div className="font-bold text-xl text-white">Quick Links</div>
            <div className="flex flex-col gap-3 text-white/90">
              {[
                "Our Tours",
                "Sustainability",
                "About US",
                "Reviews",
                "Travel Guide",
                "FAQs",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:translate-x-2 transition-all duration-300 hover:text-blue-100 flex items-center gap-2"
                >
                  <FaLongArrowAltRight size={14} /> {link}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 border-r-2 border-white">
            <div className="font-bold text-xl text-white">Popular Treks</div>
            <div className="flex flex-col gap-3 text-white/90">
              {[
                "Everest Base Camp",
                "Annapurna Circuit",
                "Langtang Valley",
                "Manaslu Circuit",
                "Chitwan Safari",
              ].map((trek) => (
                <a
                  key={trek}
                  href="#"
                  className="hover:translate-x-2 transition-all duration-300 hover:text-blue-100 flex items-center gap-2"
                >
                  <FaLongArrowAltRight size={14} /> {trek}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="font-bold text-xl text-white">Contact Us</div>
            <div className="flex flex-col gap-3 text-white/90">
              <p className="flex items-center gap-2">
                <span className="flex-shrink-0">📍</span> Thamel, Kathmandu,
                Nepal
              </p>
              <a
                href="mailto:info@green-nepal.com"
                className="flex items-center gap-2 hover:text-blue-100"
              >
                <span className="flex-shrink-0">📧</span> info@green-nepal.com
              </a>
              <a
                href="tel:+977123456789"
                className="flex items-center gap-2 hover:text-blue-100"
              >
                <span className="flex-shrink-0">📱</span> +977 123 456 789
              </a>
              <p className="flex items-center gap-2">
                <span className="flex-shrink-0">⏰</span> 24/7 support available
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-8 md:px-20 gap-8 md:gap-0 bg-gray-50">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <p className="text-gray-700 font-medium">We accept</p>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
            <img src={qr} alt="qr payment" className="h-8 md:h-10 w-auto object-contain hover:scale-105 transition-transform" />
            <img src={visa} alt="visa payment" className="h-8 md:h-10 w-auto object-contain hover:scale-105 transition-transform" />
            <img src={mastercard} alt="mastercard" className="h-8 md:h-10 w-auto object-contain hover:scale-105 transition-transform" />
            <img src={card1} alt="card 1" className="h-8 md:h-10 w-auto object-contain hover:scale-105 transition-transform" />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-3">
          <p className="text-gray-700 font-medium">We're affiliated to</p>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4">
            <img src={nepalGovernment} alt="nepal Government" className="h-10 w-auto object-contain hover:scale-105 transition-transform" />
            <img src={nepalMountaineering} alt="nepal mountaineering" className="h-10 w-auto object-contain hover:scale-105 transition-transform" />
            <img src={nepalTourism} alt="nepal tourism" className="h-10 w-auto object-contain hover:scale-105 transition-transform" />
            <img src={rescueAssosciation} alt="rescue association" className="h-10 w-auto object-contain hover:scale-105 transition-transform" />
            <img src={taan} alt="taan" className="h-10 w-auto object-contain hover:scale-105 transition-transform" />
            <img src={keep} alt="keep" className="h-10 w-auto object-contain hover:scale-105 transition-transform" />
          </div>
        </div>
      </div>
      <div className=" w-full text-center bg-green-800 text-white/80 text-sm font-bold py-5">
        © 2026 Green Nepal. All rights reserved. | Privacy Policy | Terms &
        Conditions
      </div>
    </>
  );
};

export default Footer;
