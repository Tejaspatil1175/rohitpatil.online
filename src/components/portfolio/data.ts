export const PROFILE = {
  name: "Rohit Patil",
  roles: [
    "AI/ML Engineer",
    "GenAI Specialist",
    "Agentic AI Architect",
    "MCP Server Engineer",
    "LLM Orchestration",
  ],
  tagline:
    "Building Intelligent AI Systems, Agentic Workflows, and Enterprise-Scale Generative AI Solutions.",
  about:
    "AI/ML Engineer with expertise in RAG systems, Model Context Protocol (MCP), Agentic AI architectures, LLM orchestration, and enterprise AI solutions. Experienced in designing scalable AI systems, evaluating cutting-edge foundation models, and transforming complex business requirements into production-ready AI products.",
  phone: "9022552692",
  email: "rohitp2001k@gmail.com",
  location: "Pune, Maharashtra, India",
  linkedin: "https://linkedin.com/in/rohitpatill",
  github: "https://github.com/rohitpatill",
};

export const STATS = [
  { label: "Experience", value: "2+", suffix: "Yrs" },
  { label: "AI Agents Built", value: "20+" },
  { label: "MCP Servers", value: "15+" },
  { label: "GenAI Pipelines", value: "30+" },
  { label: "POCs Delivered", value: "20+" },
];

export const SKILL_GROUPS = [
  {
    title: "Programming",
    icon: "Code2",
    items: ["Python", "JavaScript", "SQL", "Java"],
  },
  {
    title: "AI & GenAI",
    icon: "Sparkles",
    items: [
      "OpenAI",
      "Claude",
      "Gemini",
      "LangChain",
      "Hugging Face",
      "Prompt Engineering",
      "Context Engineering",
      "Model Evaluation",
    ],
  },
  {
    title: "Agentic AI",
    icon: "Bot",
    items: [
      "MCP",
      "Multi-Agent Systems",
      "Tool Orchestration",
      "Autonomous Agents",
      "Workflow Automation",
    ],
  },
  {
    title: "RAG & Vector DBs",
    icon: "Network",
    items: ["Pinecone", "ChromaDB", "FAISS", "BM25", "Semantic Search", "Contextual Chunking"],
  },
  {
    title: "Databases",
    icon: "Database",
    items: ["MongoDB", "MySQL", "Firebase", "Neo4j", "InfluxDB"],
  },
  {
    title: "Cloud & Deployment",
    icon: "Cloud",
    items: ["Docker", "AWS S3", "FastAPI", "Express.js", "REST APIs"],
  },
];

