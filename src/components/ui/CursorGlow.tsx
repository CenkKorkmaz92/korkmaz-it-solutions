"use client";

import { useEffect, useRef } from "react";

/**
 * Soft radial glow that follows the mouse cursor with a lerp-smoothed trail.
 * Purely decorative — `aria-hidden` and `pointer-events: none`.
 * Mount once at the app root.
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    let raf: number;
    let mouseX = -999;
    let mouseY = -999;
    let currentX = -999;
    let currentY = -999;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth follow with lerp
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;
      el.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        width: "320px",
        height: "320px",
        background:
          "radial-gradient(circle, rgba(0,212,255,0.10) 0%, rgba(0,212,255,0.04) 35%, transparent 70%)",
        borderRadius: "50%",
        willChange: "transform",
      }}
    />
  );
}
