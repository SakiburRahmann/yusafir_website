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
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-22%']);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[115vh] overflow-hidden bg-ink">
      <motion.div style={{ y: imgY }} className="absolute inset-0">
        <div
          className="military-img absolute inset-0 scale-110 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://picsum.photos/seed/shadinota-hero/2000/1300)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
      </motion.div>

      <div className="scanlines pointer-events-none absolute inset-0" />

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative mx-auto flex min-h-screen max-w-[1500px] flex-col justify-end px-5 pb-24 md:px-10 md:pb-32"
      >
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-12 bg-gold" />
          <span className="font-mono text-[11px] tracking-[0.5em] text-gold uppercase">
            Bangladesh Army · Navy · Air Force
          </span>
        </div>

        <h1 className="font-display font-black leading-[0.9] tracking-tight text-bone uppercase">
          <motion.span
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
            className="block overflow-hidden text-[16vw] md:text-[11.5vw]"
          >
            Serve
          </motion.span>
          <motion.span
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.25 }}
            className="block overflow-hidden"
          >
            <span className="text-[16vw] md:text-[11.5vw] text-paper">the </span>
            <span className="font-serif italic font-medium text-gold">nation.</span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-bone/70 md:text-lg"
        >
          From the Barai hills to the Bay of Bengal, from the floodplains to
          the skies above — the call is the same. Officers, soldiers, sailors
          and airmen. This is where your uniform begins.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#eligibility"
            data-hover
            className="group relative overflow-hidden rounded-full bg-gold px-8 py-4 font-display text-sm font-bold tracking-[0.2em] text-ink uppercase transition-colors duration-300 hover:bg-bone"
          >
            Check your eligibility
          </a>
          <a
            href="#services"
            data-hover
            className="group flex items-center gap-3 rounded-full border border-bone/25 px-8 py-4 font-display text-sm font-bold tracking-[0.2em] text-bone uppercase transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            Choose your service
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
