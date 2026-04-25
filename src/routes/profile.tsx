import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { CosmicBackground } from "@/components/site/CosmicBackground";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsAppCTA } from "@/components/site/FloatingWhatsAppCTA";
import { CharacterCarousel3D } from "@/components/site/CharacterCarousel3D";
import { commander, rangers } from "@/data/characters";
import { WHATSAPP_URL } from "@/lib/contact";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
  head: () => ({
    meta: [
      { title: "Profile VIBOXS Universe — Commander & Rangers" },
      {
        name: "description",
        content:
          "Kenali VIBOXS Universe, Commander Dede, dan 7 Rangers sebagai specialist remote team di bawah PT. Ekosistem Pelosok Hub.",
      },
      { property: "og:title", content: "Profile VIBOXS Universe — Commander & Rangers" },
      {
        property: "og:description",
        content:
          "VIBOXS Universe menjelaskan sistem kerja premium: Commander Dede memimpin arah, Rangers membantu eksekusi sesuai capability.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const viboxsCards = ["Premium Website", "Automation", "AI Integration", "Dashboard / System", "Digital Foundation"];
const trustCards = ["Legal Umbrella", "Structured Service", "Remote Specialist Team", "Commander-Led Quality Control"];
const commanderChips = ["Client Direction", "Scope Control", "Quality Control", "Ranger Coordination", "Final Review"];
const benefits = [
  "Lebih mudah memahami tim",
  "Project lebih terarah",
  "Eksekusi lebih spesialis",
  "Komunikasi tetap satu pintu",
  "Mudah dikembangkan",
  "Lebih memorable tanpa kehilangan profesionalitas",
];

function ProfilePage() {
  return (
    <main className="relative overflow-hidden">
      <CosmicBackground />
      <Navbar />
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] lg:items-center">
          <div className="relative z-10">
            <div className="font-mono text-[11px] tracking-[0.3em] text-primary-glow">
              VIBOXS UNIVERSE PROFILE
            </div>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.04] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Bukan gimmick. VIBOXS Universe adalah sistem kerja yang dibuat lebih mudah dipahami.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              VIBOXS berada di bawah naungan PT. Ekosistem Pelosok Hub. Commander Dede memimpin arah project, sementara Rangers merepresentasikan specialist remote team yang membantu eksekusi project client sesuai bidangnya.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:scale-[1.02] hover:shadow-[var(--shadow-glow-sm)]">
                Konsultasi Commander <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/5">
                Lihat Portfolio
              </Link>
            </div>
          </div>
          <div className="relative min-h-[520px] rounded-3xl glass-strong">
            <div className="absolute inset-0 grid-cosmos opacity-60" />
            <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
            <img src={commander.image} alt="Commander Dede Strategic Lead VIBOXS" className="absolute bottom-0 left-1/2 z-10 h-[520px] w-auto -translate-x-1/2 object-contain drop-shadow-[0_35px_90px_color-mix(in_oklab,var(--primary)_35%,transparent)]" />
            <div className="absolute bottom-8 left-6 right-6 z-20 grid grid-cols-4 gap-2 sm:grid-cols-7">
              {rangers.map((ranger) => (
                <div key={ranger.id} className={`h-16 overflow-hidden rounded-2xl glass ${ranger.accentClass}`}>
                  <img src={ranger.image} alt={ranger.name} loading="lazy" className="mx-auto h-28 w-auto -translate-y-2 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CharacterCarousel3D />
      <InfoCards />
      <UmbrellaSection />
      <CommanderSection />
      <RangersGrid />
      <GimmickSection />
      <BenefitSection />
      <ProfileCTA />
      <Footer />
      <FloatingWhatsAppCTA />
    </main>
  );
}

function SectionTitle({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{children}</p>}
    </div>
  );
}

function InfoCards() {
  return (
    <section className="cinematic-section py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle title="Apa itu VIBOXS?">
          VIBOXS adalah layanan digital premium untuk founder, startup, bisnis growing, dan brand yang membutuhkan website premium, automation, AI integration, dashboard, atau sistem digital yang lebih serius.
        </SectionTitle>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {viboxsCards.map((item) => <CompactCard key={item} title={item} />)}
        </div>
      </div>
    </section>
  );
}

function UmbrellaSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle title="Di bawah naungan PT. Ekosistem Pelosok Hub">
          VIBOXS berjalan sebagai unit layanan dengan struktur dan tanggung jawab yang lebih jelas, bukan jasa lepas tanpa arah.
        </SectionTitle>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustCards.map((item) => <CompactCard key={item} title={item} />)}
        </div>
      </div>
    </section>
  );
}

function CommanderSection() {
  return (
    <section className="cinematic-section py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-center">
        <div className="relative min-h-[360px] overflow-hidden rounded-3xl glass-strong">
          <div className="absolute inset-0 grid-cosmos opacity-50" />
          <img src={commander.image} alt="Commander Dede" loading="lazy" className="absolute bottom-0 left-1/2 h-[380px] w-auto -translate-x-1/2 object-contain" />
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">Commander Dede sebagai Strategic Lead</h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Commander Dede memimpin arah project, membaca kebutuhan bisnis client, menjaga scope, mengatur prioritas, dan memastikan setiap Ranger bergerak sesuai kebutuhan project.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {commanderChips.map((chip) => <Chip key={chip}>{chip}</Chip>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function RangersGrid() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle title="Siapa 7 Rangers VIBOXS?">
          Rangers adalah specialist remote team yang direkrut berdasarkan capability. Mereka bukan freelancer acak dan tetap berada dalam komando Commander Dede.
        </SectionTitle>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rangers.map((ranger) => (
            <article key={ranger.id} className={`group rounded-3xl glass p-4 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.055] ${ranger.accentClass}`}>
              <div className="relative h-44 overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--character-accent)_20%,transparent),transparent_70%)]">
                <img src={ranger.image} alt={`${ranger.name} ${ranger.role}`} loading="lazy" className="mx-auto h-64 w-auto -translate-y-3 object-contain transition duration-700 group-hover:scale-105" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{ranger.name}</h3>
              <div className="mt-1 text-xs font-mono uppercase tracking-[0.18em] text-primary-glow">{ranger.role}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ranger.function}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GimmickSection() {
  const left = ["karakter tanpa fungsi", "tidak ada struktur kerja", "tidak jelas siapa bertanggung jawab", "hanya terlihat keren di permukaan"];
  const right = ["setiap Ranger mewakili capability nyata", "Commander menjaga arah dan scope", "project tetap mengikuti proses profesional", "client lebih mudah memahami siapa mengerjakan apa"];
  return (
    <section className="cinematic-section py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle title="Kenapa ini bukan gimmick?" />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <CompareCard title="Jika hanya gimmick" items={left} muted />
          <CompareCard title="VIBOXS Universe" items={right} />
        </div>
      </div>
    </section>
  );
}

function BenefitSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle title="Keuntungan untuk client" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => <CompactCard key={benefit} title={benefit} />)}
        </div>
      </div>
    </section>
  );
}

function ProfileCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-12">
          <div className="absolute inset-0 grid-cosmos opacity-40" />
          <div className="relative">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">Siap memulai mission bersama VIBOXS?</h2>
            <p className="mx-auto mt-5 max-w-3xl text-muted-foreground">Ceritakan kebutuhan bisnis Anda. Commander akan membantu membaca apakah project Anda membutuhkan website premium, automation, AI integration, dashboard, atau kombinasi capability Rangers yang paling tepat.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:scale-[1.02]">Konsultasi Commander <ArrowUpRight className="h-4 w-4" /></a>
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/5">Lihat Portfolio</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompactCard({ title }: { title: string }) {
  return <div className="rounded-2xl glass p-5 text-sm font-semibold text-foreground transition hover:-translate-y-1 hover:bg-white/[0.055]"><ShieldCheck className="mb-4 h-5 w-5 text-primary-glow" />{title}</div>;
}

function Chip({ children }: { children: ReactNode }) {
  return <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-mono text-foreground/80 ring-1 ring-white/10">{children}</span>;
}

function CompareCard({ title, items, muted }: { title: string; items: string[]; muted?: boolean }) {
  return (
    <div className={`rounded-3xl glass-strong p-6 ${muted ? "opacity-80" : "glow-ring"}`}>
      <h3 className="font-display text-2xl font-semibold text-foreground">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => <li key={item} className="flex gap-3 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />{item}</li>)}
      </ul>
    </div>
  );
}