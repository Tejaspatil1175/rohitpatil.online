import { motion } from "framer-motion";
import { Brain, Workflow, Layers } from "lucide-react";
import { Section } from "./Section";
import { PROFILE } from "./data";

const PILLARS = [
  { icon: Brain, title: "RAG & LLM Engineering", text: "Pinecone, ChromaDB, semantic chunking, hybrid retrieval, evaluations." },
  { icon: Workflow, title: "Agentic AI & MCP", text: "Multi-agent orchestration, autonomous tool use, Model Context Protocol servers." },
  { icon: Layers, title: "Enterprise AI Systems", text: "Pipelines, POCs, model evaluation, and production-ready GenAI architectures." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          Engineering AI that <span className="gradient-text">actually ships</span>.
        </>
      }
      description={
        <>
          AI/ML Engineer with expertise in <span className="text-primary font-semibold">RAG systems</span>,{" "}
          <span className="text-accent font-semibold">Model Context Protocol (MCP)</span>,{" "}
          <span className="gradient-text font-semibold">Agentic AI architectures</span>,{" "}
          <span className="text-primary font-semibold">LLM orchestration</span>, and enterprise AI solutions.
          Experienced in designing scalable AI systems, evaluating cutting-edge{" "}
          <span className="text-accent font-semibold">foundation models</span>, and transforming complex
          business requirements into production-ready <span className="text-primary font-semibold">AI products</span>.
        </>
      }
    >
      <div className="grid gap-4 md:grid-cols-3">
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:gradient-border-glow"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-foreground">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
