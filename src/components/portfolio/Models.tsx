import { motion } from "framer-motion";
import { Section as _S } from "./Section";
import { MODELS } from "./data";



export function Models() {
  return (
    <_S
      id="models"
      eyebrow="Model Evaluation"
      title={
        <>
          <span className="gradient-text">40+ models</span> evaluated across providers.
        </>
      }
      description="Hands-on benchmarking across reasoning, latency, cost, and tool-use for production fit."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {MODELS.map((m, i) => (
          <motion.div
            key={m.provider}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:gradient-border-glow"
          >
            <div className="font-display text-lg font-semibold">{m.provider}</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              {m.models.length} models
            </div>
            <ul className="mt-4 space-y-1.5">
              {m.models.map((md) => (
                <li
                  key={md}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="h-1 w-1 rounded-full bg-accent/70" />
                  {md}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid place-items-center">
        <div className="glass gradient-border-glow rounded-2xl px-8 py-6 text-center">
          <div className="font-display text-5xl font-semibold">
            <span className="gradient-text">40+</span>
          </div>
          <div className="mt-1 text-sm text-muted-foreground">
            Foundation models benchmarked end-to-end
          </div>
        </div>
      </div>
    </_S>
  );
}
