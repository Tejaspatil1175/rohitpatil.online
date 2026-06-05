import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"]
];

const TYPING_SEQUENCE = [
  { key: "R", time: 400 },
  { key: "O", time: 800 },
  { key: "H", time: 1200 },
  { key: "I", time: 1600 },
  { key: "T", time: 2000 }
];

function Key3D({ char, isActive }: { char: string; isActive: boolean }) {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: `translateZ(${isActive ? "2px" : "8px"})`,
        transition: "transform 0.1s ease-out, background-color 0.2s, box-shadow 0.2s",
      }}
      className={`
        relative w-11 h-11 rounded-md border font-sans font-bold text-xs flex items-center justify-center cursor-pointer select-none
        ${
          isActive
            ? "bg-gradient-to-tr from-primary to-accent border-primary text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]"
            : "bg-white border-black/10 text-neutral-800 hover:bg-neutral-50 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
        }
      `}
    >
      {/* Front Face of Keycap (creates the 3D depth) */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[6px] origin-bottom translate-y-[6px] rounded-b-md border-x border-b transition-colors
          ${isActive ? "bg-primary/80 border-primary/40" : "bg-neutral-200/90 border-neutral-300/40"}`}
        style={{
          transform: "rotateX(-90deg) translateZ(-3px)",
        }}
      />
      {/* Left Face */}
      <div
        className={`absolute top-0 bottom-0 left-0 w-[6px] origin-left -translate-x-[6px] rounded-l-md border-y border-l transition-colors
          ${isActive ? "bg-primary/70 border-primary/40" : "bg-neutral-200/80 border-neutral-300/40"}`}
        style={{
          transform: "rotateY(-90deg) translateZ(-3px)",
        }}
      />
      {/* Right Face */}
      <div
        className={`absolute top-0 bottom-0 right-0 w-[6px] origin-right translate-x-[6px] rounded-r-md border-y border-r transition-colors
          ${isActive ? "bg-primary/70 border-primary/40" : "bg-neutral-200/80 border-neutral-300/40"}`}
        style={{
          transform: "rotateY(90deg) translateZ(-3px)",
        }}
      />
      {/* Key text label */}
      <span className="relative z-10">{char}</span>
    </div>
  );
}

export function KeyboardIntro({ onComplete }: { onComplete: () => void }) {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [typedText, setTypedText] = useState("");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse coordinates for 3D parallax orbit tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Console logging timeline
    const logTimers = [
      setTimeout(() => setConsoleLogs(["[CUDA] Initializing NVIDIA CUDA toolkit driver..."]), 100),
      setTimeout(() => setConsoleLogs((prev) => [...prev, "[CUDA] Allocated GPU VRAM contexts (Device 0: NVIDIA H100 SXM5)"]), 300),
      setTimeout(() => setConsoleLogs((prev) => [...prev, "[LLM_SERVER] Connecting to node tunnel: ws://llm.rohit.ai:8080"]), 600),
      setTimeout(() => setConsoleLogs((prev) => [...prev, "[MODEL] Pre-loading model weights: Llama-3.3-70B-Instruct (4-bit quant)"]), 950),
      setTimeout(() => setConsoleLogs((prev) => [...prev, "[RAG] Mounting hybrid search index context pool..."]), 1300),
      setTimeout(() => setConsoleLogs((prev) => [...prev, "[RAG] Vector database cluster connected (Pinecone-Serverless)"]), 1600),
      setTimeout(() => setConsoleLogs((prev) => [...prev, "[AUTH] Access token decrypted: root@rohit.ai"]), 1950),
      setTimeout(() => setConsoleLogs((prev) => [...prev, "[SYS] Tunnel SECURED. Mounting dashboard..."]), 2300),
    ];

    // Keyboard typing simulation
    const keyTimers = TYPING_SEQUENCE.map((step) => {
      return setTimeout(() => {
        setActiveKey(step.key);
        setTypedText((prev) => prev + step.key);
        // Reset active key highlight shortly after press
        setTimeout(() => setActiveKey(null), 200);
      }, step.time);
    });

    // Exit timeout (3 seconds total animation)
    const exitTimer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(onComplete, 600); // Wait for fade out animation
    }, 3000);

    return () => {
      logTimers.forEach(clearTimeout);
      keyTimers.forEach(clearTimeout);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  // Calculate dynamic 3D angles based on mouse parallax
  const rotateX = mousePos.y * -28 + 16;
  const rotateY = mousePos.x * 28;

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden font-mono px-4 select-none"
        >
          {/* Subtle background grids & radial lights (themed off-white) */}
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
          <div className="absolute inset-0 radial-glow opacity-80 pointer-events-none" />
          
          <div className="relative w-full max-w-4xl flex flex-col items-center gap-10">
            {/* Header / Decoder Console */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold mb-2">Secure Decryption Shell</h2>
              <div className="flex items-center justify-center gap-3 h-16 px-8 rounded-xl bg-white/60 border border-black/5 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.04)] min-w-[280px]">
                <span className="text-xl font-bold tracking-[0.25em] text-neutral-800">
                  {typedText}
                </span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2.5 h-5 bg-primary"
                />
              </div>
            </motion.div>

            {/* Futuristic 3D Mechanical Keyboard Container */}
            <motion.div
              initial={{ opacity: 0, rotateX: 30, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, rotateX, rotateY, y: 0, scale: 1 }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
              style={{ transformStyle: "preserve-3d" }}
              className="w-full max-w-2xl bg-white/80 p-6 rounded-2xl border border-black/5 shadow-[0_25px_60px_rgba(0,0,0,0.06)] backdrop-blur-md flex flex-col gap-3.5 relative"
            >
              {/* LED glow bar on the top edge of keyboard */}
              <div className="absolute -top-[1px] left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              
              {KEYBOARD_ROWS.map((row, rIdx) => (
                <div key={rIdx} className="flex justify-center gap-2" style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }}>
                  {rIdx === 1 && <div className="w-4" />} {/* Spacer for Home Row */}
                  {rIdx === 2 && <div className="w-10" />} {/* Spacer for Bottom Row */}
                  
                  {row.map((char) => (
                    <Key3D key={char} char={char} isActive={activeKey === char} />
                  ))}
                  {rIdx === 1 && <div className="w-4" />}
                  {rIdx === 2 && <div className="w-10" />}
                </div>
              ))}

              {/* Spacebar & Action Keys row */}
              <div className="flex justify-center gap-2" style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }}>
                <div className="flex items-center justify-center px-3 h-11 rounded-lg border border-black/5 bg-white text-[10px] font-bold text-neutral-400 w-16 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">Ctrl</div>
                <div className="flex items-center justify-center px-3 h-11 rounded-lg border border-black/5 bg-white text-[10px] font-bold text-neutral-400 w-16 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">Alt</div>
                
                {/* Spacebar 3D Box */}
                <div 
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(8px)",
                  }}
                  className="flex-1 max-w-[280px] h-11 rounded-lg border border-black/10 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                >
                  {/* Spacebar Z-sides */}
                  <div className="absolute bottom-0 left-0 right-0 h-[6px] origin-bottom translate-y-[6px] bg-neutral-200/90 border-x border-b border-neutral-300/40" style={{ transform: "rotateX(-90deg) translateZ(-3px)" }} />
                  <div className="absolute top-0 bottom-0 left-0 w-[6px] origin-left -translate-x-[6px] bg-neutral-200/80 border-y border-l border-neutral-300/40" style={{ transform: "rotateY(-90deg) translateZ(-3px)" }} />
                  <div className="absolute top-0 bottom-0 right-0 w-[6px] origin-right translate-x-[6px] bg-neutral-200/80 border-y border-r border-neutral-300/40" style={{ transform: "rotateY(90deg) translateZ(-3px)" }} />
                </div>
                
                <div className="flex items-center justify-center px-3 h-11 rounded-lg border border-black/5 bg-white text-[10px] font-bold text-neutral-400 w-16 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">Alt</div>
                <div className="flex items-center justify-center px-3 h-11 rounded-lg border border-black/5 bg-white text-[10px] font-bold text-neutral-400 w-16 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">Ctrl</div>
              </div>
            </motion.div>

            {/* Diagnostic Terminal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full max-w-lg bg-white/80 border border-black/5 rounded-xl p-4 flex flex-col gap-1.5 h-36 overflow-hidden text-left shadow-[0_8px_30px_rgba(0,0,0,0.03)] backdrop-blur-md"
            >
              <div className="flex items-center gap-2 border-b border-black/5 pb-2 mb-1">
                <Terminal className="h-3.5 w-3.5 text-primary animate-pulse" />
                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">LLM Node Connection Logs</span>
              </div>
              <div className="flex flex-col gap-1 text-[11px] text-neutral-600 overflow-y-auto font-mono scrollbar-none">
                {consoleLogs.map((log, idx) => {
                  let colorClass = "text-neutral-500";
                  if (log.includes("[CUDA]")) colorClass = "text-primary/90 font-medium";
                  if (log.includes("[LLM_SERVER]")) colorClass = "text-accent/90 font-medium";
                  if (log.includes("SECURED")) colorClass = "text-green-600 font-bold";
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className={colorClass}
                    >
                      {log}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
