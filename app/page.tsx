// app/page.tsx (server som standard)
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// NB: Hvis disse seksjonene bruker framer-motion/DOM, marker dem som klient
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HealthcareSection } from "@/components/sections/HealthcareSection";
import Instructions from "@/components/sections/Instructions";
import { Products } from "@/components/sections/Products";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HealthcareSection />
      <Instructions />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
