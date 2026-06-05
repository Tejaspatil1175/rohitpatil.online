import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Mail, ArrowRight, Sparkles } from "lucide-react";
import { PROFILE, STATS } from "./data";
import { ParticleField } from "./ParticleField";

function useTyped(words: string[], speed = 70, pause = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) setTimeout(() => setDel(true), pause);
        } else {
          const next = word.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTyped(PROFILE.roles);

  return (
    <section id="top" className="relative isolate overflow-hidden pt-24 pb-8 md:pt-16 md:pb-10">
      <div className="absolute inset-0 -z-10 radial-glow" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <div className="absolute inset-0 -z-10">
        <ParticleField />
      </div>

      <div className="mx-auto max-w-none px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Intro Details */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[10px] tracking-widest text-muted-foreground mb-4 uppercase flex items-center gap-2"
            >
              <span className="h-1.5 w-1.5 bg-accent rounded-full animate-pulse" />
              [sys.node] / dev_profile_active / core.v2
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground w-fit hover:border-accent/40 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for AI/ML & Agentic engineering work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
            >
              {PROFILE.name.split(" ")[0]}{" "}
              <span className="gradient-text">{PROFILE.name.split(" ")[1]}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 flex items-center gap-2 font-mono text-sm text-accent sm:text-base font-semibold"
            >
              <Sparkles className="h-4 w-4 text-accent animate-spin-slow" aria-hidden />
              <span>
                {typed}
                <span className="animate-blink ml-0.5 text-accent">▍</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base text-muted-foreground sm:text-lg max-w-xl"
            >
              Building <span className="text-primary font-bold">Intelligent AI Systems</span>, <span className="text-accent font-bold">Agentic Workflows</span>, and Enterprise-Scale <span className="gradient-text font-bold">Generative AI Solutions</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-accent/40 hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary/50 transition-all duration-300 hover:shadow-lg active:scale-[0.98]"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: AI Avatar HUD Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex items-center justify-center w-full max-w-[340px] aspect-square group/hud"
            >
              {/* Outer concentric star shape rotating counter-clockwise */}
              <motion.svg
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                viewBox="0 0 200 200"
                className="absolute inset-0 w-full h-full scale-[1.16] pointer-events-none opacity-30 drop-shadow-sm"
              >
                <polygon
                  points="100,15 135,45 175,55 155,105 175,155 125,165 100,185 75,165 25,155 45,105 25,55 65,45"
                  fill="none"
                  stroke="url(#avatarGradientOuter)"
                  strokeWidth="1.5"
                  strokeDasharray="4 8"
                />
                <defs>
                  <linearGradient id="avatarGradientOuter" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="var(--brand-3)" />
                    <stop offset="100%" stopColor="var(--brand)" />
                  </linearGradient>
                </defs>
              </motion.svg>

              {/* Inner rotating abstract geometric vector shape (representing background abstract shape) */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                viewBox="0 0 200 200"
                className="absolute inset-0 w-full h-full scale-[1.08] pointer-events-none drop-shadow-md"
              >
                <path
                  d="M100,12 L132,32 L168,15 L158,52 L185,82 L148,110 L155,148 L115,138 L85,168 L65,135 L25,135 L40,95 L15,65 L50,50 L55,12 Z"
                  fill="none"
                  stroke="url(#avatarGradient)"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                />
                <defs>
                  <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--brand)" />
                    <stop offset="50%" stopColor="var(--brand-2)" />
                    <stop offset="100%" stopColor="var(--brand-3)" />
                  </linearGradient>
                </defs>
              </motion.svg>

              {/* Inner counter-rotating circular accent */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border border-double border-accent/20 p-2"
              />

              {/* Corner tech brackets - animates inwards/glows on hovering the HUD container */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent transition-all duration-300 group-hover/hud:-translate-x-1 group-hover/hud:-translate-y-1 group-hover/hud:border-brand-3" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-accent transition-all duration-300 group-hover/hud:translate-x-1 group-hover/hud:-translate-y-1 group-hover/hud:border-brand-3" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-accent transition-all duration-300 group-hover/hud:-translate-x-1 group-hover/hud:translate-y-1 group-hover/hud:border-brand-3" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent transition-all duration-300 group-hover/hud:translate-x-1 group-hover/hud:translate-y-1 group-hover/hud:border-brand-3" />

              {/* Glowing background behind image */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-brand via-brand-2 to-brand-3 opacity-15 blur-xl animate-pulse-glow" />

              {/* Core Avatar Container - Masked into a custom geometric shape to match reference layout */}
              <div
                style={{ clipPath: "polygon(30% 0%, 70% 0%, 95% 20%, 100% 50%, 95% 80%, 70% 100%, 30% 100%, 5% 80%, 0% 50%, 5% 20%)" }}
                className="relative w-[85%] h-[85%] overflow-hidden border border-white/10 glass shadow-2xl group/avatar"
              >
                <img
                  src="/avatar.png"
                  alt={PROFILE.name}
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover/avatar:scale-110"
                />

                {/* Horizontal moving laser line */}
                <motion.div
                  animate={{ translateY: ["0%", "300px", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-80"
                />

                {/* Dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Holographic tech info overlay badges - floating asynchronously */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -right-4 top-1/4 glass px-3 py-1.5 rounded-lg border border-accent/30 font-mono text-[9px] text-accent flex items-center gap-1.5 shadow-lg backdrop-blur-md animate-float-badge-1"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
                <span>CORE_STATUS: ACTIVE</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-6 bottom-1/4 glass px-3 py-1.5 rounded-lg border border-brand-3/30 font-mono text-[9px] text-brand-3 flex items-center gap-1.5 shadow-lg backdrop-blur-md animate-float-badge-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-3 animate-pulse" />
                <span>SYS_TEMP: NOMINAL</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-20 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-xl hover:gradient-border-glow"
            >
              <div className="font-display text-3xl font-semibold tracking-tight">
                <span className="gradient-text">{s.value}</span>
                {s.suffix && (
                  <span className="ml-1 text-base text-muted-foreground">{s.suffix}</span>
                )}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
