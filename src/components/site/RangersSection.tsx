import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { rangers } from "@/data/characters";

export function RangersSection() {
  return (
    <section id="rangers" className="cinematic-section relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="07 · CAPABILITY SYSTEM"
          title={
            <>
              Behind every mission, each Ranger handles{" "}
              <span className="text-gradient">a critical layer.</span>
            </>
          }
          subtitle="Rangers adalah representasi capability VIBOXS. Di setiap project, kami menurunkan kemampuan yang paling relevan dengan kebutuhan client."
        />

        {(() => {
          const renderCard = (r: (typeof rangers)[number]) => {
            return (
              <article
                key={r.code}
                className={`group relative overflow-hidden glass rounded-2xl p-4 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.05] ${r.accentClass}`}
              >
                <div className="relative h-40 overflow-hidden rounded-xl bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--character-accent)_22%,transparent),transparent_68%)] ring-1 ring-white/10">
                  <div className="absolute inset-x-4 bottom-0 h-px bg-[color-mix(in_oklab,var(--character-accent)_55%,transparent)]" />
                  <img
                    src={r.image}
                    alt={`${r.name} ${r.role}`}
                    loading="lazy"
                    className="mx-auto h-64 w-auto -translate-y-5 object-contain transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    {r.code}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--character-accent)] shadow-[0_0_14px_var(--character-accent)]" />
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                  {r.name}
                </h3>
                <div className="mt-1 text-[11px] font-mono tracking-[0.18em] uppercase text-primary-glow/90">
                  {r.role}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {r.function}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {r.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/[0.05] px-2 py-0.5 text-[10px] font-mono text-foreground/75 ring-1 ring-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          };
          return (
            <div className="relative mt-14 space-y-4 sm:space-y-5">
              <div className="pointer-events-none absolute inset-0 hidden rounded-full border border-primary/10 lg:block" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full glass-strong text-center font-mono text-[10px] tracking-[0.22em] text-primary-glow lg:grid place-items-center">MISSION<br />CORE</div>
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {rangers.slice(0, 4).map(renderCard)}
              </div>
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:mx-auto xl:max-w-[75%]">
                {rangers.slice(4).map(renderCard)}
              </div>
            </div>
          );
        })()}

        <div className="mt-12 flex justify-center">
          <Link
            to="/profile"
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-4 text-sm font-semibold text-background hover:scale-[1.02] transition"
          >
            Lihat Profile VIBOXS Universe
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </div>
    </section>
  );
}
