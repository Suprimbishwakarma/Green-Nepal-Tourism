import React, { useState, useEffect } from "react";
import { trekSamples } from "../assets/treksample/trektest";
import { FaImages } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const PackageGallery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Use the first 5 images for the preview grid
    const displayImages = trekSamples.slice(0, 5);

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextImage = (e) => {
        if (e) e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === trekSamples.length - 1 ? 0 : prev + 1));
    };

    const prevImage = (e) => {
        if (e) e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === 0 ? trekSamples.length - 1 : prev - 1));
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isModalOpen) return;
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isModalOpen]);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isModalOpen]);

    return (
        <div className="mb-8">
            {/* Bento Grid Layout */}
            {/* Mobile: 1 image, Tablet/Desktop: 4 columns */}
            <div
                className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2 h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
                {/* Main Large Image (2x2) */}
                <div className="md:col-span-2 md:row-span-2 relative h-full group" onClick={() => openModal(0)}>
                    <img
                        src={displayImages[0].image}
                        alt="Main Gallery"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                </div>

                {/* Image 2 */}
                <div className="hidden md:block relative h-full group overflow-hidden" onClick={() => openModal(1)}>
                    <img src={displayImages[1].image} alt="Gallery 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                </div>

                {/* Image 3 */}
                <div className="hidden md:block relative h-full group overflow-hidden" onClick={() => openModal(2)}>
                    <img src={displayImages[2].image} alt="Gallery 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                </div>

                {/* Image 4 */}
                <div className="hidden md:block relative h-full group overflow-hidden" onClick={() => openModal(3)}>
                    <img src={displayImages[3].image} alt="Gallery 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                </div>

                {/* Image 5 (with Overlay) */}
                <div className="hidden md:block relative h-full group overflow-hidden" onClick={() => openModal(0)}>
                    <img src={displayImages[4].image} alt="Gallery 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center flex-col text-white group-hover:bg-black/50 transition-colors">
                        <FaImages className="text-2xl mb-1" />
                        <span className="font-semibold text-sm">View All</span>
                        <span className="text-xs">{trekSamples.length} Photos</span>
                    </div>
                </div>
            </div>

            {/* Fullscreen Slideshow Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 md:p-8 animate-in fade-in duration-200"
                    onClick={closeModal}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-all"
                    >
                        <IoClose size={32} />
                    </button>

                    {/* Prev Button */}
                    <button
                        onClick={prevImage}
                        className="absolute left-2 md:left-8 text-white/70 hover:text-white p-3 hover:bg-white/10 rounded-full transition-all hidden md:block"
                    >
                        <SlArrowLeft size={30} />
                    </button>

                    {/* Main Image */}
                    <div
                        className="relative max-w-full max-h-full flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={trekSamples[currentImageIndex].image}
                            alt="Gallery Fullscreen"
                            className="max-h-[85vh] max-w-full object-contain shadow-2xl rounded-md"
                        />
                        {/* Counter */}
                        <div className="mt-4 text-white/80 text-sm tracking-widest font-light bg-black/40 px-4 py-1 rounded-full backdrop-blur-sm">
                            {currentImageIndex + 1} / {trekSamples.length}
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextImage}
                        className="absolute right-2 md:right-8 text-white/70 hover:text-white p-3 hover:bg-white/10 rounded-full transition-all hidden md:block"
                    >
                        <SlArrowRight size={30} />
                    </button>

                </div>
            )}
        </div>
    );
};

export default PackageGallery;
