'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.6]);

  return (
    <section ref={ref} className="relative h-[160vh] bg-ink">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="relative mx-auto max-w-[1400px] px-5 md:px-10"
        >
          <div className="relative aspect-video overflow-hidden border border-bone/15">
            <video
              className="h-full w-full object-cover"
              src="/videos/Military_Video_Promo.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="scanlines pointer-events-none absolute inset-0" />

            <span className="absolute top-5 left-5 size-5 border-t-2 border-l-2 border-gold" />
            <span className="absolute top-5 right-5 size-5 border-t-2 border-r-2 border-gold" />
            <span className="absolute bottom-5 left-5 size-5 border-b-2 border-l-2 border-gold" />
            <span className="absolute right-5 bottom-5 size-5 border-r-2 border-b-2 border-gold" />

            <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-6 p-6 md:p-10">
              <div>
                <p className="font-mono text-[10px] tracking-[0.4em] text-gold uppercase">
                  The standard you are training for
                </p>
                <p className="mt-2 font-display text-3xl font-black tracking-tight text-bone uppercase md:text-5xl">
                  The uniform is
                  <br />
                  <span className="font-serif italic font-medium text-gold normal-case">
                    earned
                  </span>{' '}
                  at the board.
                </p>
              </div>
              <span className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-bone/60 uppercase">
                <span className="size-2 animate-pulse-soft rounded-full bg-blood" />
                Reel — what you are training for
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
