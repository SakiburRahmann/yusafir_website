import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EligibilityChecker from '@/components/EligibilityChecker';
import ApplicationProcess from '@/components/ApplicationProcess';
import ActiveNotices from '@/components/ActiveNotices';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <EligibilityChecker />
        <ApplicationProcess />
        <ActiveNotices />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}