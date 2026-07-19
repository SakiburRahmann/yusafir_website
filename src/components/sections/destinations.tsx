"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  X,
  ArrowUpRight,
  Calendar,
  Coins,
  Languages,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "./services";
import {
  DESTINATIONS,
  whatsappLink,
  type Destination,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Destinations() {
  const [active, setActive] = React.useState<Destination | null>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("[data-card]")?.getBoundingClientRect().width ?? 320;
    el.scrollBy({ left: dir * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section
      id="destination"
      className="relative scroll-mt-24 overflow-hidden bg-background py-24 lg:py-32"
    >
      {/* Decorative */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-brand-tint blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-40" />
      </div>

      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            align="left"
            eyebrow="Destinations"
            title={
              <>
                18 active destinations. <br />
                <span className="text-gradient-brand">Pick your future.</span>
              </>
            }
            subtitle="Swipe through our most popular study-abroad destinations. Tap any country for a deep dive on intakes, costs, scholarships, and post-study work rights."
          />

          {/* Arrows — desktop */}
          <div className="hidden flex-none items-center gap-2 lg:flex">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-ink shadow-sm transition-all hover:border-brand hover:bg-brand hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-ink shadow-sm transition-all hover:border-brand hover:bg-brand hover:text-white"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal slider — wrapped in container-wide so the first card
          aligns perfectly with the section header above. Negative margin
          cancels the container's padding so the slider stays full-bleed
          (next card peeks at the edge to signal scrollability), then the
          matching padding is added back inside. */}
      <div className="container-wide mt-12">
        <div
          ref={trackRef}
          className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 -mx-5 sm:-mx-8 lg:-mx-12 px-5 sm:px-8 lg:px-12"
        >
          {DESTINATIONS.map((dest, i) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              index={i}
              onOpen={() => setActive(dest)}
            />
          ))}
          {/* trailing spacer so last card aligns nicely */}
          <div className="flex-none w-1 sm:w-4" />
        </div>
      </div>

      {/* Mobile arrows */}
      <div className="container-wide mt-6 flex justify-center gap-2 lg:hidden">
        <button
          onClick={() => scrollBy(-1)}
          aria-label="Previous"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-ink shadow-sm"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scrollBy(1)}
          aria-label="Next"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-ink shadow-sm"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      {/* Modal */}
      <DestinationModal
        destination={active}
        onClose={() => setActive(null)}
      />
    </section>
  );
}

function DestinationCard({
  destination,
  index,
  onOpen,
}: {
  destination: Destination;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      data-card
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
      onClick={onOpen}
      className="group relative flex w-[280px] flex-none snap-start flex-col overflow-hidden rounded-3xl bg-white text-left shadow-[0_2px_24px_-12px_rgba(1,64,167,0.18)] ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(1,64,167,0.35)] hover:ring-brand/30 sm:w-[320px]"
    >
      {/* Visual — real photo */}
      <div
        className="relative aspect-[4/5] w-full overflow-hidden bg-slate-900"
      >
        {destination.image ? (
          <img
            src={destination.image}
            alt={`${destination.name} — landmark`}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ background: destination.gradient }}
          />
        )}
        {/* Gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-slate-900/10" />
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-dot-grid-dark opacity-20" />

        {/* Big flag chip top-left */}
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-md">
          <span className="text-base leading-none">{destination.flag}</span>
          <span className="text-xs font-semibold uppercase tracking-wider">{destination.id.toUpperCase()}</span>
        </div>

        {/* Hover prompt */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
          <span className="inline-flex items-center gap-1 text-xs font-medium text-white/85">
            View details
          </span>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-brand">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold tracking-tight text-ink">
          {destination.name}
        </h3>
        <p className="mt-1 text-xs font-medium text-brand">
          {destination.tagline}
        </p>

        <ul className="mt-4 space-y-1.5">
          {destination.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2 text-xs leading-relaxed text-ink-soft"
            >
              <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-brand" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.button>
  );
}

function DestinationModal({
  destination,
  onClose,
}: {
  destination: Destination | null;
  onClose: () => void;
}) {
  React.useEffect(() => {
    if (destination) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [destination]);

  // Esc to close
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {destination && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${destination.name} details`}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
          >
            {/* Hero strip — real photo */}
            <div className="relative h-40 w-full overflow-hidden bg-slate-900 sm:h-48">
              {destination.image && (
                <img
                  src={destination.image}
                  alt={`${destination.name} — landmark`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              <div
                className="absolute inset-0"
                style={{
                  background: destination.gradient,
                  opacity: destination.image ? 0.55 : 1,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
              <div className="absolute inset-0 bg-dot-grid-dark opacity-20" />
              <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-8 sm:top-8">
                <span className="text-4xl drop-shadow-md sm:text-5xl">
                  {destination.flag}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {destination.name}
                  </h3>
                  <p className="text-xs font-medium text-white/85 sm:text-sm">
                    {destination.tagline}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="max-h-[calc(92vh-12rem)] overflow-y-auto sm:max-h-[60vh]">
              <div className="p-6 sm:p-8">
                <p className="text-pretty text-sm leading-relaxed text-ink-soft sm:text-base">
                  {destination.details.overview}
                </p>

                {/* Facts grid */}
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <FactRow
                    icon={<Calendar className="h-4 w-4" />}
                    label="Intake"
                    value={destination.details.intake}
                  />
                  <FactRow
                    icon={<Coins className="h-4 w-4" />}
                    label="Average tuition"
                    value={destination.details.averageTuition}
                  />
                  <FactRow
                    icon={<Coins className="h-4 w-4" />}
                    label="Living cost"
                    value={destination.details.livingCost}
                  />
                  <FactRow
                    icon={<Languages className="h-4 w-4" />}
                    label="Language"
                    value={destination.details.languageRequirement}
                  />
                  <FactRow
                    icon={<Briefcase className="h-4 w-4" />}
                    label="Work rights"
                    value={destination.details.workWhileStudying}
                  />
                  <FactRow
                    icon={<GraduationCap className="h-4 w-4" />}
                    label="Popular courses"
                    value={destination.details.popularCourses.slice(0, 3).join(", ")}
                  />
                </div>

                {/* Highlights */}
                <div className="mt-6">
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-ink">
                    <Sparkles className="h-4 w-4 text-brand" />
                    Key highlights
                  </h4>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {destination.details.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 rounded-xl bg-brand-tint/50 p-3 text-sm text-ink"
                      >
                        <span className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-brand" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book Now CTA */}
                <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-ink-soft">
                    Ready to start your {destination.name} application?
                  </p>
                  <a
                    href={whatsappLink(
                      `Hello Yusafir Bangladesh, I want to book an appointment for ${destination.name}. Please share next steps and required documents.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(1,64,167,0.55)] transition-all hover:-translate-y-0.5 hover:bg-brand-deep"
                  >
                    Book Now
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FactRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-surface-alt/60 p-3">
      <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-brand-tint text-brand">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-mute">
          {label}
        </div>
        <div className="text-sm font-medium text-ink">{value}</div>
      </div>
    </div>
  );
}
