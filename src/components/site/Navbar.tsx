import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

const links = [
  { label: "Home", to: "/" as const },
  { label: "Portfolio", to: "/portfolio" as const },
  { label: "Profile", to: "/profile" as const },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`glass flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "shadow-[0_10px_40px_-15px_oklch(0_0_0/0.6)]" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--gradient-aurora)] shadow-[var(--shadow-glow-sm)]">
              <span className="absolute inset-0 rounded-lg bg-[var(--gradient-aurora)] blur-md opacity-60 group-hover:opacity-90 transition-opacity" />
              <span className="relative font-display text-sm font-bold text-primary-foreground">
                V
              </span>
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-display text-sm font-semibold tracking-[0.18em] text-foreground">
                VIBOXS
              </span>
              <span className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground/80">
                COMMAND CENTER
              </span>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="relative rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: true }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-foreground/95 px-4 py-2 text-sm font-medium text-background transition-all hover:bg-foreground hover:shadow-[var(--shadow-glow-sm)]"
            >
              <MessageCircle className="h-4 w-4" />
              Konsultasi Commander
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl glass"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-3 animate-fade-up">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="block rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    activeProps={{ className: "text-foreground bg-white/5" }}
                    activeOptions={{ exact: true }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 flex items-center gap-2 rounded-xl bg-foreground px-4 py-3 text-sm font-medium text-background"
                >
                  <MessageCircle className="h-4 w-4" />
                  Konsultasi Commander
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
