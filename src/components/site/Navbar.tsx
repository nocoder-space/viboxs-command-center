import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Universe", href: "#story" },
  { label: "Rangers", href: "#rangers" },
  { label: "Mission Flow", href: "#flow" },
  { label: "Showcase", href: "#showcase" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--gradient-aurora)] shadow-[var(--shadow-glow-sm)]">
              <span className="absolute inset-0 rounded-lg bg-[var(--gradient-aurora)] blur-md opacity-60 group-hover:opacity-90 transition-opacity" />
              <span className="relative font-display text-sm font-bold text-primary-foreground">V</span>
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-display text-sm font-semibold tracking-[0.18em] text-foreground">
                VIBOXS
              </span>
              <span className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground/80">
                UNIVERSE
              </span>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative rounded-lg px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                  <span className="absolute inset-x-3.5 bottom-1 h-px scale-x-0 origin-left bg-gradient-to-r from-primary to-primary-glow transition-transform duration-300 hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/6282164097066?text=Halo%20Commander%2C%20saya%20ingin%20briefing%20mission%20VIBOXS."
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-foreground/95 px-4 py-2 text-sm font-medium text-background transition-all hover:bg-foreground hover:shadow-[var(--shadow-glow-sm)]"
            >
              Launch Mission
              <span aria-hidden>→</span>
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl glass"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-3 animate-fade-up">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
