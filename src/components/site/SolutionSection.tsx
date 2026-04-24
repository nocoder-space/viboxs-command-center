import { Globe, Cpu, LayoutDashboard, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const solutions: {
  icon: LucideIcon;
  title: string;
  description: string;
  uses: string[];
}[] = [
  {
    icon: Globe,
    title: "Premium Website",
    description:
      "Website yang dirancang untuk membuat bisnis terlihat lebih kredibel, menjelaskan value dengan jelas, dan mengarahkan visitor menuju tindakan yang tepat.",
    uses: ["Company profile", "Landing page", "Startup launch page", "Brand website", "Service website"],
  },
  {
    icon: Cpu,
    title: "AI Automation",
    description:
      "Otomatisasi proses manual seperti lead response, form handling, follow-up, notifikasi, data entry, dan workflow internal agar bisnis bergerak lebih efisien.",
    uses: ["Auto response", "Lead routing", "Form to database", "WhatsApp / email workflow", "Task notification"],
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard & Internal System",
    description:
      "Sistem visual untuk memantau data penting seperti leads, project, payment, status operasional, dan aktivitas tim dalam satu command center.",
    uses: ["Project dashboard", "Client dashboard", "Management dashboard", "Internal tracker", "Operating system"],
  },
  {
    icon: Rocket,
    title: "Growth-Ready Foundation",
    description:
      "Struktur digital yang tidak hanya terlihat bagus saat launch, tetapi juga bisa dikembangkan ke automation, AI, dashboard, dan sistem yang lebih kompleks.",
    uses: ["Startup validation", "Growth support", "System expansion", "Process optimization"],
  },
];

export function SolutionSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="02 · WHAT VIBOXS BUILDS"
          title={
            <>
              VIBOXS builds the digital foundation behind{" "}
              <span className="text-gradient">serious businesses.</span>
            </>
          }
          subtitle="Kami tidak hanya membuat tampilan. Kami membantu menyusun struktur digital yang lebih siap dipakai, dipercaya, dan dikembangkan."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {solutions.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group relative glass-strong rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.05]"
              >
                <div className="absolute -inset-px rounded-3xl bg-[var(--gradient-aurora)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20 -z-10" />
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--gradient-aurora)]/15 ring-1 ring-primary/30">
                    <Icon className="h-6 w-6 text-primary-glow" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2 pt-5 border-t border-white/5">
                  {s.uses.map((u) => (
                    <span
                      key={u}
                      className="rounded-full bg-white/[0.04] px-3 py-1 text-[11px] font-mono tracking-wider text-muted-foreground"
                    >
                      {u}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
