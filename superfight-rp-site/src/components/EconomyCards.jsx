import { economy } from "../data/content";

function CommandList({ title, items }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <h4 className="text-lg font-display text-novaWhite">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item.cmd} className="flex items-start justify-between gap-4">
            <span className="font-semibold text-neonBlue">{item.cmd}</span>
            <span className="text-right text-slate-300">{item.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function EconomyCards() {
  return (
    <div className="grid gap-8">
      <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
        <p className="pill">Economia</p>
        <p className="mt-4 text-base text-slate-300">{economy.body}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-slate-300">
          {economy.roles.map((role) => (
            <span key={role} className="rounded-full border border-white/10 px-3 py-2">
              {role}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <CommandList title="Comandi principali" items={economy.commands} />
        <CommandList title="Comandi staff" items={economy.staffCommands} />
      </div>
    </div>
  );
}
