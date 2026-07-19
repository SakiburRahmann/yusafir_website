"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Icon } from "@/components/icon";
import { SERVICES, whatsappLink } from "@/lib/site-data";

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-background py-24 lg:py-32"
    >
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-brand-tint blur-3xl" />
        <div className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-violet-100 blur-3xl opacity-60" />
      </div>

      <div className="container-wide">
        <SectionHeader
          eyebrow="What we do"
          title={
            <>
              Three services. <span className="text-gradient-brand">One promise.</span>
            </>
          }
          subtitle="From your first counselling session to landing at your destination airport, every step is handled by a dedicated case officer."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <span className="eyebrow">
        <span className="h-px w-6 bg-brand/40" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_2px_24px_-12px_rgba(1,64,167,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_30px_60px_-20px_rgba(1,64,167,0.28)]"
    >
      {/* Hover gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-tint/40 via-transparent to-violet-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Top-right arrow */}
      <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />

      {/* Icon */}
      <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep text-white shadow-[0_12px_24px_-8px_rgba(1,64,167,0.5)]">
        <Icon name={service.icon} className="h-7 w-7" strokeWidth={1.6} />
        <div className="absolute inset-0 rounded-2xl bg-white/0 transition-colors duration-300 group-hover:bg-white/10" />
      </div>

      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-xs font-bold tabular-nums text-brand/60">
          0{index + 1}
        </span>
        <h3 className="text-xl font-bold tracking-tight text-ink">
          {service.title}
        </h3>
      </div>
      <p className="mt-1 text-sm font-medium text-brand">
        {service.tagline}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
        {service.description}
      </p>

      {/* Bullet points */}
      <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
        {service.points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-sm">
            <span className="mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-brand-tint text-brand">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className="text-ink-soft">{point}</span>
          </li>
        ))}
      </ul>

      {/* CTA at bottom */}
      <a
        href={whatsappLink(
          `Hello Yusafir Bangladesh, I am interested in your "${service.title}" service. Please share more details.`
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-deep"
      >
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </a>
    </motion.article>
  );
}
