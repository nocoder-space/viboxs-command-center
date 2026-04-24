import { ArrowUpRight, Info } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { whatsappLink } from "@/lib/contact";

const plans = [
  {
    name: "VIBOXS Core Website",
    price: "Start from Rp 4.900.000",
    forWho:
      "Website premium entry-level untuk bisnis yang ingin tampil lebih serius.",
    includes: [
      "Premium website structure",
      "Up to agreed page scope",
      "Visual direction",
      "Contact / WhatsApp integration",
      "Basic SEO setup",
      "Managed launch",
      "Structured review",
    ],
    cta: "Konsultasi Core Website",
    msg: "Halo Commander, saya tertarik konsultasi VIBOXS Core Website (start Rp 4.9jt).",
    highlight: false,
  },
  {
    name: "VIBOXS Growth Website",
    price: "Start from Rp 7.500.000",
    forWho:
      "Startup, founder, personal brand premium, dan bisnis growing.",
    includes: [
      "Deeper user journey",
      "Stronger messaging",
      "Premium UI sections",
      "Conversion-focused structure",
      "Portfolio / proof section",
      "Growth-ready structure",
    ],
    cta: "Konsultasi Growth Website",
    msg: "Halo Commander, saya tertarik konsultasi VIBOXS Growth Website (start Rp 7.5jt).",
    highlight: true,
  },
  {
    name: "Automation Basic",
    price: "Start from Rp 3.500.000",
    forWho:
      "Workflow otomatis sederhana untuk mengurangi pekerjaan manual.",
    includes: [
      "Simple workflow automation",
      "Form / data routing",
      "Notification flow",
      "Basic monitoring",
      "Workflow documentation",
    ],
    cta: "Konsultasi Automation",
    msg: "Halo Commander, saya tertarik konsultasi Automation Basic (start Rp 3.5jt).",
    highlight: false,
  },
  {
    name: "Automation Growth",
    price: "Start from Rp 6.500.000",
    forWho: "Workflow multi-step dengan kebutuhan lebih serius.",
    includes: [
      "Multi-step automation",
      "Lead handling flow",
      "Database connection",
      "Dashboard-ready structure",
      "Testing and refinement",
    ],
    cta: "Konsultasi Automation Growth",
    msg: "Halo Commander, saya tertarik konsultasi Automation Growth (start Rp 6.5jt).",
    highlight: false,
  },
  {
    name: "AI / Dashboard / Custom System",
    price: "Start from Rp 10.000.000",
    forWho:
      "Custom dashboard, AI workflow, internal system, atau kebutuhan digital yang lebih kompleks.",
    includes: [
      "Custom requirement mapping",
      "System architecture",
      "Dashboard / internal tools",
      "AI layer if needed",
      "Integration planning",
      "Custom quotation",
    ],
    cta: "Konsultasi Custom System",
    msg: "Halo Commander, saya tertarik konsultasi AI / Dashboard / Custom System.",
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="05 · PRICING"
          title={
            <>
              Transparent starting price,{" "}
              <span className="text-gradient">flexible by complexity.</span>
            </>
          }
          subtitle="Kami menampilkan harga awal agar Anda punya gambaran. Final scope tetap disesuaikan dengan kebutuhan, fitur, timeline, integrasi, dan tingkat kompleksitas project."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`relative rounded-3xl p-7 flex flex-col ${
                p.highlight
                  ? "glass-strong ring-1 ring-primary/40 shadow-[var(--shadow-glow-sm)]"
                  : "glass"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-7 rounded-full bg-[var(--gradient-aurora)] px-3 py-1 text-[10px] font-mono tracking-[0.25em] text-primary-foreground">
                  RECOMMENDED
                </div>
              )}
              <h3 className="font-display text-lg font-semibold text-foreground">
                {p.name}
              </h3>
              <div className="mt-3 font-display text-2xl font-bold text-gradient">
                {p.price}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.forWho}
              </p>
              <ul className="mt-5 grid gap-1.5 text-sm text-foreground/85 flex-1">
                {p.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary-glow" />
                    {inc}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(p.msg)}
                target="_blank"
                rel="noreferrer"
                className={`mt-6 inline-flex items-center justify-between gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                  p.highlight
                    ? "bg-foreground text-background hover:scale-[1.02]"
                    : "border border-white/15 text-foreground hover:bg-white/5"
                }`}
              >
                {p.cta}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 glass rounded-2xl p-5 sm:p-6 flex items-start gap-4">
          <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
            <Info className="h-4 w-4 text-primary-glow" />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Harga dapat berubah mengikuti jumlah halaman, fitur, integrasi,
            kebutuhan konten, timeline, kompleksitas sistem, dan level support.
            Setelah konsultasi awal, VIBOXS akan membantu merekomendasikan scope
            paling masuk akal agar project tetap efektif dan tidak membengkak.
          </p>
        </div>
      </div>
    </section>
  );
}
