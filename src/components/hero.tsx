'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[115vh] overflow-hidden bg-ink"
    >
      <motion.div style={{ scale: videoScale }} className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src="/videos/Military_Video_Promo.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/Military_Video_Promo.mp4"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/30" />
      <div className="scanlines pointer-events-none absolute inset-0" />

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative mx-auto flex min-h-screen max-w-[1500px] flex-col justify-end px-5 pb-24 md:px-10 md:pb-32"
      >
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-12 bg-gold" />
          <span className="font-mono text-[11px] tracking-[0.5em] text-gold uppercase">
            AI-powered ISSB preparation
          </span>
        </div>

        <h1 className="font-display font-black leading-[0.9] tracking-tight text-bone uppercase">
          <motion.span
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
            className="block overflow-hidden text-[15vw] md:text-[10.5vw]"
          >
            Pass the ISSB.
          </motion.span>
          <motion.span
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.25 }}
            className="block overflow-hidden"
          >
            <span className="text-[15vw] md:text-[10.5vw] text-paper">Let </span>
            <span className="font-serif italic font-medium text-gold">AI</span>
            <span className="text-[15vw] md:text-[10.5vw]"> grade it.</span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-bone/75 md:text-lg"
        >
          Practice every stage of the selection — psychological tests, group
          tasks, interviews. The AI evaluates your responses, tells you where
          you stand, and walks you toward the uniform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#practice"
            data-hover
            className="group relative overflow-hidden rounded-full bg-gold px-8 py-4 font-display text-sm font-bold tracking-[0.2em] text-ink uppercase transition-colors duration-300 hover:bg-bone"
          >
            Start a practice session
          </a>
          <a
            href="#issb"
            data-hover
            className="group flex items-center gap-3 rounded-full border border-bone/25 px-8 py-4 font-display text-sm font-bold tracking-[0.2em] text-bone uppercase transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            What the ISSB is
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 right-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.35em] text-faint uppercase md:bottom-8 md:right-10"
      >
        <span>Scroll</span>
        <span className="animate-blink inline-block h-8 w-px bg-gold" />
      </motion.div>
    </section>
  );
}
