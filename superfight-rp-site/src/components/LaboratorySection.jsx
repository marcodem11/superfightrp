import { laboratory } from "../data/content";

export default function LaboratorySection() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-3">
        {laboratory.tokens.map((token) => (
          <div key={token.tier} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{token.tier}</p>
            <p className="mt-3 text-2xl font-display text-novaWhite">{token.price}</p>
            <p className="mt-2 text-sm text-slate-300">{token.rule}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
        <p className="text-sm text-slate-200">{laboratory.requirement}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {laboratory.commands.map((command) => (
            <span
              key={command}
              className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neonBlue"
            >
              {command}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {laboratory.techFaq.map((row) => (
          <div key={row.q} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
            <p className="font-semibold text-novaWhite">{row.q}</p>
            <p className="mt-2 text-sm text-slate-300">{row.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
