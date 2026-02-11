import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Juices from '@/components/sections/Juices';
import WhyOurJuices from '@/components/sections/WhyOurJuices';
import AboutUs from '@/components/sections/AboutUs';
import AppleVarieties from '@/components/sections/AppleVarieties';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Juices />
        <WhyOurJuices />
        <AboutUs />
        <AppleVarieties />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
