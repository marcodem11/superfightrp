import { footer, links, site } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="container-wide grid gap-6 py-10 sm:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h3 className="text-xl font-display text-novaWhite">{site.name}</h3>
          <p className="mt-2 text-sm text-slate-400">{footer.credits}</p>
          <p className="mt-2 text-xs text-slate-500">{footer.note}</p>
        </div>
        <div className="flex flex-col gap-3 text-sm uppercase tracking-[0.2em] text-slate-300">
          <a className="hover:text-neonBlue" href={links.discord}>
            Discord
          </a>
          <a className="hover:text-neonBlue" href={links.bssHotel}>
            BSSHotel
          </a>
        </div>
      </div>
    </footer>
  );
}
