import { hero, links } from "../data/content";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-hero-radial opacity-70" />
      <div className="container-wide relative grid gap-10 pb-20 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="reveal" data-reveal>
          <span className="pill">{hero.eyebrow}</span>
          <h1 className="mt-6 text-4xl font-display leading-none text-novaWhite sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a className="btn btn-primary w-full sm:w-auto" href={links.discord}>
              {hero.ctaDiscord}
            </a>
            <a className="btn btn-secondary w-full sm:w-auto" href={links.bssGuide}>
              {hero.ctaBss}
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-slate-400">
            {hero.highlights.map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-3 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal hero-float" data-reveal>
          <div className="grain halftone relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl">
            <div
              className="h-[280px] w-full bg-cover bg-center sm:h-[360px] md:h-[420px]"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(10,18,32,0.8), rgba(12,15,22,0.6)), url(${hero.image})`
              }}
            />
            <div className="absolute inset-0 bg-slate-950/10" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/80 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Nova City vs Slum City</p>
              <p className="mt-2 text-lg font-semibold text-novaWhite">
                Due città. Due leggi. Una sola storia da scrivere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
