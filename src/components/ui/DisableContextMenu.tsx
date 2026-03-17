"use client";

import { useEffect } from "react";

export default function DisableContextMenu() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable right-click context menu
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable long-press context menu on touch devices
    let pressTimer: NodeJS.Timeout;
    
    const handleTouchStart = (e: TouchEvent) => {
      pressTimer = setTimeout(() => {
        e.preventDefault();
      }, 500); // 500ms = typical long-press duration
    };

    const handleTouchEnd = () => {
      clearTimeout(pressTimer);
    };

    const handleTouchMove = () => {
      clearTimeout(pressTimer);
    };

    document.addEventListener("touchstart", handleTouchStart, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return null;
}
