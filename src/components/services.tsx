"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    n: "01",
    title: "Air Systems",
    desc: "Autonomous platforms, loitering munitions and multi-spectral sensors for persistent overwatch.",
    img: "https://picsum.photos/seed/vanguard-c1/700/900",
  },
  {
    n: "02",
    title: "Ground Systems",
    desc: "Mobility, armor and unmanned ground platforms built for contested terrain.",
    img: "https://picsum.photos/seed/vanguard-c2/700/900",
  },
  {
    n: "03",
    title: "Cyber Defense",
    desc: "Hardened networks, threat hunting and incident response for critical infrastructure.",
    img: "https://picsum.photos/seed/vanguard-c3/700/900",
  },
  {
    n: "04",
    title: "Command & Control",
    desc: "Real-time situational awareness fused into a single, mission-ready picture.",
    img: "https://picsum.photos/seed/vanguard-c4/700/900",
  },
  {
    n: "05",
    title: "Field Logistics",
    desc: "Resupply, maintenance and recovery networks that keep units in the fight.",
    img: "https://picsum.photos/seed/vanguard-c5/700/900",
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 22, mass: 0.7 });
  const sy = useSpring(my, { stiffness: 180, damping: 22, mass: 0.7 });

  return (
    <section id="services" className="relative border-y border-line bg-coal">
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed top-0 left-0 z-[60] hidden md:block"
        aria-hidden
      >
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.75, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              exit={{ opacity: 0, scale: 0.85, rotate: 6 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="size-[300px] -translate-x-1/2 -translate-y-1/2 overflow-hidden"
            >
              <img
                src={services[active].img}
                alt={services[active].title}
                className="military-img h-full w-full object-cover"
              />
              <span className="absolute top-3 left-3 size-4 border-t-2 border-l-2 border-amber/90" />
              <span className="absolute top-3 right-3 size-4 border-t-2 border-r-2 border-amber/90" />
              <span className="absolute bottom-3 left-3 size-4 border-b-2 border-l-2 border-amber/90" />
              <span className="absolute right-3 bottom-3 size-4 border-r-2 border-b-2 border-amber/90" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div
        className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-44"
        onMouseMove={(e) => {
          mx.set(e.clientX);
          my.set(e.clientY);
        }}
        onMouseLeave={() => setActive(null)}
      >
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
              className="font-mono text-[11px] tracking-[0.45em] text-amber uppercase"
            >
              [ 05 — Capabilities ]
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
              className="mt-6 font-display text-6xl leading-[0.95] tracking-wide text-bone uppercase md:text-8xl"
            >
              Mission
              <span className="text-amber"> files</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="max-w-sm text-sm leading-relaxed text-mute"
          >
            Hover the file — imagery follows your cursor. Five domains, one
            integrated chain of command.
          </motion.p>
        </div>

        <div className="border-t border-line">
          {services.map((service, i) => (
            <motion.div
              key={service.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.05 }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              data-hover
              className="group relative cursor-pointer border-b border-line"
            >
              <div className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-r from-amber/[0.06] to-transparent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
              <div className="relative grid items-center gap-3 px-2 py-9 md:grid-cols-[90px_1fr_1.3fr] md:gap-10 md:px-6 md:py-12">
                <span className="font-mono text-xs tracking-[0.3em] text-faint transition-colors duration-500 group-hover:text-amber">
                  {service.n}
                </span>
                <h3 className="font-display text-3xl tracking-wide text-bone uppercase transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4 group-hover:text-amber sm:text-4xl md:text-6xl">
                  {service.title}
                </h3>
                <p className="hidden max-w-sm text-sm leading-relaxed text-mute md:block">
                  {service.desc}
                </p>
                <span className="hidden justify-self-end font-display text-3xl text-bone/0 transition-all duration-500 group-hover:text-bone md:block">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
