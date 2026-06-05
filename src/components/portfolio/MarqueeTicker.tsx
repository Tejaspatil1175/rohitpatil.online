export function MarqueeTicker() {
  const items = [
    "Agentic AI Systems",
    "RAG Architecture",
    "Model Context Protocol",
    "LLM Orchestration",
    "Autonomous Agents",
    "Fine-Tuning",
    "Context Engineering",
    "Deep Learning",
    "Enterprise AI Pipelines"
  ];

  // Repeat twice for seamless infinite scrolling
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-white text-black py-2.5 -rotate-1 scale-[1.01] origin-center z-10 shadow-[0_6px_20px_rgba(0,0,0,0.15)] mt-2 mb-10">
      {/* Outer wrapper to contain animation */}
      <div className="flex w-max items-center animate-marquee">
        {marqueeItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 px-3 font-display text-xs font-semibold tracking-[0.15em] uppercase text-black"
          >
            <span>{item}</span>
            <span className="text-primary/70 font-sans text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
