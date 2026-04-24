import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    title: "Initial Brief",
    body:
      "Client menghubungi Commander via WhatsApp dan menjelaskan kebutuhan awal: jenis bisnis, tujuan project, fitur yang dibutuhkan, dan target launch.",
  },
  {
    title: "Discovery & Screening",
    body:
      "VIBOXS memahami konteks bisnis, target audience, masalah utama, prioritas fitur, dan apakah project cocok masuk jalur website, automation, dashboard, atau custom system.",
  },
  {
    title: "Mission Plan / Proposal",
    body:
      "Commander menyusun arah solusi, estimasi scope, timeline, dan rekomendasi paket. Untuk project tertentu, visual preview atau project direction dapat disiapkan sebagai bahan keputusan.",
  },
  {
    title: "Scope Lock & DP",
    body:
      "Project resmi dimulai setelah scope disepakati dan DP 50% dibayarkan. Ini menjaga project tetap jelas dan tidak melebar tanpa kontrol.",
  },
  {
    title: "Build & Internal Review",
    body:
      "VIBOXS mulai membangun website atau system sesuai struktur, visual direction, dan requirement yang telah dikunci. Hasil dicek secara internal sebelum diberikan ke client.",
  },
  {
    title: "Client Review & UAT",
    body:
      "Client melakukan review terstruktur. Revisi dilakukan sesuai scope yang disepakati agar hasil final tetap rapi dan proses tidak berjalan liar.",
  },
  {
    title: "Launch & Handover",
    body:
      "Website atau system diluncurkan, client menerima panduan, dan VIBOXS memberi arahan pengembangan lanjutan bila dibutuhkan.",
  },
];

export function ProcessTimeline() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="06 · MISSION FLOW"
          title={
            <>
              From first message to launch,{" "}
              <span className="text-gradient">the mission stays structured.</span>
            </>
          }
          subtitle="Proses VIBOXS dibuat agar founder merasa aman: kebutuhan dipahami, scope dikunci, progress jelas, revisi terkendali, dan hasil siap diluncurkan."
        />

        <ol className="mt-14 relative grid gap-5">
          {/* vertical line */}
          <div className="absolute left-5 sm:left-7 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-white/10 to-transparent" />
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative grid grid-cols-[auto_1fr] gap-5 items-start glass rounded-2xl p-5 sm:p-6 ml-0"
            >
              <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[var(--gradient-aurora)] text-primary-foreground font-display font-bold text-base sm:text-lg shadow-[var(--shadow-glow-sm)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 glass-strong rounded-2xl p-6 text-sm leading-relaxed text-foreground/85">
          <span className="font-mono text-[11px] tracking-[0.3em] text-primary-glow">
            MISSION NOTE ·{" "}
          </span>
          Project premium tidak boleh berjalan tanpa arah. Karena itu VIBOXS
          menjaga setiap mission dengan scope, timeline, review, dan handover
          yang lebih tertib.
        </div>
      </div>
    </section>
  );
}
