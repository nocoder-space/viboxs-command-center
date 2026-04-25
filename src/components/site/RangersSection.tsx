import {
  Boxes,
  Workflow,
  Brain,
  Shield,
  TrendingUp,
  Palette,
  Mic,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { WHATSAPP_URL } from "@/lib/contact";

type Ranger = {
  code: string;
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
};

const rangers: Ranger[] = [
  {
    code: "R-01",
    name: "Nexus",
    role: "Web Architecture",
    description: "Builds scalable website structures, launch pages, and digital foundations.",
    icon: Boxes,
  },
  {
    code: "R-02",
    name: "Flux",
    role: "Automation Workflow",
    description: "Turns repetitive tasks into automated workflows.",
    icon: Workflow,
  },
  {
    code: "R-03",
    name: "Spark",
    role: "AI Integration",
    description: "Adds intelligent layers, AI assistants, and smart response systems.",
    icon: Brain,
  },
  {
    code: "R-04",
    name: "Vault",
    role: "Security & Data",
    description: "Protects data flow, access, and mission-critical digital assets.",
    icon: Shield,
  },
  {
    code: "R-05",
    name: "Pulse",
    role: "Growth System",
    description: "Supports conversion paths, funnel clarity, and growth-oriented structure.",
    icon: TrendingUp,
  },
  {
    code: "R-06",
    name: "Forge",
    role: "UI / UX Design",
    description: "Shapes premium interfaces and user experiences that feel memorable.",
    icon: Palette,
  },
  {
    code: "R-07",
    name: "Echo",
    role: "Content & Story",
    description: "Turns business value into clearer messaging and brand narrative.",
    icon: Mic,
  },
];

export function RangersSection() {
  return (
    <section id="rangers" className="cinematic-section relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="07 · CAPABILITY SYSTEM"
          title={
            <>
              Behind every mission, each Ranger handles{" "}
              <span className="text-gradient">a critical layer.</span>
            </>
          }
          subtitle="Rangers adalah representasi capability VIBOXS. Di setiap project, kami menurunkan kemampuan yang paling relevan dengan kebutuhan client."
        />

        {(() => {
          const renderCard = (r: Ranger) => {
            const Icon = r.icon;
            return (
              <article
                key={r.code}
                className="group relative glass rounded-2xl p-5 transition-all duration-500 hover:-translate-y-0.5 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    {r.code}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-glow shadow-[0_0_12px_oklch(0.78_0.18_300)]" />
                </div>
                <div className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/30">
                  <Icon className="h-5 w-5 text-primary-glow" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {r.name}
                </h3>
                <div className="mt-1 text-[11px] font-mono tracking-[0.18em] uppercase text-primary-glow/90">
                  {r.role}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {r.description}
                </p>
              </article>
            );
          };
          return (
            <div className="relative mt-14 space-y-4 sm:space-y-5">
              <div className="pointer-events-none absolute inset-0 hidden rounded-full border border-primary/10 lg:block" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full glass-strong text-center font-mono text-[10px] tracking-[0.22em] text-primary-glow lg:grid place-items-center">MISSION<br />CORE</div>
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {rangers.slice(0, 4).map(renderCard)}
              </div>
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:mx-auto xl:max-w-[75%]">
                {rangers.slice(4).map(renderCard)}
              </div>
            </div>
          );
        })()}

        <div className="mt-12 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-4 text-sm font-semibold text-background hover:scale-[1.02] transition"
          >
            Tell Commander Your Mission
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </div>
      </div>
    </section>
  );
}
