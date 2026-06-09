import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="glass-card flex items-center justify-between rounded-2xl px-5 py-3">
          <a
            href="#top"
            className="font-display flex items-center gap-2 font-semibold"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <Code2 className="h-4 w-4 text-background" />
            </span>
            <span className="text-foreground">
              dev<span className="gradient-text">.portfolio</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contato"
            className="rounded-lg border border-white/10 bg-foreground/5 px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground/10"
          >
            Contratar
          </a>
        </div>
      </div>
    </motion.header>
  );
}
