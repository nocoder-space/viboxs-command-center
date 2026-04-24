import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  {
    q: "Apakah VIBOXS hanya membuat website?",
    a: "Tidak. Website adalah salah satu fondasi. VIBOXS juga dapat membantu AI automation, workflow automation, dashboard, lead handling system, dan custom digital system sesuai kebutuhan bisnis.",
  },
  {
    q: "Apakah harga bisa disesuaikan?",
    a: "Bisa. Harga mengikuti kompleksitas scope, jumlah halaman, fitur, integrasi, kebutuhan konten, timeline, dan level support. Setelah konsultasi awal, kami akan bantu rekomendasikan scope yang paling masuk akal.",
  },
  {
    q: "Kapan project resmi dimulai?",
    a: "Project VIBOXS resmi dimulai setelah kebutuhan dipahami, scope disepakati, dan DP 50% dibayarkan. Ini menjaga proses tetap jelas dan profesional.",
  },
  {
    q: "Apakah bisa hanya membuat landing page?",
    a: "Bisa. Landing page dapat dibuat untuk launch, campaign, product validation, event, personal brand, atau penawaran khusus selama tujuan dan scope-nya jelas.",
  },
  {
    q: "Apakah bisa tambah automation setelah website selesai?",
    a: "Bisa. Banyak project bisa dimulai dari website dulu, lalu berkembang ke automation, dashboard, AI integration, atau internal system saat kebutuhan operasional semakin jelas.",
  },
  {
    q: "Apakah VIBOXS cocok untuk UMKM?",
    a: "VIBOXS lebih cocok untuk bisnis yang ingin tampil lebih serius, startup, founder, personal brand premium, atau bisnis growing yang butuh proses lebih terarah. Jika kebutuhan hanya website sederhana dan cepat, scope akan diarahkan agar tidak berlebihan.",
  },
  {
    q: "Apakah saya harus langsung deal setelah konsultasi?",
    a: "Tidak. Konsultasi awal digunakan untuk memahami kebutuhan dan menentukan apakah VIBOXS cocok untuk project Anda. Jika cocok, baru masuk ke tahap scope dan proposal.",
  },
  {
    q: "Apakah VIBOXS bisa mengerjakan sistem custom?",
    a: "Bisa, tetapi sistem custom memerlukan requirement mapping, estimasi teknis, dan quotation khusus. Harga tidak dipukul rata karena setiap sistem memiliki kompleksitas berbeda.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="10 · QUESTIONS"
          title={
            <>
              Questions before{" "}
              <span className="text-gradient">starting the mission.</span>
            </>
          }
        />

        <Accordion type="single" collapsible className="mt-10 glass rounded-2xl px-5 sm:px-6">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-white/5">
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
