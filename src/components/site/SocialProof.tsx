import rangerPortrait from "@/assets/commander-dede.jpg";

const stats = [
  { v: "150+", k: "Missions Deployed" },
  { v: "98%", k: "Commander Satisfaction" },
  { v: "21×", k: "Value Delivered" },
  { v: "24/7", k: "Basecamp Online" },
];

const testimonials = [
  {
    quote:
      "Working with VIBOXS feels like onboarding a black-ops creative team. We launched in two weeks what our previous agency promised in six months.",
    author: "Reza Wijaya",
    role: "Founder · Lumen Wellness",
  },
  {
    quote:
      "Three months after deploying Ranger Flux, our operations team reclaimed 240+ hours per month. The ROI was visible by week three.",
    author: "Anita Suryani",
    role: "COO · Atlas Logistics",
  },
];

export function SocialProof() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="font-mono text-[11px] tracking-[0.3em] text-primary-glow">
            06 · TELEMETRY
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
            Trusted across
            <br />
            <span className="text-gradient">the constellation.</span>
          </h2>
        </div>

        {/* metrics */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.k} className="glass rounded-3xl p-6 sm:p-7">
              <div className="font-display text-4xl sm:text-5xl font-semibold text-gradient">
                {s.v}
              </div>
              <div className="mt-2 text-[11px] font-mono tracking-[0.25em] uppercase text-muted-foreground">
                {s.k}
              </div>
            </div>
          ))}
        </div>

        {/* testimonials */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <div className="lg:col-span-1 relative glass-strong overflow-hidden rounded-3xl">
            <img
              src={rangerPortrait}
              alt="Cinematic ranger portrait"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover min-h-[18rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            <div className="absolute left-6 bottom-6">
              <div className="font-mono text-[10px] tracking-[0.3em] text-primary-glow">
                COMMANDER · BASECAMP
              </div>
              <div className="mt-1 font-display text-xl font-semibold">Dede Darmawan</div>
            </div>
          </div>

          {testimonials.map((t) => (
            <figure key={t.author} className="glass rounded-3xl p-7 flex flex-col">
              <svg
                className="h-7 w-7 text-primary-glow/70"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3H3v2h1a5 5 0 0 0 5-5V7Zm12 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3h-1v2h1a5 5 0 0 0 5-5V7Z" />
              </svg>
              <blockquote className="mt-4 text-base leading-relaxed text-foreground/90 flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-white/5 pt-4">
                <div className="font-medium text-sm">{t.author}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
