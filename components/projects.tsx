import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

import barber from "../public/barber.png";
import cvtEspacial from "../public/project-cvte.png";
import pet from "../public/project-pet.png";
import rotafx from "../public/project-rotaFx.png";
import seguranca from "../public/project-seguranca-rn.png";
import siped from "../public/project-siped.png";

import { SectionHeader } from "./sectionHeader";

type Project = {
  name: string;
  category: string;
  description: string;
  tech: string[];
  image: any;
  link?: string;
  repoLink?: string;
  type: "professional" | "study";
};

const projects: Project[] = [
  {
    name: "Segurança Cidadã - RN",
    category: "Aplicativo Institucional",
    description:
      "Aplicativo institucional para apoio operacional, com gestão de ocorrências, comunicação interna e georreferenciamento em tempo real.",
    tech: ["React Native", "Expo", "Spring Boot"],
    image: seguranca,
    link: "https://apps.apple.com/br/app/seguran%C3%A7a-cidad%C3%A3-rn/id6755788914",
    repoLink: "https://github.com/William-silva-Developer",
    type: "professional",
  },
  {
    name: "RotaFx",
    category: "Aplicativo Institucional",
    description:
      "Aplicativo de apoio operacional para servidores da segurança pública, com acesso a informações operacionais e suporte a atividades institucionais.",
    tech: ["React Native", "Expo", "TypeScript"],
    image: rotafx,
    link: "https://play.google.com/store/apps/details?id=br.gov.rn.sesed.rotafx&hl=pt_BR",
    repoLink: "https://github.com/William-silva-Developer",
    type: "professional",
  },
  {
    name: "SIPED",
    category: "Aplicativo Institucional",
    description:
      "Sistema desenvolvido para apoio à segurança pública no monitoramento e localização de pessoas desaparecidas.",
    tech: ["React Native", "Android", "API REST"],
    image: siped,
    link: "https://play.google.com/store/apps/details?id=com.ctinf.SIPED&hl=pt",
    repoLink: "https://github.com/William-silva-Developer",
    type: "professional",
  },
  {
    name: "CVT-Espacial",
    category: "Web • Educação & Pesquisa",
    description:
      "Portal educacional desenvolvido para o CVT Espacial, reunindo conteúdos, projetos e iniciativas voltadas à divulgação científica e tecnologia espacial.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    image: cvtEspacial,
    link: "https://cvt-espacial.ifrn.edu.br/",
    repoLink: "https://github.com/William-silva-Developer",
    type: "professional",
  },
  {
    name: "Barber Hair",
    category: "Landing Page",
    description:
      "Landing page responsiva para uma barbearia, desenvolvida para estudo de interfaces modernas, animações e boas práticas de desenvolvimento web.",
    tech: ["HTML", "SCSS", "JavaScript"],
    image: barber,
    link: "https://barber-hair.vercel.app/",
    repoLink: "https://github.com/William-silva-Developer/BarberHair",
    type: "study",
  },
  {
    name: "Pet Rust",
    category: "Landing Page",
    description:
      "Landing page para divulgação e adoção de animais, desenvolvida para praticar construção de interfaces, responsividade e experiência do usuário.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    image: pet,
    link: "https://pet-rust.vercel.app/",
    repoLink: "https://github.com/William-silva-Developer/pet",
    type: "study",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="03 — Trabalhos"
          title="Projetos selecionados."
          description="Aplicações mobile institucionais, plataformas web e projetos que demonstram minha experiência em desenvolvimento de software."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              // className={`glass-card group overflow-hidden rounded-3xl transition-all hover:-translate-y-1 hover:border-primary/40 ${
              //   i === 0 ? "md:col-span-2" : ""
              // }`}
              className="glass-card group overflow-hidden rounded-3xl transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div
                className={`relative overflow-hidden bg-card ${
                  i === 0 ? "object-contain" : "aspect-16/10"
                }`}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="bg--to-t absolute inset-0 from-background via-background/30 to-transparent" />

                <div className="absolute left-4 top-4 flex gap-2">
                  <span className="rounded-md border border-white/10 bg-background/70 px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-primary backdrop-blur">
                    {p.category}
                  </span>

                  {p.type === "study" && (
                    <span className="rounded-md border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-400">
                      Estudo
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold md:text-2xl">{p.name}</h3>

                  <div className="flex gap-1.5 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-primary/20 hover:text-primary"
                        aria-label={`Abrir ${p.name}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}

                    {p.repoLink && (
                      <a
                        href={p.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-primary/20 hover:text-primary"
                        aria-label={`Repositório ${p.name}`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
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
