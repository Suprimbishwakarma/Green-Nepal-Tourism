import React from "react";
import {
  sustainabilityfeatures,
  features,
  testimonials,
} from "../constants/features";
import { colon, mark } from "../assets/asset";

const Sustainability = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-green-800 via-green-700 to-green-600 py-6 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
              Our Commitment to Sustainability
            </h2>
            <p className=" border border-b-2 w-[80px] [border-image:linear-gradient(to_right,#6B9C4A,#F59E0B,#D97706)_1]"></p>
            <div className="flex flex-col items-center">
              <p className="text-white text-center">
                We're not just showing you Nepal - we're protecting it for
                future generations.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto mt-12">
            {sustainabilityfeatures.map((feature) => (
              <div
                className=" flex flex-col items-center justify-center p-6 md:p-8 border-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.15)";
                }}
                key={feature.id}
              >
                <div className="text-4xl md:text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl md:text-2xl text-center font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-white text-base md:text-lg text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-white py-6 md:py-12 px-4 sm:px-6 lg:px-8">
        <img
          src={mark}
          alt="question mark"
          className="hidden md:block absolute z-0 top-12 right-10 lg:right-20 opacity-50 w-20 h-20 md:w-24 md:h-24 lg:w-30 lg:h-30"
        />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-black text-center">
              Why Choose Green Nepal
            </h2>
            <p className=" border border-b-2 w-[80px] [border-image:linear-gradient(to_right,#43A047,#2E7D32)_1]"></p>
            <div className="flex flex-col items-center">
              <p className="text-gray-700 text-center">
                Experience the difference of truly sustainable adventure tourism
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto mt-12">
            {features.map((feature) => (
              <div
                className=" flex flex-col items-center justify-center p-6 md:p-8 border-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-50/50 border-gray-100"
                key={feature.id}
              >
                <div className="text-4xl md:text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl md:text-2xl text-center font-bold mb-3 text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-base md:text-lg text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-gray-100 py-6 md:py-12 px-4 sm:px-6 lg:px-8">
        <img
          src={colon}
          alt="colon"
          className="hidden md:block absolute text-8xl z-0 top-20 right-10 lg:right-20 opacity-50 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
        />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-black text-center">
              Traveler Stories
            </h2>
            <p className=" border border-b-2 w-[80px] [border-image:linear-gradient(to_right,#43A047,#2E7D32)_1]"></p>
            <div className="flex flex-col items-center">
              <p className="text-gray-700 text-center">
                Hear from adventurers who've experienced sustainable Himalayan
                journeys
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto mt-12">
            {testimonials.map((testimonial) => (
              <div
                className=" flex flex-col items-center justify-center p-6 md:p-8 bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                key={testimonial.id}
              >
                <div className="flex flex-col gap-6 items-start w-full">
                  <div className="text-gray-700 italic text-lg leading-relaxed">
                    "{testimonial.text}"
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        {testimonial.country}
                      </p>
                      <div className="flex gap-0.5 mt-1">
                        {"⭐".repeat(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sustainability;
