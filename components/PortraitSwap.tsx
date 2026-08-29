"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const IMAGES = ["/1AboutMePortrait.jpg", "/2AboutMePortrait.jpg"];
const SWIPE_THRESHOLD = 40; // px of horizontal travel to count as a swipe

/**
 * About-page portrait that loops between two photos:
 * - Desktop: toggles on hover.
 * - Touch: toggles on a horizontal swipe gesture (no tap required).
 * Toggling is a crossfade so the switch reads as a fluid loop.
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

  const toggle = () => setIndex((i) => (i + 1) % IMAGES.length);

  return (
    <div
      className="group relative aspect-[4/5] w-full overflow-hidden border border-line bg-surface"
      onMouseEnter={toggle}
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
          className={`object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <span className="pointer-events-none absolute bottom-3 right-3 bg-ink/70 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-paper/80">
        {index + 1}/{IMAGES.length}
      </span>
    </div>
  );
}
