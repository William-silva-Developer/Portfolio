import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./sectionHeader";

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+55 (84) 99422-2033",
    href: "https://wa.me/5584994222033",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "william958silva@gmail.com",
    href: "mailto:william958silva@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/william-desenvolvedor",
    href: "https://www.linkedin.com/in/william-desenvolvedor/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@William-silva-Developer",
    href: "https://github.com/William-silva-Developer",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contato" className="section-padding relative">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[150px]" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="06 — Contato"
          title="Vamos construir algo juntos?"
          description="Estou aberto a oportunidades, freelas e projetos institucionais. Responderei em até 24h."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="space-y-3 lg:col-span-2">
            {channels.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass-card hover:bg-card-hover/40 group flex items-center gap-4 rounded-xl p-4 transition-all hover:border-primary/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-transform group-hover:scale-110">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="truncate text-sm font-medium">{c.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
            }}
            className="glass-card space-y-4 rounded-3xl p-6 md:p-8 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nome" name="name" placeholder="Seu nome" />
              <Field
                label="E-mail"
                name="email"
                type="email"
                placeholder="voce@empresa.com"
              />
            </div>
            <Field
              label="Assunto"
              name="subject"
              placeholder="Sobre o que quer falar?"
            />
            <div className="space-y-1.5">
              <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Mensagem
              </label>
              <textarea
                required
                rows={5}
                placeholder="Conte um pouco sobre seu projeto..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-white/[0.07]"
              />
            </div>
            <button
              type="submit"
              className="glow-primary inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.01]"
            >
              <Send className="h-4 w-4" />
              {sent ? "Mensagem enviada ✓" : "Enviar Mensagem"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={name}
        className="font-mono text-xs uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-white/[0.07]"
      />
    </div>
  );
}
