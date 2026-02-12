import { economy2 } from "../data/content";

export default function EconomyV2() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-2">
        {economy2.split.map((entry) => (
          <div key={entry.type} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
            <h3 className="text-xl font-display text-novaWhite">{entry.type}</h3>
            <p className="mt-2 text-sm text-slate-300">{entry.details}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {entry.commands.map((command) => (
                <span
                  key={command}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300"
                >
                  {command}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Flow acquisti</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {economy2.flow.map((step) => (
            <div key={step} className="rounded-xl border border-neonBlue/20 bg-slate-950/70 p-3 text-sm text-slate-200">
              {step}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Movimenti automatici</p>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-200">
            <thead className="text-xs uppercase tracking-[0.2em] text-slate-400">
              <tr>
                <th className="pb-3 pr-4">Origine</th>
                <th className="pb-3 pr-4">Destinazione</th>
                <th className="pb-3 pr-4">Frequenza</th>
                <th className="pb-3">Nota</th>
              </tr>
            </thead>
            <tbody>
              {economy2.autoMovements.map((row) => (
                <tr key={row.source} className="border-t border-white/10 align-top">
                  <td className="py-3 pr-4">{row.source}</td>
                  <td className="py-3 pr-4">{row.destination}</td>
                  <td className="py-3 pr-4">{row.cadence}</td>
                  <td className="py-3 text-slate-400">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
