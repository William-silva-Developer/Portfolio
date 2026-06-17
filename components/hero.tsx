import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* ambient backgrounds */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="h-125 w-125 absolute -left-32 top-1/3 rounded-full bg-primary/20 blur-[120px]" />
        <div className="h-120 w-120 absolute right-0 top-10 rounded-full bg-accent/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <Image
              src={"/image-profile.jpeg"}
              alt="Foto profissional"
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover shadow-lg ring-2 ring-primary/40"
            />
            <div className="flex flex-col">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />{" "}
                Disponível para projetos
              </span>
              <span className="mt-1.5 inline-flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" /> Rio Grande do Norte, Brasil
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
              William Silva<span className="text-primary">.</span>
            </h1>
            <p className="font-display text-2xl font-medium md:text-3xl">
              <span className="gradient-text">Desenvolvedor Full Stack</span>
            </p>
            <p className="font-mono text-sm tracking-wider text-muted-foreground">
              React Native • Expo • Next.js • TypeScript • Spring Boot
            </p>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Desenvolvo aplicações modernas para dispositivos móveis e web,
            criando soluções escaláveis, performáticas e com excelente
            experiência do usuário.
          </p>

          {/* <div className="flex items-center gap-3">
            <a
              href="https://github.com/William-silva-Developer"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all hover:border-primary/40 hover:text-primary"
            >
              <FaGithub size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/william-desenvolvedor/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all hover:border-primary/40 hover:text-primary"
            >
              <FaLinkedin size={16} />
            </a>
          </div> */}

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projetos"
              className="glow-primary bg-linear-to-r group inline-flex items-center gap-2 rounded-xl from-primary to-secondary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <Sparkles className="h-4 w-4" /> Ver Projetos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-foreground transition-colors hover:bg-white/10"
            >
              <Mail className="h-4 w-4" /> Entrar em Contato
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="animate-float relative"
        >
          <div className="glass-card glow-primary relative overflow-hidden rounded-3xl">
            <Image
              src={"/hero-visual.jpg"}
              alt="Composição visual de código, dashboard e aplicativo"
              width={1280}
              height={1280}
              className="h-auto w-full"
            />
            <div className="bg-linear-to-tr pointer-events-none absolute inset-0 from-background/40 via-transparent to-accent/10" />
          </div>
          <div className="glass-card absolute -bottom-4 -left-4 flex items-center gap-3 rounded-xl px-4 py-3 text-sm">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="font-mono text-xs">
              deploy: <span className="text-primary">production ✓</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
