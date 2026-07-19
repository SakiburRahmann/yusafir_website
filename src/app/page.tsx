"use client";

import * as React from "react";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Destinations } from "@/components/sections/destinations";
import { Partners } from "@/components/sections/partners";
import { AboutPreview } from "@/components/sections/about-preview";
import { MediaPreview } from "@/components/sections/media-preview";
import { ContactPreview } from "@/components/sections/contact-preview";

export default function Home() {
  // When navigating to /#services or /#destination from another page,
  // the browser lands on home with a hash but doesn't always scroll.
  // We handle it here on mount.
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash?.replace("#", "");
    if (!hash) return;

    // Small delay so all sections have mounted.
    const id = window.setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 84;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 100);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <>
      {/* Per brief: Home Page = single-page sections.
          Hero, Services, Process, Destination, Corporate Partners.
          About / Media / Contact live on dedicated routed pages —
          these small previews link to them. */}
      <Hero />
      <Services />
      <Process />
      <Destinations />
      <Partners />
      <AboutPreview />
      <MediaPreview />
      <ContactPreview />
    </>
  );
}
