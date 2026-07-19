import type { Metadata } from "next";
import { AboutLayout } from "@/components/about/about-layout";
import { AboutMainContent } from "@/components/about/about-main";
import { PageCtaBlock } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "About Us — Yusafir Bangladesh",
  description:
    "Founded in 2018 in Dhaka, Yusafir Bangladesh has grown into one of the most trusted names in student recruitment and visa processing — serving 12,000+ students across 18 destinations.",
};

export default function AboutPage() {
  return (
    <>
      <AboutLayout
        eyebrow="About Yusafir"
        title={
          <>
            A team built on ethics,
            <br />
            technology, and a long-term mission.
          </>
        }
        subtitle="From a Dhaka living-room desk in 2018 to 18 active destinations — our story, our backbone, and the values that drive us."
      >
        <AboutMainContent />

        <PageCtaBlock
          title="Meet the people behind Yusafir."
          subtitle="Founders, counsellors, and case officers who treat every application like their own."
          primaryHref="/about/team"
          primaryLabel="See the team"
          secondaryHref="/about/mission"
          secondaryLabel="Read our mission"
        />
      </AboutLayout>
    </>
  );
}
