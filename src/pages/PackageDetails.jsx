import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Menu from "../components/Menu";
import packageNavs from "../constants/packageNav";
import packageData from "../constants/packageSections";
import { trek } from "../constants/trek";

import PackageGallery from "../components/PackageGallery";
import {
  IoMdCheckmarkCircleOutline,
  IoMdCloseCircleOutline,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";
import {
  FaShieldAlt,
  FaHeadset,
  FaGlobeAmericas,
  FaRegThumbsUp,
  FaCalendarAlt,
} from "react-icons/fa";
import { SiVisa, SiMastercard, SiAmericanexpress } from "react-icons/si";

const PackageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPackage = packageData[id] || packageData["1"]; // Default to Everest if not found
  const trekInfo = trek.find((t) => t.id === Number(id)) || trek[0];
  const trekImage = trekInfo.image;

  const [travelers, setTravelers] = useState(1);
  const [expandedDay, setExpandedDay] = useState(null);
  const [travelDate, setTravelDate] = useState("");
  const availabilityRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#availability") {
      // Small timeout to ensure the ref is assigned and layout is ready
      const timer = setTimeout(() => {
        scrollToAvailability();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  const scrollToAvailability = () => {
    availabilityRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const toggleDay = (idx) => {
    setExpandedDay(expandedDay === idx ? null : idx);
  };

  const handleClickLeft = () => {
    setTravelers((prev) => Math.max(1, prev - 1));
  };

  const handleClickRight = () => {
    setTravelers((prev) => prev + 1);
  };
  return (
    <div>
      <Menu sticky={false} />
      <div className="max-w-7xl mx-auto pt-4">
        <div>
          <div>
            <div className="flex flex-col gap-2 px-2 py-4 text-center">
              <h1 className="text-4xl font-bold text-blue-600">
                {currentPackage.title}
              </h1>
              <div className="flex justify-center flex-col gap-1 items-center">
                <p>"{currentPackage.subtitle}"</p>
                <div className="flex gap-2 items-center">
                  <p className="font-semibold text-orange-500">★★★★★</p>
                  <p className="font-semibold text-base text-gray-500">
                    Based on 100 reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-700 text-base md:text-base sticky top-0 z-30 bg-white py-4 px-4 shadow-md border-b-2 border-gray-300">
            <div className="flex gap-4 md:gap-8 overflow-x-auto w-full md:w-auto no-scrollbar pb-2 md:pb-0">
              {packageNavs.map((nav) => (
                <a
                  key={nav.id}
                  href={nav.link}
                  className="flex flex-col justify-center items-center hover:text-green-600 transition-colors whitespace-nowrap"
                >
                  <nav.icon size={24} className="mb-1" />
                  <p className="text-sm font-medium uppercase tracking-wider">
                    {nav.title}
                  </p>
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                if (travelDate) {
                  const finalPrice =
                    travelers *
                    (travelers <= 2 ? 1350 : travelers <= 6 ? 1320 : 1299);
                  navigate("/booking", {
                    state: {
                      packageId: id,
                      packageName: currentPackage.title,
                      travelers,
                      travelDate,
                      totalPrice: finalPrice,
                      image: trekImage,
                    },
                  });
                } else {
                  scrollToAvailability();
                }
              }}
              className="hidden md:block text-white bg-green-600 hover:bg-green-700 transition-colors font-bold rounded-full px-8 py-3 shadow-lg"
            >
              BOOK NOW
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-8 px-4 py-8">
            {/* Left Column: Details Sections */}
            <div className="flex-2 flex flex-col gap-6">
              <PackageGallery />

              {/* Quick Facts Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-300 shadow-sm text-base">
                {currentPackage.quickFacts.map((fact, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-lg shadow-sm text-green-600">
                      <fact.icon size={24} />
                    </div>
                    <div>
                      <p className="text-base text-gray-600 font-bold uppercase">
                        {fact.label}
                      </p>
                      <p className="text-base font-black text-gray-900">
                        {fact.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trip Highlights */}
              <div className="bg-white p-6 rounded-2xl border border-gray-300 shadow-sm text-base">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <FaRegThumbsUp className="text-green-600" /> Trip Highlights
                </h2>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  {currentPackage.overview.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex gap-3">
                      <FaRegThumbsUp
                        className="text-green-600 shrink-0 mt-1"
                        size={16}
                      />
                      <p className="text-base text-gray-700 leading-relaxed font-medium">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Render Sections */}
              {packageNavs.map((nav) => {
                const sectionKey = nav.link.replace("#", "");
                const sectionData = currentPackage[sectionKey];

                if (!sectionData) return null;

                return (
                  <div
                    key={nav.id}
                    id={sectionKey}
                    className="scroll-mt-32 text-base"
                  >
                    <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">
                      {sectionData.title}
                    </h2>

                    {/* Render different content types based on section */}
                    {sectionData.content &&
                      (Array.isArray(sectionData.content) ? (
                        <div className="flex flex-col gap-4 mb-4">
                          {sectionData.content.map((paragraph, index) => (
                            <p
                              key={index}
                              className="text-gray-700 text-base leading-relaxed"
                            >
                              {paragraph
                                .split("**")
                                .map((part, i) =>
                                  i % 2 === 1 ? (
                                    <strong key={i}>{part}</strong>
                                  ) : (
                                    part
                                  ),
                                )}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-700 text-base leading-relaxed mb-4">
                          {sectionData.content
                            .split("**")
                            .map((part, i) =>
                              i % 2 === 1 ? (
                                <strong key={i}>{part}</strong>
                              ) : (
                                part
                              ),
                            )}
                        </p>
                      ))}

                    {sectionData.image && (
                      <div className="w-full flex justify-center mb-4">
                        <img
                          src={sectionData.image}
                          alt={sectionData.title}
                          className="max-w-full h-auto rounded-md shadow-md border border-gray-300"
                        />
                      </div>
                    )}

                    {sectionData.days && (
                      <div className="flex flex-col gap-3">
                        <div className="flex justify-end mb-2">
                          <button
                            onClick={() =>
                              setExpandedDay(
                                expandedDay === "all" ? null : "all",
                              )
                            }
                            className="text-green-600 font-semibold text-base hover:underline"
                          >
                            {expandedDay === "all"
                              ? "Collapse All -"
                              : "Expand All +"}
                          </button>
                        </div>
                        {sectionData.days.map((day, idx) => {
                          const isExpanded =
                            expandedDay === idx || expandedDay === "all";
                          return (
                            <div
                              key={idx}
                              className="border border-gray-200 rounded-xl overflow-hidden transition-all"
                            >
                              <button
                                onClick={() => toggleDay(idx)}
                                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                              >
                                <h3 className="font-bold text-base text-gray-800">
                                  <span className="text-green-600 mr-2">
                                    {day.day}:
                                  </span>{" "}
                                  {day.title}
                                </h3>
                                {isExpanded ? (
                                  <IoIosArrowUp size={20} />
                                ) : (
                                  <IoIosArrowDown size={20} />
                                )}
                              </button>
                              {isExpanded && (
                                <div className="p-4 bg-white animate-in slide-in-from-top-2 duration-200">
                                  <p className="text-gray-600 text-base leading-relaxed">
                                    {day.desc}
                                  </p>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {sectionData.items && (
                      <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-gray-300 shadow-sm text-base">
                        <div>
                          <h3 className="font-bold mb-4 text-green-700 flex items-center gap-2">
                            <IoMdCheckmarkCircleOutline className="text-xl" />{" "}
                            Includes
                          </h3>
                          <ul className="space-y-3">
                            {sectionData.items.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex gap-2 text-base text-gray-700"
                              >
                                <IoMdCheckmarkCircleOutline className="text-green-500 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {sectionData.excludes && (
                          <div>
                            <h3 className="font-bold mb-4 text-red-600 flex items-center gap-2">
                              <IoMdCloseCircleOutline className="text-xl" />{" "}
                              Excludes
                            </h3>
                            <ul className="space-y-3">
                              {sectionData.excludes.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex gap-2 text-base text-gray-700"
                                >
                                  <IoMdCloseCircleOutline className="text-red-500 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {sectionData.dates && (
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-green-100">
                              <th className="p-3 border border-gray-300">
                                Date
                              </th>
                              <th className="p-3 border border-gray-300">
                                Price
                              </th>
                              <th className="p-3 border border-gray-300">
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {sectionData.dates.map((d, idx) => (
                              <tr
                                key={idx}
                                className="border-b border-gray-300"
                              >
                                <td className="p-3 border border-gray-300">
                                  {d.date}
                                </td>
                                <td className="p-3 border border-gray-300 font-bold">
                                  {d.price}
                                </td>
                                <td className="p-3 border border-gray-300 text-green-600">
                                  {d.status}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {sectionData.questions && (
                      <div className="flex flex-col gap-3">
                        {sectionData.questions.map((q, idx) => (
                          <details
                            key={idx}
                            className="bg-gray-100 p-3 rounded-md"
                          >
                            <summary className="font-semibold cursor-pointer">
                              {q.q}
                            </summary>
                            <p className="mt-2 text-gray-700 text-base pl-4">
                              {q.a}
                            </p>
                          </details>
                        ))}
                      </div>
                    )}

                    {sectionData.reviews && (
                      <div className="grid gap-4">
                        {sectionData.reviews.map((r, idx) => (
                          <div
                            key={idx}
                            className="border border-gray-300 p-4 rounded-md shadow-sm"
                          >
                            <div className="flex justify-between mb-2">
                              <span className="font-bold">{r.user}</span>
                              <span className="text-yellow-500">
                                ★ {r.rating}
                              </span>
                            </div>
                            <p className="text-gray-600 text-base italic">
                              "{r.comment}"
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Check Availability Section */}
              <div
                ref={availabilityRef}
                className="scroll-mt-32 bg-white p-8 rounded-2xl border-2 border-green-100 shadow-lg text-base"
              >
                <h2 className="text-2xl font-black mb-8 text-gray-900 border-b border-gray-300 pb-4">
                  Check Availability
                </h2>

                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <FaCalendarAlt className="text-green-600" /> When?
                        <span className="text-base font-normal text-gray-500 ml-2">
                          Pick a Travel Date
                        </span>
                      </h3>
                      <input
                        type="date"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-green-500 focus:outline-none transition-all text-lg font-medium"
                      />
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <FaGlobeAmericas className="text-green-600" />{" "}
                        Travellers?
                        <span className="text-base font-normal text-gray-500 ml-2">
                          Number of pax
                        </span>
                      </h3>
                      <div className="flex items-center justify-between bg-gray-50 border-2 border-gray-100 rounded-2xl p-2 px-4 h-[68px]">
                        <button
                          onClick={handleClickLeft}
                          className="w-12 h-12 flex items-center justify-center bg-white shadow-md border-2 border-gray-50 rounded-xl text-2xl font-black hover:bg-gray-100 transition-all text-green-600 active:scale-95"
                        >
                          -
                        </button>
                        <p className="text-2xl font-black text-gray-800">
                          {travelers}
                        </p>
                        <button
                          onClick={handleClickRight}
                          className="w-12 h-12 flex items-center justify-center bg-white shadow-md border-2 border-gray-50 rounded-xl text-2xl font-black hover:bg-gray-100 transition-all text-green-600 active:scale-95"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50/50 p-8 rounded-3xl border border-green-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                      <p className="text-base font-bold text-green-700 uppercase tracking-widest mb-1">
                        Total Price
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-base font-medium text-gray-500">
                          {travelers} x{" "}
                          {travelers <= 2 ? 1350 : travelers <= 6 ? 1320 : 1299}
                        </span>
                        <span className="text-2xl font-black text-green-600">
                          US $
                          {travelers *
                            (travelers <= 2
                              ? 1350
                              : travelers <= 6
                                ? 1320
                                : 1299)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        if (!travelDate) {
                          alert("Please select a travel date first.");
                          scrollToAvailability();
                          return;
                        }
                        const finalPrice =
                          travelers *
                          (travelers <= 2
                            ? 1350
                            : travelers <= 6
                              ? 1320
                              : 1299);
                        navigate("/booking", {
                          state: {
                            packageId: id,
                            packageName: currentPackage.title,
                            travelers,
                            travelDate,
                            totalPrice: finalPrice,
                            image: trekImage,
                          },
                        });
                      }}
                      className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-black px-12 py-5 rounded-2xl shadow-xl shadow-green-100 transition-all transform hover:-translate-y-1 active:translate-y-0 uppercase tracking-widest text-md"
                    >
                      Book This Trip
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="flex-1">
              <div className="sticky top-30 z-20 self-start">
                <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-300 overflow-hidden text-base">
                  {/* On Sale Ribbon */}
                  <div className="relative">
                    <div className="absolute top-4 -right-12 bg-orange-500 text-white px-12 py-1 rotate-45 text-base font-black uppercase tracking-widest shadow-lg z-10 ring-4 ring-orange-500/20">
                      On Sale
                    </div>
                  </div>

                  <div className="bg-green-600 text-white p-4 text-center shrink-0">
                    <p className="text-base font-bold opacity-100 uppercase tracking-widest mb-1">
                      Pricing starts from
                    </p>
                    <div className="flex justify-center items-baseline gap-2">
                      <span className="text-3xl font-black">US$1299</span>
                      <span className="text-[16px] opacity-100 font-bold uppercase tracking-tight">
                        / person
                      </span>
                    </div>
                  </div>

                  <div className="px-6 py-4 space-y-3">
                    {/* Price Breakdown Table */}
                    <div className="space-y-2">
                      <h4 className="text-base font-black text-gray-500 uppercase tracking-widest border-l-4 border-green-600 pl-3">
                        Price Per Person
                      </h4>
                      <div className="space-y-1">
                        {currentPackage.overview.groupPricing.map(
                          (item, idx) => (
                            <div
                              key={idx}
                              className="flex justify-between items-center text-base border-b border-gray-50 pb-0.5"
                            >
                              <span className="text-gray-800 font-semibold text-base">
                                {item.pax}
                              </span>
                              <span className="font-bold text-gray-900 ml-4 border-b-2 border-green-600/30 pb-0.5">
                                US$ {item.price}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                    <div className="pt-1">
                      <button
                        onClick={scrollToAvailability}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-2.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-widest mb-2 ring-4 ring-green-600/10 text-base"
                      >
                        Check Availability
                      </button>

                      <button className="w-full bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-2 rounded-xl transition-all uppercase tracking-widest text-base">
                        Any Question?
                      </button>
                    </div>

                    <div className="pt-2 border-t border-gray-100 space-y-2">
                      <div className="flex items-center gap-2 group">
                        <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                          <IoMdCheckmarkCircleOutline size={14} />
                        </div>
                        <span className="text-base font-semibold text-gray-800 capitalize tracking-tight leading-none">
                          Book Instantly Directly
                        </span>
                      </div>
                      <div className="flex items-center gap-2 group">
                        <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                          <IoMdCheckmarkCircleOutline size={14} />
                        </div>
                        <span className="text-base font-semibold text-gray-800 capitalize tracking-tight leading-none">
                          Best Price guarantee
                        </span>
                      </div>
                      <div className="flex items-center gap-2 group">
                        <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                          <IoMdCheckmarkCircleOutline size={14} />
                        </div>
                        <span className="text-base font-semibold text-gray-800 capitalize tracking-tight leading-none">
                          Fully Customizable Trip
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center items-center gap-3 pt-0 text-gray-600">
                      <SiVisa size={24} title="Visa" />
                      <SiMastercard size={20} title="Mastercard" />
                      <SiAmericanexpress size={20} title="American Express" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