export const EXPERIENCE = [
  {
    role: "AI/ML Engineer",
    company: "Indicus Software",
    period: "June 2024 – Present",
    points: [
      "Core developer of NeoPilot AI platform",
      "Built 20+ AI Agents across enterprise workflows",
      "Developed 30+ GenAI Pipelines for production use",
      "Created 10+ MCP Servers including a Memory MCP using semantic search",
      "Conducted enterprise AI consulting and architecture reviews",
      "Evaluated 40+ LLM models for capability & cost",
      "Delivered 20+ enterprise AI POCs",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Vforesee Technologies",
    period: "Jun 2023 – Aug 2023",
    points: [
      "Built CropConnect Android App",
      "Firebase integration for realtime data & auth",
      "AI Chatbot powered by OpenAI API",
      "User authentication system",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Symposium",
    year: "2026",
    category: "Agentic AI",
    tagline: "A curious experiment: what if AI agents communicated the way humans actually do in a group conversation?",
    description: "I was thinking about how AI agents work together. There are lots of frameworks out there where agents collaborate on tasks, build things, solve problems. But something kept nagging at me: when agents talk to each other, it doesn't sound like humans talking. It sounds like functions calling functions. And I started wondering — what would it actually take to make an agent conversation feel like a real meeting?\n\nSo I started thinking about what happens when humans sit in a room and talk. How do we actually decide who speaks next? What's the difference between what we think and what we say? Why do we remember things differently? And I realized there are patterns in human conversation that most of the agent frameworks are not replicating honestly.\n\nThat's what Symposium is. One attempt at building a framework where agents talk more like humans actually do.",
    highlights: [],
    tech: ["Agentic Frameworks", "LLM Conversation", "NLP Patterns"],
    github: "https://github.com/rohitpatill/Symposium",
  },
  {
    title: "Smriti",
    year: "2026",
    category: "Voice AI & Graph DB",
    tagline: "A second brain that doesn't store what you know — it remembers who you are.",
    description: "Smriti is a voice-first agent that quietly maintains a living model of you. You talk to it like a friend; it listens, responds, and silently rewires a markdown graph in the background — a graph that, over time, becomes the closest thing to a digital snapshot of your awakening mind.\n\nThe vault sits in a plain folder. Open it in Obsidian and you'll see the shape of your own life: the people closest to you, the projects you're inside of right now, the events on the horizon, the threads you're chasing this week — all linked, all dated, all evolving as you keep talking.\n\nYou never edit a file. You just speak.",
    highlights: [],
    tech: ["Voice Agent", "Obsidian API", "Markdown Graph", "RAG"],
    github: "https://github.com/rohitpatill/Smriti",
  },
  {
    title: "Hierarchical MCP Server Architecture",
    year: "2025",
    category: "Agentic AI",
    highlights: [
      "95.4% complexity reduction",
      "120+ internal tools abstracted",
      "Distributed AI reasoning",
      "Multi-service orchestration",
    ],
    tech: ["Node.js", "MCP Protocol", "LLMs"],
    github: "https://github.com/rohitpatill/mcp-hierarchical-memory",
  },
  {
    title: "CodeCrafter MCP Server",
    year: "2025",
    category: "Agentic AI",
    highlights: [
      "15+ AI development tools",
      "Desktop Extension",
      "AI Codebase Integration",
      "20-50% productivity improvement",
    ],
    tech: ["Node.js", "MCP", "Desktop Extension"],
    github: "https://github.com/rohitpatill/codecrafter-mcp-server",
  },
  {
    title: "MedSymptomGPT",
    year: "2024",
    category: "LLM Fine-tuning",
    highlights: [
      "Fine-tuned DistilGPT-2",
      "Disease symptom prediction",
      "Medical NLP pipeline",
    ],
    tech: ["PyTorch", "Hugging Face", "Streamlit"],
    github: "https://github.com/rohitpatill/MedSymptomGPT",
  },
  {
    title: "CropConnect",
    year: "2023",
    category: "Mobile + AI",
    highlights: [
      "Google Play Store Application",
      "Farmer-to-Consumer Marketplace",
      "Integrated AI Chatbot",
    ],
    tech: ["Android", "Firebase", "Java", "OpenAI"],
  },
];

export const MODELS = [
  {
    provider: "OpenAI",
    models: ["GPT-3.5", "GPT-4", "GPT-4o", "GPT-4.1", "GPT-5", "O1", "O3"],
  },
  {
    provider: "Anthropic",
    models: ["Claude 3.5", "Claude 4", "Claude 4.1", "Claude 4.5"],
  },
  {
    provider: "Google",
    models: ["Gemini 1", "Gemini 1.5", "Gemini 2.0", "Gemini 2.5 Flash", "Gemini 2.5 Pro"],
  },
  {
    provider: "Open Models",
    models: ["Llama", "Mistral", "DeepSeek", "Grok", "Qwen"],
  },
];

export const ACHIEVEMENTS = [
  { icon: "Trophy", text: "Winner — Idea X Ignition Competition" },
  { icon: "Trophy", text: "Winner — Case Study Competition" },
  { icon: "Medal", text: "Runner-Up — On Spot Creativity Competition" },
  { icon: "GraduationCap", text: "Guest Lecturer — Graph Databases" },
  { icon: "Award", text: "Gold Medal — High Jump" },
  { icon: "Crown", text: "Division Level Chess Player" },
];

export const EDUCATION = [
  {
    degree: "Master of Computer Application (MCA)",
    school: "MES IMCC Pune",
    period: "2022 – 2024",
  },
  {
    degree: "Bachelor of Science (B.Sc.)",
    school: "R.C. Patel College",
    period: "2019 – 2022",
  },
];
