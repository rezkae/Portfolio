import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useMouseSwipe } from "@/lib/useSwipeGesture";

type ProjectImage = {
  src: string;
  alt: string;
};

interface GalleryProps {
  images: ProjectImage[];
  className?: string;
}

export default function Gallery({ images, className = "" }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);

  // Mouse-motion swipe: no button press required (same gesture as the
  // About portrait). Direction drives prev/next image.
  const { onMouseEnter, onMouseMove, onMouseLeave } = useMouseSwipe({
    threshold: 50,
    onSwipe: (direction) => {
      setCurrentIndex((prev) => {
        if (direction === "left") return Math.min(prev + 1, images.length - 1);
        return Math.max(prev - 1, 0);
      });
    },
  });

  // Handle touch events for mobile (unchanged)
  const handleTouchStart = (e: TouchEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    
    const deltaX = e.touches[0].clientX - startXRef.current;
    
    // Only trigger navigation when we've moved enough
    if (Math.abs(deltaX) >= 50) {
      if (deltaX > 0 && currentIndex > 0) {
        // Swipe right - previous image
        setCurrentIndex(prev => prev - 1);
        startXRef.current = e.touches[0].clientX; // Reset to current position
      } else if (deltaX < 0 && currentIndex < images.length - 1) {
        // Swipe left - next image
        setCurrentIndex(prev => prev + 1);
        startXRef.current = e.touches[0].clientX; // Reset to current position
      }
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  // Add event listeners for touch only (mouse is handled via React props)
  useEffect(() => {
    const container = containerRef.current;
    
    if (container) {
      container.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [currentIndex, images.length]);

  // Handle click navigation for individual images
  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  // If no images, return null
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`group relative w-full overflow-hidden border border-line bg-surface-2 ${className}`}
    >
      <div 
        ref={containerRef}
        className="relative flex h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div 
            key={image.src} 
            className="relative h-full w-full flex-shrink-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-top"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
        ))}
      </div>

      {/* Glass hover accent — small corner chip over the photo */}
      <span className="glass pointer-events-none absolute bottom-4 right-3 z-10 flex translate-y-1 items-center gap-2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        View Project
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 sm:h-3.5 sm:w-3.5">
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </span>

      {/* Navigation indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}