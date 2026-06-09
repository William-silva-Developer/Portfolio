import { motion } from "framer-motion";
import {
  Atom,
  Cloud,
  Coffee,
  Cog,
  Container,
  Database,
  FileCode,
  GitBranch,
  Github,
  Gitlab,
  Leaf,
  Server,
  Smartphone,
  Triangle,
  Wind,
  Zap,
} from "lucide-react";
import { SectionHeader } from "./sectionHeader";

const groups = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: Atom },
      { name: "React Native", icon: Smartphone },
      { name: "Expo", icon: Zap },
      { name: "Next.js", icon: Triangle },
      { name: "TypeScript", icon: FileCode },
      { name: "TailwindCSS", icon: Wind },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Cog },
      { name: "Java", icon: Coffee },
      { name: "Spring Boot", icon: Leaf },
    ],
  },
  {
    title: "Banco de Dados",
    items: [
      { name: "PostgreSQL", icon: Database },
      { name: "Supabase", icon: Cloud },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Docker", icon: Container },
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "GitLab", icon: Gitlab },
    ],
  },
];

export function Technologies() {
  return (
    <section id="tecnologias" className="section-padding relative">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[160px]" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="02 — Stack"
          title="Ferramentas que uso todos os dias."
          description="Stack moderna, testada em produção, focada em performance, type-safety e experiência de desenvolvimento."
        />

        <div className="space-y-10">
          {groups.map((g, gi) => (
            <div key={g.title}>
              <h3 className="mb-4 font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground">
                {g.title}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {g.items.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: gi * 0.05 + i * 0.04 }}
                    className="glass-card hover:bg-card-hover/50 flex items-center gap-3 rounded-xl p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                      <t.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">{t.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
