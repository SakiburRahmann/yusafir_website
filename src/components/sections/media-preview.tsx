"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Youtube, Instagram } from "lucide-react";
import {
  MEDIA_FEED,
  YOUTUBE_CHANNEL,
  INSTAGRAM_PROFILE,
} from "@/lib/site-data";
import { YouTubeEmbed } from "@/components/media/youtube-embed";
import { InstagramEmbed } from "@/components/media/instagram-embed";

/**
 * Compact Media preview block for the home page — shows the latest YouTube
 * videos and Instagram posts/reels as NATIVE embeds (they play directly
 * on this page). Links to /media for the full gallery.
 */
export function MediaPreview() {
  const ytVideos = MEDIA_FEED.filter((m) => m.type === "youtube").slice(0, 3);
  const igPosts = MEDIA_FEED.filter((m) => m.type === "instagram").slice(0, 3);

  return (
    <section
      id="media"
      className="relative scroll-mt-24 overflow-hidden bg-surface-alt py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-12 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-brand-tint blur-3xl opacity-50" />
      </div>

      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="eyebrow">
              <span className="h-px w-6 bg-brand/40" />
              Media & Content
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
              Stories, tips, and visa updates — fresh weekly.
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
              Watch our latest YouTube explainers and Instagram reels. Everything
              below plays right here on the page — tap any video or post to
              engage with it natively.
            </p>
          </motion.div>

          <Link
            href="/media"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(1,64,167,0.55)] transition-all hover:-translate-y-0.5 hover:bg-brand-deep"
          >
            Visit Media page
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* YouTube row */}
        <div className="mt-12">
          <div className="flex items-center gap-2">
            <Youtube className="h-5 w-5 text-red-500" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink">
              Latest on YouTube · {YOUTUBE_CHANNEL.handle}
            </h3>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ytVideos.map((v, i) => (
              <YouTubeEmbed
                key={v.id}
                videoId={v.videoId}
                title={v.title}
                publishedAt={v.publishedAt}
                url={v.url}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Instagram row */}
        <div className="mt-16">
          <div className="flex items-center gap-2">
            <Instagram className="h-5 w-5 text-pink-500" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink">
              Latest on Instagram · {INSTAGRAM_PROFILE.handle}
            </h3>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {igPosts.map((p, i) => (
              <InstagramEmbed
                key={p.id}
                shortcode={p.shortcode}
                kind={p.kind}
                title={p.title}
                url={p.url}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
