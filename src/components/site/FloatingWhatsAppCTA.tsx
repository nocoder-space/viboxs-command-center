import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export function FloatingWhatsAppCTA() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Konsultasi Commander via WhatsApp"
      className="fixed bottom-5 right-5 z-40 group inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-4 pr-3 py-3 shadow-[0_10px_40px_-10px_oklch(0_0_0/0.7)] hover:shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-all"
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline text-sm font-semibold">Konsultasi Commander</span>
      <span className="sm:hidden text-xs font-semibold">Commander</span>
      <span className="relative flex h-2 w-2 ml-1">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
      </span>
    </a>
  );
}
