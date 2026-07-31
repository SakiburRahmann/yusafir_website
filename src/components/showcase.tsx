"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

function ParallaxImage({
  src,
  alt,
  ratio,
  className = "",
}: {
  src: string;
  alt: string;
  ratio: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.25, 1.05, 1.25]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${ratio} ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease: EASE }}
          className="order-2 md:order-1"
        >
          <p className="font-sans text-[11px] tracking-[0.45em] text-gold uppercase">
            [ 03 — Craft ]
          </p>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] font-black tracking-tight text-bone uppercase md:text-6xl">
            Frames that
            <br />
            <span className="text-gradient-gold font-serif lowercase italic">
              breathe
            </span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mute">
            Images move with the scroll at film-frame rates — subtle parallax,
            scale and drift that make a page feel shot, not coded. Every asset
            is art-directed for the frame it lives in.
          </p>
          <div className="mt-8 flex gap-3">
            {["Scroll-linked", "60fps", "Art-directed"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-4 py-1.5 font-sans text-[10px] tracking-[0.25em] text-mute uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
        <ParallaxImage
          src="https://picsum.photos/seed/halcyon-craft1/1400/1000"
          alt="Cinematic frame"
          ratio="aspect-[4/3]"
          className="order-1 rounded-xl md:order-2"
        />
      </div>

      <div className="mt-24 grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <ParallaxImage
          src="https://picsum.photos/seed/halcyon-craft2/1400/1800"
          alt="Portrait frame"
          ratio="aspect-[3/4]"
          className="rounded-xl"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease: EASE }}
        >
          <p className="font-sans text-[11px] tracking-[0.45em] text-gold uppercase">
            [ 04 — Motion ]
          </p>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] font-black tracking-tight text-bone uppercase md:text-6xl">
            Nothing moves
            <br />
            <span className="text-gradient-gold font-serif lowercase italic">
              without a reason
            </span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mute">
            Easing curves tuned by hand. Springs with real physics. Every
            transition answers a question: what should the eye see next? The
            result is motion that feels inevitable — never decorative.
          </p>
          <a
            href="#contact"
            data-hover
            className="group mt-8 inline-flex items-center gap-3 font-sans text-[11px] font-semibold tracking-[0.3em] text-bone uppercase"
          >
            <span className="border-b border-gold pb-1 transition-colors group-hover:text-gold">
              Request the full reel
            </span>
            <span className="transition-transform duration-500 group-hover:translate-x-1.5">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
