import { SectionHeader } from "./SectionHeader";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const metrics = [
  { value: "150+", label: "Missions Deployed" },
  { value: "98%", label: "Commander Satisfaction" },
  { value: "24/7", label: "Basecamp Online" },
  { value: "1:1", label: "Direct Commander Handling" },
];

const testimonials = [
  {
    quote:
      "VIBOXS helped us turn a scattered idea into a website structure that actually made our offer easier to understand.",
    name: "Startup Founder",
    role: "Early-stage business",
    photo: testimonial1,
  },
  {
    quote:
      "The process felt more structured than a typical website project. We knew what was being built, why it mattered, and what came next.",
    name: "Business Owner",
    role: "Growing brand",
    photo: testimonial2,
  },
  {
    quote:
      "The automation direction gave us a clearer view of how our manual workflow could become a system.",
    name: "Operations Lead",
    role: "Service business",
    photo: testimonial3,
  },
];

export function TrustSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="09 · TRUST SIGNAL"
          title={
            <>
              Built for founders who need clarity{" "}
              <span className="text-gradient">before they scale.</span>
            </>
          }
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="glass rounded-2xl p-5 sm:p-6">
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">
                {m.value}
              </div>
              <div className="mt-2 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-muted-foreground">
                {m.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name + t.quote.slice(0, 10)}
              className="glass-strong rounded-2xl p-6 flex flex-col justify-between"
            >
              <p className="text-sm leading-relaxed text-foreground/90">
                “{t.quote}”
              </p>
              <footer className="mt-5 pt-4 border-t border-white/5 flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={`Portrait of ${t.name}`}
                  loading="lazy"
                  width={96}
                  height={96}
                  className="h-12 w-12 rounded-full object-cover ring-1 ring-white/10 shadow-[0_4px_20px_oklch(0.35_0.22_295/0.25)]"
                />
                <div>
                  <div className="font-display text-sm font-semibold text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
