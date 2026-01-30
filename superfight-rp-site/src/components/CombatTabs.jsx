import { useState } from "react";
import { combat } from "../data/content";

export default function CombatTabs() {
  const [active, setActive] = useState(combat.rules[0].id);
  const activeRule = combat.rules.find((rule) => rule.id === active);

  return (
    <div className="grid gap-10">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-3">
          {combat.rules.map((rule) => (
            <button
              key={rule.id}
              onClick={() => setActive(rule.id)}
              className={`w-full rounded-2xl border px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.2em] transition ${
                active === rule.id
                  ? "border-neonBlue/70 bg-slate-900/80 text-neonBlue"
                  : "border-white/10 bg-slate-900/50 text-slate-300 hover:border-neonBlue/40"
              }`}
            >
              {rule.title}
            </button>
          ))}
        </div>
        <div className="grain halftone rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <p className="pill">Sintesi regole</p>
          <h3 className="mt-4 text-2xl font-display text-novaWhite">
            {activeRule.title}
          </h3>
          <p className="mt-4 text-base text-slate-300">{activeRule.body}</p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-300">
            Ogni azione deve essere chiara, coerente e cinematografica. Lo stile viene prima del dado.
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-display text-novaWhite">Approcci</h3>
        <p className="mt-2 max-w-2xl text-sm text-slate-300">
          Scegli un approccio coerente con il tuo personaggio: influenza bonus, malus e stile.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {combat.approaches.map((approach) => (
            <div
              key={approach.name}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
            >
              <h4 className="text-xl font-display text-novaWhite">
                {approach.name}
              </h4>
              <p className="mt-2 text-sm text-slate-300">{approach.tagline}</p>
              <div className="mt-4 space-y-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                <p>Bonus: {approach.bonus}</p>
                <p>Malus: {approach.malus}</p>
                <p>Archetipo: {approach.archetype}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
