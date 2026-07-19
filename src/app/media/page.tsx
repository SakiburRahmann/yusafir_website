"use client";

import { Youtube, Instagram, ArrowUpRight } from "lucide-react";
import { PageHero, PageCtaBlock } from "@/components/shared/page-hero";
import { YouTubeEmbed } from "@/components/media/youtube-embed";
import { InstagramEmbed } from "@/components/media/instagram-embed";
import {
  MEDIA_FEED,
  YOUTUBE_CHANNEL,
  INSTAGRAM_PROFILE,
} from "@/lib/site-data";

export default function MediaPage() {
  const ytVideos = MEDIA_FEED.filter((m) => m.type === "youtube");
  const igPosts = MEDIA_FEED.filter((m) => m.type === "instagram");

  return (
    <>
      <PageHero
        eyebrow="Media & Content"
        title={
          <>
            Stories, tips, and
            <br />
            visa updates — fresh weekly.
          </>
        }
        subtitle="Watch our latest YouTube explainers and Instagram reels directly on this page — every video and post below plays natively, no redirect required."
      />

      <section className="relative bg-background py-16 lg:py-24">
        <div className="container-wide">
          {/* YouTube row */}
          <div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="eyebrow">
                  <span className="h-px w-6 bg-brand/40" />
                  Watch on YouTube
                </span>
                <div className="mt-3 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500 ring-1 ring-red-100">
                    <Youtube className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                      {YOUTUBE_CHANNEL.name}
                    </h2>
                    <p className="text-xs text-ink-mute">
                      {YOUTUBE_CHANNEL.handle} · YouTube channel
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={YOUTUBE_CHANNEL.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:border-brand hover:text-brand"
              >
                <Youtube className="h-4 w-4 text-red-500" />
                Subscribe on YouTube
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* YouTube grid */}
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
          <div className="mt-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="eyebrow">
                  <span className="h-px w-6 bg-brand/40" />
                  Follow on Instagram
                </span>
                <div className="mt-3 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-pink-50 text-pink-500 ring-1 ring-pink-100">
                    <Instagram className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                      {INSTAGRAM_PROFILE.name}
                    </h2>
                    <p className="text-xs text-ink-mute">
                      {INSTAGRAM_PROFILE.handle} · Instagram
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={INSTAGRAM_PROFILE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:border-brand hover:text-brand"
              >
                <Instagram className="h-4 w-4 text-pink-500" />
                Follow on Instagram
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Instagram grid */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

          {/* Info note removed per request */}

          <PageCtaBlock
            title="Have a question about a video or reel?"
            subtitle="Reach out — we usually reply within one working hour."
            primaryHref="/contact"
            primaryLabel="Contact us"
            secondaryHref="/#destination"
            secondaryLabel="Browse destinations"
          />
        </div>
      </section>
    </>
  );
}
