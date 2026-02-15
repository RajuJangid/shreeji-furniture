"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [scale, setScale] = useState(1);

  // Open the modal
  const openModal = (index: number) => {
    setSelectedIndex(index);
    setScale(1); // Reset zoom
    document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
  };

  // Close the modal
  const closeModal = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  // Navigate images
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
      setScale(1);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
      setScale(1);
    }
  };

  // Zoom logic
  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(scale === 1 ? 2.5 : 1);
  };

  return (
    <>
      {/* 1. The Thumbnail Grid (Visible on Page) */}
      <div className="grid md:grid-cols-2 gap-4">
        {images.map((photo, index) => (
          <div 
            key={index} 
            onClick={() => openModal(index)}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer group"
          >
            <Image
              src={photo}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" size={32} />
            </div>
          </div>
        ))}
      </div>

      {/* 2. The Full Screen Modal (Hidden by default) */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-50 bg-black/50 rounded-full"
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          <button 
            onClick={showPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 z-50 bg-black/20 hover:bg-black/50 rounded-full transition"
          >
            <ChevronLeft size={40} />
          </button>
          
          <button 
            onClick={showNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 z-50 bg-black/20 hover:bg-black/50 rounded-full transition"
          >
            <ChevronRight size={40} />
          </button>

          {/* Main Image Container */}
          <div 
            className="relative w-full h-full flex items-center justify-center overflow-hidden"
            onClick={toggleZoom} // Click anywhere to zoom
          >
             <div 
               className="relative transition-transform duration-300 ease-out"
               style={{ 
                 width: "85vw", 
                 height: "85vh", 
                 transform: `scale(${scale})`,
                 cursor: scale === 1 ? "zoom-in" : "zoom-out"
               }}
             >
              <Image
  src={images[selectedIndex]}
  alt="Full screen view"
  fill
  className="object-contain"
  quality={75} // Reduced from 100 to 75 (Visuals look same, loads 2x faster)
  priority={true} // Tells browser this is the #1 most important image
  loading="eager"
/>
            </div>
          </div>

          {/* Zoom Hint Text */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm bg-black/40 px-3 py-1 rounded-full pointer-events-none">
            Click image to Zoom • Press Esc to Close
          </div>
        </div>
      )}
    </>
  );
}