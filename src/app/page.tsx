import SmoothScroll from "@/components/smooth-scroll";
import Loader from "@/components/loader";
import Cursor from "@/components/cursor";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Manifesto from "@/components/manifesto";
import Stripes from "@/components/stripes";
import Horizontal from "@/components/horizontal";
import Showcase from "@/components/showcase";
import Services from "@/components/services";
import Quote from "@/components/quote";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Loader />
      <SmoothScroll />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Stripes />
        <Horizontal />
        <Showcase />
        <Services />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
