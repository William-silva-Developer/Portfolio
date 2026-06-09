import { motion } from "framer-motion";
import {
  Container,
  Database,
  Globe,
  Network,
  Plug,
  Smartphone,
} from "lucide-react";
import { SectionHeader } from "./sectionHeader";

const items = [
  {
    icon: Smartphone,
    title: "Desenvolvimento Mobile",
    desc: "Apps multiplataforma com React Native e Expo, prontos para iOS e Android.",
  },
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    desc: "Plataformas Next.js performáticas, SEO-friendly e com renderização híbrida.",
  },
  {
    icon: Network,
    title: "Arquitetura Escalável",
    desc: "Modelagem pensada para crescer — do MVP ao tráfego de produção.",
  },
  {
    icon: Plug,
    title: "Integração de APIs",
    desc: "Consumo e construção de REST APIs robustas, webhooks e integrações de terceiros.",
  },
  {
    icon: Database,
    title: "Banco de Dados",
    desc: "PostgreSQL e Supabase com índices, RLS e migrations versionadas.",
  },
  {
    icon: Container,
    title: "Deploy e Docker",
    desc: "Pipelines, containerização e ambientes reprodutíveis do dev ao prod.",
  },
];

export function Differentials() {
  return (
    <section className="section-padding relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="05 — Diferenciais"
          title="O que entrego além do código."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-card hover:bg-card-hover/40 group rounded-2xl p-6 transition-all hover:border-primary/30"
            >
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-transform group-hover:scale-110">
                <it.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
