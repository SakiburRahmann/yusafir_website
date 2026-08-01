import SmoothScroll from '@/components/smooth-scroll';
import Loader from '@/components/loader';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Marquee from '@/components/marquee';
import Issb from '@/components/issb';
import Practice from '@/components/practice';
import How from '@/components/how';
import Eval from '@/components/eval';
import Showcase from '@/components/showcase';
import FAQ from '@/components/faq';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <SmoothScroll>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Issb />
        <Practice />
        <How />
        <Eval />
        <Showcase />
        <FAQ />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
