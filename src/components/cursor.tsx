"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const hovered = useRef(false);

  useEffect(() => {
    let x = -100, y = -100, ox = -100, oy = -100, raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      const target = e.target as HTMLElement;
      hovered.current = !!target.closest("a, button, [data-hover]");
    };

    const loop = () => {
      ox += (x - ox) * 0.16;
      oy += (y - oy) * 0.16;
      if (outer.current) {
        outer.current.style.transform = `translate(${ox}px, ${oy}px)`;
        const d = hovered.current ? 30 : 14;
        outer.current.style.width = `${d}px`;
        outer.current.style.height = `${d}px`;
        outer.current.style.borderColor = hovered.current
          ? "rgba(232,163,61,0.9)"
          : "rgba(232,228,216,0.35)";
      }
      if (inner.current) {
        inner.current.style.transform = `translate(${x}px, ${y}px)`;
        inner.current.style.opacity = hovered.current ? "0" : "1";
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={outer}
        className="pointer-events-none fixed top-0 left-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[border-color] duration-300"
        style={{ width: 14, height: 14 }}
      />
      <div
        ref={inner}
        className="pointer-events-none fixed top-0 left-0 z-[100] -translate-x-1/2 -translate-y-1/2"
        style={{ width: 3, height: 3, marginLeft: -1, marginTop: -1 }}
      >
        <span className="block size-[3px] rounded-full bg-amber" />
      </div>
    </>
  );
}
