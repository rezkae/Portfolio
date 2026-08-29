import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const SWIPE_THRESHOLD = 50; // px of drag/swipe travel to navigate
const CLICK_DRAG_EPSILON = 8; // px of movement that turns a click into a drag

type ProjectImage = {
  src: string;
  alt: string;
};

interface GalleryProps {
  images: ProjectImage[];
  className?: string;
}

/**
 * Project photo gallery. Photos are only revealed through interaction:
 * - Desktop: click on the image to advance, or click-and-drag to swipe
 *   left/right (a drag is never treated as a click).
 * - Touch: swipe to navigate.
 * - Dot indicators jump directly to a photo.
 */
export default function Gallery({ images, className = "" }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number | null>(null);
  const dragXRef = useRef(0);
  const draggingRef = useRef(false);

  // Touch swipe (unchanged behavior)
  const handleTouchStart = (e: TouchEvent) => {
    draggingRef.current = true;
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!draggingRef.current || !containerRef.current) return;
    const deltaX = e.touches[0].clientX - startXRef.current!;
    if (Math.abs(deltaX) >= SWIPE_THRESHOLD) {
      if (deltaX > 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      } else if (deltaX < 0 && currentIndex < images.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
      startXRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = () => {
    draggingRef.current = false;
  };

  // Mouse: click-drag swipe; a plain click (no drag) advances to the next photo.
  const handleMouseDown = (e: React.MouseEvent) => {
    draggingRef.current = false;
    startXRef.current = e.clientX;
    dragXRef.current = e.clientX;
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (startXRef.current === null) return;
      dragXRef.current = e.clientX;
      if (Math.abs(e.clientX - startXRef.current) > CLICK_DRAG_EPSILON) {
        draggingRef.current = true;
      }
    };

    const handleMouseUp = () => {
      if (startXRef.current === null) return;
      const dx = dragXRef.current - startXRef.current;
      const wasDrag = draggingRef.current;
      startXRef.current = null;
      if (wasDrag) {
        if (Math.abs(dx) >= SWIPE_THRESHOLD) {
          if (dx > 0) setCurrentIndex((prev) => Math.max(prev - 1, 0));
          else setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
        }
      } else {
        // Plain click → reveal the next photo.
        setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
      }
    };

    if (container) {
      container.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, [currentIndex, images.length]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      className={`group relative w-full cursor-pointer overflow-hidden border border-line bg-surface-2 ${className}`}
    >
      <div
        className="relative flex h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={image.src} className="relative h-full w-full flex-shrink-0">
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
              onClick={() => setCurrentIndex(index)}
              onMouseDown={(e) => e.stopPropagation()}
              onMouseUp={(e) => e.stopPropagation()}
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
