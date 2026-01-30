import { cities } from "../data/content";

export default function CityCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {cities.map((city) => (
        <div
          key={city.id}
          className="grain halftone relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6"
        >
          <div
            className={`absolute inset-0 opacity-80 ${
              city.accent === "nova" ? "bg-nova-glow" : "bg-slum-glow"
            }`}
          />
          <div className="relative">
            <p className="pill">{city.mood}</p>
            <h3 className="mt-4 text-2xl font-display text-novaWhite">
              {city.title}
            </h3>
            <p className="mt-3 text-sm text-slate-300">{city.description}</p>
            <ul className="mt-5 grid gap-2 text-sm text-slate-200">
              {city.points.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-neonBlue" />
                  {point}
                </li>
              ))}
            </ul>
            <a
              href="#media"
              className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] ${
                city.accent === "nova" ? "text-nova" : "text-neonBlue"
              }`}
            >
              {city.cta}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
