import React from "react";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

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
      <div className="w-full mx-auto px-6 md:px-20 pt-16 md:pt-20 pb-12 md:pb-16 bg-green-600">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 justify-between">
          <div className="space-y-6 md:border-r border-white/20 pr-4">
            <div className="font-bold text-3xl text-white tracking-tight flex items-center gap-2">
              🏔️ Green Nepal
            </div>
            <p className="italic text-white/90 leading-relaxed text-sm md:text-base">
              Pioneering sustainable tourism in the Himalayas since 2010. We're
              committed to preserving Nepal's natural beauty while creating
              unforgettable adventures.
            </p>
          </div>

          <div className="space-y-6 md:border-r border-white/20 pr-4">
            <div className="font-bold text-xl text-white border-b border-white/20 pb-2">
              Quick Links
            </div>
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
                  className="hover:translate-x-2 transition-all duration-300 hover:text-green-50 flex items-center gap-2 text-sm"
                >
                  <FaLongArrowAltRight size={12} /> {link}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6 md:border-r border-white/20 pr-4">
            <div className="font-bold text-xl text-white border-b border-white/20 pb-2">
              Popular Treks
            </div>
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
                  className="hover:translate-x-2 transition-all duration-300 hover:text-green-50 flex items-center gap-2 text-sm"
                >
                  <FaLongArrowAltRight size={12} /> {trek}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="font-bold text-xl text-white border-b border-white/20 pb-2">
              Contact Us
            </div>
            <div className="flex flex-col gap-4 text-white/90 text-sm">
              <p className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1">📍</span>
                <span>Thamel, Kathmandu, Nepal</span>
              </p>
              <a
                href="mailto:info@green-nepal.com"
                className="flex items-center gap-3 hover:text-green-50 transition-colors"
              >
                <span className="flex-shrink-0">📧</span> info@green-nepal.com
              </a>
              <a
                href="tel:+977123456789"
                className="flex items-center gap-3 hover:text-green-50 transition-colors"
              >
                <span className="flex-shrink-0">📱</span> +977 123 456 789
              </a>
              <a
                href="tel:+977015900742"
                className="flex items-center gap-3 hover:text-green-50 transition-colors"
              >
                <span className="flex-shrink-0">☎️</span> 01-5900742
              </a>
              <p className="flex items-center gap-3 bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                <span className="flex-shrink-0 text-lg">⏰</span>
                <span className="font-medium">24/7 support available</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            {/* Social Links */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <p className="text-gray-800 font-bold uppercase tracking-wider text-xs">
                Follow Our Adventure
              </p>
              <div className="flex gap-4">
                {[
                  { icon: FaFacebookF, href: "#", label: "Facebook" },
                  { icon: FaInstagram, href: "#", label: "Instagram" },
                  { icon: FaTwitter, href: "#", label: "Twitter" },
                  { icon: FaLinkedin, href: "#", label: "Linkedin" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 bg-gray-50 hover:bg-green-600 hover:text-white rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-gray-800 font-bold uppercase tracking-wider text-xs">
                Secure Payments
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4">
                {[
                  { src: qr, alt: "QR Pay" },
                  { src: visa, alt: "Visa" },
                  { src: mastercard, alt: "Mastercard" },
                  { src: card1, alt: "Amex" },
                ].map((pay, idx) => (
                  <img
                    key={idx}
                    src={pay.src}
                    alt={pay.alt}
                    className="h-8 w-auto  hover:scale-105 transition-all duration-300 cursor-pointer"
                  />
                ))}
              </div>
            </div>

            {/* Affiliations */}
            <div className="flex flex-col items-center md:items-end gap-4">
              <p className="text-gray-800 font-bold uppercase tracking-wider text-xs">
                Our Affiliations
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-4">
                {[
                  nepalGovernment,
                  nepalMountaineering,
                  nepalTourism,
                  rescueAssosciation,
                  taan,
                  keep,
                ].map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt="affiliation"
                    className="h-8 w-auto object-contain hover:scale-105 transition-all duration-300 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full text-center bg-green-700 text-white/50 text-md py-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Green Nepal Tourism. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
