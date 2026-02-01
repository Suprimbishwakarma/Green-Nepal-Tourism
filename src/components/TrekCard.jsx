import React from "react";
import { trek } from "../constants/trek";
import { FaArrowRight } from "react-icons/fa";

const TrekCard = () => {
  const sortedTrek = [...trek].sort((a, b) => a.id - b.id);
  return (
    <div className="bg-white">
      {/* Best Seller Treks Section */}
      <section className="pt-6 md:pt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-black text-center">
              Best Seller Treks
            </h2>
            <p className=" border border-b-2 w-[80px] [border-image:linear-gradient(to_right,#43A047,#2E7D32)_1]"></p>
            <p className="text-gray-700 text-center">
              The Trails everyone talks about
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sortedTrek.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group border border-gray-200"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-56 bg-gradient-to-br from-slate-200 to-slate-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>

                  {/* Difficulty Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-lg text-white text-md ${
                        item.difficulty === "Easy"
                          ? "bg-green-600"
                          : item.difficulty === "Moderate"
                            ? "bg-yellow-600"
                            : "bg-red-600"
                      }`}
                    >
                      {item.difficulty}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="py-2 px-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Trek Details */}
                  <div className=" flex items-center justify-between space-y-2 mb-4 text-sm">
                    <div className="flex items-center text-black">
                      <span className="font-semibold text-sm text-blue-600 mr-2">
                        📅
                      </span>
                      <span>{item.duration}</span>
                    </div>
                    {/* <div className="flex items-center text-black">
                      <span className="font-semibold  text-sm text-orange-600 mr-2">
                        ⛰️
                      </span>
                      <span>{item.difficulty}</span>
                    </div> */}
                    <div className="flex items-center text-black">
                      <span className="font-semibold text-sm text-green-600 mr-2">
                        👥
                      </span>
                      <span>{item.groupSize}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-lg font-bold text-green-600">
                      {item.price}
                    </span>
                    <button className="bg-green-600 text-md text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex justify-center p-12">
        <button className=" flex items-center gap-2 px-6 py-2 font-bold text-xl text-white rounded-lg bg-green-600 hover:bg-green-700">
          <p>View all</p>
          <FaArrowRight />
        </button>
      </section>
    </div>
  );
};

export default TrekCard;
