"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { PARTNERS } from "@/lib/site-data";

export function Partners() {
  // Duplicate the list so the marquee loops seamlessly
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <section
      id="partners"
      className="relative scroll-mt-24 border-y border-slate-200/70 bg-surface-alt/60 py-16 lg:py-20"
    >
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-2 text-center"
        >
          <span className="eyebrow">
            <span className="h-px w-6 bg-brand/40" />
            Trusted partners
            <span className="h-px w-6 bg-brand/40" />
          </span>
          <h2 className="max-w-2xl text-balance text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            We work with the world's most respected education networks
          </h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div
        className="group relative mt-10 flex overflow-hidden"
        style={
          {
            "--marquee-duration": "44s",
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          } as React.CSSProperties
        }
      >
        <div className="flex animate-marquee items-center gap-4 group-hover:[animation-play-state:paused]">
          {loop.map((p, i) => (
            <PartnerCard key={`${p.name}-${i}`} name={p.name} domain={p.domain} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Logo loading strategy:
 *
 *   1. DuckDuckGo Icons (https://icons.duckduckgo.com/ip3/{domain}.ico)
 *      — Reliable, free, returns multi-resolution ICO (up to 48×48).
 *      — Works without API key. Used by every major favicon fetcher.
 *
 *   2. Google Favicon service as fallback (sz=128 upsamples to 128×128).
 *
 *   3. Initials monogram on colored gradient as final fallback.
 *
 * Implementation note: the previous versions had two bugs:
 *   (a) `urlIdxRef` (a React ref) was mutated but `setLogoState("loading")`
 *       was called with the same string already in state — React's
 *       bail-out optimization skipped the re-render, so `currentUrl`
 *       never picked up the new ref value. Fixed by using a state
 *       variable `urlIdx`.
 *   (b) The hidden `<img className="hidden">` preloader never actually
 *       fired `onLoad` in Chromium because `display:none` images are
 *       deprioritised / never fetched. Fixed by rendering a single
 *       visible `<img>` layered on top of the gradient/initials
 *       fallback, using opacity to control visibility.
 */
function PartnerCard({ name, domain }: { name: string; domain?: string }) {
  const gradients = [
    "linear-gradient(135deg, #0140a7, #2563eb)",
    "linear-gradient(135deg, #002b6e, #0140a7)",
    "linear-gradient(135deg, #7d52ac, #2563eb)",
    "linear-gradient(135deg, #0140a7, #7d52ac)",
    "linear-gradient(135deg, #2563eb, #38bdf8)",
  ];
  const idx = name.charCodeAt(0) % gradients.length;

  // URL chain — Google favicon service first (returns reliable PNG),
  // then DuckDuckGo (sometimes returns ICO which renders less reliably).
  const googleUrl = domain
    ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
    : undefined;
  const ddgUrl = domain
    ? `https://icons.duckduckgo.com/ip3/${domain}.ico`
    : undefined;
  const urls = [googleUrl, ddgUrl].filter(Boolean) as string[];

  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  const [urlIdx, setUrlIdx] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [failed, setFailed] = React.useState(urls.length === 0);

  const currentUrl = urls[urlIdx];

  const handleError = () => {
    if (urlIdx < urls.length - 1) {
      setUrlIdx((i) => i + 1);
    } else {
      setFailed(true);
    }
  };

  // CRITICAL: when an image is cached, the browser may finish loading it
  // BEFORE React attaches the onLoad handler — so onLoad never fires and
  // `loaded` stays false. The callback ref runs synchronously after the
  // <img> is mounted, so we can detect "already complete" images and
  // flip loaded=true immediately.
  const imgRefCallback = React.useCallback(
    (img: HTMLImageElement | null) => {
      if (img && img.complete && img.naturalWidth > 0) {
        setLoaded(true);
      }
    },
    [currentUrl]
  );

  return (
    <div className="relative flex h-20 w-56 flex-none items-center justify-center gap-3 overflow-hidden rounded-2xl border border-slate-200/70 bg-white px-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <span
        className="relative flex h-10 w-10 flex-none items-center justify-center overflow-hidden rounded-xl"
        style={{
          background: loaded ? "#ffffff" : gradients[idx],
        }}
      >
        {/* Fallback initials — always rendered behind the image. Visible
            only while loading or when the image has failed. */}
        {!loaded && !failed && (
          <span className="absolute inset-0 animate-pulse bg-white/25" />
        )}
        {(loaded || failed) && (
          <span
            className={`absolute inset-0 flex items-center justify-center text-sm font-bold ${
              loaded ? "opacity-0" : "text-white"
            }`}
          >
            {initials}
          </span>
        )}

        {/* Single visible <img> — when it loads, opacity goes to 1 and
            it covers the gradient/initials behind it. When it errors,
            we advance to the next URL or mark as failed.
            `loading="eager"` (not lazy) because the marquee animation
            confuses the browser's lazy-load IntersectionObserver. */}
        {currentUrl && !failed && (
          <img
            key={currentUrl}
            ref={imgRefCallback}
            src={currentUrl}
            alt={`${name} logo`}
            className={`absolute inset-0 z-10 h-full w-full object-contain p-1 transition-opacity duration-200 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            loading="eager"
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={handleError}
          />
        )}
      </span>
      <span className="text-sm font-semibold leading-tight text-ink">
        {name}
      </span>
    </div>
  );
}
