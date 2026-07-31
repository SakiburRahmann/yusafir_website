"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const STRIPS = 10;

const SRC = "https://picsum.photos/seed/halcyon-stripes/2000/1300";

const captions = [
  "The scroll is the camera.",
  "Every frame composed.",
  "Speed, light, restraint.",
  "This is the reel.",
];

function Strip({
  index,
  progress,
}: {
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const even = index % 2 === 0;
  const y = useTransform(
    progress,
    [0, 1],
    [even ? 90 : -90, even ? -90 : 90]
  );
  const drift = useTransform(progress, [0, 1], [0, even ? -26 : 26]);

  return (
    <motion.div
      style={{ y }}
      className="relative h-full flex-1 overflow-hidden"
    >
      <motion.div
        style={{ x: drift }}
        className="absolute inset-0"
        // slice of the image shown per strip
      >
        <div
          className="absolute inset-0 scale-[1.35]"
          style={{
            backgroundImage: `url(${SRC})`,
            backgroundSize: `${STRIPS * 100}% auto`,
            backgroundPosition: `${(index / (STRIPS - 1)) * 100}% 50%`,
          }}
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-ink/10" />
      {index > 0 && (
        <div className="absolute inset-y-0 left-0 w-px bg-bone/10" />
      )}
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

  const scale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [1, 0.97, 1.02, 1.08]);

  return (
    <section id="work" ref={ref} className="relative h-[340vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ scale }} className="flex h-full w-full">
          {Array.from({ length: STRIPS }).map((_, i) => (
            <Strip key={i} index={i} progress={scrollYProgress} />
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-between py-14">
          <motion.p
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
            className="font-sans text-[11px] tracking-[0.45em] text-bone/70 uppercase"
          >
            [ 01 — The Reel ]
          </motion.p>

          <div className="text-center">
            <AnimatedCaption caption={captions[capIdx]} />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-4 font-sans text-[11px] tracking-[0.4em] text-bone/60 uppercase"
            >
              Keep scrolling — the frame moves with you
            </motion.p>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-sans text-[10px] tracking-[0.35em] text-bone/50 uppercase">
              Scroll velocity
            </span>
            <div className="relative h-px w-40 overflow-hidden bg-bone/15">
              <motion.div
                className="absolute inset-0 origin-left bg-gold"
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

function AnimatedCaption({ caption }: { caption: string }) {
  return (
    <h2 key={caption} className="overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="block font-display text-4xl font-extrabold tracking-tight text-bone uppercase md:text-6xl lg:text-7xl"
      >
        {caption}
      </motion.span>
    </h2>
  );
}

function MotionPct({ p }: { p: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const text = useTransform(p, (v) => `${Math.round(v * 100)}%`);
  return <motion.span>{text}</motion.span>;
}
