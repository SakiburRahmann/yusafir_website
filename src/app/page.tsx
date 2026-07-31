import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Logos from "@/components/logos";
import Features from "@/components/features";
import Method from "@/components/method";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <Method />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
