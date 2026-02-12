import { useState } from "react";
import { liveCommands } from "../data/content";

export default function LiveCommandsTabs() {
  const [active, setActive] = useState(liveCommands.tabs[0].id);
  const activeTab = liveCommands.tabs.find((tab) => tab.id === active);

  return (
    <div className="grid gap-6">
      <div className="flex flex-wrap gap-3">
        {liveCommands.tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${
              active === tab.id
                ? "border-neonBlue/70 bg-slate-900 text-neonBlue"
                : "border-white/10 bg-slate-900/60 text-slate-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-5">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-200">
            <thead className="text-xs uppercase tracking-[0.2em] text-slate-400">
              <tr>
                <th className="pb-3 pr-4">Sintassi</th>
                <th className="pb-3 pr-4">Cosa fa</th>
                <th className="pb-3 pr-4">Chi puo usarlo</th>
                <th className="pb-3">Esempio</th>
              </tr>
            </thead>
            <tbody>
              {activeTab.commands.map((command) => (
                <tr key={command.syntax} className="border-t border-white/10 align-top">
                  <td className="py-3 pr-4 font-semibold text-neonBlue">{command.syntax}</td>
                  <td className="py-3 pr-4">{command.description}</td>
                  <td className="py-3 pr-4">{command.who}</td>
                  <td className="py-3 text-slate-400">{command.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-2xl border border-neonBlue/30 bg-neonBlue/5 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Nuovi comandi evidenziati</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {liveCommands.highlights.map((cmd) => (
            <span
              key={cmd}
              className="rounded-full border border-neonBlue/40 bg-slate-900/80 px-3 py-1 text-xs font-semibold text-neonBlue"
            >
              {cmd}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
