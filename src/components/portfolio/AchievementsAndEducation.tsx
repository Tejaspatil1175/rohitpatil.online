import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Section } from "./Section";
import { ACHIEVEMENTS, EDUCATION } from "./data";

export function AchievementsAndEducation() {
  return (
    <Section
      id="achievements"
      eyebrow="Recognition"
      title={
        <>
          Achievements & <span className="gradient-text">Education</span>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((a, i) => {
          const Icon =
            (Icons as unknown as Record<string, Icons.LucideIcon>)[a.icon] ?? Icons.Award;
          return (
            <motion.div
              key={a.text}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass flex items-start gap-3 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:gradient-border-glow"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm text-foreground/90">{a.text}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12">
        <h3 className="mb-5 font-display text-xl font-semibold">Education</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {EDUCATION.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-2xl p-6"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                {e.period}
              </div>
              <div className="mt-2 font-display text-lg font-semibold">{e.degree}</div>
              <div className="mt-1 text-sm text-muted-foreground">{e.school}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
