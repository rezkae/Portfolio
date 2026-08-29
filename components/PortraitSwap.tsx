"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useMouseSwipe } from "@/lib/useSwipeGesture";

const IMAGES = ["/1AboutMePortrait.jpg", "/2AboutMePortrait.jpg"];
const SWIPE_THRESHOLD = 40; // px of horizontal travel to count as a swipe

/**
 * About-page portrait that loops between two photos. The swap only fires on
 * an actual swipe gesture: touch swipe or mouse motion across the photo
 * (never hover alone, never a click).
 */
export default function PortraitSwap({
  alt,
  sizes,
}: {
  alt: string;
  sizes?: string;
}) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const { onMouseEnter, onMouseMove, onMouseLeave } = useMouseSwipe({
    threshold: SWIPE_THRESHOLD,
    onSwipe: () => setIndex((i) => (i + 1) % IMAGES.length),
  });

  const toggle = () => setIndex((i) => (i + 1) % IMAGES.length);

  return (
    <div
      className="relative aspect-[4/5] w-full select-none overflow-hidden border border-line bg-surface"
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(dx) >= SWIPE_THRESHOLD) toggle();
      }}
    >
      {IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === index ? alt : ""}
          fill
          sizes={sizes ?? "(min-width: 768px) 38vw, 100vw"}
          aria-hidden={i !== index}
          className={`pointer-events-none object-cover object-top transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
