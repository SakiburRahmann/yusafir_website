'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

const footerLinks: [string, string[]][] = [
  ['Services', ['Bangladesh Army', 'Bangladesh Navy', 'Bangladesh Air Force', 'Eligibility Check']],
  ['Process', ['Register Online', 'Admit Card', 'Written Exam', 'ISSB']],
  ['Guidance', ['Physical Standards', 'Medical Guidelines', 'Quota Info', 'Preparation']],
];

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['12%', '-12%']);

  return (
    <footer ref={ref} className="relative overflow-hidden bg-coal">
      <div className="relative border-t border-bone/10">
        <motion.div style={{ y }} className="absolute inset-0">
          <div
            className="military-img absolute inset-0 scale-125 bg-cover bg-center opacity-25"
            style={{
              backgroundImage:
                'url(https://picsum.photos/seed/shadinota-footer/2000/1200)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coal via-coal/60 to-coal" />
        </motion.div>

        <div className="relative mx-auto max-w-[1500px] px-5 py-28 md:px-10 md:py-40">
          <div className="mb-5 flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[0.5em] text-gold uppercase">
              [ Your call to serve ]
            </span>
            <span className="h-px w-16 bg-bone/15" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            className="max-w-5xl font-display text-5xl font-black leading-[0.95] tracking-tight text-bone uppercase md:text-8xl"
          >
            The country
            <br />
            <span className="font-serif italic font-medium text-gold normal-case">
              is calling.
            </span>
          </motion.h2>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#eligibility"
              data-hover
              className="rounded-full bg-gold px-9 py-4 font-display text-sm font-bold tracking-[0.2em] text-ink uppercase transition-colors duration-300 hover:bg-bone"
            >
              Start your application
            </a>
            <a
              href="#faq"
              data-hover
              className="rounded-full border border-bone/25 px-9 py-4 font-display text-sm font-bold tracking-[0.2em] text-bone uppercase transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              Read the questions
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-bone/10">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:px-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-full border border-gold">
                <span className="size-2.5 rotate-45 bg-gold" />
              </span>
              <span className="font-display text-lg font-extrabold tracking-[0.15em] text-bone uppercase">
                Shadinota
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mute">
              A concept recruitment portal for the Bangladesh Armed Forces —
              built as a design study. Not an official government website.
            </p>
            <p className="mt-6 font-mono text-[10px] tracking-[0.3em] text-faint uppercase">
              Joy Bangla · Joy Bangabandhu
            </p>
          </div>

          {footerLinks.map(([col, items]) => (
            <div key={col}>
              <p className="font-mono text-[10px] tracking-[0.4em] text-gold uppercase">
                {col}
              </p>
              <ul className="mt-5 space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#top"
                      data-hover
                      className="font-mono text-xs tracking-[0.15em] text-mute uppercase transition-colors hover:text-bone"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative border-t border-bone/10">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-4 px-5 py-6 md:px-10">
          <p className="font-mono text-[10px] tracking-[0.3em] text-faint uppercase">
            © {new Date().getFullYear()} Shadinota — concept only
          </p>
          <p className="font-mono text-[10px] tracking-[0.3em] text-faint uppercase">
            Army · Navy · Air Force
          </p>
        </div>
      </div>
    </footer>
  );
}
