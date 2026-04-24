interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, subtitle, align = "left" }: Props) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className="font-mono text-[11px] tracking-[0.3em] text-primary-glow">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.08] tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
