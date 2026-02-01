import React from "react";

const Subscription = () => {
  return (
    <div className="bg-green-600">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center py-12 md:py-16 px-4 sm:px-6 lg:px-8 gap-8">
        <div className="w-full lg:w-[450px] text-white text-center lg:text-left">
          <p className="text-2xl md:text-3xl font-bold mb-2">
            Subscribe Our E-Newspaper
          </p>
          <p className="italic text-white/90">
            Sign up for Deals and Discount. Get News, Notifications and Updates
            about the recent Events and Offers.
          </p>
        </div>
        <form
          action="submit"
          className="flex flex-col sm:flex-row bg-white/10 backdrop-blur-md gap-4 p-6 rounded-xl items-center w-full lg:w-auto border border-white/20"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col w-full sm:w-auto">
            <label className="text-white text-sm font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="bg-white/90 px-4 rounded-lg py-2 outline-none focus:ring-2 focus:ring-green-400 w-full"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col w-full sm:w-auto">
            <label className="text-white text-sm font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="bg-white/90 px-4 rounded-lg py-2 outline-none focus:ring-2 focus:ring-green-400 w-full"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto self-end bg-white text-green-700 px-8 py-2 md:py-2.5 rounded-lg hover:bg-gray-100 cursor-pointer font-bold transition-colors shadow-lg"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscription;
