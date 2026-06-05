import { useEffect, useState } from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Mail, ArrowUp } from "lucide-react";
import { PROFILE } from "./data";

export function FloatingSocials() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      {/* LinkedIn Link */}
      <a
        href={PROFILE.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="grid h-10 w-10 place-items-center rounded-full border border-black/5 bg-white shadow-md hover:bg-neutral-50 hover:scale-105 transition-all text-neutral-600 hover:text-[#0a66c2]"
      >
        <FaLinkedinIn className="h-4.5 w-4.5" />
      </a>

      {/* WhatsApp Link */}
      <a
        href={`https://wa.me/91${PROFILE.phone}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="grid h-10 w-10 place-items-center rounded-full border border-black/5 bg-white shadow-md hover:bg-neutral-50 hover:scale-105 transition-all text-neutral-600 hover:text-[#25d366]"
      >
        <FaWhatsapp className="h-5 w-5" />
      </a>

      {/* Email Link */}
      <a
        href={`mailto:${PROFILE.email}`}
        aria-label="Email"
        className="grid h-10 w-10 place-items-center rounded-full border border-black/5 bg-white shadow-md hover:bg-neutral-50 hover:scale-105 transition-all text-neutral-600 hover:text-primary"
      >
        <Mail className="h-4.5 w-4.5" />
      </a>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-md shadow-primary/20 hover:scale-105 hover:shadow-lg transition-all"
      >
        <ArrowUp className="h-4.5 w-4.5" />
      </button>
    </div>
  );
}
