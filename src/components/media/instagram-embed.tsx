"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Instagram, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type InstagramEmbedProps = {
  shortcode: string;
  kind?: "reel" | "post";
  title?: string;
  url: string;
  index?: number;
  className?: string;
};

/**
 * Native Instagram embed — uses Instagram's official /embed endpoint.
 * Renders the post / reel directly on the page inside an iframe.
 *
 * Note: Instagram embeds load asynchronously; we set a fixed aspect
 * ratio container and lazy-load the iframe only when scrolled into view
 * to keep the page fast.
 */
export function InstagramEmbed({
  shortcode,
  kind = "post",
  title,
  url,
  index = 0,
  className,
}: InstagramEmbedProps) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);

  // Lazy-load the iframe when the wrapper is near the viewport
  React.useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShouldLoad(true);
            obs.disconnect();
            break;
          }
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const embedSrc = `https://www.instagram.com/p/${shortcode}/embed?cr=1&v=14&wp=540&rd=&rp=`;

  return (
    <motion.div
      ref={wrapperRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.4) }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_4px_30px_-12px_rgba(1,64,167,0.18)] ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(1,64,167,0.3)]",
        className
      )}
    >
      {/* Embed container */}
      <div className="relative w-full overflow-hidden bg-slate-50">
        {/* Placeholder while iframe loads */}
        {!loaded && (
          <div className="flex aspect-square w-full items-center justify-center bg-gradient-to-br from-pink-100 via-violet-50 to-sky-50">
            <div className="flex flex-col items-center gap-3 text-pink-500">
              <Instagram className="h-8 w-8 animate-pulse" />
              <span className="text-xs font-medium text-ink-soft">
                Loading Instagram {kind}…
              </span>
            </div>
          </div>
        )}

        {shouldLoad && (
          <iframe
            src={embedSrc}
            title={title ?? `Instagram ${kind} ${shortcode}`}
            onLoad={() => setLoaded(true)}
            loading="lazy"
            // Instagram embeds need a fixed height; we set it via className
            className={cn(
              "w-full border-0 transition-opacity duration-300",
              loaded ? "opacity-100" : "absolute inset-0 h-full opacity-0",
              "h-[560px]"
            )}
            scrolling="no"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 items-center justify-between gap-3 p-5">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-pink-50 text-pink-500">
            <Instagram className="h-4 w-4" />
          </span>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-ink-mute">
              Instagram · {kind}
            </div>
            {title && (
              <div className="text-sm font-semibold text-ink line-clamp-1">
                {title}
              </div>
            )}
          </div>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-none items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
        >
          Open
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.div>
  );
}
