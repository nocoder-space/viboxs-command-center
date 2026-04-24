import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { whatsappLink } from "@/lib/contact";

const services = [
  {
    name: "VIBOXS Core Website",
    forWho:
      "Bisnis yang butuh website premium entry-level dengan proses lebih rapi dan visual lebih serius.",
    includes: [
      "Premium website structure",
      "Clear page flow",
      "Brand-oriented visual direction",
      "Basic SEO structure",
      "WhatsApp / contact integration",
      "Managed service default",
      "Structured review",
      "Launch support",
    ],
    cta: "Discuss Core Website",
    msg: "Halo Commander, saya tertarik membahas VIBOXS Core Website.",
  },
  {
    name: "VIBOXS Growth Website",
    forWho:
      "Startup, founder, personal brand premium, atau bisnis growing yang membutuhkan website lebih strategis.",
    includes: [
      "Deeper website structure",
      "Stronger messaging flow",
      "Premium UI direction",
      "Conversion-oriented sections",
      "Portfolio / case study support",
      "Launch-ready presentation",
      "Room for system expansion",
    ],
    cta: "Discuss Growth Website",
    msg: "Halo Commander, saya tertarik membahas VIBOXS Growth Website.",
  },
  {
    name: "Automation & AI Workflow",
    forWho:
      "Bisnis yang mulai kewalahan dengan pekerjaan manual dan ingin membuat workflow lebih efisien.",
    includes: [
      "Lead handling automation",
      "Form to database",
      "Follow-up workflow",
      "Notification system",
      "AI-assisted response flow",
      "Operations automation",
    ],
    cta: "Discuss Automation",
    msg: "Halo Commander, saya tertarik membahas Automation & AI Workflow.",
  },
  {
    name: "Dashboard & Custom System",
    forWho:
      "Bisnis yang butuh sistem internal, monitoring, dashboard, atau digital command center.",
    includes: [
      "Management dashboard",
      "Project tracker",
      "Lead tracker",
      "Payment tracker",
      "Internal operating system",
      "AI / automation layer",
      "Custom quotation",
    ],
    cta: "Discuss Custom System",
    msg: "Halo Commander, saya tertarik membahas Dashboard & Custom System.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="04 · MISSION OPTIONS"
          title={
            <>
              Choose the mission that{" "}
              <span className="text-gradient">fits your business stage.</span>
            </>
          }
          subtitle="Mulai dari premium website sampai AI automation dan custom dashboard. VIBOXS membantu memilih scope yang paling efektif, bukan yang paling ribet."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.name}
              className="group glass rounded-3xl p-7 hover:bg-white/[0.05] transition flex flex-col"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.3em] text-primary-glow">
                    M-{String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                    {s.name}
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.forWho}
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-1.5 text-sm text-foreground/85">
                {s.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary-glow" />
                    {inc}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(s.msg)}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-xs font-mono tracking-[0.18em] text-foreground hover:bg-white/5 transition"
              >
                {s.cta}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
