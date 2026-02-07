import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdArrowBack, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaShieldAlt, FaCalendarAlt, FaUserFriends, FaGlobeAmericas, FaPlus, FaMinus } from "react-icons/fa";
import { SiVisa, SiMastercard, SiAmericanexpress } from "react-icons/si";

const Booking = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {
        packageId = "1",
        packageName = "Everest Base Camp Trek",
        travelers: initialTravelers = 1,
        travelDate = "2024-12-25",
        totalPrice: initialTotalPrice = 1350,
        image = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop"
    } = location.state || {};

    const [travelers, setTravelers] = useState(initialTravelers);
    const [paymentOption, setPaymentOption] = useState("deposit"); // "deposit" or "full"
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        countryCode: "+977",
        nationality: "",
        dob: "",
        specialRequirements: "",
    });
    const [showSuccess, setShowSuccess] = useState(false);

    const unitPrice = travelers <= 2 ? 1350 : travelers <= 6 ? 1320 : 1299;
    const totalPrice = travelers * unitPrice;
    const depositAmount = (totalPrice * 0.2).toFixed(2);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!packageId) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl font-bold mb-4">No booking information found.</h2>
                <button
                    onClick={() => navigate("/")}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg"
                >
                    Return Home
                </button>
            </div>
        );
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccess(true);
    };

    const handleTravelersChange = (delta) => {
        setTravelers(prev => Math.max(1, prev + delta));
    };

    return (
        <div className="min-h-screen bg-[#fcfcfc] pt-20 pb-16 font-sans overflow-x-hidden">
            <div className="max-w-6xl mx-auto px-4 lg:px-6">
                {/* Header Section */}
                <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-6">
                    <div>
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-2 text-gray-400 hover:text-green-600 transition-all mb-3 font-semibold group text-xs"
                        >
                            <IoMdArrowBack size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Details
                        </button>
                        <h1 className="text-3xl md:text-4xl font-extrabold font-serif text-gray-900 leading-tight">
                            {packageName}
                        </h1>
                        <div className="flex items-center gap-3 mt-3 text-gray-600 font-semibold text-sm">
                            <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-50">
                                <FaCalendarAlt className="text-green-600" /> {travelDate}
                            </span>
                            <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-50">
                                <FaUserFriends className="text-green-600" /> {travelers} Travelling
                            </span>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="grid lg:grid-cols-[1fr_340px] gap-6 xl:gap-8 items-start">
                    {/* Left Column: Form Sections */}
                    <div className="space-y-6">

                        {/* Section 1: Travelers */}
                        <div className="bg-white rounded-xl p-5 shadow-[0_5px_25px_rgba(0,0,0,0.02)] border border-gray-50">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-9 h-9 rounded-lg bg-green-600 text-white flex items-center justify-center text-base font-bold">1</span>
                                <h2 className="text-2xl font-serif font-bold text-gray-900">Travellers Selection</h2>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-4 bg-gray-50/50 rounded-xl p-4 border border-gray-100">
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Number of Pax</span>
                                    <div className="flex items-center gap-4 bg-white p-1 rounded-lg border border-gray-100">
                                        <button
                                            onClick={() => handleTravelersChange(-1)}
                                            className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all"
                                        >
                                            <FaMinus size={12} />
                                        </button>
                                        <span className="text-2xl font-extrabold text-gray-900 min-w-[32px] text-center font-serif">{travelers}</span>
                                        <button
                                            onClick={() => handleTravelersChange(1)}
                                            className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-50 text-gray-400 hover:bg-green-50 hover:text-green-600 transition-all"
                                        >
                                            <FaPlus size={10} />
                                        </button>
                                    </div>
                                </div>
                                <div className="hidden md:block h-10 w-px bg-gray-200"></div>
                                <div className="flex flex-col gap-0 text-center md:text-left">
                                    <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Rate</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-2xl font-black text-green-600 font-serif">${unitPrice}</span>
                                        <span className="text-xs font-bold text-gray-400">/ pax</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Lead Traveller */}
                        <div className="bg-white rounded-xl p-5 shadow-[0_5px_25px_rgba(0,0,0,0.02)] border border-gray-50">
                            <div className="flex items-center gap-3 mb-1">
                                <span className="w-9 h-9 rounded-lg bg-green-600 text-white flex items-center justify-center text-base font-bold">2</span>
                                <h2 className="text-2xl font-serif font-bold text-gray-900">Lead Traveller</h2>
                            </div>
                            <p className="text-xs text-gray-400 mb-5 ml-12 font-medium">Primary contact details (18+ only).</p>

                            <div className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest ml-1">Full Name *</label>
                                        <input
                                            required
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="Legal Name"
                                            className="w-full bg-gray-50/50 border border-gray-100 rounded-lg px-4 py-3 focus:border-green-600 focus:bg-white transition-all outline-none font-medium placeholder:text-gray-300 text-base"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1">Email *</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="your@email.com"
                                            className="w-full bg-gray-50/50 border border-gray-100 rounded-lg px-4 py-3 focus:border-green-600 focus:bg-white transition-all outline-none font-medium placeholder:text-gray-300 text-base"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1">Date of Birth *</label>
                                        <input
                                            required
                                            type="date"
                                            name="dob"
                                            value={formData.dob}
                                            onChange={handleInputChange}
                                            className="w-full bg-gray-50/50 border border-gray-100 rounded-lg px-4 py-3 focus:border-green-600 focus:bg-white transition-all outline-none font-medium text-base"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1">Nationality *</label>
                                        <div className="relative group">
                                            <select
                                                required
                                                name="nationality"
                                                value={formData.nationality}
                                                onChange={handleInputChange}
                                                className="w-full bg-gray-50/50 border border-gray-100 rounded-lg px-4 py-3 focus:border-green-600 focus:bg-white transition-all outline-none appearance-none font-medium text-base cursor-pointer"
                                            >
                                                <option value="">Select</option>
                                                <option value="NP">Nepal</option>
                                                <option value="US">USA</option>
                                                <option value="UK">UK</option>
                                                <option value="IN">India</option>
                                            </select>
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                                <IoMdArrowBack className="-rotate-90" size={12} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1">Mobile number *</label>
                                    <div className="flex gap-3">
                                        <div className="relative group min-w-[90px]">
                                            <select
                                                name="countryCode"
                                                value={formData.countryCode}
                                                onChange={handleInputChange}
                                                className="w-full bg-gray-50/50 border border-gray-100 rounded-lg px-2 py-3 focus:border-green-600 focus:bg-white transition-all outline-none appearance-none font-medium text-base cursor-pointer"
                                            >
                                                <option value="+977">+977</option>
                                                <option value="+1">+1</option>
                                                <option value="+44">+44</option>
                                                <option value="+91">+91</option>
                                            </select>
                                            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                                <IoMdArrowBack className="-rotate-90" size={10} />
                                            </div>
                                        </div>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="98XXXXXXXX"
                                            className="flex-1 bg-gray-50/50 border border-gray-100 rounded-lg px-4 py-3 focus:border-green-600 focus:bg-white transition-all outline-none font-medium placeholder:text-gray-300 text-base"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1">Special Req.</label>
                                    <textarea
                                        name="specialRequirements"
                                        value={formData.specialRequirements}
                                        onChange={handleInputChange}
                                        placeholder="Dietary needs?"
                                        rows="2"
                                        className="w-full bg-gray-50/50 border border-gray-100 rounded-lg px-3 py-2.5 focus:border-green-600 focus:bg-white transition-all outline-none resize-none font-medium placeholder:text-gray-300 text-sm"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Payment Selection */}
                        <div className="bg-white rounded-xl p-5 shadow-[0_5px_25px_rgba(0,0,0,0.02)] border border-gray-50">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-9 h-9 rounded-lg bg-green-600 text-white flex items-center justify-center text-base font-bold">3</span>
                                <h2 className="text-2xl font-serif font-bold text-gray-900">Payment</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-3">
                                <div
                                    onClick={() => setPaymentOption("deposit")}
                                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all relative overflow-hidden ${paymentOption === "deposit" ? 'border-green-600 bg-green-50/20' : 'border-gray-50 bg-gray-50/30 hover:border-gray-100'}`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-base text-gray-900 tracking-tight">20% Deposit</h4>
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentOption === "deposit" ? 'border-green-600 bg-green-600 text-white' : 'border-gray-300 bg-white'}`}>
                                            {paymentOption === "deposit" && <IoMdCheckmarkCircleOutline size={14} />}
                                        </div>
                                    </div>
                                    <p className="text-2xl font-black text-green-600 font-serif">${depositAmount}</p>
                                </div>

                                <div
                                    onClick={() => setPaymentOption("full")}
                                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all relative overflow-hidden ${paymentOption === "full" ? 'border-green-600 bg-green-50/20' : 'border-gray-50 bg-gray-50/30 hover:border-gray-100'}`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-base text-gray-900 tracking-tight">Full Payment</h4>
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentOption === "full" ? 'border-green-600 bg-green-600 text-white' : 'border-gray-300 bg-white'}`}>
                                            {paymentOption === "full" && <IoMdCheckmarkCircleOutline size={14} />}
                                        </div>
                                    </div>
                                    <p className="text-2xl font-black text-green-600 font-serif">${totalPrice}</p>
                                </div>
                            </div>

                            <div className="mt-6 pt-5 border-t border-gray-100">
                                <div className="flex items-start gap-3 p-3 bg-gray-50/50 rounded-lg border border-gray-100 mb-4 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        required
                                        className="w-4 h-4 rounded border-gray-200 text-green-600 focus:ring-green-600 accent-green-600 mt-0.5"
                                    />
                                    <p className="text-sm text-gray-500 leading-tight">
                                        I accept <span className="text-green-600 font-bold hover:underline">Terms & Conditions</span>.
                                    </p>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 rounded-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-widest text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-600/20"
                                >
                                    Confirm & Pay
                                    <IoMdCheckmarkCircleOutline className="text-white" size={18} />
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Sticky Summary */}
                    <div className="lg:sticky lg:top-24 space-y-4">

                        <div className="bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-gray-50 overflow-hidden ring-2 ring-white">
                            <div className="p-4 bg-gray-50/50 border-b border-gray-100 flex items-center justify-between">
                                <h3 className="font-serif font-black text-lg text-gray-900 tracking-tight">Order Summary</h3>
                                <div className="px-2 py-0.5 bg-green-100 rounded text-green-700 text-xs font-bold">READY</div>
                            </div>
                            <div className="p-5 space-y-5">
                                <div className="flex gap-3 items-center">
                                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-sm border border-gray-50">
                                        <img src={image} alt={packageName} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="space-y-0.5">
                                        <h4 className="text-xs font-black text-gray-900 uppercase tracking-wide leading-tight line-clamp-2">{packageName}</h4>
                                        <div className="flex flex-col gap-0 text-sm text-gray-600 font-bold">
                                            <p className="flex items-center gap-1.5"><FaCalendarAlt className="text-green-600" size={12} /> {travelDate}</p>
                                            <p className="flex items-center gap-1.5"><FaUserFriends className="text-green-600" size={12} /> {travelers} Pax</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4 border-t border-dashed border-gray-200 text-xs">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400 uppercase text-[9px] font-bold">Subtotal</span>
                                        <span className="text-gray-900 font-serif font-bold">${totalPrice}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400 uppercase text-[9px] font-bold">Taxes</span>
                                        <span className="text-green-600 font-black text-[9px] tracking-wider">FREE</span>
                                    </div>

                                    <div className="pt-4 border-t border-gray-100 flex justify-between items-end">
                                        <div>
                                            <p className="text-xs uppercase font-black text-gray-500 tracking-widest mb-1">Total USD</p>
                                            <p className="text-4xl font-black text-gray-900 font-serif leading-none">
                                                <span className="text-xl text-gray-300 font-sans mr-0.5">$</span>{totalPrice}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-green-600 rounded-xl shadow-md space-y-2 mt-2 text-white">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs font-black text-white/90 uppercase tracking-widest">Pay Now</span>
                                            <span className="text-2xl font-black font-serif leading-none">${paymentOption === "full" ? totalPrice : depositAmount}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-xs pt-2 border-t border-white/20 opacity-90">
                                            <span className="font-medium italic">Balance</span>
                                            <span className="font-black">${paymentOption === "full" ? "0" : (totalPrice - depositAmount).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2">
                                    <div className="flex items-center gap-2 text-xs font-black text-gray-500 uppercase tracking-widest justify-center">
                                        <FaShieldAlt size={12} /> Secure Checkout
                                    </div>
                                    <div className="flex justify-center items-center gap-6 grayscale opacity-40">
                                        <SiVisa size={32} />
                                        <SiMastercard size={28} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="px-4 text-xs text-gray-500 text-center font-serif italic leading-relaxed">
                            "Safe & Secure military-grade encryption for all payments."
                        </p>
                    </div>
                </form>
            </div>

            {/* Success Modal */}
            {showSuccess && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl scale-in-center border border-gray-100 flex flex-col items-center text-center animate-in zoom-in-95 duration-300">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 pulse-green">
                            <IoMdCheckmarkCircleOutline size={48} />
                        </div>
                        <h2 className="text-2xl font-black text-gray-900 mb-2 font-serif">Booking Confirmed!</h2>
                        <p className="text-gray-500 mb-8 font-medium leading-relaxed">
                            Thank you for choosing Green Nepal Tourism. Your adventure starts soon! We've sent the details to <span className="text-gray-900 font-bold">{formData.email || 'your email'}</span>.
                        </p>
                        <button
                            onClick={() => navigate("/")}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-green-600/20 transition-all transform hover:-translate-y-1 active:translate-y-0 uppercase tracking-widest"
                        >
                            Return to Homepage
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Booking;
