import showcase1 from "@/assets/showcase-1.jpg";
import showcase2 from "@/assets/showcase-2.jpg";
import showcase3 from "@/assets/showcase-3.jpg";
import missionScene from "@/assets/mission-scene.jpg";
import heroDevice from "@/assets/hero-device.jpg";
import heroLaptop from "@/assets/hero-laptop.jpg";

export type PortfolioCategory =
  | "Website"
  | "Landing Page"
  | "Automation"
  | "AI Integration"
  | "Dashboard"
  | "Startup"
  | "Business"
  | "UI/UX"
  | "Internal System";

export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  clientType: string;
  industry: string;
  category: PortfolioCategory[];
  serviceType: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  strategicThinking: string;
  outcome: string;
  nextGrowthOpportunity: string;
  rangerInvolved: string;
  tags: string[];
  image: string;
  featured: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "p1",
    title: "Stellar Analytics OS",
    slug: "stellar-analytics-os",
    clientType: "Fintech / Data-driven startup",
    industry: "Fintech",
    category: ["Dashboard", "AI Integration", "Internal System"],
    serviceType: "Dashboard, AI-ready data structure, internal command center",
    shortDescription:
      "Command dashboard untuk membantu founder membaca sinyal operasional sebelum scaling.",
    challenge:
      "Founder membutuhkan cara yang lebih jelas untuk memantau sinyal operasional sebelum keputusan growth menjadi semakin sulit dikelola.",
    solution:
      "VIBOXS memetakan alur informasi dan merancang konsep dashboard prediktif yang membantu founder melihat metrik kunci dalam satu command center.",
    strategicThinking:
      "Project ini bukan tentang membuat chart yang terlihat futuristik. Fokus utamanya adalah memutuskan data apa yang penting, bagaimana mengelompokkannya, dan bagaimana founder bisa membaca pergerakan operasional lebih cepat.",
    outcome:
      "Tercipta decision layer yang lebih jelas untuk monitoring performance, mendeteksi isu, dan menyiapkan AI-assisted insights di masa depan.",
    nextGrowthOpportunity:
      "AI prediction layer, alerting otomatis, dan integrasi data multi-sumber.",
    rangerInvolved: "Nexus + Spark + Vault",
    tags: ["Dashboard", "AI", "Fintech", "Internal System"],
    image: showcase1,
    featured: true,
  },
  {
    id: "p2",
    title: "Lumen Commerce Hub",
    slug: "lumen-commerce-hub",
    clientType: "Wellness / Lifestyle brand",
    industry: "Wellness",
    category: ["Website", "Business", "UI/UX"],
    serviceType: "Premium website, conversion structure, product storytelling",
    shortDescription:
      "Website premium untuk brand wellness yang ingin tampil lebih meyakinkan dan terstruktur.",
    challenge:
      "Brand memiliki produk yang kuat tetapi membutuhkan pengalaman digital premium yang dapat menjelaskan trust, kualitas, dan flow pembelian dengan jelas.",
    solution:
      "VIBOXS membangun struktur website cinematic dengan section produk, trust signals, story flow, dan conversion path yang jelas.",
    strategicThinking:
      "Tujuannya bukan sekadar menampilkan produk. Website harus membuat customer mengerti kenapa brand ini terasa premium dan bagaimana mengambil langkah berikutnya tanpa kebingungan.",
    outcome:
      "Brand presentation layer yang lebih kuat dan customer journey yang lebih jelas dari first impression sampai action.",
    nextGrowthOpportunity:
      "Loyalty system, automation untuk re-purchase, dan dashboard penjualan.",
    rangerInvolved: "Forge + Nexus + Echo",
    tags: ["Website", "Premium", "Wellness", "Commerce"],
    image: showcase2,
    featured: true,
  },
  {
    id: "p3",
    title: "Atlas Automation Grid",
    slug: "atlas-automation-grid",
    clientType: "Operations-heavy business",
    industry: "Operations",
    category: ["Automation", "Internal System"],
    serviceType: "Workflow automation, lead routing, notification system",
    shortDescription:
      "Workflow automation grid untuk mengurangi pekerjaan manual lintas tim.",
    challenge:
      "Tim menghabiskan terlalu banyak waktu untuk pekerjaan repetitif di sales, support, dan fulfillment.",
    solution:
      "VIBOXS memetakan titik-titik workflow repetitif dan merancang automation grid untuk mengurangi routing manual, memperbaiki notifikasi, dan mempermudah follow-up.",
    strategicThinking:
      "Automation hanya berguna jika workflow menjadi lebih mudah dipahami. Langkah pertama adalah menyederhanakan proses sebelum menambahkan tools.",
    outcome:
      "Arah workflow yang lebih terorganisir, mengurangi pekerjaan operasional repetitif, dan menyiapkan bisnis untuk scaling.",
    nextGrowthOpportunity:
      "AI-assisted classification, dashboard performa workflow, dan integrasi multi-channel.",
    rangerInvolved: "Flux + Spark",
    tags: ["Automation", "Workflow", "Operations"],
    image: showcase3,
    featured: true,
  },
  {
    id: "p4",
    title: "Startup Launch Page",
    slug: "startup-launch-page",
    clientType: "Early-stage founder",
    industry: "Startup",
    category: ["Landing Page", "Startup", "UI/UX"],
    serviceType: "Launch landing page, messaging structure, CTA design",
    shortDescription:
      "Landing page launch untuk founder early-stage yang butuh tampil kredibel dengan cepat.",
    challenge:
      "Founder perlu mempresentasikan ide dengan cepat namun tetap terlihat kredibel di mata early users, partner, dan investor.",
    solution:
      "VIBOXS membangun struktur launch page dengan problem framing, value proposition, feature explanation, proof section, dan CTA flow yang jelas.",
    strategicThinking:
      "Untuk startup early-stage, kejelasan lebih penting daripada kompleksitas. Page harus membantu visitor memahami ide dengan cepat dan mengambil langkah berikutnya dengan yakin.",
    outcome:
      "Digital launch presence yang lebih tajam dan membantu founder mengkomunikasikan produk dengan lebih jelas.",
    nextGrowthOpportunity:
      "Waitlist automation, lead scoring, dan investor-ready data room.",
    rangerInvolved: "Nexus + Forge + Echo",
    tags: ["Landing Page", "Startup", "Launch"],
    image: missionScene,
    featured: true,
  },
  {
    id: "p5",
    title: "Client Command Dashboard",
    slug: "client-command-dashboard",
    clientType: "Service business",
    industry: "Service",
    category: ["Dashboard", "Internal System", "Business"],
    serviceType: "Management dashboard, project tracker, payment visibility",
    shortDescription:
      "Command dashboard untuk memantau lead, project, payment, dan operasional dalam satu layar.",
    challenge:
      "Bisnis butuh satu tempat untuk memantau leads, project aktif, payment, dan status follow-up.",
    solution:
      "VIBOXS merancang konsep command dashboard dengan data layer terstruktur untuk leads, project, payment, dokumen, dan task internal.",
    strategicThinking:
      "Tantangan utama bukan membangun layar dashboard. Tantangan sebenarnya adalah memutuskan apa yang harus dilihat owner setiap pagi.",
    outcome:
      "Management view yang lebih jelas untuk mendukung operasional harian dan persiapan automation di masa depan.",
    nextGrowthOpportunity:
      "AI insights harian, automation reminder, dan integrasi accounting.",
    rangerInvolved: "Nexus + Vault + Flux",
    tags: ["Dashboard", "Internal", "Service Business"],
    image: heroDevice,
    featured: false,
  },
  {
    id: "p6",
    title: "AI Lead Response System",
    slug: "ai-lead-response-system",
    clientType: "Lead-driven service company",
    industry: "Service",
    category: ["AI Integration", "Automation"],
    serviceType: "AI-assisted lead response, workflow routing, inquiry handling",
    shortDescription:
      "Sistem respon lead berbasis AI untuk meningkatkan kecepatan dan konsistensi.",
    challenge:
      "Tim menerima inquiry dari berbagai channel tetapi response quality dan speed tidak konsisten.",
    solution:
      "VIBOXS memetakan inquiry flow dan merancang AI-assisted response system untuk klasifikasi, routing, dan dukungan lead handling.",
    strategicThinking:
      "AI tidak menggantikan business judgment. AI membantu tim merespon lebih cepat, menjaga konteks tetap rapi, dan mengurangi penjelasan repetitif.",
    outcome:
      "Arah lead response yang lebih terstruktur untuk meningkatkan kecepatan, konsistensi, dan disiplin follow-up.",
    nextGrowthOpportunity:
      "Voice AI, sentiment scoring, dan auto-handover ke sales senior.",
    rangerInvolved: "Spark + Flux + Echo",
    tags: ["AI", "Lead", "Automation"],
    image: heroLaptop,
    featured: false,
  },
];

export const portfolioCategories: ("All" | PortfolioCategory)[] = [
  "All",
  "Website",
  "Landing Page",
  "Automation",
  "AI Integration",
  "Dashboard",
  "Startup",
  "Business",
  "UI/UX",
  "Internal System",
];
