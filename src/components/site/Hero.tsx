import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Play, Sparkles } from "lucide-react";
import heroLaptop from "@/assets/hero-laptop.jpg";

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
        // 0 at top of section in viewport, grows as we scroll past
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
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setPointer({ x, y });
  };

  const onPointerLeave = () => setPointer({ x: 0, y: 0 });

  // Parallax derived values
  const bgShift = scroll * 0.15;
  const headlineShift = scroll * 0.25;
  const subShift = scroll * 0.4;
  const laptopShift = scroll * -0.08;
  const cardShift = scroll * 0.55;

  const tiltX = pointer.y * -6;
  const tiltY = pointer.x * 8;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 min-h-[100svh]"
    >
      {/* ambient parallax background blobs */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ transform: `translate3d(0, ${bgShift}px, 0)` }}
      >
        <div className="absolute left-1/2 top-[-10%] h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.55_0.24_295/0.45),transparent_60%)] blur-3xl" />
        <div className="absolute -left-40 top-[40%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.5_0.22_270/0.35),transparent_65%)] blur-3xl" />
        <div className="absolute -right-32 top-[20%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.66_0.22_295/0.35),transparent_65%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
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

        {/* MASSIVE typography overlapping the device — like the reference */}
        <div className="relative mt-8">
          <h1
            className="relative z-20 font-display font-semibold tracking-[-0.04em] leading-[0.88] text-foreground"
            style={{
              fontSize: "clamp(3rem, 12vw, 12rem)",
              transform: `translate3d(0, ${-headlineShift}px, 0)`,
              willChange: "transform",
            }}
          >
            <span
              className="block animate-fade-up"
              style={{ animationDelay: "60ms" }}
            >
              Explore the
            </span>
            <span
              className="block text-gradient animate-fade-up"
              style={{
                animationDelay: "140ms",
                textShadow: "0 0 80px oklch(0.66 0.22 295 / 0.35)",
              }}
            >
              Interstellar
            </span>
            <span
              className="block animate-fade-up text-foreground/40"
              style={{
                animationDelay: "220ms",
                WebkitTextStroke: "1px oklch(1 0 0 / 0.18)",
                color: "transparent",
              }}
            >
              Frontier.
            </span>
          </h1>

          {/* Floating tilted laptop — sits behind the bottom word, like the reference */}
          <div
            onPointerMove={onPointerMove}
            onPointerLeave={onPointerLeave}
            className="pointer-events-auto absolute right-[-4%] top-[18%] z-10 hidden md:block w-[58%] max-w-[820px]"
            style={{
              transform: `translate3d(0, ${laptopShift}px, 0) perspective(1400px) rotateX(${10 + tiltX}deg) rotateY(${-14 + tiltY}deg) rotateZ(-3deg)`,
              transformStyle: "preserve-3d",
              transition: "transform 200ms cubic-bezier(0.16,1,0.3,1)",
              willChange: "transform",
            }}
          >
            {/* glow halo */}
            <div className="absolute -inset-12 -z-10 rounded-[3rem] bg-[var(--gradient-aurora)] opacity-40 blur-3xl animate-pulse-glow" />
            <div className="relative overflow-hidden rounded-[1.75rem] glass-strong glow-ring shadow-[var(--shadow-elev)] animate-float-slow">
              <img
                src={heroLaptop}
                alt="VIBOXS Mission Control — futuristic floating laptop with cosmic dashboard interface"
                width={1920}
                height={1080}
                className="block h-auto w-full object-cover"
              />
              {/* screen overlay UI panels */}
              <div className="absolute left-[8%] top-[12%] glass rounded-xl px-3 py-2 hidden lg:block">
                <div className="font-mono text-[8px] tracking-[0.3em] text-primary-glow">
                  RANGER · NEXUS
                </div>
                <div className="mt-0.5 font-display text-xs font-medium text-foreground">
                  Build pipeline · 03:42
                </div>
              </div>
              <div className="absolute right-[6%] bottom-[14%] glass rounded-xl px-3 py-2 hidden lg:block">
                <div className="font-mono text-[8px] tracking-[0.3em] text-primary-glow">
                  TELEMETRY
                </div>
                <div className="mt-0.5 font-display text-sm font-semibold text-foreground">
                  98% · Uptime
                </div>
              </div>
            </div>

            {/* numbered list (like reference 01/02/03) */}
            <ul className="absolute -right-2 top-1/2 hidden xl:flex -translate-y-1/2 flex-col gap-3">
              {["01", "02", "03"].map((n, i) => (
                <li
                  key={n}
                  className={`font-mono text-xs tracking-[0.2em] ${
                    i === 0 ? "text-primary-glow" : "text-muted-foreground/60"
                  }`}
                >
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile-only laptop */}
        <div className="md:hidden mt-10 relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[var(--gradient-aurora)] opacity-30 blur-3xl" />
          <div className="overflow-hidden rounded-[1.5rem] glass-strong glow-ring">
            <img
              src={heroLaptop}
              alt="VIBOXS Mission Control"
              width={1920}
              height={1080}
              className="block h-auto w-full"
            />
          </div>
        </div>

        {/* Lower content — CTA + checks + journey card, like reference */}
        <div
          className="relative z-20 mt-12 grid gap-6 md:mt-16 md:grid-cols-12"
          style={{ transform: `translate3d(0, ${-subShift * 0.3}px, 0)` }}
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
          style={{ transform: `translate3d(0, ${-cardShift * 0.15}px, 0)` }}
        >
          150+ MISSIONS DEPLOYED · 98% COMMANDER SATISFACTION · 24/7 BASECAMP · EST. 2024
        </p>
      </div>
    </section>
  );
}
