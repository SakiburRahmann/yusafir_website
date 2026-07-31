"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(v)}${suffix}`;
      }
    });
    return unsub;
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { value: 120, suffix: "+", label: "Projects shipped" },
  { value: 14, suffix: "", label: "Design awards" },
  { value: 9, suffix: "", label: "Countries served" },
  { value: 97, suffix: "%", label: "Client retention" },
];

export default function Stats() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
            className={`px-6 py-16 text-center md:px-10 md:py-20 ${
              i > 0 ? "border-l border-line" : ""
            } ${i % 2 === 1 ? "border-l-0 lg:border-l" : ""} ${
              i === 2 ? "lg:border-l" : ""
            }`}
          >
            <span className="font-display text-6xl font-medium tracking-tight text-bone md:text-7xl">
              <Counter to={stat.value} suffix={stat.suffix} />
            </span>
            <p className="mt-4 font-mono text-[10px] tracking-[0.3em] text-mute uppercase">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
