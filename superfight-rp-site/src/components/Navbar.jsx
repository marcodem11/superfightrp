import { useState } from "react";
import { nav, links, site } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-ambient sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur">
      <div className="container-wide flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-neonBlue shadow-glow glow-pulse" />
          <span className="whitespace-nowrap text-sm font-display tracking-[0.15em] sm:text-lg sm:tracking-[0.25em]">
            {site.name}
          </span>
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-neonBlue">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="btn btn-secondary" href={links.bssGuide}>
            Guida BSSHotel
          </a>
          <a className="btn btn-primary" href={links.discord}>
            Entra su Discord
          </a>
        </div>

        <button
          className="lg:hidden rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em]"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Apri menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/90 md:hidden">
          <div className="container-wide flex flex-col gap-4 py-4 text-sm uppercase tracking-[0.2em]">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-neonBlue"
              >
                {item.label}
              </a>
            ))}
            <a className="btn btn-secondary" href={links.bssGuide}>
              Guida BSSHotel
            </a>
            <a className="btn btn-primary" href={links.discord}>
              Entra su Discord
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
