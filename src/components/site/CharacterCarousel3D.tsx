import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { characters } from "@/data/characters";

const wrapIndex = (index: number) => (index + characters.length) % characters.length;

export function CharacterCarousel3D() {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const current = characters[active];

  const visible = useMemo(
    () => [wrapIndex(active - 1), active, wrapIndex(active + 1)],
    [active],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") setActive((i) => wrapIndex(i - 1));
      if (event.key === "ArrowRight") setActive((i) => wrapIndex(i + 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="cinematic-section relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-mono text-[11px] tracking-[0.3em] text-primary-glow">
              CHARACTER DEPLOYMENT
            </div>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
              Commander dan Rangers dalam satu sistem kerja.
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous character"
              onClick={() => setActive((i) => wrapIndex(i - 1))}
              className="flex h-11 w-11 items-center justify-center rounded-full glass transition hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next character"
              onClick={() => setActive((i) => wrapIndex(i + 1))}
              className="flex h-11 w-11 items-center justify-center rounded-full glass transition hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] lg:items-center">
          <div
            className={`character-stage relative min-h-[520px] overflow-hidden rounded-3xl glass-strong ${current.accentClass}`}
            onTouchStart={(e) => setTouchStart(e.touches[0]?.clientX ?? null)}
            onTouchEnd={(e) => {
              if (touchStart === null) return;
              const end = e.changedTouches[0]?.clientX ?? touchStart;
              const delta = end - touchStart;
              if (Math.abs(delta) > 42) setActive((i) => wrapIndex(i + (delta < 0 ? 1 : -1)));
              setTouchStart(null);
            }}
          >
            <div className="absolute inset-0 grid-cosmos opacity-50" />
            <div className="absolute left-1/2 top-[46%] h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color-mix(in_oklab,var(--character-accent)_24%,transparent)] blur-3xl" />
            <div className="absolute inset-x-10 top-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            {visible.map((characterIndex) => {
              const character = characters[characterIndex];
              const position = characterIndex === active ? 0 : characterIndex === wrapIndex(active - 1) ? -1 : 1;
              return (
                <button
                  key={character.id}
                  type="button"
                  onClick={() => setActive(characterIndex)}
                  className="absolute bottom-0 left-1/2 origin-bottom transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: `translateX(calc(-50% + ${position * 230}px)) translateZ(${position === 0 ? 0 : -80}px) rotateY(${position * -18}deg) scale(${position === 0 ? 1 : 0.72})`,
                    opacity: position === 0 ? 1 : 0.42,
                    filter: position === 0 ? "none" : "blur(1.5px)",
                    zIndex: position === 0 ? 3 : 2,
                  }}
                >
                  <img
                    src={character.image}
                    alt={`${character.name} ${character.role}`}
                    loading={position === 0 ? "eager" : "lazy"}
                    className="h-[500px] w-auto max-w-none object-contain drop-shadow-[0_35px_80px_color-mix(in_oklab,var(--character-accent)_35%,transparent)]"
                  />
                </button>
              );
            })}
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>

          <aside className={`relative overflow-hidden rounded-3xl glass-strong p-6 sm:p-8 ${current.accentClass}`}>
            <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-[color-mix(in_oklab,var(--character-accent)_24%,transparent)] blur-2xl" />
            <div className="relative">
              <div className="font-mono text-[11px] tracking-[0.3em] text-primary-glow">
                {current.code}
              </div>
              <h3 className="mt-3 font-display text-3xl font-semibold text-foreground">
                {current.name}
              </h3>
              <div className="mt-2 text-sm font-mono uppercase tracking-[0.18em] text-[color-mix(in_oklab,var(--character-accent)_75%,white)]">
                {current.role}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {current.function}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {current.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-mono text-foreground/80 ring-1 ring-white/10">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex gap-1.5">
                {characters.map((character, index) => (
                  <button
                    key={character.id}
                    type="button"
                    aria-label={`Show ${character.name}`}
                    onClick={() => setActive(index)}
                    className={`h-1.5 rounded-full transition-all ${index === active ? "w-9 bg-foreground" : "w-3 bg-white/20 hover:bg-white/45"}`}
                  />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}