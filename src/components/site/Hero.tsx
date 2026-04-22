import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Play, Sparkles, Globe, Cpu } from "lucide-react";
import heroAstronaut from "@/assets/hero-astronaut.png";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL =
  "https://wa.me/6282164097066?text=Halo%20Commander%2C%20saya%20ingin%20briefing%20mission%20VIBOXS%20(Website%20%2B%20AI%20Automation).";

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

  // Continuous lateral drift for kinetic split-typography
  useEffect(() => {
    let raf = 0;
    let start = performance.now();
    const tick = (now: number) => {
      const t = (now - start) / 1000;
      // slow sinusoidal motion
      setDrift(Math.sin(t * 0.35) * 24);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Parallax derivations
  const lineLeftX = -progress * 220 + drift; // line drifts left + kinetic
  const lineRightX = progress * 220 - drift; // line drifts right - kinetic
  const lineCenterX = drift * 0.6;
  const astroY = progress * 320; // sinking
  const astroScale = 1 - progress * 0.06;
  const astroOpacity = 1 - Math.max(0, progress - 0.55) * 2.2; // fade as it sinks
  const bgFade = 1 - progress * 0.2;
  const cardsY = -progress * 40;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 min-h-[100vh]"
    >
      {/* ============ STATIC CINEMATIC BACKGROUND ============ */}
      <div
        className="pointer-events-none absolute inset-0 -z-40"
        style={{ opacity: bgFade }}
      >
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover object-center"
        />
        {/* Deep vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.09_0.025_285/0.55)_55%,oklch(0.06_0.025_285/0.96)_100%)]" />
        {/* Right-side nebula glow */}
        <div className="absolute right-[-10%] top-1/3 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.55_0.26_295/0.35),transparent_65%)] blur-3xl" />
        {/* Lower purple haze */}
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[oklch(0.18_0.12_295/0.35)] via-[oklch(0.09_0.025_285/0.5)] to-transparent" />
        {/* Top + bottom fade to bg */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background via-background/85 to-transparent" />
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
            className="pointer-events-none absolute inset-x-0 top-[58%] -translate-y-1/2 z-0 flex justify-center select-none"
          >
            <span
              className="font-display font-black tracking-[-0.06em] leading-none whitespace-nowrap"
              style={{
                fontSize: "clamp(8rem, 28vw, 26rem)",
                WebkitTextStroke: "1px oklch(1 0 0 / 0.05)",
                color: "transparent",
                transform: `translate3d(${-drift * 1.2}px, 0, 0)`,
              }}
            >
              Today.
            </span>
          </div>

          {/* Stage container — astronaut + overlapping headline */}
          <div className="relative h-[clamp(480px,74vh,780px)] w-full">
            {/* Soft purple aura behind astronaut */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              aria-hidden
            >
              <div className="h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.62_0.26_295/0.55),transparent_62%)] blur-3xl animate-pulse-glow" />
            </div>

            {/* ASTRONAUT — close-up, slightly left of center, sinks on scroll */}
            <div
              className="absolute left-1/2 top-1/2 pointer-events-none select-none"
              style={{
                transform: `translate3d(calc(-50% - 20px), calc(-50% + ${astroY}px), 0) scale(${astroScale})`,
                willChange: "transform, opacity",
                opacity: Math.max(0, astroOpacity),
                filter: "drop-shadow(0 40px 80px oklch(0.40 0.25 295 / 0.7))",
              }}
            >
              <img
                src={heroAstronaut}
                alt="VIBOXS Commander astronaut in cosmic purple armor"
                width={1100}
                height={1100}
                className="block w-[clamp(440px,64vw,860px)] h-auto object-contain animate-float-slow"
              />
              {/* Subtle backlight */}
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_38%,oklch(0.7_0.28_295/0.28),transparent_55%)] mix-blend-screen" />
            </div>

            {/* HEADLINE — kinetic split drift over the astronaut */}
            <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center">
              <h1
                className="font-display font-semibold tracking-[-0.045em] leading-[0.86]"
                style={{ fontSize: "clamp(2.6rem, 10.5vw, 10rem)" }}
              >
                {/* Line 1 — drifts LEFT (kinetic) */}
                <span
                  className="block animate-fade-up will-change-transform"
                  style={{
                    animationDelay: "60ms",
                    transform: `translate3d(${lineLeftX}px, 0, 0)`,
                    color: "oklch(1 0 0 / 0.94)",
                    mixBlendMode: "screen",
                    textShadow:
                      "0 2px 24px oklch(0.15 0.05 285 / 0.65), 0 0 60px oklch(0.66 0.22 295 / 0.3)",
                  }}
                >
                  Your Start-up ideas
                </span>

                {/* Line 2 — drifts RIGHT (kinetic), violet gradient */}
                <span
                  className="block animate-fade-up will-change-transform md:pl-[8%] lg:pl-[12%]"
                  style={{
                    animationDelay: "180ms",
                    transform: `translate3d(${lineRightX}px, 0, 0)`,
                    background:
                      "linear-gradient(180deg, oklch(0.97 0.03 295 / 0.96) 0%, oklch(0.7 0.22 295 / 0.85) 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    textShadow: "0 0 80px oklch(0.66 0.22 295 / 0.35)",
                  }}
                >
                  starts with Us
                </span>

                {/* Line 3 — outlined, gentle center drift */}
                <span
                  className="block animate-fade-up will-change-transform md:pl-[22%] lg:pl-[30%]"
                  style={{
                    animationDelay: "300ms",
                    transform: `translate3d(${lineCenterX}px, 0, 0)`,
                    WebkitTextStroke: "1px oklch(1 0 0 / 0.6)",
                    color: "transparent",
                  }}
                >
                  today.
                </span>
              </h1>
            </div>

            {/* Vertical numbered list (right edge) */}
            <ul className="absolute right-0 top-1/2 z-30 hidden md:flex -translate-y-1/2 flex-col gap-3">
              {["01", "02", "03"].map((n, i) => (
                <li
                  key={n}
                  className={`font-mono text-[11px] tracking-[0.25em] transition ${
                    i === 0 ? "text-primary-glow" : "text-muted-foreground/50"
                  }`}
                >
                  {n}
                </li>
              ))}
            </ul>

            {/* Service Pills — Website + AI Automation (mid-left float) */}
            <div className="absolute left-0 bottom-6 z-30 hidden lg:flex flex-col gap-2.5">
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

          {/* BOUNDARY LINE — astronaut sinks into this on scroll */}
          <div className="relative z-20 mt-2 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/70">
              MISSION HORIZON · BUILD · AUTOMATE · LAUNCH
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>
        </div>

        {/* MID ROW — primary CTA + checks */}
        <div
          className="relative z-30 mt-8 sm:mt-10 grid items-center gap-6 md:grid-cols-12"
          style={{ transform: `translate3d(0, ${cardsY}px, 0)` }}
        >
          <div className="md:col-span-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-between gap-3 rounded-full bg-foreground px-6 py-4 text-sm font-semibold text-background transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-glow)] w-full sm:w-auto"
            >
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Start Website &amp; AI Mission
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>

          <div className="md:col-span-7 flex flex-col gap-2.5 text-sm">
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
        </div>

        {/* BOTTOM ROW — three info cards */}
        <div
          className="relative z-30 mt-10 grid gap-5 md:grid-cols-12"
          style={{ transform: `translate3d(0, ${cardsY * 1.4}px, 0)` }}
        >
          {/* Card 1 — Website */}
          <div className="md:col-span-4 glass rounded-2xl p-5 flex flex-col justify-between hover:bg-white/[0.04] transition">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Globe className="h-4 w-4 text-primary-glow" />
                <span className="font-display text-base font-semibold text-foreground">
                  Premium Website Design
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Website cinematic, high-converting, dan siap launch — dirancang
                untuk founder yang ingin tampil seperti brand kelas dunia.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[11px] font-mono tracking-[0.2em] text-foreground hover:bg-white/5 transition"
            >
              EXPLORE NOW
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          {/* Card 2 — AI Automation */}
          <div className="md:col-span-4 glass rounded-2xl p-5 flex flex-col justify-between hover:bg-white/[0.04] transition">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="h-4 w-4 text-primary-glow" />
                <span className="font-display text-base font-semibold text-foreground">
                  AI Automation Systems
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Otomatiskan workflow, leads, respons, dan operasi harian.
                Hilangkan kerja repetitif — biarkan AI yang menjalankan misi.
              </p>
            </div>
            <a
              href="#mission"
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[11px] font-mono tracking-[0.2em] text-foreground hover:bg-white/5 transition"
            >
              LIHAT MISSION FLOW
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          {/* Card 3 — Launch Faster */}
          <div className="md:col-span-4">
            <a
              href="#showcase"
              className="group relative block glass-strong rounded-2xl p-4 overflow-hidden hover:bg-white/5 transition h-full"
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
                    Launch Faster with VIBOXS
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    Satu command center untuk strategi, design, build, dan
                    automation — dijalankan oleh tujuh elite Rangers.
                  </p>
                </div>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-foreground transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Supporting tagline */}
        <p className="relative z-30 mt-8 max-w-2xl text-sm leading-relaxed text-foreground/75">
          <span className="text-foreground">Premium websites &amp; AI automation</span>{" "}
          untuk founder yang ingin launch lebih cepat, kerja lebih cerdas, dan
          scale tanpa friksi. VIBOXS membangun fondasi digital dan workflow
          intelligent yang mengubah ide jadi momentum bisnis nyata.
        </p>

        <p className="mt-6 font-mono text-[10px] sm:text-xs tracking-[0.3em] text-muted-foreground/60">
          150+ MISSIONS DEPLOYED · 98% COMMANDER SATISFACTION · 24/7 BASECAMP · EST. 2024
        </p>
      </div>
    </section>
  );
}
