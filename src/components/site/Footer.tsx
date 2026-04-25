import { Link } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--gradient-aurora)]">
              <span className="font-display text-sm font-bold text-primary-foreground">V</span>
            </span>
            <div className="leading-none">
              <div className="font-display text-sm font-semibold tracking-[0.18em]">VIBOXS</div>
              <div className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground/80 mt-1">
                COMMAND · CENTER
              </div>
            </div>
          </Link>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition">
              Home
            </Link>
            <Link to="/portfolio" className="hover:text-foreground transition">
              Portfolio
            </Link>
            <Link to="/profile" className="hover:text-foreground transition">
              Profile
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition"
            >
              WhatsApp
            </a>
          </nav>

          <div className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground/80">
            © 2026 VIBOXS · BASECAMP INDONESIA
          </div>
        </div>
      </div>
    </footer>
  );
}
