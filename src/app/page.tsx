import Cursor from "@/components/cursor";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import Manifesto from "@/components/manifesto";
import Services from "@/components/services";
import Work from "@/components/work";
import Process from "@/components/process";
import Stats from "@/components/stats";
import Testimonial from "@/components/testimonial";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Services />
        <Work />
        <Process />
        <Stats />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}
