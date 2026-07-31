import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Ticker from "@/components/ticker";
import Intel from "@/components/intel";
import Stripes from "@/components/stripes";
import Systems from "@/components/systems";
import Spec from "@/components/spec";
import Timeline from "@/components/timeline";
import Memo from "@/components/memo";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Ticker />
        <Intel />
        <Stripes />
        <Systems />
        <Spec />
        <Timeline />
        <Memo />
      </main>
      <Footer />
    </>
  );
}
