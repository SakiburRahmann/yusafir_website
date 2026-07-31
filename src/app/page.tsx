import SmoothScroll from '@/components/smooth-scroll';
import Loader from '@/components/loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/marquee';
import Services from '@/components/services';
import Eligibility from '@/components/eligibility';
import Manifesto from '@/components/manifesto';
import Process from '@/components/process';
import Voices from '@/components/voices';
import Gallery from '@/components/gallery';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <SmoothScroll>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Eligibility />
        <Manifesto />
        <Process />
        <Voices />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
