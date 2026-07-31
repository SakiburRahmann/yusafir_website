'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    id: '01',
    name: 'Army',
    bn: 'সেনাবাহিনী',
    tag: 'Land power',
    desc: 'The backbone of national defence. Infantry, artillery, armour, engineers — a career built on discipline, leadership, and the ground you stand on.',
    img: 'https://picsum.photos/seed/shadinota-army/1200/1500',
    entries: ['BMA Long Course', 'Technical Officer', 'Soldier GD', 'JCO & Tradesmen'],
  },
  {
    id: '02',
    name: 'Navy',
    bn: 'নৌবাহিনী',
    tag: 'Blue water',
    desc: 'Guardians of the Bay of Bengal. Ships, submarines, and naval aviation — mastering the world\'s busiest sea lanes and our maritime frontier.',
    img: 'https://picsum.photos/seed/shadinota-navy/1200/1500',
    entries: ['BNA Long Course', 'Naval Architect', 'Sailor Technical', 'Coxswain & Ratings'],
  },
  {
    id: '03',
    name: 'Air Force',
    bn: 'বিমানবাহিনী',
    tag: 'Sovereignty of the skies',
    desc: 'From MiG-29 to the training squadron — pilots, engineers, and ground crew who own the airspace above the delta and defend it.',
    img: 'https://picsum.photos/seed/shadinota-air/1200/1500',
    entries: ['GD(P) Pilot', 'Aeronautical Engineer', 'Airman Technical', 'Administrative & Ground'],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.18, 1, 1.18]);
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 1, ease: EASE }}
      className="group relative"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.div style={{ scale: imgScale, y: imgY }} className="absolute inset-0">
          <div
            className="military-img absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.img})` }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

        <span className="absolute top-5 left-5 font-display text-5xl font-black text-bone/20 transition-colors duration-500 group-hover:text-gold/60">
          {service.id}
        </span>

        <span className="absolute top-6 right-6 font-serif text-2xl italic text-bone/60">
          {service.bn}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <p className="font-mono text-[10px] tracking-[0.4em] text-gold uppercase">
            {service.tag}
          </p>
          <h3 className="mt-2 font-display text-4xl font-black tracking-tight text-bone uppercase md:text-5xl">
            {service.name}
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-bone/60">
            {service.desc}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-2 border-t border-bone/10 pt-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
            {service.entries.map((entry) => (
              <span
                key={entry}
                className="flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-bone/70 uppercase"
              >
                {entry}
                <span className="text-gold">→</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8 md:mb-24">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.5em] text-gold uppercase">
                [ 01 — Three services ]
              </span>
              <span className="h-px w-16 bg-bone/15" />
            </div>
            <h2 className="max-w-2xl font-display text-4xl font-black leading-[1.02] tracking-tight text-bone uppercase md:text-6xl">
              One country.
              <br />
              <span className="font-serif italic font-medium text-gold normal-case">
                Three
              </span>{' '}
              uniforms.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-mute">
            Every service has its own academy, its own standard, its own
            battle. Pick the one that matches who you are — or find out in the
            eligibility check below.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
