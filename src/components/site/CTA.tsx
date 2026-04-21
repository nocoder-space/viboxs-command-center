import { ArrowUpRight, MessageCircle, Mail, Calendar } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative glass-strong overflow-hidden rounded-[2.5rem] p-8 sm:p-14 md:p-20 glow-ring">
          {/* glow background */}
          <div className="absolute -top-32 -left-20 h-[28rem] w-[28rem] rounded-full bg-primary/40 blur-[120px]" />
          <div className="absolute -bottom-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-violet/40 blur-[120px]" />
          <div className="absolute inset-0 stars opacity-40" />

          <div className="relative">
            <div className="font-mono text-[11px] tracking-[0.3em] text-primary-glow">
              07 · LAUNCH SEQUENCE
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl md:text-7xl font-semibold leading-[1.02] tracking-tight max-w-4xl">
              Your mission
              <br />
              <span className="text-gradient">starts the moment</span>
              <br />
              you transmit.
            </h2>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Briefings are direct with Commander Dede. No middlemen, no decks, no delay — just a
              mission plan within 24 hours.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/6282164097066?text=Halo%20Commander%2C%20saya%20ingin%20briefing%20mission%20VIBOXS."
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center gap-2 rounded-2xl bg-[var(--gradient-aurora)] px-7 py-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp the Commander
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="mailto:hello@viboxs.id"
                className="glass inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-sm font-medium hover:bg-white/5 transition"
              >
                <Mail className="h-4 w-4" />
                hello@viboxs.id
              </a>
              <a
                href="https://wa.me/6282164097066?text=Halo%20Commander%2C%20saya%20ingin%20booking%20basecamp%20call."
                target="_blank"
                rel="noreferrer"
                className="glass inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-sm font-medium hover:bg-white/5 transition"
              >
                <Calendar className="h-4 w-4" />
                Book a basecamp call
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-2xl">
              {[
                ["Reply within", "24 hrs"],
                ["First mission plan", "Free"],
                ["Slots / month", "Only 5"],
              ].map(([k, v]) => (
                <div key={k} className="glass rounded-2xl p-4">
                  <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-muted-foreground">
                    {k}
                  </div>
                  <div className="mt-1 font-display text-xl font-semibold text-foreground">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
