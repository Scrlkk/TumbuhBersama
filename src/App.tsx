import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { ActionSection } from "@/components/sections/ActionSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream font-sans text-brand-forest-dark antialiased selection:bg-brand-leaf selection:text-brand-forest-dark">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <ActionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
