import { motion } from "framer-motion";
import { Briefcase, Check } from "lucide-react";
import { Section } from "./Section";
import { EXPERIENCE } from "./data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          A short timeline, <span className="gradient-text">long on impact</span>.
        </>
      }
    >
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:left-6" />
        <div className="space-y-8">
          {EXPERIENCE.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12 md:pl-16"
            >
              <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30 md:left-2 md:h-9 md:w-9">
                <Briefcase className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold">{job.role}</h3>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                <div className="mt-1 text-sm text-accent">{job.company}</div>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {job.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
