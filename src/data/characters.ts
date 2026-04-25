import commanderDede from "@/assets/commander-dede.webp";
import rangerNexus from "@/assets/ranger-nexus.webp";
import rangerFlux from "@/assets/ranger-flux.webp";
import rangerSpark from "@/assets/ranger-spark.webp";
import rangerVault from "@/assets/ranger-vault.webp";
import rangerPulse from "@/assets/ranger-pulse.webp";
import rangerForge from "@/assets/ranger-forge.webp";
import rangerEcho from "@/assets/ranger-echo.webp";

export type Character = {
  id: string;
  code: string;
  name: string;
  role: string;
  function: string;
  tags: string[];
  image: string;
  accentClass: string;
  isCommander?: boolean;
};

export const characters: Character[] = [
  {
    id: "commander-dede",
    code: "CMD-00",
    name: "Commander Dede",
    role: "Strategic Lead & Project Command",
    function:
      "Memimpin arah project, membaca kebutuhan client, menjaga scope, dan mengatur Rangers.",
    tags: ["Strategy", "Direction", "Quality Control"],
    image: commanderDede,
    accentClass: "accent-commander",
    isCommander: true,
  },
  {
    id: "nexus",
    code: "R-01",
    name: "Nexus",
    role: "Web Architecture",
    function: "Membangun struktur website, landing page, dan fondasi digital.",
    tags: ["Website", "Structure", "Launch"],
    image: rangerNexus,
    accentClass: "accent-nexus",
  },
  {
    id: "flux",
    code: "R-02",
    name: "Flux",
    role: "Automation Workflow",
    function: "Mengubah pekerjaan manual menjadi workflow otomatis.",
    tags: ["Automation", "Workflow", "Efficiency"],
    image: rangerFlux,
    accentClass: "accent-flux",
  },
  {
    id: "spark",
    code: "R-03",
    name: "Spark",
    role: "AI Integration",
    function: "Menghubungkan AI ke sistem bisnis, assistant, dan smart response.",
    tags: ["AI", "Assistant", "Intelligence"],
    image: rangerSpark,
    accentClass: "accent-spark",
  },
  {
    id: "vault",
    code: "R-04",
    name: "Vault",
    role: "Security & Data",
    function: "Menjaga alur data, akses, dan keamanan sistem.",
    tags: ["Security", "Data", "Access"],
    image: rangerVault,
    accentClass: "accent-vault",
  },
  {
    id: "pulse",
    code: "R-05",
    name: "Pulse",
    role: "Growth System",
    function: "Membaca funnel, conversion path, dan momentum pertumbuhan.",
    tags: ["Growth", "Funnel", "Conversion"],
    image: rangerPulse,
    accentClass: "accent-pulse",
  },
  {
    id: "forge",
    code: "R-06",
    name: "Forge",
    role: "UI/UX Design",
    function: "Membentuk visual, interface, dan pengalaman pengguna.",
    tags: ["UI/UX", "Visual", "Experience"],
    image: rangerForge,
    accentClass: "accent-forge",
  },
  {
    id: "echo",
    code: "R-07",
    name: "Echo",
    role: "Content & Story",
    function: "Menyusun narasi, pesan, dan komunikasi brand.",
    tags: ["Content", "Story", "Messaging"],
    image: rangerEcho,
    accentClass: "accent-echo",
  },
];

export const commander = characters[0];
export const rangers = characters.slice(1);