"use client";

import { useEffect, useRef } from "react";

/** Internal representation of an active ripple animation. */
interface Ripple {
  id: number;
  x: number;
  y: number;
}

/**
 * Global click-ripple effect.
 * Renders cyan concentric rings at the cursor position on every mousedown,
 * skipping interactive elements (links, buttons, inputs, etc.).
 * Mount once at the app root; produces no visible DOM node itself.
 */
export default function ClickRipple() {
  const containerRef = useRef<HTMLDivElement>(null);
  const counter = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMouseDown = (e: MouseEvent) => {
      // Only fire on empty space — skip interactive elements
      const target = e.target as HTMLElement;
      if (target.closest("a, button, input, textarea, select, [role='button']")) return;

      const id = ++counter.current;
      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 0;
        height: 0;
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%, -50%);
      `;
      ripple.dataset.id = String(id);

      // Two rings with staggered delay
      for (let i = 0; i < 2; i++) {
        const ring = document.createElement("div");
        ring.style.cssText = `
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1px solid rgba(0, 212, 255, ${i === 0 ? "0.8" : "0.4"});
          box-shadow: 0 0 6px rgba(0, 212, 255, 0.4);
          transform: translate(-50%, -50%) scale(1);
          animation: ripple-expand ${i === 0 ? "700ms" : "900ms"} ${i === 0 ? "0ms" : "80ms"} cubic-bezier(0.2, 0.8, 0.4, 1) forwards;
        `;
        ripple.appendChild(ring);
      }

      // Center dot flash
      const dot = document.createElement("div");
      dot.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: rgba(0, 212, 255, 0.9);
        box-shadow: 0 0 8px rgba(0, 212, 255, 0.8);
        transform: translate(-50%, -50%);
        animation: ripple-dot 400ms cubic-bezier(0.2, 0.8, 0.4, 1) forwards;
      `;
      ripple.appendChild(dot);

      container.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    };

    window.addEventListener("mousedown", onMouseDown);
    return () => window.removeEventListener("mousedown", onMouseDown);
  }, []);

  return (
    <>
      <style>{`
        @keyframes ripple-expand {
          0%   { width: 8px; height: 8px; opacity: 1; }
          100% { width: 180px; height: 180px; opacity: 0; }
        }
        @keyframes ripple-dot {
          0%   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(3); }
        }
      `}</style>
      <div ref={containerRef} aria-hidden="true" />
    </>
  );
}
