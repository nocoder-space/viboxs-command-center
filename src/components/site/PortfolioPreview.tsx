import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { portfolioProjects } from "@/data/portfolio";

export function PortfolioPreview() {
  const featured = portfolioProjects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="08 · LAUNCH DOSSIERS"
            title={
              <>
                Missions <span className="text-gradient">already launched.</span>
              </>
            }
            subtitle="Portfolio VIBOXS tidak hanya menampilkan hasil visual. Setiap project memiliki konteks, challenge, solusi, dan cara berpikir yang membuat hasilnya lebih serius."
          />
          <Link
            to="/portfolio"
            className="glass inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium hover:bg-white/5 transition"
          >
            View Full Portfolio
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {featured.map((p, i) => (
            <article
              key={p.id}
              className="group relative glass-strong overflow-hidden rounded-3xl glow-ring transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute left-5 top-5 glass rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.25em] text-primary-glow">
                  {p.category[0]}
                </div>
                <div className="absolute right-5 top-5 glass rounded-full px-3 py-1 text-[11px] font-medium">
                  {p.rangerInvolved.split(" ")[0]}
                </div>
              </div>
              <div className="p-6">
                <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                  {p.industry.toUpperCase()}
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {p.shortDescription}
                </p>
                <div className="mt-4 space-y-2 text-xs text-foreground/80">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-primary-glow">
                      CHALLENGE ·{" "}
                    </span>
                    <span className="text-muted-foreground">
                      {p.challenge.slice(0, 90)}
                      {p.challenge.length > 90 ? "…" : ""}
                    </span>
                  </div>
                </div>
                <Link
                  to="/portfolio"
                  hash={p.slug}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground/90 group-hover:text-primary-glow transition"
                >
                  Read Project Story
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
