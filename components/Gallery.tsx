import { useState, useRef, useEffect } from "react";
import Image from "next/image";

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

  // Handle mouse events for desktop
  const handleMouseDown = (e: MouseEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    
    const deltaX = e.clientX - startXRef.current;
    
    // Only trigger navigation when we've moved enough
    if (Math.abs(deltaX) >= 50) {
      if (deltaX > 0 && currentIndex > 0) {
        // Swipe right - previous image
        setCurrentIndex(prev => prev - 1);
        startXRef.current = e.clientX; // Reset to current position
      } else if (deltaX < 0 && currentIndex < images.length - 1) {
        // Swipe left - next image
        setCurrentIndex(prev => prev + 1);
        startXRef.current = e.clientX; // Reset to current position
      }
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Handle touch events for mobile
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

  // Add event listeners for mouse and touch
  useEffect(() => {
    const container = containerRef.current;
    
    if (container) {
      // Mouse events
      container.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      
      // Touch events
      container.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        
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
      className={`group relative w-full overflow-hidden border border-line bg-surface-2 ${className}`}
    >
      <div 
        ref={containerRef}
        className="relative flex h-full grayscale transition-all duration-500 group-hover:grayscale-0"
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