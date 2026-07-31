'use client';

import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

const voices = [
  {
    quote:
      'The written exam was the easiest part. The medical board, the physical, the ISSB — that is where the real selection happens. Train before you travel.',
    name: 'Lt A. Rahman',
    role: 'Bangladesh Army — BMA Long Course, 2019',
  },
  {
    quote:
      'I joined through the soldier GD entry from a village in Rangpur. My family watches the parade every year and I am in it.',
    name: 'Sgt M. Hossain',
    role: 'Bangladesh Army — Soldier GD',
  },
  {
    quote:
      'Female officer entry is real and it is growing. Artillery, signals, engineers — the doors are open. Do not let anyone tell you otherwise.',
    name: 'Lt Cdr F. Yasmin',
    role: 'Bangladesh Navy — Officer Entry',
  },
  {
    quote:
      'The air force physical standards are brutal, and the pilot medical is another world. If you have the eyes and the discipline, go for it.',
    name: 'Fg Offr T. Karim',
    role: 'Bangladesh Air Force — GD(P)',
  },
];

export default function Voices() {
  return (
    <section id="voices" className="relative bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mb-16 flex items-end justify-between gap-8 md:mb-24">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.5em] text-gold uppercase">
                [ 04 — Voices ]
              </span>
              <span className="h-px w-16 bg-bone/15" />
            </div>
            <h2 className="font-display text-4xl font-black leading-[1.02] tracking-tight text-bone uppercase md:text-6xl">
              From those
              <br />
              <span className="font-serif italic font-medium text-gold normal-case">
                who wore it.
              </span>
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {voices.map((v, i) => (
            <motion.figure
              key={v.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.9, ease: EASE, delay: (i % 2) * 0.1 }}
              className="group relative border border-bone/10 bg-coal p-8 transition-colors duration-500 hover:border-gold/40 md:p-12"
            >
              <span className="font-serif text-7xl leading-none text-gold/30">“</span>
              <blockquote className="mt-2 font-display text-xl font-semibold leading-relaxed text-bone md:text-2xl">
                {v.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-bone/10 pt-6">
                <span className="grid size-11 place-items-center rounded-full border border-bone/20 font-display text-sm font-bold text-gold">
                  {v.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                </span>
                <div>
                  <p className="font-display text-sm font-bold tracking-wide text-bone uppercase">
                    {v.name}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] tracking-[0.25em] text-faint uppercase">
                    {v.role}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
