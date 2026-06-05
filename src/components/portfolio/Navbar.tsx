import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Home, User, Terminal, Briefcase, FolderGit2, Cpu, Mail, MessageSquare } from "lucide-react";

const LINKS = [
  { href: "#top", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#skills", label: "Skills", icon: Terminal },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#projects", label: "Projects", icon: FolderGit2 },
  { href: "#models", label: "Models", icon: Cpu },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  // Scroll spy to detect visible page section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section intersection calculations
      const scrollPos = window.scrollY + window.innerHeight / 3;
      
      for (const link of LINKS) {
        const sectionId = link.href.substring(1);
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Layout: Fixed Floating Vertical Left Sidebar */}
      <motion.header
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center justify-between w-16 h-[72vh] py-6 rounded-2xl border border-black/5 bg-white/70 backdrop-blur-md shadow-[0_10px_35px_-10px_rgba(0,0,0,0.08)]"
      >
        {/* Corner HUD brackets */}
        <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t border-l border-primary/30 rounded-tl-xl" />
        <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t border-r border-primary/30 rounded-tr-xl" />
        <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b border-l border-primary/30 rounded-bl-xl" />
        <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b border-r border-primary/30 rounded-br-xl" />

        {/* Top: Custom Logo */}
        <a href="#top" className="flex h-10 w-10 items-center justify-center rounded-xl hover:scale-105 transition-transform">
          <img
            src="/logo.png"
            alt="Rohit Patil"
            className="h-8 w-8 object-contain rounded-md"
          />
        </a>

        {/* Middle: Navigation Icons & Active Indicators */}
        <nav className="flex flex-col gap-3.5 relative">
          {LINKS.map((link) => {
            const Icon = link.icon;
            const linkId = link.href.substring(1);
            const isActive = activeSection === linkId;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`group relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 text-primary shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                      : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800"
                  }
                `}
              >
                <Icon className="h-5 w-5" />

                {/* Micro Indicator Dot */}
                {isActive && (
                  <motion.span
                    layoutId="activeDot"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute right-1 w-1 h-1 rounded-full bg-primary"
                  />
                )}
                
                {/* Holographic Tooltip Panel */}
                <div className="pointer-events-none absolute left-14 rounded-lg bg-neutral-900 border border-primary/20 text-white font-mono text-[9px] tracking-widest uppercase py-1.5 px-3 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.15)] whitespace-nowrap z-50">
                  {link.label}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-neutral-900" />
                </div>
              </a>
            );
          })}
        </nav>

        {/* Bottom: Contact Call to Action */}
        <a
          href="#contact"
          aria-label="Let's Talk"
          className="group relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-md shadow-primary/20 hover:scale-105 transition-transform"
        >
          <MessageSquare className="h-4.5 w-4.5" />
          
          {/* Tooltip */}
          <div className="pointer-events-none absolute left-14 rounded-lg bg-neutral-900 border border-primary/20 text-white font-mono text-[9px] tracking-widest uppercase py-1.5 px-3 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.15)] whitespace-nowrap z-50">
            Let's Talk
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-neutral-900" />
          </div>
        </a>
      </motion.header>

      {/* Mobile Layout: Floating Horizontal Top Header Bar */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all md:hidden block bg-[#111111]/95 border-b border-white/5 backdrop-blur-md text-white ${
          scrolled ? "py-2.5 shadow-md" : "py-3.5"
        }`}
      >
        <div className="px-6 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Rohit Patil"
              className="h-7 w-7 object-contain rounded-md"
            />
            <span className="font-display font-semibold tracking-tight text-white text-sm">Rohit Patil</span>
          </a>
          
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="rounded-lg p-1.5 text-white hover:bg-white/5"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

        {open && (
          <div className="px-6 mt-3">
            <div className="bg-[#1a1a1a] border border-white/5 rounded-xl p-2 flex flex-col gap-0.5">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-xs text-neutral-300 hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </motion.header>
    </>
  );
}
