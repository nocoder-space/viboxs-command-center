import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Play, Sparkles } from "lucide-react";
import heroAstronaut from "@/assets/hero-astronaut.png";

const WHATSAPP_URL =
  "https://wa.me/6282164097066?text=Halo%20Commander%2C%20saya%20ingin%20briefing%20mission%20VIBOXS.";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scroll, setScroll] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const progress = Math.max(0, -rect.top);
        setScroll(progress);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setPointer({ x, y });
  };
  const onPointerLeave = () => setPointer({ x: 0, y: 0 });

  // Parallax derived values — multiple layers move at different speeds
  const bgShift = scroll * 0.18;
  const starsShift = scroll * 0.32;
  const headlineTopShift = scroll * 0.22;
  const headlineBottomShift = scroll * 0.4;
  const astronautShift = scroll * -0.12;
  const cardsShift = scroll * 0.5;
  const tickerShift = scroll * 0.28;

  // Pointer parallax for astronaut
  const astroX = pointer.x * 22;
  const astroY = pointer.y * 22;

  return (
    <section
      ref={sectionRef}
      id="top"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 min-h-[100svh]"
    >
      {/* Layer 1 — deep nebula blobs */}
      <div
        className="pointer-events-none absolute inset-0 -z-30"
        style={{ transform: `translate3d(0, ${bgShift}px, 0)`, willChange: "transform" }}
      >
        <div className="absolute left-1/2 top-[-10%] h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.55_0.24_295/0.5),transparent_60%)] blur-3xl" />
        <div className="absolute -left-40 top-[35%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.5_0.22_270/0.4),transparent_65%)] blur-3xl" />
        <div className="absolute -right-32 top-[18%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.66_0.22_295/0.4),transparent_65%)] blur-3xl" />
      </div>

      {/* Layer 2 — drifting stars */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-60"
        style={{ transform: `translate3d(0, ${-starsShift}px, 0)`, willChange: "transform" }}
      >
        <div className="absolute inset-0 stars" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* eyebrow */}
        <div className="flex">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono tracking-[0.2em] text-muted-foreground animate-fade-up">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            VIBOXS UNIVERSE® · MISSION CONTROL ONLINE
          </div>
        </div>

        {/* Hero composition — astronaut centered, big text wrapping over it */}
        <div className="relative mt-6 sm:mt-8">
          {/* TOP HEADLINE LINE — sits above astronaut */}
          <h1
            className="relative z-30 font-display font-semibold tracking-[-0.04em] leading-[0.86] text-foreground"
            style={{
              fontSize: "clamp(2.6rem, 10.5vw, 10.5rem)",
              transform: `translate3d(0, ${-headlineTopShift}px, 0)`,
              willChange: "transform",
            }}
          >
            <span
              className="block animate-fade-up"
              style={{ animationDelay: "60ms" }}
            >
              Your Startup idea
            </span>
            <span
              className="block animate-fade-up"
              style={{ animationDelay: "140ms" }}
            >
              starts with
            </span>
          </h1>

          {/* ASTRONAUT — sits between top and bottom headline lines */}
          <div
            className="relative z-20 flex justify-center -mt-[4vw] sm:-mt-[6vw] md:-mt-[8vw] pointer-events-none select-none"
            style={{
              transform: `translate3d(${astroX}px, ${astronautShift + astroY}px, 0)`,
              transition: "transform 220ms cubic-bezier(0.16,1,0.3,1)",
              willChange: "transform",
            }}
          >
            {/* glow halo behind astronaut */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[55vw] max-h-[760px] w-[55vw] max-w-[760px] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.6_0.25_295/0.6),transparent_60%)] blur-3xl animate-pulse-glow" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[40vw] max-h-[560px] w-[40vw] max-w-[560px] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.7_0.22_300/0.35),transparent_65%)] blur-2xl" />

            <img
              src={heroAstronaut}
              alt="VIBOXS Commander astronaut in cosmic purple armor — interstellar village agency"
              width={1600}
              height={1600}
              className="relative h-[44vw] max-h-[640px] w-auto object-contain animate-float-slow drop-shadow-[0_30px_80px_oklch(0.45_0.25_295/0.55)]"
            />

            {/* numbered list (01 / 02 / 03) — like reference */}
            <ul className="absolute right-2 sm:right-6 top-1/2 hidden md:flex -translate-y-1/2 flex-col gap-3 pointer-events-auto">
              {["01", "02", "03"].map((n, i) => (
                <li
                  key={n}
                  className={`font-mono text-xs tracking-[0.25em] ${
                    i === 0 ? "text-primary-glow" : "text-muted-foreground/50"
                  }`}
                >
                  {n}
                </li>
              ))}
            </ul>

            {/* TELEMETRY chip with commander photo (overlay) */}
            <div className="absolute left-2 sm:left-4 top-[8%] hidden sm:block pointer-events-auto">
              <div className="glass rounded-xl px-3 py-2 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <div>
                  <div className="font-mono text-[8px] tracking-[0.3em] text-primary-glow">
                    RANGER · NEXUS
                  </div>
                  <div className="font-display text-[11px] font-medium text-foreground">
                    Build pipeline · 03:42
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM HEADLINE — overlaps astronaut, like reference "Frontier" */}
          <h2
            className="relative z-30 -mt-[10vw] sm:-mt-[12vw] md:-mt-[14vw] font-display font-semibold tracking-[-0.04em] leading-[0.86] text-center"
            style={{
              fontSize: "clamp(3.4rem, 14vw, 14rem)",
              transform: `translate3d(0, ${-headlineBottomShift}px, 0)`,
              willChange: "transform",
            }}
          >
            <span
              className="block text-gradient animate-fade-up"
              style={{
                animationDelay: "220ms",
                textShadow: "0 0 90px oklch(0.66 0.22 295 / 0.45)",
              }}
            >
              VIBOXS
            </span>
            <span
              className="block animate-fade-up text-foreground/30"
              style={{
                animationDelay: "300ms",
                WebkitTextStroke: "1px oklch(1 0 0 / 0.2)",
                color: "transparent",
              }}
            >
              Today.
            </span>
          </h2>
        </div>

        {/* Lower content */}
        <div
          className="relative z-30 mt-10 grid gap-6 md:mt-14 md:grid-cols-12"
          style={{
            transform: `translate3d(0, ${-cardsShift * 0.18}px, 0)`,
            willChange: "transform",
          }}
        >
          {/* Left: CTA stack */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-between gap-3 rounded-full bg-foreground px-6 py-4 text-sm font-semibold text-background transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-glow)]"
            >
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Launch a Mission
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>

            <div className="glass rounded-2xl p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="text-foreground">
                  NASA-grade execution, village-grade pricing.
                </span>{" "}
                Tujuh elite Rangers menjalankan mission premium untuk brand
                ambisius — strategi, build, dan launch dalam satu command center.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-mono tracking-[0.2em] text-foreground hover:bg-white/5 transition"
              >
                BRIEFING SEKARANG
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Middle: feature checks */}
          <div className="md:col-span-4 flex flex-col justify-end gap-3 text-sm">
            {[
              "Mission plan dalam 24 jam.",
              "Direct line ke Commander Dede.",
              "7× lebih murah, 3× lebih cepat.",
            ].map((t, i) => (
              <div
                key={t}
                className="flex items-center gap-3 animate-fade-up"
                style={{ animationDelay: `${280 + i * 80}ms` }}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary-glow ring-1 ring-primary/40">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-foreground/90">{t}</span>
              </div>
            ))}
          </div>

          {/* Right: A journey into VIBOXS card */}
          <div className="md:col-span-4">
            <a
              href="#story"
              className="group relative block glass-strong rounded-2xl p-4 overflow-hidden hover:bg-white/5 transition"
            >
              <div className="flex items-start gap-3">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[var(--gradient-aurora)]">
                  <div className="absolute inset-0 stars opacity-60" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-5 w-5 text-primary-foreground fill-current" />
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-display text-base font-semibold text-foreground">
                    A journey into VIBOXS
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    Masuki cinematic universe brand pertama Indonesia yang
                    dijalankan oleh Rangers AI elite — lihat bagaimana mission
                    Anda dieksekusi dari basecamp interstellar.
                  </p>
                </div>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-foreground transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* trust ticker */}
        <p
          className="mt-10 font-mono text-[10px] sm:text-xs tracking-[0.3em] text-muted-foreground/60"
          style={{ transform: `translate3d(0, ${-tickerShift * 0.2}px, 0)` }}
        >
          150+ MISSIONS DEPLOYED · 98% COMMANDER SATISFACTION · 24/7 BASECAMP · EST. 2024
        </p>
      </div>
    </section>
  );
}
