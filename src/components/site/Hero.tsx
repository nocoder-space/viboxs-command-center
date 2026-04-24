import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Sparkles, Globe, Cpu, ArrowRight } from "lucide-react";
import heroAstronaut from "@/assets/hero-astronaut.png";
import heroBg from "@/assets/hero-bg.jpg";
import { WHATSAPP_URL } from "@/lib/contact";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [drift, setDrift] = useState(0);

  // Scroll-driven progress (0 → 1) for parallax + sinking astronaut
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = rect.height;
        const passed = Math.min(Math.max(-rect.top, 0), total);
        setProgress(passed / total);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Continuous, very subtle lateral drift for kinetic split-typography
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = (now - start) / 1000;
      setDrift(Math.sin(t * 0.3) * 14); // gentle, controlled
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Parallax derivations — astronaut stays anchored, only sinks downward
  const lineLeftX = -progress * 140 + drift;
  const lineRightX = progress * 140 - drift;
  const lineCenterX = drift * 0.5;
  const astroSink = progress * 220; // sinks into lower haze
  const astroOpacity = 1 - Math.max(0, progress - 0.55) * 2.0;
  const cardsY = -progress * 30;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 min-h-[100vh]"
    >
      {/* ============ STATIC CINEMATIC BACKGROUND ============ */}
      <div className="pointer-events-none absolute inset-0 -z-40">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover object-center scale-105"
          style={{ filter: "blur(2px)" }}
        />
        {/* Soft purple wash */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,oklch(0.32_0.18_295/0.35)_0%,transparent_55%)]" />
        {/* Cinematic vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.07_0.025_285/0.6)_60%,oklch(0.05_0.025_285/0.96)_100%)]" />
        {/* Right nebula bloom — soft */}
        <div className="absolute right-[-15%] top-[20%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.55_0.24_295/0.28),transparent_65%)] blur-3xl" />
        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/95 to-transparent" />
        {/* Bottom atmospheric fog — astronaut absorbs into this */}
        <div className="absolute inset-x-0 bottom-0 h-[30rem] bg-gradient-to-t from-background via-background/85 via-30% to-transparent" />
        {/* Subtle grain */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay [background-image:radial-gradient(oklch(1_0_0)_1px,transparent_1px)] [background-size:3px_3px]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6">
        {/* Eyebrow */}
        <div className="flex">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-mono tracking-[0.2em] text-muted-foreground animate-fade-up">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            VIBOXS UNIVERSE® · STARTUP LAUNCH MISSION
          </div>
        </div>

        {/* ============ HERO STAGE ============ */}
        <div className="relative mt-6 sm:mt-8">
          {/* Giant faint outlined background word */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-[55%] -translate-y-1/2 z-0 flex justify-center select-none"
          >
            <span
              className="font-display font-black tracking-[-0.06em] leading-none whitespace-nowrap"
              style={{
                fontSize: "clamp(8rem, 26vw, 24rem)",
                WebkitTextStroke: "1px oklch(1 0 0 / 0.045)",
                color: "transparent",
                transform: `translate3d(${-drift * 1.1}px, 0, 0)`,
              }}
            >
              Today.
            </span>
          </div>

          {/* Stage container — astronaut anchored, headline overlaps */}
          <div className="relative h-[clamp(520px,78vh,820px)] w-full">
            {/* Soft purple aura — diffused, low intensity */}
            <div
              className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 z-[1]"
              aria-hidden
            >
              <div className="h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.55_0.24_295/0.42),transparent_62%)] blur-3xl" />
            </div>

            {/* ASTRONAUT — anchored to bottom of stage, lower body absorbed by haze */}
            <div
              className="absolute left-1/2 bottom-0 pointer-events-none select-none z-[2]"
              style={{
                transform: `translate3d(calc(-50% - 10px), ${astroSink}px, 0)`,
                willChange: "transform, opacity",
                opacity: Math.max(0, astroOpacity),
                filter: "drop-shadow(0 30px 70px oklch(0.35 0.22 295 / 0.65))",
                // Soft atmospheric clipping at the bottom — astronaut merges into fog
                WebkitMaskImage:
                  "linear-gradient(to bottom, #000 0%, #000 72%, rgba(0,0,0,0.55) 88%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, #000 0%, #000 72%, rgba(0,0,0,0.55) 88%, transparent 100%)",
              }}
            >
              <img
                src={heroAstronaut}
                alt="VIBOXS Commander astronaut in cosmic purple armor"
                width={1100}
                height={1100}
                className="block w-[clamp(460px,62vw,820px)] h-auto object-contain"
              />
            </div>

            {/* HEADLINE — kinetic split drift, layered OVER the astronaut */}
            <div className="absolute inset-0 z-[5] pointer-events-none flex flex-col justify-center">
              <h1
                className="font-display font-semibold tracking-[-0.045em] leading-[0.88]"
                style={{ fontSize: "clamp(2.6rem, 10.2vw, 9.5rem)" }}
              >
                {/* Line 1 — drifts LEFT */}
                <span
                  className="block animate-fade-up will-change-transform"
                  style={{
                    animationDelay: "60ms",
                    transform: `translate3d(${lineLeftX}px, 0, 0)`,
                    color: "oklch(0.99 0.01 285 / 0.95)",
                    textShadow:
                      "0 1px 30px oklch(0.10 0.05 285 / 0.85), 0 0 70px oklch(0.55 0.22 295 / 0.35)",
                  }}
                >
                  Your Start-up ideas
                </span>

                {/* Line 2 — drifts RIGHT, refined translucent gradient */}
                <span
                  className="block animate-fade-up will-change-transform md:pl-[8%] lg:pl-[14%]"
                  style={{
                    animationDelay: "180ms",
                    transform: `translate3d(${lineRightX}px, 0, 0)`,
                    background:
                      "linear-gradient(180deg, oklch(0.99 0.02 285 / 0.96) 0%, oklch(0.78 0.16 295 / 0.78) 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    filter: "drop-shadow(0 2px 24px oklch(0.10 0.05 285 / 0.7))",
                  }}
                >
                  starts with Us
                </span>

                {/* Line 3 — outlined transparent, gentle drift */}
                <span
                  className="block animate-fade-up will-change-transform md:pl-[22%] lg:pl-[32%]"
                  style={{
                    animationDelay: "300ms",
                    transform: `translate3d(${lineCenterX}px, 0, 0)`,
                    WebkitTextStroke: "1px oklch(1 0 0 / 0.7)",
                    color: "transparent",
                  }}
                >
                  today.
                </span>
              </h1>
            </div>

            {/* Vertical numbered list (right edge) */}
            <ul className="absolute right-0 top-1/2 z-[6] hidden md:flex -translate-y-1/2 flex-col gap-3">
              {["01", "02", "03"].map((n, i) => (
                <li
                  key={n}
                  className={`font-mono text-[11px] tracking-[0.25em] transition ${
                    i === 0 ? "text-primary-glow" : "text-muted-foreground/45"
                  }`}
                >
                  {n}
                </li>
              ))}
            </ul>

            {/* Service Pills — Website + AI Automation */}
            <div className="absolute left-0 bottom-8 z-[6] hidden lg:flex flex-col gap-2.5">
              <div className="glass-strong inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono tracking-[0.18em] text-foreground">
                <Globe className="h-3.5 w-3.5 text-primary-glow" />
                WEBSITE SYSTEMS
              </div>
              <div className="glass-strong inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono tracking-[0.18em] text-foreground">
                <Cpu className="h-3.5 w-3.5 text-primary-glow" />
                AI AUTOMATION
              </div>
            </div>
          </div>

          {/* BOUNDARY LINE — astronaut sinks into this */}
          <div className="relative z-[6] mt-2 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/70">
              MISSION HORIZON · BUILD · AUTOMATE · LAUNCH
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </div>
        </div>

        {/* MID ROW — primary CTA + checks */}
        <div
          className="relative z-[6] mt-8 sm:mt-10 grid items-center gap-6 md:grid-cols-12"
          style={{ transform: `translate3d(0, ${cardsY}px, 0)` }}
        >
          <div className="md:col-span-6 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-between gap-3 rounded-full bg-foreground px-6 py-4 text-sm font-semibold text-background transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-glow)]"
            >
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Konsultasi dengan Commander
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-foreground transition-all hover:bg-white/[0.08]"
            >
              Lihat Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="md:col-span-6 flex flex-col gap-2.5 text-sm">
            {[
              "Mission plan & estimasi scope dalam 24 jam.",
              "Direct line ke Commander Dede — bukan support generic.",
              "Structured process: scope, timeline, review, handover.",
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
        </div>

        {/* BOTTOM ROW — capability cards */}
        <div
          className="relative z-[6] mt-10 grid gap-5 md:grid-cols-2"
          style={{ transform: `translate3d(0, ${cardsY * 1.4}px, 0)` }}
        >
          <div className="glass rounded-2xl p-5 hover:bg-white/[0.04] transition">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="h-4 w-4 text-primary-glow" />
              <span className="font-display text-base font-semibold text-foreground">
                Website Systems
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Premium website, landing page, brand website, dan startup-ready
              digital presence yang siap membangun trust.
            </p>
          </div>

          <div className="glass rounded-2xl p-5 hover:bg-white/[0.04] transition">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="h-4 w-4 text-primary-glow" />
              <span className="font-display text-base font-semibold text-foreground">
                AI Automation
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Workflow automation, lead handling, dashboard, notifikasi, dan
              AI-assisted operations untuk bisnis yang siap scale.
            </p>
          </div>
        </div>

        {/* Supporting tagline */}
        <p className="relative z-[6] mt-8 max-w-2xl text-sm leading-relaxed text-foreground/75">
          <span className="text-foreground">VIBOXS</span> membantu startup,
          founder, dan bisnis growing membangun presence digital yang lebih
          meyakinkan, workflow yang lebih otomatis, dan sistem yang lebih siap
          untuk scale.
        </p>

        <p className="relative z-[6] mt-6 font-mono text-[10px] sm:text-xs tracking-[0.3em] text-muted-foreground/60">
          MISSION HORIZON · BUILD · AUTOMATE · LAUNCH · DIRECT COMMANDER HANDLING
        </p>
      </div>
    </section>
  );
}
