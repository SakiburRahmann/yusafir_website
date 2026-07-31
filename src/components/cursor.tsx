"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useSpring(-100, { stiffness: 700, damping: 40, mass: 0.4 });
  const y = useSpring(-100, { stiffness: 700, damping: 40, mass: 0.4 });
  const ringX = useSpring(-100, { stiffness: 150, damping: 22, mass: 0.8 });
  const ringY = useSpring(-100, { stiffness: 150, damping: 22, mass: 0.8 });
  const [down, setDown] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(
        !!t.closest("a, button, [data-hover], input, textarea")
      );
    };
    const downH = () => setDown(true);
    const upH = () => setDown(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mousedown", downH);
    window.addEventListener("mouseup", upH);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", downH);
      window.removeEventListener("mouseup", upH);
    };
  }, [x, y, ringX, ringY]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[180] hidden" aria-hidden>
      <motion.div
        className="absolute top-0 left-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold"
        style={{ x, y }}
      />
      <motion.div
        className="absolute top-0 left-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/50"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 52 : 34,
          height: hovering ? 52 : 34,
          opacity: hovering ? 0.9 : 0.5,
          scale: down ? 0.85 : 1,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
      />
    </div>
  );
}
