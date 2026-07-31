"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const STRIPS = 10;
const SRC = "https://picsum.photos/seed/vanguard-sat/2000/1300";

const captions = [
  "Satellite pass — live.",
  "Ground shifts with you.",
  "Every frame is intel.",
  "Theatre sweep complete.",
];

function Strip({
  index,
  progress,
}: {
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const even = index % 2 === 0;
  const y = useTransform(progress, [0, 1], [even ? 110 : -110, even ? -110 : 110]);
  const drift = useTransform(progress, [0, 1], [0, even ? -30 : 30]);

  return (
    <motion.div style={{ y }} className="relative h-full flex-1 overflow-hidden">
      <motion.div style={{ x: drift }} className="absolute inset-0">
        <div
          className="military-img absolute inset-0 scale-[1.45]"
          style={{
            backgroundImage: `url(${SRC})`,
            backgroundSize: `${STRIPS * 100}% auto`,
            backgroundPosition: `${(index / (STRIPS - 1)) * 100}% 50%`,
          }}
        />
      </motion.div>
      {index > 0 && <div className="absolute inset-y-0 left-0 w-px bg-bone/10" />}
    </motion.div>
  );
}

export default function Stripes() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [capIdx, setCapIdx] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setCapIdx(Math.min(captions.length - 1, Math.floor(v * captions.length)));
  });

  const scanTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative h-[340vh] bg-ink">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div className="flex h-full w-full">
          {Array.from({ length: STRIPS }).map((_, i) => (
            <Strip key={i} index={i} progress={scrollYProgress} />
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/80" />
        <div className="scanlines pointer-events-none absolute inset-0" />

        <motion.div
          style={{ top: scanTop }}
          className="pointer-events-none absolute right-0 left-0 h-px bg-amber/70 shadow-[0_0_18px_rgba(232,163,61,0.9)]"
        />

        <span className="absolute top-4 left-4 size-6 border-t-2 border-l-2 border-amber" />
        <span className="absolute top-4 right-4 size-6 border-t-2 border-r-2 border-amber" />
        <span className="absolute bottom-4 left-4 size-6 border-b-2 border-l-2 border-amber" />
        <span className="absolute right-4 bottom-4 size-6 border-r-2 border-b-2 border-amber" />

        <div className="absolute top-6 left-10 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-bone/80 uppercase md:left-14">
          <span className="animate-blink size-1.5 rounded-full bg-amber" />
          SATELLITE FEED — HALCYON-7 ORBIT
        </div>
        <div className="absolute top-6 right-10 hidden font-mono text-[10px] tracking-[0.3em] text-bone/60 uppercase md:block md:right-14">
          31.23°N 121.47°E · ALT 518 KM
        </div>

        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 pb-14 text-center">
          <h2 key={capIdx} className="overflow-hidden">
            <motion.span
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="block font-display text-4xl tracking-wide text-bone uppercase md:text-7xl"
            >
              {captions[capIdx]}
            </motion.span>
          </h2>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[10px] tracking-[0.35em] text-bone/50 uppercase">
              Sweep
            </span>
            <div className="relative h-px w-44 overflow-hidden bg-bone/15">
              <motion.div
                className="absolute inset-0 origin-left bg-amber"
                style={{ scaleX: scrollYProgress }}
              />
            </div>
            <span className="font-mono text-[11px] text-bone/70">
              <MotionPct p={scrollYProgress} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MotionPct({ p }: { p: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const text = useTransform(p, (v) => `${Math.round(v * 100)}%`);
  return <motion.span>{text}</motion.span>;
}
