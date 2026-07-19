"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { Icon } from "@/components/icon";
import { MISSION_VISION, MISSION_SERVICES } from "@/lib/site-data";

/**
 * Mission & Vision page content.
 */
export function AboutMissionContent() {
  return (
    <div className="space-y-12">
      {/* Mission + Vision statement block */}
      <div className="relative overflow-hidden rounded-3xl bg-surface-deep p-8 text-white sm:p-12 lg:p-16">
        {/* Decorative layers */}
        <div className="absolute inset-0 bg-aurora opacity-80" />
        <div className="absolute inset-0 bg-dot-grid-dark opacity-40" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/40 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              <Target className="h-4 w-4" />
              Our Mission
            </span>
            <p className="mt-4 text-balance text-2xl font-semibold leading-snug sm:text-3xl">
              {MISSION_VISION.mission}
            </p>
          </div>
          <div className="lg:border-l lg:border-white/15 lg:pl-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
              <Eye className="h-4 w-4" />
              Our Vision
            </span>
            <p className="mt-4 text-balance text-xl leading-relaxed text-white/80 sm:text-2xl">
              {MISSION_VISION.vision}
            </p>
          </div>
        </div>
      </div>

      {/* Three service blocks */}
      <div>
        <div className="text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-6 bg-brand/40" />
            What we deliver
            <span className="h-px w-6 bg-brand/40" />
          </span>
          <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Three specialised service pillars.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {MISSION_SERVICES.map((s, i) => (
            <MissionServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MissionServiceCard({
  service,
  index,
}: {
  service: (typeof MISSION_SERVICES)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_2px_24px_-12px_rgba(1,64,167,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(1,64,167,0.3)]"
    >
      {/* Icon header */}
      <div className="relative flex h-32 items-center justify-center bg-gradient-to-br from-brand-tint to-violet-50">
        <div className="absolute inset-0 bg-dot-grid opacity-40" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep text-white shadow-[0_10px_24px_-8px_rgba(1,64,167,0.55)]">
          <Icon name={service.icon} className="h-7 w-7" strokeWidth={1.6} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h4 className="text-lg font-bold tracking-tight text-ink">{service.title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {service.description}
        </p>

        {/* Structure bar — icon-based metric strip */}
        <div className="mt-5 grid grid-cols-2 gap-2">
          {service.structure.map((item) => (
            <div
              key={item.label}
              className="rounded-xl bg-surface-alt/60 p-3 text-center"
            >
              <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-mute">
                {item.label}
              </div>
              <div className="mt-0.5 text-sm font-bold text-brand">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Flag carousel — infinite */}
        <div className="mt-5 border-t border-slate-100 pt-4">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-ink-mute">
            Serviced countries
          </div>
          <FlagCarousel flags={service.flags} />
        </div>
      </div>
    </motion.article>
  );
}

function FlagCarousel({ flags }: { flags: string[] }) {
  // Duplicate for seamless loop
  const loop = [...flags, ...flags];
  return (
    <div
      className="relative flex overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="flex flex-none items-center gap-2"
      >
        {loop.map((f, i) => (
          <span
            key={i}
            className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-surface-alt text-lg shadow-sm ring-1 ring-slate-200/60"
          >
            {f}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
