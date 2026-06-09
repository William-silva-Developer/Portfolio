import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeader } from "./sectionHeader";

const points = [
  "Foco em aplicações mobile e sistemas institucionais",
  "Integração robusta com REST APIs e webhooks",
  "Bancos PostgreSQL e arquitetura de dados escalável",
  "Containerização com Docker e pipelines de deploy",
];

const stats = [
  { value: "10+", label: "Projetos Desenvolvidos" },
  { value: "6", label: "Aplicativos Publicados" },
  { value: "5+", label: "Tecnologias Dominadas" },
  { value: "4+", label: "Anos de Experiência" },
];

export function About() {
  return (
    <section id="sobre" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="01 — Sobre"
          title="Engenharia de produto, do mobile ao deploy."
          description="Construo produtos digitais completos, combinando experiência do usuário, arquitetura escalável e confiabilidade em produção."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p className="text-lg text-foreground/90">
              Sou desenvolvedor Full Stack com forte especialização em
              aplicações mobile multiplataforma usando{" "}
              <span className="font-medium text-foreground">
                React Native + Expo
              </span>{" "}
              e plataformas web modernas com{" "}
              <span className="font-medium text-foreground">Next.js</span> e{" "}
              <span className="font-medium text-foreground">TypeScript</span>.
            </p>
            <p>
              Atuo desde a concepção da arquitetura até o deploy, passando por
              API design, modelagem de banco de dados com PostgreSQL/Supabase,
              autenticação, integrações e observabilidade. Já entreguei sistemas
              institucionais críticos em produção.
            </p>
            <ul className="grid gap-3 pt-4 sm:grid-cols-2">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-foreground/85">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card hover:bg-card-hover/40 group rounded-2xl p-6 transition-colors"
              >
                <div className="gradient-text text-4xl font-bold md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
