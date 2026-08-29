"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const IMAGES = ["/1AboutMePortrait.jpg", "/2AboutMePortrait.jpg"];
const SWIPE_THRESHOLD = 40; // px of horizontal travel to count as a swipe/drag

/**
 * About-page portrait that loops between two photos. The swap only fires on
 * an actual swipe/drag gesture: touch swipe or mouse-drag (never hover,
 * never a plain click).
 */
export default function PortraitSwap({
  alt,
  sizes,
}: {
  alt: string;
  sizes?: string;
}) {
  const [index, setIndex] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const dragCurrentX = useRef(0);

  const toggle = () => setIndex((i) => (i + 1) % IMAGES.length);

  // Track the drag on window so releasing outside the photo still counts.
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (dragStartX.current !== null) dragCurrentX.current = e.clientX;
    };
    const handleUp = () => {
      if (dragStartX.current === null) return;
      const dx = dragCurrentX.current - dragStartX.current;
      dragStartX.current = null;
      if (Math.abs(dx) >= SWIPE_THRESHOLD) toggle();
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  }, []);

  return (
    <div
      className="group relative aspect-[4/5] w-full cursor-grab select-none overflow-hidden border border-line bg-surface active:cursor-grabbing"
      onMouseDown={(e) => {
        dragStartX.current = e.clientX;
        dragCurrentX.current = e.clientX;
      }}
      onTouchStart={(e) => {
        dragStartX.current = e.touches[0].clientX;
        dragCurrentX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (dragStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - dragStartX.current;
        dragStartX.current = null;
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
          className={`pointer-events-none object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
