"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, Play } from "lucide-react";
import { whatsappLink, STATS, HERO_BACKGROUND_VIDEO } from "@/lib/site-data";
import dynamic from "next/dynamic";
import { GLOBE_DESTINATIONS, GLOBE_ORIGIN } from "@/lib/site-data";

// Dynamically import the Three.js globe so it only loads on the client.
// This avoids SSR issues with WebGL and keeps the initial bundle small.
const HeroEarth = dynamic(
  () => import("@/components/hero-earth").then((m) => m.HeroEarth),
  {
    ssr: false,
    loading: () => (
      <div className="aspect-square w-full max-w-[420px] animate-pulse rounded-full bg-white/5 ring-1 ring-white/10" />
    ),
  }
);

/**
 * Wrapper that picks an Earth size based on viewport width so the globe
 * is interactive on mobile too (touch + drag). Kept compact (≤ 420px)
 * so it fits the hero column without overflowing on smaller laptops.
 */
function ResponsiveEarth() {
  const [size, setSize] = React.useState(420);

  React.useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) setSize(Math.min(w - 48, 320));
      else if (w < 1024) setSize(360);
      else setSize(420);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <HeroEarth
      destinations={GLOBE_DESTINATIONS}
      origin={GLOBE_ORIGIN}
      size={size}
    />
  );
}

export function Hero() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 60]);
  // Only the text column fades on scroll — the globe stays fully visible
  // so users on mobile (where the globe sits below the text) can keep
  // seeing it as they scroll past the hero.
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-surface-deep text-white lg:min-h-[100svh]"
    >
      {/* Background layers */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10">
        {/* Deep gradient base */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,#0a1f4d_0%,#020817_70%)]" />

        {/* YouTube background video — muted, autoplay, loop */}
        <YouTubeBackground videoId={HERO_BACKGROUND_VIDEO.videoId} />

        {/* Aurora blobs */}
        <div className="absolute inset-0 bg-aurora opacity-80" />
        {/* Dot grid */}
        <div className="absolute inset-0 bg-dot-grid-dark opacity-50" />
        {/* Subtle radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_50%,transparent_30%,rgba(2,8,23,0.85)_100%)]" />
      </motion.div>

      {/* Top fade for navbar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black/40 to-transparent" />

      {/* Content */}
      <motion.div
        style={{ y: yContent }}
        className="container-wide relative z-20 flex flex-col justify-center pt-24 pb-16 lg:min-h-[100svh] lg:pt-28"
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Left: copy (fades on scroll) */}
          <motion.div style={{ opacity: textOpacity }} className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md"
            >
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 ring-2 ring-emerald-400/30" />
              <span>Trusted by 12,000+ Bangladeshi students since 2018</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.6rem]"
            >
              Your gateway to
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-sky-300 via-white to-violet-300 bg-clip-text text-transparent">
                  world-class education
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-gradient-to-r from-sky-400 to-violet-400"
                />
              </span>
              <br />
              and global mobility.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg"
            >
              Yusafir Bangladesh helps students, travellers, and medical-emergency cases reach
              18+ destinations — with transparent pricing, ethical counselling, and a 94% visa
              success rate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={whatsappLink(
                  "Hello Yusafir Bangladesh, I would like to book a free consultation."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_20px_50px_-12px_rgba(255,255,255,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_30px_60px_-12px_rgba(255,255,255,0.55)]"
              >
                <MessageCircle className="h-4 w-4 text-emerald-500" />
                Book a free consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector("#services");
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 84;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10"
              >
                <Play className="h-4 w-4 fill-white/80 text-white/80" />
                Explore services
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.54 }}
              className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4"
            >
              {STATS.map((s) => (
                <div key={s.label} className="bg-white/[0.02] p-4 sm:p-5">
                  <div className="text-2xl font-bold tracking-tight text-white sm:text-[1.75rem]">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-white/55">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: realistic interactive Earth — globe stays fully visible
              during scroll so users can keep interacting with it. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center lg:max-w-[420px]"
          >
            <ResponsiveEarth />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ opacity: textOpacity }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative flex h-10 w-[1px] overflow-hidden">
          <motion.span
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="block h-1/2 w-full bg-gradient-to-b from-transparent via-white/80 to-transparent"
          />
        </span>
      </motion.div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

/**
 * Muted, autoplaying, looping YouTube video that plays behind the hero copy.
 * - Uses youtube-nocookie.com for privacy
 * - Pointer-events disabled so it never blocks clicks
 * - A dark overlay guarantees text contrast
 * - If the iframe hasn't loaded yet (or autoplay is blocked on iOS low-power),
 *   the poster image shows through as a fallback.
 */
function YouTubeBackground({ videoId }: { videoId: string }) {
  // Detect mobile / low-power device at mount. YouTube iframes constantly
  // decode video on the main thread, which combined with the Three.js
  // globe + scroll parallax causes micro-stutter on mobile. On small
  // screens we skip the iframe entirely and just show the poster image —
  // visually equivalent at hero scale, dramatically smoother.
  const [showIframe, setShowIframe] = React.useState(false);
  React.useEffect(() => {
    const isMobile =
      typeof window !== "undefined" &&
      (window.matchMedia?.("(max-width: 768px)").matches ||
        navigator.hardwareConcurrency <= 4);
    // Also respect Save-Data header
    const saveData =
      typeof navigator !== "undefined" &&
      (navigator as Navigator & { connection?: { saveData?: boolean } })
        .connection?.saveData;
    setShowIframe(!isMobile && !saveData);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Poster fallback (also visible underneath the iframe) */}
      <img
        src={HERO_BACKGROUND_VIDEO.poster}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />

      {/* YouTube iframe — desktop only. Mobile skips this for perf. */}
      {showIframe && (
        <iframe
          key={videoId}
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&iv_load_policy=3`}
          title="Yusafir Bangladesh background video"
          className="absolute left-1/2 top-1/2 h-[180%] w-[180%] max-h-none -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            border: 0,
            // Scale up so the YouTube chrome is off-screen
            transform: "translate(-50%, -50%) scale(1.35)",
          }}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen={false}
          tabIndex={-1}
        />
      )}

      {/* Cinematic dark overlay for legibility — kept light enough
          to see the video/poster motion through it. */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/75 via-[#020817]/45 to-[#020817]/85" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_30%_50%,transparent_40%,rgba(2,8,23,0.6)_100%)]" />
    </div>
  );
}
