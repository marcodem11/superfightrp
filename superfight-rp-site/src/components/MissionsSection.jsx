import { missions } from "../data/content";

export default function MissionsSection() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {missions.flow.map((item, index) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Step {index + 1}</p>
            <p className="mt-2 text-sm text-slate-200">{item}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {missions.rules.map((rule) => (
          <div key={rule} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-200">
            {rule}
          </div>
        ))}
      </div>

      <p className="rounded-2xl border border-neonBlue/30 bg-neonBlue/5 p-4 text-sm text-slate-200">
        {missions.support}
      </p>
    </div>
  );
}
