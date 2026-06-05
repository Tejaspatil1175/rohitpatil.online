import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Mail } from "lucide-react";
import { PROFILE } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-none px-6 md:px-16 lg:px-24 xl:px-32 flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name}. Crafted with Generative AI, MCP & care.
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-lg glass hover:bg-white/10"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-lg glass hover:bg-white/10"
          >
            <FaLinkedinIn className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-lg glass hover:bg-white/10"
          >
            <FaGithub className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
