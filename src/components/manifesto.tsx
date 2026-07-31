'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['18%', '-18%']);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100vh] items-center overflow-hidden bg-coal"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="military-img absolute inset-0 scale-125 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              'url(https://picsum.photos/seed/shadinota-manifesto/2000/1200)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coal via-coal/50 to-coal" />
      </motion.div>

      <div className="relative mx-auto max-w-[1400px] px-5 py-32 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 1, ease: EASE }}
        >
          <p className="mb-8 font-serif text-xl italic text-gold md:text-2xl">
            — Bangabandhu Sheikh Mujibur Rahman
          </p>
          <blockquote className="max-w-5xl font-display text-4xl font-black leading-[1.08] tracking-tight text-bone uppercase md:text-6xl">
            &ldquo;The people of this country are not afraid of dying for
            <br />
            <span className="font-serif italic font-medium text-gold normal-case">
              their freedom.
            </span>
            &rdquo;
          </blockquote>
          <p className="mt-10 max-w-xl text-sm leading-relaxed text-mute md:text-base">
            Our flag was born in 1971 with a star in its heart. Every enlistment
            since has been a renewal of that oath — to the delta, to the people,
            and to the twelve shades of green that feed them.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
