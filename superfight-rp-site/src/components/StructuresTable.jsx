import { structures } from "../data/content";

export default function StructuresTable() {
  return (
    <div className="grid gap-5">
      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/60 p-5">
        <table className="min-w-full text-left text-sm text-slate-200">
          <thead className="text-xs uppercase tracking-[0.2em] text-slate-400">
            <tr>
              <th className="pb-3 pr-4">Struttura</th>
              <th className="pb-3 pr-4">Costo</th>
              <th className="pb-3 pr-4">Ruolo assegnato</th>
              <th className="pb-3 pr-4">Guadagno</th>
              <th className="pb-3">Comando</th>
            </tr>
          </thead>
          <tbody>
            {structures.items.map((item) => (
              <tr key={item.name} className="border-t border-white/10 align-top">
                <td className="py-3 pr-4 font-semibold text-novaWhite">{item.name}</td>
                <td className="py-3 pr-4">{item.cost}</td>
                <td className="py-3 pr-4">{item.role}</td>
                <td className="py-3 pr-4">{item.income}</td>
                <td className="py-3 text-neonBlue">{item.command}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="rounded-2xl border border-neonBlue/30 bg-neonBlue/5 p-4 text-sm text-slate-200">
        {structures.modNote}
      </p>
    </div>
  );
}
