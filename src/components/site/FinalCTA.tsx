import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative glass-strong rounded-[2rem] overflow-hidden p-8 sm:p-14 text-center">
          {/* aura */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.55_0.24_295/0.4),transparent_60%)] blur-3xl" />
            <div className="absolute inset-0 stars opacity-40" />
          </div>

          <div className="font-mono text-[11px] tracking-[0.3em] text-primary-glow">
            11 · LAUNCH SEQUENCE
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground">
            Your mission starts with{" "}
            <span className="text-gradient">one message.</span>
          </h2>
          <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Ceritakan kebutuhan bisnis Anda. Commander akan membantu membaca
            apakah Anda membutuhkan website premium, automation, dashboard, AI
            integration, atau kombinasi yang paling masuk akal.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-4 text-sm font-semibold text-background hover:scale-[1.02] hover:shadow-[var(--shadow-glow)] transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              Konsultasi dengan Commander via WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-foreground hover:bg-white/[0.08] transition"
            >
              Lihat Portfolio Project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Tidak harus langsung deal. Mulai dari cerita singkat tentang bisnis,
            masalah yang ingin dibereskan, dan target yang ingin dicapai.
          </p>
        </div>
      </div>
    </section>
  );
}
