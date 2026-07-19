"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type NavTab = {
  label: string;
  href: string;
  description?: string;
};

/**
 * Shared inner-page hero — provides a consistent header for /about,
 * /about/team, /about/mission, /media, /contact.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  tabs,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  tabs?: NavTab[];
}) {
  const pathname = usePathname();

  return (
    <section className="relative overflow-hidden bg-surface-deep pt-32 pb-16 text-white lg:pt-40 lg:pb-20">
      {/* Decorative layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,#0a1f4d_0%,#020817_70%)]" />
        <div className="absolute inset-0 bg-aurora opacity-80" />
        <div className="absolute inset-0 bg-dot-grid-dark opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_50%,transparent_30%,rgba(2,8,23,0.85)_100%)]" />
      </div>

      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
            <span className="h-px w-6 bg-white/40" />
            {eyebrow}
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Tabs / sub-nav */}
        {tabs && tabs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-10 flex w-full max-w-3xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-center"
          >
            {tabs.map((t) => {
              const isActive =
                pathname === t.href ||
                (t.href !== "/about" && pathname.startsWith(t.href));
              return (
                <Link
                  key={t.href}
                  href={t.href}
                  className={cn(
                    "group relative flex-1 rounded-2xl border px-4 py-3 text-left transition-all",
                    isActive
                      ? "border-white/40 bg-white/10 shadow-[0_10px_30px_-12px_rgba(255,255,255,0.2)]"
                      : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
                  )}
                >
                  <span
                    className={cn(
                      "block text-sm font-semibold transition-colors",
                      isActive ? "text-white" : "text-white/85"
                    )}
                  >
                    {t.label}
                  </span>
                  {t.description && (
                    <span className="hidden text-xs text-white/60 sm:block">
                      {t.description}
                    </span>
                  )}
                  {isActive && (
                    <motion.span
                      layoutId="page-tab-pill"
                      className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-2/3 rounded-full bg-white"
                    />
                  )}
                </Link>
              );
            })}
          </motion.div>
        )}
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

/**
 * Call-to-action block at the bottom of inner pages.
 */
export function PageCtaBlock({
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  subtitle?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mt-20 overflow-hidden rounded-3xl bg-surface-deep p-8 text-white shadow-[0_30px_80px_-30px_rgba(1,64,167,0.55)] sm:p-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-aurora opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-dot-grid-dark opacity-40" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/40 blur-3xl" />
      <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h3 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-2 text-pretty text-white/70">{subtitle}</p>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {secondaryHref && secondaryLabel && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10"
            >
              {secondaryLabel}
            </Link>
          )}
          <Link
            href={primaryHref}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink shadow-[0_20px_50px_-12px_rgba(255,255,255,0.4)] transition-all hover:-translate-y-0.5"
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
