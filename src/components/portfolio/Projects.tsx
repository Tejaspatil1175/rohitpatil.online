import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Section } from "./Section";
import { PROJECTS } from "./data";

export function Projects() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))],
    [],
  );
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title={
        <>
          Projects that push the <span className="gradient-text">frontier</span>.
        </>
      }
      description="From hierarchical MCP architectures to fine-tuned medical LLMs."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
              filter === c
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass group relative overflow-hidden rounded-2xl p-7 transition-all hover:-translate-y-1 hover:gradient-border-glow"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    {p.category} · {p.year}
                  </div>
                  {(p as any).github ? (
                    <a
                      href={(p as any).github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 hover:text-primary transition-colors mt-2"
                    >
                      <h3 className="font-display text-xl font-semibold group-hover/link:underline">{p.title}</h3>
                    </a>
                  ) : (
                    <h3 className="mt-2 font-display text-xl font-semibold">{p.title}</h3>
                  )}
                </div>
                {(p as any).github ? (
                  <a
                    href={(p as any).github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass hover:bg-primary/20 text-muted-foreground hover:text-foreground transition-all duration-300 shadow-sm flex items-center justify-center"
                    title="View GitHub Repository"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                ) : (
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
                )}
              </div>
              
              {(p as any).tagline && (
                <p className="mt-3.5 text-xs font-semibold text-foreground/85 italic border-l border-accent/40 pl-2">
                  "{(p as any).tagline}"
                </p>
              )}

              {(p as any).description ? (
                <div className="mt-3 space-y-2 text-xs text-muted-foreground leading-relaxed">
                  {((p as any).description as string).split("\n\n").map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              ) : (
                <ul className="mt-5 space-y-1.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-white/5 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
