import React, { useState, useEffect } from "react";
import { trekSamples } from "../assets/treksample/trektest";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const firstRow = trekSamples.slice(0, 5);
  const secondRow = trekSamples.slice(5);

  // Open modal with selected image
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === trekSamples.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? trekSamples.length - 1 : prevIndex - 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;

      if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return (
    <>
      <div className="w-full bg-gray-100 py-6 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-black text-center">
              Up in the mountains
            </h2>
            <p className=" border border-b-2 w-[80px] [border-image:linear-gradient(to_right,#43A047,#2E7D32)_1]"></p>
            <div className="flex flex-col items-center">
              <p className="text-gray-700 text-center">
                The best view comes after the hardest climb
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            {firstRow.map((sample, index) => (
              <figure
                key={sample.id}
                onClick={() => openModal(index)}
                className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-200 hover:-translate-y-2 cursor-pointer"
              >
                <img
                  src={sample.image}
                  alt={`Sample ${sample.id}`}
                  className="block w-full h-56 sm:h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {secondRow.map((sample, index) => (
              <figure
                key={sample.id}
                onClick={() => openModal(index + 5)}
                className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-200 hover:-translate-y-2 cursor-pointer"
              >
                <img
                  src={sample.image}
                  alt={`Sample ${sample.id}`}
                  className="block w-full h-56 sm:h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal Slideshow */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
          onClick={closeModal} // Close on overlay click
        >
          {/* Close Button */}
          <button
            onClick={(e) => { e.stopPropagation(); closeModal(); }}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl transition-all duration-300 z-50 p-2 hover:rotate-90"
            aria-label="Close slideshow"
          >
            <span className="sr-only">Close</span>
            ×
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 text-white/50 hover:text-white text-5xl transition-all duration-300 z-50 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full w-14 h-14 flex items-center justify-center shadow-2xl"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-6xl w-full flex flex-col items-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
          >
            <img
              src={trekSamples[currentImageIndex].image}
              alt={`Sample ${trekSamples[currentImageIndex].id}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
            />

            {/* Image Info / Counter */}
            <div className="mt-6 flex flex-col items-center gap-2">
              <div className="text-white/90 text-sm font-medium bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                <span className="text-green-400 font-bold">{currentImageIndex + 1}</span>
                <span className="text-white/30">/</span>
                <span>{trekSamples.length}</span>
              </div>
              <p className="text-white/60 text-xs tracking-widest uppercase">The Mountains are calling</p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 text-white/50 hover:text-white text-5xl transition-all duration-300 z-50 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full w-14 h-14 flex items-center justify-center shadow-2xl"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
