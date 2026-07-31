"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const panels = [
  {
    seed: "halcyon-p1",
    w: 1200,
    h: 1500,
    title: "Noir Campaign",
    cat: "Art Direction",
    tall: true,
  },
  {
    seed: "halcyon-p2",
    w: 1600,
    h: 1000,
    title: "Monolith Site",
    cat: "Web Design",
    tall: false,
  },
  {
    seed: "halcyon-p3",
    w: 1200,
    h: 1500,
    title: "Aurora Identity",
    cat: "Branding",
    tall: true,
  },
  {
    seed: "halcyon-p4",
    w: 1600,
    h: 1000,
    title: "Momentum",
    cat: "Motion",
    tall: false,
  },
  {
    seed: "halcyon-p5",
    w: 1200,
    h: 1500,
    title: "Vesper Product",
    cat: "Development",
    tall: true,
  },
];

export default function Horizontal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-68%"]);

  return (
    <section ref={ref} className="relative h-[360vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-12 left-0 z-10 w-full px-6 md:px-14">
          <p className="font-sans text-[11px] tracking-[0.45em] text-gold uppercase">
            [ 02 — Selected Work ]
          </p>
        </div>

        <motion.div style={{ x }} className="flex items-center gap-8 pl-6 md:pl-14">
          <div className="w-[70vw] shrink-0 pr-4 md:w-[38vw]">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: EASE }}
              className="font-display text-5xl font-black tracking-tight text-bone uppercase md:text-8xl"
            >
              Projects
              <span className="text-gradient-gold">.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: EASE, delay: 0.15 }}
              className="mt-6 max-w-sm text-base leading-relaxed text-mute"
            >
              A horizontal gallery — keep scrolling vertically, and the reel
              slides sideways. Five frames, five disciplines.
            </motion.p>
            <p className="mt-8 font-sans text-[10px] tracking-[0.4em] text-faint uppercase">
              ↓ Keep scrolling
            </p>
          </div>

          {panels.map((p, i) => (
            <Panel key={p.seed} {...p} index={i} />
          ))}

          <div className="w-[40vw] shrink-0 md:w-[22vw]">
            <a
              href="#contact"
              data-hover
              className="group flex size-36 items-center justify-center rounded-full border border-line transition-colors duration-500 hover:border-gold md:size-44"
            >
              <span className="text-center font-sans text-[11px] tracking-[0.3em] text-mute uppercase transition-colors group-hover:text-gold">
                All work
                <br />
                <span className="text-lg">→</span>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Panel({
  seed,
  w,
  h,
  title,
  cat,
  tall,
  index,
}: {
  seed: string;
  w: number;
  h: number;
  title: string;
  cat: string;
  tall: boolean;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay: index * 0.06 }}
      data-hover
      className={`group relative w-[78vw] shrink-0 overflow-hidden rounded-xl sm:w-[55vw] md:w-[34vw] ${
        tall ? "md:h-[62vh]" : "md:h-[46vh]"
      } h-[52vh]`}
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src={`https://picsum.photos/seed/${seed}/${w}/${h}`}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
      <figcaption className="absolute bottom-0 left-0 flex w-full items-end justify-between p-6">
        <div>
          <p className="font-sans text-[10px] tracking-[0.35em] text-bone/60 uppercase">
            {String(index + 1).padStart(2, "0")} — {cat}
          </p>
          <h3 className="mt-2 font-display text-2xl font-extrabold text-bone uppercase md:text-3xl">
            {title}
          </h3>
        </div>
        <span className="flex size-11 items-center justify-center rounded-full border border-bone/25 text-bone opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100 group-hover:border-gold group-hover:text-gold">
          ↗
        </span>
      </figcaption>
    </motion.figure>
  );
}
