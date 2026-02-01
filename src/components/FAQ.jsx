import React, { useState } from "react";
import faqs from "../constants/FAQ";
import { faq } from "../assets/asset";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen py-6 md:py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-blend-saturation"
      style={{ backgroundImage: `url(${faq})` }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-black text-center">
              Frequently Asked Questions
            </h2>
            <p className=" border border-b-2 w-[80px] [border-image:linear-gradient(to_right,#43A047,#2E7D32)_1]"></p>
            <p className="text-gray-700 text-center">
              Find answers to common questions about our travel services
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full px-6 py-4 flex items-center justify-between
                           text-left font-semibold text-gray-800
                           hover:bg-blue-50 transition-colors duration-200
                           focus:outline-none focus:bg-blue-100"
                >
                  <span className="text-base md:text-lg">{faq.question}</span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full 
                             flex items-center justify-center ml-4
                             ${
                               openIndex === index
                                 ? "bg-green-500 text-white"
                                 : "bg-gray-200 text-gray-600"
                             }
                             transition-all duration-300`}
                  >
                    <span className="text-xl font-bold">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 bg-gradient-to-b from-blue-50 to-white border-t border-gray-100 animate-in fade-in duration-300">
                    <p className="text-blue-600 leading-relaxed text-base italic">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
