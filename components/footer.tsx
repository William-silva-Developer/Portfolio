export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} William Silva — Desenvolvedor Full
          Stack.
        </p>
        <p className="font-mono text-xs">
          Construído com <span className="text-primary">React</span> +{" "}
          <span className="text-accent">TypeScript</span>
        </p>
      </div>
    </footer>
  );
}
