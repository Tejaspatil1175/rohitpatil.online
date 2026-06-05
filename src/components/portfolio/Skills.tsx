import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Section } from "./Section";
import { SKILL_GROUPS } from "./data";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Stack"
      title={
        <>
          The toolkit behind the <span className="gradient-text">agents</span>.
        </>
      }
      description="A pragmatic stack tuned for shipping production-grade AI systems."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, i) => {
          const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[group.icon] ?? Icons.Sparkles;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass group rounded-2xl p-6 transition-all hover:-translate-y-1 hover:gradient-border-glow"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/30 to-accent/30">
                  <Icon className="h-4.5 w-4.5 text-foreground" />
                </div>
                <h3 className="font-display text-base font-semibold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
