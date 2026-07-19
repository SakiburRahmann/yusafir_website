"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  publishedAt?: string;
  url?: string;
  index?: number;
  className?: string;
};

/**
 * Native YouTube embed — uses YouTube's official iframe embed player.
 * Plays directly on the page; no redirect to youtube.com required.
 */
export function YouTubeEmbed({
  videoId,
  title,
  publishedAt,
  url,
  index = 0,
  className,
}: YouTubeEmbedProps) {
  const [activated, setActivated] = React.useState(false);

  // Use YouTube's official embed URL with privacy-enhanced mode (youtube-nocookie.com)
  const embedSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <motion.div
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
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        {activated ? (
          <iframe
            src={embedSrc}
            title={title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActivated(true)}
            className="absolute inset-0 h-full w-full"
            aria-label={`Play video: ${title}`}
          >
            {/* Thumbnail */}
            <img
              src={thumbnail}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-[0_10px_30px_-8px_rgba(220,38,38,0.7)]"
              >
                <span className="absolute inset-0 animate-ping rounded-full bg-red-600/40" />
                <Play className="relative h-7 w-7 translate-x-0.5 fill-current" />
              </motion.span>
            </div>

            {/* YouTube badge */}
            <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
              YouTube
            </div>
          </button>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h4 className="text-pretty text-sm font-bold leading-snug text-ink line-clamp-2">
          {title}
        </h4>
        <div className="mt-3 flex items-center justify-between text-xs text-ink-mute">
          <span>{publishedAt}</span>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-brand hover:text-brand-deep"
            >
              Watch on YouTube
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
