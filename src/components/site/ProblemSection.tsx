import {
  ShieldAlert,
  Inbox,
  Clock,
  Repeat,
  LayoutDashboard,
  AlertTriangle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const problems: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: ShieldAlert,
    title: "Website belum membangun trust",
    body: "Bisnis terlihat menarik di sosial media, tetapi saat calon client mencari informasi lebih serius, website belum cukup meyakinkan.",
  },
  {
    icon: Inbox,
    title: "Leads masih tercecer",
    body: "Prospek masuk dari banyak jalur, tetapi follow-up masih manual, lambat, dan sulit dipantau.",
  },
  {
    icon: Clock,
    title: "Launch terasa terburu-buru",
    body: "Founder ingin cepat tampil, tetapi tetap butuh hasil yang rapi, bukan website asal jadi.",
  },
  {
    icon: Repeat,
    title: "Workflow masih repetitif",
    body: "Tim mengulang pekerjaan yang sama setiap hari: input data, balas inquiry, follow-up, kirim notifikasi, dan update status.",
  },
  {
    icon: LayoutDashboard,
    title: "Tidak ada dashboard",
    body: "Owner sulit melihat gambaran besar: lead, project, payment, status, dan performa operasional.",
  },
  {
    icon: AlertTriangle,
    title: "Vendor sebelumnya tidak memberi rasa aman",
    body: "Scope tidak jelas, revisi liar, timeline kabur, dan proses tidak terasa profesional.",
  },
];

export function ProblemSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="01 · MISSION CONTEXT"
          title={
            <>
              Banyak bisnis punya ide bagus, tapi{" "}
              <span className="text-gradient">sistem digitalnya belum siap.</span>
            </>
          }
          subtitle="Masalahnya sering bukan hanya desain. Banyak bisnis kehilangan momentum karena website, workflow, dan sistem internal belum mendukung pertumbuhan."
        />

        <div className="mt-14 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className="group relative glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-0.5 hover:bg-white/[0.05]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/30">
                  <Icon className="h-5 w-5 text-primary-glow" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
