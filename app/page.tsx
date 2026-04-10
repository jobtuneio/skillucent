import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import WhySkillucent from "@/components/WhySkillucent";
import Stats from "@/components/Stats";
import WhoWeServe from "@/components/WhoWeServe";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Training from "@/components/Training";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <WhySkillucent />
        <Stats />
        <WhoWeServe />
        <Testimonials />
        <About />
        <Training />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
