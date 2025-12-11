import { useEffect, useRef, useCallback } from "react";

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(500px circle at ${e.clientX}px ${e.clientY}px, hsl(263 70% 50% / 0.1), transparent 40%)`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-30 transition-none"
    />
  );
}
