import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import trips from "../constants/Departure";

const Departure = () => {
  return (
    <section className="py-12 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto border-2 border-gray-300/50 rounded-[10px] shadow-lg overflow-hidden">
        <div className="bg-green-600 rounded-t-[7px] flex flex-col lg:flex-row justify-between w-full lg:items-center p-6 gap-6">
          <div className="flex flex-col">
            <div className="text-white/80 font-medium">Departure Dates</div>
            <div className="text-2xl md:text-4xl font-bold text-white">
              Join Fixed Departure Trips
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="flex-1 lg:flex-none rounded-lg px-6 py-2 bg-white cursor-pointer hover:bg-gray-100 transition-all duration-300 font-semibold shadow-sm">
              All Departures
            </button>
            <button className="flex-1 lg:flex-none rounded-lg px-6 py-2 bg-white cursor-pointer hover:bg-gray-100 transition-all duration-300 font-semibold shadow-sm">
              Select Month, Year
            </button>
          </div>
        </div>

        {/* Table Headers - Hidden on small screens */}
        <div className="hidden md:grid px-16 pt-6 grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 items-center mb-6 font-semibold text-gray-600">
          <div>TRIP NAME</div>
          <div>DEPARTURE DATE</div>
          <div className="text-center">STATUS</div>
          <div className="text-center">PRICE</div>
          <div></div>
        </div>

        {/* Trip List */}
        <div className="divide-y divide-gray-200">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="px-6 md:px-16 flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 md:gap-4 items-start md:items-center py-6 hover:bg-gray-50 transition-colors"
            >
              {/* Mobile labels added for readability */}
              <div className="w-full">
                <span className="md:hidden text-xs font-bold text-gray-400 uppercase mb-1 block">
                  Trip Name
                </span>
                <div className="font-bold text-xl text-gray-900">
                  {trip.destination}
                </div>
              </div>

              <div className="w-full">
                <span className="md:hidden text-xs font-bold text-gray-400 uppercase mb-1 block">
                  Departure Date
                </span>
                <div className="font-semibold text-gray-800">
                  {trip.duration}
                </div>
                <div className="text-gray-600 text-sm">{trip.date}</div>
              </div>

              <div className="w-full md:flex md:justify-center">
                <span className="md:hidden text-xs font-bold text-gray-400 uppercase mb-1 block">
                  Status
                </span>
                <div className="flex gap-2 items-center">
                  <IoMdCheckmarkCircleOutline
                    className="text-green-600 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <div className="font-semibold text-gray-800">
                      {trip.status}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {trip.seatsLeft} seats left
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:text-center">
                <span className="md:hidden text-xs font-bold text-gray-400 uppercase mb-1 block">
                  Price
                </span>
                <div className="text-lg font-bold text-blue-600">
                  {trip.priceNow}
                </div>
                <div className="text-gray-400 text-sm line-through">
                  {trip.priceWas}
                </div>
              </div>

              <div className="w-full pt-2 md:pt-0">
                <button className="w-full bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300 cursor-pointer font-semibold shadow-md shadow-green-100">
                  Join this trip
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departure;
