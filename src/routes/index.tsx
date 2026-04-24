import { createFileRoute } from "@tanstack/react-router";
import { CosmicBackground } from "@/components/site/CosmicBackground";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ProblemSection } from "@/components/site/ProblemSection";
import { SolutionSection } from "@/components/site/SolutionSection";
import { WhyViboxsSection } from "@/components/site/WhyViboxsSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { PricingSection } from "@/components/site/PricingSection";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { RangersSection } from "@/components/site/RangersSection";
import { PortfolioPreview } from "@/components/site/PortfolioPreview";
import { TrustSection } from "@/components/site/TrustSection";
import { FAQSection } from "@/components/site/FAQSection";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsAppCTA } from "@/components/site/FloatingWhatsAppCTA";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "VIBOXS — Premium Website, AI Automation & Digital System Partner",
      },
      {
        name: "description",
        content:
          "VIBOXS membantu startup, founder, dan bisnis growing membangun website premium, AI automation, dashboard, dan sistem digital yang siap berkembang.",
      },
      {
        property: "og:title",
        content:
          "VIBOXS — Premium Website, AI Automation & Digital System Partner",
      },
      {
        property: "og:description",
        content:
          "Premium websites, AI automation, dashboards, dan digital systems untuk founder yang siap launch lebih cepat dan scale lebih cerdas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <CosmicBackground />
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <WhyViboxsSection />
      <ServicesSection />
      <PricingSection />
      <ProcessTimeline />
      <RangersSection />
      <PortfolioPreview />
      <TrustSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <FloatingWhatsAppCTA />
    </main>
  );
}
