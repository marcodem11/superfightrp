import { statsSystem } from "../data/content";

export default function StatsSystemSection() {
  return (
    <div className="grid gap-6">
      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
        <p className="text-sm text-slate-200">{statsSystem.range}</p>
        <p className="mt-2 text-sm text-slate-300">{statsSystem.formula}</p>
        <p className="mt-2 text-sm font-semibold text-neonBlue">{statsSystem.modifier}</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">11 stats</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {statsSystem.stats.map((stat) => (
            <span
              key={stat}
              className="rounded-xl border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-200"
            >
              {stat}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Tier potenza</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {statsSystem.tiers.map((tier) => (
              <li key={tier.name}>
                <span className="font-semibold text-novaWhite">{tier.name}</span>{" "}
                ({tier.color}) - {tier.threshold}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Guida rapida</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {statsSystem.guide.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
