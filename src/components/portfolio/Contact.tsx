import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { z } from "zod";
import { Section } from "./Section";
import { PROFILE } from "./data";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(80),
  email: z.string().trim().email("Valid email required").max(120),
  message: z.string().trim().min(5, "Message too short").max(1500),
});

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path[0] as string] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio inquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={
        <>
          Let's build something <span className="gradient-text">intelligent</span>.
        </>
      }
      description="Available for AI engineering roles, consulting, and ambitious agentic AI projects."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 lg:col-span-2"
        >
          <h3 className="font-display text-lg font-semibold">Contact details</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={`mailto:${PROFILE.email}`} className="group flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-accent" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="text-foreground group-hover:text-accent transition-colors">{PROFILE.email}</div>
                </div>
              </a>
            </li>
            <li>
              <a href={`tel:${PROFILE.phone}`} className="group flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-accent" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                  <div className="text-foreground group-hover:text-accent transition-colors">{PROFILE.phone}</div>
                </div>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Location</div>
                <div>{PROFILE.location}</div>
              </div>
            </li>
          </ul>
          <div className="mt-6 flex gap-2">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-xl glass hover:bg-white/10 transition-colors"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-xl glass hover:bg-white/10 transition-colors"
            >
              <FaGithub className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-6 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Your name" error={errors.name} />
            <Field name="email" label="Email" type="email" error={errors.email} />
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              maxLength={1500}
              className="w-full rounded-xl border border-input bg-white/[0.03] px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-primary/60 focus:ring-2 focus:ring-ring"
              placeholder="Tell me about your project, role, or idea…"
            />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02]"
          >
            {sent ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}
            {sent ? "Opening mail…" : "Send message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  name,
  label,
  type = "text",
  error,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        maxLength={200}
        className="w-full rounded-xl border border-input bg-white/[0.03] px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary/60 focus:ring-2 focus:ring-ring"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
