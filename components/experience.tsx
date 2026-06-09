import { motion } from "framer-motion";
import { SectionHeader } from "./sectionHeader";

const items = [
  {
    role: "Desenvolvedor Full Stack",
    company: "Projetos Institucionais — Segurança Pública",
    period: "2024 — Presente",
    description:
      "Atuação em aplicações mobile institucionais utilizadas em campo, com responsabilidade por arquitetura, integração com APIs, deploy e manutenção de sistemas em produção.",
    tech: ["React Native", "Expo", "Node.js", "Docker", "Spring Boot"],
  },
  {
    role: "Desenvolvedor Full Stack",
    company: "Projetos independentes • SaaS e Educação",
    period: "2021 — 2023",
    description:
      "Desenvolvimento de aplicações SaaS e plataformas educacionais, abrangendo desde a concepção até o deploy em produção.",
    tech: ["Next.js", "TypeScript", "Supabase", "TailwindCSS"],
  },
  {
    role: "Desenvolvedor Mobile",
    company: "Projetos mobile e aplicações institucionais",
    period: "2019 — 2021",
    description:
      "Desenvolvimento de aplicações mobile com React Native, integrando APIs REST e construindo soluções para diferentes contextos como educação e serviços.",
    tech: ["React Native", "Expo", "REST APIs", "Firebase"],
  },
];
export function Experience() {
  return (
    <section id="experiencia" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="04 — Trajetória"
          title="Experiência profissional."
          description="Anos construindo produtos digitais reais, com responsabilidade técnica de ponta a ponta."
        />

        <div className="relative border-l border-white/10 pl-6 md:pl-10">
          {items.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[33px] top-1.5 grid place-items-center md:-left-[49px]">
                <span className="glow-primary h-3 w-3 rounded-full bg-primary" />
                <span className="absolute h-6 w-6 animate-ping rounded-full bg-primary/20" />
              </span>
              <div className="glass-card hover:bg-card-hover/40 rounded-2xl p-6 transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold md:text-xl">{item.role}</h3>
                  <span className="font-mono text-xs uppercase tracking-wider text-primary">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.company}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
