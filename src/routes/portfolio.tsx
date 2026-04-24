import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, X } from "lucide-react";
import { CosmicBackground } from "@/components/site/CosmicBackground";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsAppCTA } from "@/components/site/FloatingWhatsAppCTA";
import { FinalCTA } from "@/components/site/FinalCTA";
import {
  portfolioCategories,
  portfolioProjects,
  type PortfolioProject,
  type PortfolioCategory,
} from "@/data/portfolio";
import { whatsappLink, WHATSAPP_URL } from "@/lib/contact";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Portfolio Project VIBOXS — Website, Automation, AI & Dashboard" },
      {
        name: "description",
        content:
          "Lihat project website, landing page, automation, dashboard, dan AI system yang dibangun VIBOXS dengan proses yang lebih serius dan terstruktur.",
      },
      {
        property: "og:title",
        content: "Portfolio Project VIBOXS — Website, Automation, AI & Dashboard",
      },
      {
        property: "og:description",
        content:
          "Project missions built with context, structure, and serious execution.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function PortfolioPage() {
  const [active, setActive] = useState<"All" | PortfolioCategory>("All");
  const [selected, setSelected] = useState<PortfolioProject | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return portfolioProjects;
    return portfolioProjects.filter((p) => p.category.includes(active));
  }, [active]);

  return (
    <main className="relative">
      <CosmicBackground />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="font-mono text-[11px] tracking-[0.3em] text-primary-glow">
            VIBOXS PROJECT ARCHIVE
          </div>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground max-w-4xl">
            Project missions built with context,{" "}
            <span className="text-gradient">structure, and serious execution.</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Setiap project VIBOXS dibangun dari pemahaman masalah bisnis, bukan
            hanya dari permintaan desain. Kami menampilkan bagaimana challenge
            diterjemahkan menjadi website, automation, dashboard, atau digital
            system yang lebih siap dipakai.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:scale-[1.02] transition"
            >
              Konsultasikan Project Anda
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/5 transition"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="relative pb-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {portfolioCategories.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={`rounded-full px-4 py-2 text-xs font-mono tracking-[0.18em] transition ${
                    isActive
                      ? "bg-foreground text-background"
                      : "glass text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="relative py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article
                key={p.id}
                className="group relative glass-strong overflow-hidden rounded-3xl glow-ring transition-all duration-500 hover:-translate-y-1 flex flex-col"
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
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    {p.industry.toUpperCase()} · {p.clientType.toUpperCase()}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.shortDescription}
                  </p>
                  <div className="mt-4 space-y-2 text-xs">
                    <div>
                      <span className="font-mono text-[10px] tracking-[0.2em] text-primary-glow">
                        SOLUTION ·{" "}
                      </span>
                      <span className="text-foreground/85">
                        {p.solution.slice(0, 110)}
                        {p.solution.length > 110 ? "…" : ""}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-mono tracking-wider text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="text-[11px] font-mono tracking-[0.18em] text-primary-glow/80">
                      {p.rangerInvolved}
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelected(p)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/90 hover:text-primary-glow transition"
                    >
                      Read Case Study
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted-foreground/80 italic">
            Some case studies may be simplified for confidentiality.
          </p>
        </div>
      </section>

      <FinalCTA />
      <Footer />
      <FloatingWhatsAppCTA />

      {/* CASE STUDY MODAL */}
      {selected && (
        <CaseStudyModal project={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}

function CaseStudyModal({
  project,
  onClose,
}: {
  project: PortfolioProject;
  onClose: () => void;
}) {
  const msg = `Halo Commander, saya tertarik membahas project serupa dengan "${project.title}".`;

  return (
    <div
      className="fixed inset-0 z-[60] overflow-y-auto bg-background/85 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="min-h-full flex items-start justify-center p-4 sm:p-8">
        <div
          className="relative w-full max-w-4xl glass-strong rounded-3xl overflow-hidden my-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground hover:bg-background"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="relative aspect-[16/8] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-5 left-5 right-16">
              <div className="font-mono text-[11px] tracking-[0.3em] text-primary-glow">
                {project.category.join(" · ").toUpperCase()}
              </div>
              <h2 className="mt-2 font-display text-2xl sm:text-4xl font-semibold tracking-tight text-foreground">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            <Block label="Project Overview" body={project.shortDescription} />
            <Block
              label="Client Background"
              body={`${project.clientType} — ${project.industry}`}
            />
            <Block label="Challenge" body={project.challenge} />
            <Block label="VIBOXS Mission" body={project.solution} />
            <Block label="What We Built" body={project.serviceType} />
            <Block label="Strategic Thinking" body={project.strategicThinking} />
            <Block label="Outcome" body={project.outcome} />
            <Block
              label="Next Growth Opportunity"
              body={project.nextGrowthOpportunity}
            />
            <Block label="Rangers Involved" body={project.rangerInvolved} />

            <div className="pt-6 border-t border-white/5 flex flex-wrap gap-3">
              <a
                href={whatsappLink(msg)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:scale-[1.02] transition"
              >
                Konsultasikan Project Serupa
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/5 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] tracking-[0.3em] text-primary-glow">
        {label.toUpperCase()}
      </div>
      <p className="mt-2 text-sm sm:text-base leading-relaxed text-foreground/90">
        {body}
      </p>
    </div>
  );
}
