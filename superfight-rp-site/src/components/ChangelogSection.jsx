import { seasonChangelog } from "../data/content";

export default function ChangelogSection() {
  return (
    <div className="grid gap-4">
      {seasonChangelog.patches.map((patch) => (
        <div key={patch.date + patch.command} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{patch.date}</p>
          <h3 className="mt-2 text-xl font-display text-novaWhite">{patch.feature}</h3>
          <p className="mt-2 text-sm text-neonBlue">{patch.command}</p>
          <p className="mt-2 text-sm text-slate-300">{patch.impact}</p>
        </div>
      ))}
    </div>
  );
}
