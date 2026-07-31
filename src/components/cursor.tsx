"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useSpring(-100, { stiffness: 700, damping: 40, mass: 0.4 });
  const y = useSpring(-100, { stiffness: 700, damping: 40, mass: 0.4 });
  const ringX = useSpring(-100, { stiffness: 150, damping: 22, mass: 0.8 });
  const ringY = useSpring(-100, { stiffness: 150, damping: 22, mass: 0.8 });

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
      setHovering(!!t.closest("a, button, [data-hover], input, textarea"));
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y, ringX, ringY]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[180]" aria-hidden>
      <motion.div
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
        style={{ x, y }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <line x1="7" y1="0" x2="7" y2="14" stroke="#e8a33d" strokeWidth="1.5" />
          <line x1="0" y1="7" x2="14" y2="7" stroke="#e8a33d" strokeWidth="1.5" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber/60"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 48 : 30,
          height: hovering ? 48 : 30,
          opacity: hovering ? 0.9 : 0.45,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
      />
    </div>
  );
}
