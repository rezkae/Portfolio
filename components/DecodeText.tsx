"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { defaultViewport } from "@/components/motion";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+=?/<>[]{}";

type DecodeTextProps = {
  text: string;
  className?: string;
  /** Scramble duration in ms (default 650). */
  duration?: number;
};

/**
 * Matrix/decrypt text reveal: on first entry into the viewport, the text
 * scrambles through random glyphs for a short moment and resolves
 * left-to-right to the real text. Renders the final text immediately when
 * prefers-reduced-motion is set. The real text is exposed via aria-label so
 * screen readers are never reading scrambled output.
 */
export default function DecodeText({
  text,
  className = "",
  duration = 650,
}: DecodeTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, defaultViewport);
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!inView) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(text);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const resolved = Math.ceil(t * text.length);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === " ") out += " ";
        else if (i < resolved) out += ch;
        else out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setDisplay(out);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, text, duration]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {display}
    </span>
  );
}
