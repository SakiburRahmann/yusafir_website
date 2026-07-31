"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 2200, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(v).toLocaleString()}${suffix}`;
      }
    });
    return unsub;
  }, [spring, suffix]);

  return <span ref={ref}>0</span>;
}

const stats = [
  { to: 200, suffix: "M+", label: "Issues tracked" },
  { to: 4500, suffix: "+", label: "High-velocity teams" },
  { to: 190, suffix: "+", label: "Countries" },
  { to: 99.99, suffix: "%", label: "Uptime", decimal: true },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
      <div className="grid grid-cols-2 gap-y-14 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-mono text-4xl font-medium tracking-tight text-white md:text-5xl">
              <Counter to={stat.to} suffix={stat.suffix} />
            </p>
            <p className="mt-3 text-[13px] font-medium tracking-wide text-sec">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
