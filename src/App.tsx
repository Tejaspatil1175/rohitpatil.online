import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { MarqueeTicker } from "@/components/portfolio/MarqueeTicker";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Models } from "@/components/portfolio/Models";
import { AchievementsAndEducation } from "@/components/portfolio/AchievementsAndEducation";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { FloatingSocials } from "@/components/portfolio/FloatingSocials";
import { KeyboardIntro } from "@/components/portfolio/KeyboardIntro";

export default function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <>
      {/* Keyboard Preloader overlays everything initially */}
      {!showPortfolio && (
        <KeyboardIntro onComplete={() => setShowPortfolio(true)} />
      )}

      {/* Truly fixed elements rendered directly at the viewport level */}
      {showPortfolio && (
        <>
          <Navbar />
          <FloatingSocials />
        </>
      )}

      {/* Main Portfolio Layout fades/blurs in once decryption finishes */}
      {showPortfolio && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-screen overflow-x-hidden bg-background text-foreground"
        >
          <main>
            <Hero />
            <MarqueeTicker />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Models />
            <AchievementsAndEducation />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
