import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import cvtEspacial from "../public/project-cvte.png";
import rotafx from "../public/project-rotafx.png";
import seguranca from "../public/project-seguranca.png";
import siped from "../public/project-siped.png";
import { SectionHeader } from "./sectionHeader";

const projects = [
  {
    name: "Segurança Cidadã - RN",
    category: "Aplicativo Institucional",
    description:
      "Aplicativo institucional para apoio operacional, com gestão de ocorrências, comunicação interna e georreferenciamento em tempo real.",
    tech: ["React Native", "Expo", "Spring Boot"],
    image: seguranca,
    link: "https://apps.apple.com/br/app/seguran%C3%A7a-cidad%C3%A3-rn/id6755788914",
  },
  {
    name: "RotaFx",
    category: "Aplicativo Institucional",
    description:
      "Aplicativo de apoio operacional para servidores da segurança pública, com acesso a informações operacionais e suporte a atividades institucionais.",
    tech: ["React Native", "Expo", "TypeScript"],
    image: rotafx,
    link: "https://play.google.com/store/apps/details?id=br.gov.rn.sesed.rotafx&hl=pt_BR",
  },
  {
    name: "SIPED",
    category: "Aplicativo Institucional",
    description:
      "Sistema desenvolvido para apoio à segurança pública no monitoramento e localização de pessoas desaparecidas, utilizado em contexto institucional.",
    tech: ["React Native", "Android", "API REST"],
    image: siped,
    link: "https://play.google.com/store/apps/details?id=com.ctinf.SIPED&hl=pt",
  },
  //   {
  //     name: "Frota RN",
  //     category: "Mobile • Gestão",
  //     description:
  //       "Sistema de gestão da utilização de veículos institucionais, com controle de uso, registros operacionais e relatórios de deslocamento.",
  //     tech: ["React Native", "Expo", "TypeScript", "Supabase"],
  //     image: veiculos,
  //   },
  {
    name: "CVT-Espacial",
    category: "Web • Educação & Pesquisa",
    description:
      "Plataforma educacional voltada para atividades de ciência e tecnologia espacial, com simulações, oficinas e experiências interativas.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    image: cvtEspacial,
    link: "https://cvt-espacial.ifrn.edu.br/",
  },
  //   {
  //     name: "MeuControle",
  //     category: "SaaS",
  //     description:
  //       "Sistema para gerenciamento de clientes, serviços, agenda e cobranças. Pensado para pequenos negócios e profissionais autônomos.",
  //     tech: ["Next.js", "Supabase", "TailwindCSS", "Stripe"],
  //     image: meucontrole,
  //   },
  //   {
  //     name: "Plataforma de Estudos de Idiomas",
  //     category: "Web • Educação",
  //     description:
  //       "Plataforma de estudo de idiomas com lições, flashcards e acompanhamento de progresso, desenvolvida com Next.js e Supabase.",
  //     tech: ["Next.js", "Supabase", "TypeScript", "TailwindCSS"],
  //     image: idiomas,
  //   },
];

export function Projects() {
  return (
    <section id="projetos" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="03 — Trabalhos"
          title="Projetos selecionados."
          description="Uma seleção de produtos que entreguei — aplicativos mobile institucionais e plataformas web em produção."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`glass-card group overflow-hidden rounded-3xl transition-all hover:-translate-y-1 hover:border-primary/40 ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <div className="aspect-16/10 relative overflow-hidden bg-card">
                <Image
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="bg-linear-to-t absolute inset-0 from-background via-background/30 to-transparent" />
                <span className="absolute left-4 top-4 rounded-md border border-white/10 bg-background/70 px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-primary backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold md:text-2xl">{p.name}</h3>
                  <div className="flex gap-1.5 opacity-0 transition-opacity group-hover:opacity-100">
                    <a
                      href="#"
                      className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-primary/20 hover:text-primary"
                      aria-label="Demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-primary/20 hover:text-primary"
                      aria-label="Repositório"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
