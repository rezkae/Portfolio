"use client";

import { useCallback, useRef } from "react";

export type SwipeDirection = "left" | "right";

type UseMouseSwipeOptions = {
  /** Horizontal travel (px) required to fire a swipe. */
  threshold?: number;
  /** Min ms between two triggers from one continuous motion. */
  cooldownMs?: number;
  /** Max ms between tracking start and reaching the threshold. */
  timeWindowMs?: number;
  onSwipe: (direction: SwipeDirection) => void;
};

/**
 * Mouse-motion swipe gesture: fires when the cursor travels past a
 * threshold horizontally, with NO button press required (unlike a
 * click-and-drag). Re-entry via onMouseLeave resets tracking.
 *
 * Wire the returned handlers onto a container element:
 *   <div onMouseEnter={...} onMouseMove={...} onMouseLeave={...}>
 */
export function useMouseSwipe({
  threshold = 50,
  cooldownMs = 500,
  timeWindowMs = 800,
  onSwipe,
}: UseMouseSwipeOptions) {
  const startX = useRef<number | null>(null);
  const startTime = useRef(0);
  const lastTrigger = useRef(0);
  const onSwipeRef = useRef(onSwipe);
  onSwipeRef.current = onSwipe;

  const onMouseEnter = useCallback(() => {
    startX.current = null;
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const now = Date.now();
      if (startX.current === null) {
        startX.current = e.clientX;
        startTime.current = now;
        return;
      }
      // While cooling down, keep the tracking start fresh so a second
      // deliberate pass can trigger again without leaving the element.
      if (now - lastTrigger.current < cooldownMs) {
        startX.current = e.clientX;
        startTime.current = now;
        return;
      }
      const dx = e.clientX - startX.current;
      if (Math.abs(dx) >= threshold && now - startTime.current <= timeWindowMs) {
        onSwipeRef.current(dx < 0 ? "left" : "right");
        lastTrigger.current = now;
        startX.current = e.clientX;
        startTime.current = now;
      }
    },
    [threshold, cooldownMs, timeWindowMs],
  );

  const onMouseLeave = useCallback(() => {
    startX.current = null;
  }, []);

  return { onMouseEnter, onMouseMove, onMouseLeave };
}
